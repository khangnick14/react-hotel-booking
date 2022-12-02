import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RoomModal = ({ data, value, onClose, alldata }) => {
  const navigate = useNavigate();
  const [update, setUpdate] = useState(data);
  const handleOnChange = (e) => {
    setUpdate((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  };

  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      onClose();
      console.log(value);
    }
  };

  const handleSubmit = (e) => {
    alldata.listOfRooms.splice(value, 1);
    alldata.listOfRooms.splice(value, 0, update);

    e.preventDefault();

    axios
      .post("https://api.npoint.io/1d7ed0e2e20c23cb5c1f", alldata)
      .then(() => {
        navigate(0);
        console.log(alldata);
      });
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black-10 backdrop-blur-sm flex justify-center items-center"
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-2xl"
      >
        <h2 className="text-4xl, text-white font-bold text-center">EDIT</h2>
        <div className="flex flex-col  mb-3">
          <label className="mb-1 text-white">Name</label>
          <input
            name="name"
            className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
            type="text"
            value={update.name}
            onChange={handleOnChange}
          />
        </div>

        <div className="flex flex-col  mb-3">
          <label className="mb-1 text-white">Beds</label>
          <input
            name="beds"
            className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
            type="text"
            value={update.beds}
            onChange={handleOnChange}
          />
        </div>

        <div className="flex flex-col  mb-3">
          <label className="mb-1 text-white">Quantity</label>
          <input
            name="quantity"
            className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
            type="text"
            value={update.quantity}
            onChange={handleOnChange}
          />
        </div>

        <div className="flex flex-col  mb-3">
          <label className="mb-1 text-white">Rate</label>
          <input
            name="rate"
            className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
            type="text"
            value={update.rate}
            onChange={handleOnChange}
          />
        </div>

        <div className="flex flex-col  mb-3">
          <label className="mb-1 text-white">Size</label>
          <input
            name="size"
            className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
            type="text"
            value={update.size}
            onChange={handleOnChange}
          />
        </div>

        <div className="flex flex-col  mb-3">
          <label className="mb-1 text-white">Photo url</label>
          <input
            name="photo"
            className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
            type="text"
            value={update.photo}
            onChange={handleOnChange}
          />
        </div>

        <button className="secondary w-full my-5 py-2">Submit</button>
      </form>
    </div>
  );
};

export default RoomModal;
