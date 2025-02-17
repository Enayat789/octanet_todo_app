import React from "react";
import manTodo from "../Images/manTodo.webp";
import { IoAddCircleOutline } from "react-icons/io5";
import Modal from "./Modal";
import { useState } from "react";

const Addtask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-white flex flex-col w-full sm:w-full h-full justify-around items-center">
      <Modal isOpen={isModalOpen} onClose={toggleModal} />

      <img src={manTodo} alt="man adding task" className="max-w-full h-auto" />
      <div className="mt-4">
        <IoAddCircleOutline
          size={40} // Adjust the size of the icon for responsiveness
          className="cursor-pointer"
          onClick={toggleModal}
        />
      </div>
    </div>
  );
};

export default Addtask;
