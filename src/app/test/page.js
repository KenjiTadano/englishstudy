// src/app/test/page.js
"use client";
import React, { useState, useEffect } from "react";
import TestTable from "../components/TestTable";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const TestPage = () => {
  const [words, setWords] = useState([]);
  const [category, setCategory] = useState("単語"); // 初期カテゴリ

  useEffect(() => {
    // Firestoreからデータを取得
    const getWords = async () => {
      const querySnapshot = await getDocs(collection(db, "words"));
      const wordsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // カテゴリでフィルタリング
      const filteredWords = wordsData.filter(
        (word) => word.category === category
      );
      setWords(filteredWords);
    };

    getWords();
  }, [category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div>
      <h1>暗記テスト</h1>
      <div>
        <button onClick={() => handleCategoryChange("単語")}>単語</button>
        <button onClick={() => handleCategoryChange("熟語")}>熟語</button>
        <button onClick={() => handleCategoryChange("接続詞")}>接続詞</button>
        <button onClick={() => handleCategoryChange("前置詞")}>前置詞</button>
        {/* 他のカテゴリも追加 */}
      </div>
      <TestTable words={words} />
    </div>
  );
};

export default TestPage;
