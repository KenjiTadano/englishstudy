// src/app/components/WordList.js
"use client";
import React from "react";

const WordList = ({ words, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>英語</th>
          <th>日本語訳</th>
          <th>品詞</th>
          <th>カテゴリ</th>
          <th>派生語</th>
          <th>アクション</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word) => (
          <tr key={word.id}>
            <td>{word.english}</td>
            <td>{word.japanese}</td>
            <td>{word.partOfSpeech}</td>
            <td>{word.category}</td>
            <td>{word.derivatives}</td>
            <td>
              <button onClick={() => onEdit(word.id)}>編集</button>
              <button onClick={() => onDelete(word.id)}>削除</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WordList;
