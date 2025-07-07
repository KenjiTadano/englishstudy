// src/app/new-word/page.js
"use client";
import React from "react";
import WordForm from "../components/WordForm";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const NewWordPage = () => {
  const router = useRouter();

  const handleSubmit = async (word) => {
    try {
      // Firestoreにデータを追加
      const docRef = await addDoc(collection(db, "words"), word);
      console.log("Document written with ID: ", docRef.id);
      // 登録後、ホームページへリダイレクト
      router.push("/");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <h1>新規登録</h1>
      <WordForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewWordPage;
