import React from "react";
import "./CustomModal.css";
import { useSelector } from "react-redux";

const CustomModal = ({ id, setShowModal }) => {
  const allUsers = useSelector((state) => state.app.users);

  const singleUser = allUsers.filter((item) => item.id === id);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="" onClick={() => setShowModal(false)}>Close</button>
        <h2>{singleUser[0].name}</h2>
        <h2>{singleUser[0].email}</h2>
        <h2>{singleUser[0].age}</h2>
        <h2>{singleUser[0].gender}</h2>
      </div>
    </div>
  );
};

export default CustomModal;
