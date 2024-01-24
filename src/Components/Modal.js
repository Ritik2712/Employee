import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../state/actions/UserActions";
import axios from "axios";

const Modal = ({ index, close, employee }) => {
  const DISPATCH = useDispatch();
  const confirmDelete = () => {
    console.log(employee.id);
    axios({
      method: "delete",
      url: `https://653686dbbb226bb85dd244f8.mockapi.io/employee/${employee.id}`,
    })
      .then((res) => {
        console.log(res.data);
        DISPATCH(deleteUser(employee.id));
        close();
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  return (
    <div
      onClick={closeModal}
      className=" h-screen w-screen flex justify-center items-center fixed top-0 left-0 modalScreen"
    >
      <div className="bg-white rounded-lg w-[400px] text-center p-4">
        <h1 className="text-xl font-bold pb-3">Confirm Delete</h1>
        <p className="text-md font-medium pb-3">
          Are you sure you want to delete {employee?.name}?
        </p>
        <div className=" w-[80%] mx-auto flex justify-around">
          <button
            className="border rounded-3xl font-medium text-white px-4 py-2 bg-red-600 hover:bg-red-800"
            onClick={confirmDelete}
          >
            Delete
          </button>
          <button
            className="border rounded-3xl font-medium px-4 py-2"
            onClick={close}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
