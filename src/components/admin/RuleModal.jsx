import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RuleModal = ({ data, value, onClose, alldata }) => {
  const navigate = useNavigate();
  const [update, setUpdate] = useState(value);
  const name = "houseRule." + data;
  const handleOnChange = (e) => {
    setUpdate(e.target.value);
  };

  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    alldata.houseRule[data] = update;
    e.preventDefault();
    axios
      .post("https://api.npoint.io/1d7ed0e2e20c23cb5c1f", alldata)
      .then(() => {
        navigate(0);
      });
    console.log(alldata);
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
          <label className="mb-1 text-white">{data}</label>
          <input
            name={name}
            className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
            type="text"
            value={update}
            onChange={handleOnChange}
          />
        </div>
        <button className="w-full my-5 py-2">Submit</button>
      </form>
    </div>
  );
};

export default RuleModal;
