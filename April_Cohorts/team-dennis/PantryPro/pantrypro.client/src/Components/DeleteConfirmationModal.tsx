import { useState } from "react";
import { preview } from "vite";

const DeleteConfirmationModal = ({ isModalVisible, setIsModalVisible }) => {
  const handleClickOutside = (e) => {
    // if (e.target === e.currentTarget) {
    //   onClose();
    // }
  };

  const handleDelete = () => {
    // onDelete();
    // onClose();
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div
      className={isModalVisible ? "modal-overlay show" : "modal-overlay"}
      onClick={handleClickOutside}
    >
      <div className="modal">
        <h2>Are you sure you want to delete item?</h2>
        <div className="modal-buttons">
          <button>Delete</button>
          <button onClick={handleCloseModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
