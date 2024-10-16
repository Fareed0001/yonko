import React from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const SuccessModal = ({ isOpen, onRequestClose, user, isMerchant }) => {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    onRequestClose();
    if (isMerchant) {
      navigate("/merchant/dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Success Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="modal-content"
      >
        <h2>Thank you for creating an account!</h2>
        <p>
          Welcome to our platform,{" "}
          {user.firstName || user.username || user.emailAddress}!
        </p>
        <button onClick={handleCloseModal}>Go to Dashboard</button>
      </motion.div>
    </Modal>
  );
};

export default SuccessModal;
