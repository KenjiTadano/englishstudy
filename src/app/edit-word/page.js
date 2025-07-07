// src/app/edit-word/page.js
"use client";
import React, { useState, useEffect } from "react";
import WordList from "../components/WordList";
import WordForm from "../components/WordForm";
import ConfirmationModal from "../components/ConfirmationModal";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const EditWordPage = () => {
  const [words, setWords] = useState([]);
  const [editingWordId, setEditingWordId] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [wordToDelete, setWordToDelete] = useState(null);

  useEffect(() => {
    // Firestoreからデータを取得
    const getWords = async () => {
      const querySnapshot = await getDocs(collection(db, "words"));
      const wordsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWords(wordsData);
    };

    getWords();
  }, []);

  const handleEdit = (id) => {
    setEditingWordId(id);
  };

  const handleUpdate = async (updatedWord) => {
    try {
      // Firestoreのデータを更新
      const wordRef = doc(db, "words", editingWordId);
      await updateDoc(wordRef, updatedWord);
      setWords(
        words.map((word) =>
          word.id === editingWordId ? { ...word, ...updatedWord } : word
        )
      );
      setEditingWordId(null); // 編集モードを解除
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const handleDelete = (id) => {
    setWordToDelete(id);
    setShowConfirmationModal(true);
  };

  const confirmDelete = async () => {
    try {
      // Firestoreのデータを削除
      const wordRef = doc(db, "words", wordToDelete);
      await deleteDoc(wordRef);
      setWords(words.filter((word) => word.id !== wordToDelete));
      setShowConfirmationModal(false); // モーダルを閉じる
      setWordToDelete(null);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const cancelDelete = () => {
    setShowConfirmationModal(false); // モーダルを閉じる
    setWordToDelete(null);
  };

  return (
    <div>
      <h1>編集・削除</h1>
      <WordList words={words} onEdit={handleEdit} onDelete={handleDelete} />
      {editingWordId && (
        <div>
          <h2>単語の編集</h2>
          <WordForm
            onSubmit={handleUpdate}
            initialValues={words.find((word) => word.id === editingWordId)}
          />
        </div>
      )}
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onCancel={cancelDelete}
        onConfirm={confirmDelete}
        message="本当に削除しますか？"
      />
    </div>
  );
};

export default EditWordPage;
