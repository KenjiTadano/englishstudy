// src/app/components/WordForm.js
"use client";
import React, { useState } from "react";

const WordForm = ({ onSubmit, initialValues = {} }) => {
  const [english, setEnglish] = useState(initialValues.english || "");
  const [japanese, setJapanese] = useState(initialValues.japanese || "");
  const [partOfSpeech, setPartOfSpeech] = useState(
    initialValues.partOfSpeech || ""
  );
  const [category, setCategory] = useState(initialValues.category || "");
  const [derivatives, setDerivatives] = useState(
    initialValues.derivatives || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      english,
      japanese,
      partOfSpeech,
      category,
      derivatives,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>英語:</label>
        <input
          type="text"
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
        />
      </div>
      <div>
        <label>日本語訳:</label>
        <input
          type="text"
          value={japanese}
          onChange={(e) => setJapanese(e.target.value)}
        />
      </div>
      <div>
        <label>品詞:</label>
        <select
          value={partOfSpeech}
          onChange={(e) => setPartOfSpeech(e.target.value)}
        >
          <option value="">選択してください</option>
          <option value="動詞">動詞</option>
          <option value="名詞">名詞</option>
          <option value="形容詞">形容詞</option>
          <option value="副詞">副詞</option>
          {/* 他の品詞も追加 */}
        </select>
      </div>
      <div>
        <label>カテゴリ:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">選択してください</option>
          <option value="単語">単語</option>
          <option value="熟語">熟語</option>
          <option value="接続詞">接続詞</option>
          <option value="前置詞">前置詞</option>
          {/* 他のカテゴリも追加 */}
        </select>
      </div>
      <div>
        <label>派生語:</label>
        <input
          type="text"
          value={derivatives}
          onChange={(e) => setDerivatives(e.target.value)}
        />
      </div>
      <button type="submit">保存</button>
    </form>
  );
};

export default WordForm;
