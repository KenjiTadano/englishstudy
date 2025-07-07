// src/app/components/ConfirmationModal.js
"use client";
import React from "react";

const ConfirmationModal = ({ isOpen, onCancel, onConfirm, message }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onCancel}>キャンセル</button>
        <button onClick={onConfirm}>削除</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
