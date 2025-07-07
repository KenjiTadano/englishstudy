// src/app/components/TestTable.js
"use client";
import React, { useState } from "react";

const TestTable = ({ words }) => {
  const [showDetails, setShowDetails] = useState({});
  const [understood, setUnderstood] = useState({});

  const toggleDetails = (id) => {
    setShowDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleUnderstoodChange = (id) => {
    setUnderstood((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>理解した</th>
          <th>単語</th>
          <th>日本語訳</th>
          <th>品詞</th>
          <th>カテゴリ</th>
          <th>派生語</th>
          <th>詳細</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word) => (
          <tr key={word.id}>
            <td>
              <input
                type="checkbox"
                checked={understood[word.id] || false}
                onChange={() => handleUnderstoodChange(word.id)}
              />
            </td>
            <td>{word.english}</td>
            <td>{showDetails[word.id] ? word.japanese : "表示"}</td>
            <td>{showDetails[word.id] ? word.partOfSpeech : "表示"}</td>
            <td>{showDetails[word.id] ? word.category : "表示"}</td>
            <td>{showDetails[word.id] ? word.derivatives : "表示"}</td>
            <td>
              <button onClick={() => toggleDetails(word.id)}>
                {showDetails[word.id] ? "閉じる" : "詳細"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TestTable;
