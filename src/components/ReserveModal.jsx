import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import swal from "sweetalert";

const ReserveModal = ({ data, value, onClose, alldata }) => {
  const navigate = useNavigate();
  const [update, setUpdate] = useState({ guest: 0 });
  const [quantity, setQuantity] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [totalPrice, setTotalPrice] = useState(0);
  const [breakfast, setBreakfast] = useState(false);
  const adminUpdateData = JSON.parse(localStorage.getItem(data.id) || "[]");

  const handleOnChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const calculateTotalPrice = () => {
    let dayReservedList = [];
    for (let day = startDate; day < endDate; day.setDate(day.getDate() + 1)) {
      dayReservedList.push(format(day, "PP"));
    }
    console.log(dayReservedList);
    update.startDate = dayReservedList[0];
    update.endDate = format(endDate, "PP");
    let results = adminUpdateData.filter((a) =>
      dayReservedList.some((b) => a.time === b)
    );

    const priceUpdated = results.reduce(
      (sum, a) => sum + parseFloat(a.rate),
      0
    );
    const breakfastPrice = breakfast ? dayReservedList.length * 5 : 0;
    const finalPrice =
      (dayReservedList.length - results.length) * data.rate +
      priceUpdated +
      breakfastPrice;
    setTotalPrice(finalPrice);
    update.totalPrice = finalPrice;
    setStartDate(new Date());
    setEndDate(new Date());
  };

  let footerStart = <p>Please pick a day.</p>;
  if (startDate) {
    footerStart = (
      <p className="pl-2 text-gray-500">
        You picked {format(startDate, "PP")}.
      </p>
    );
  }

  let footerEnd = <p>Please pick a day.</p>;
  if (endDate) {
    footerEnd = (
      <p className="pl-2 text-gray-500">You picked {format(endDate, "PP")}.</p>
    );
  }

  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      onClose();
      console.log(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(update.name, JSON.stringify(update));
    swal({
      title: "Successfull",
      text: "Your reservation is confirmed",
      icon: "success",
      button: "Done",
    }).then(() => navigate(0));
  };

  const handleBreakfast = (e) => {
    setBreakfast((current) => !current);
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black-10 backdrop-blur-sm flex justify-center items-center"
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-[1000px] w-full mx-auto bg-[var(--light-primary)] p-8 px-8 rounded-2xl"
      >
        <h2 className="text-2xl mb-5 text-[var(--dark-primary)] font-bold text-center">
          RESERVE YOUR ROOM NOW
        </h2>
        <div className="grid grid-cols-2 gap-10 mb-5">
          <div className="flex items-center">
            <label className="text-black mr-6">Name</label>
            <input
              name="name"
              className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
              type="text"
              value={update.name}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex items-center">
            <label className="text-black mr-6">Guest</label>
            <input
              name="guest"
              className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
              type="number"
              min="0"
              step="1"
              value={update.guest}
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 mb-5">
          <div className="flex items-center">
            <label className="text-black mr-6">Email</label>
            <input
              name="email"
              className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
              type="text"
              value={update.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex items-center">
            <label className="text-black mr-6">Phone</label>
            <input
              name="phone"
              className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
              type="text"
              value={update.phone}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex items-center">
            <label className="text-black mr-2">Quantity </label>
            <select
              name="quantity"
              id=""
              value={update.quantity}
              onChange={handleOnChange}
              className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
            >
              <option selected></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div>
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value={breakfast}
                onChange={handleBreakfast}
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ml-2 text-sm font-medium text-black"
              >
                Include Breakfast ($5/day)
              </label>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <label className="text-black mr-2">
            Standard Rate: ${data.rate} {"(price may vary depend on date)"}
          </label>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="mr-20 mt-5">
            <h3 className="text-center text-red-500 mr-20">
              Select arrival date
            </h3>
            <DayPicker
              showOutsideDays
              fromYear={2022}
              toYear={2024}
              captionLayout="dropdown"
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              footer={footerStart}
            />
          </div>
          <div className="mr-20 mt-5">
            <h3 className="text-center text-red-500 mr-20">
              Select departure date
            </h3>
            <DayPicker
              showOutsideDays
              fromYear={2022}
              toYear={2024}
              captionLayout="dropdown"
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              footer={footerEnd}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <button
            onClick={calculateTotalPrice}
            type="button"
            className="secondary w-full my-5 py-2"
          >
            Calculate price
          </button>
          <div className="flex items-center">
            <h3 className="text-blue-500 mr-3">Total price: </h3>
            <h1 className="text-red-500">${totalPrice}</h1>
          </div>
        </div>

        <button className="success w-full my-5 py-2">Submit</button>
      </form>
    </div>
  );
};

export default ReserveModal;
