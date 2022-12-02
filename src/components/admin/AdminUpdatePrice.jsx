import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import AdminNavBar from "./AdminNavBar";

const AdminUpdatePrice = ({ data }) => {
  const [dateSelected, setDateSelected] = useState(new Date());
  const [id, setId] = useState(0);
  const [update, setUpdate] = useState(0);

  const handleOnChange = (e) => {
    setUpdate(e.target.value);
  };

  const handleOnSelectRoom = (e) => {
    setId(e.target.value);
    setUpdate(data.listOfRooms[e.target.value].rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updateDetailList = JSON.parse(localStorage.getItem(id) || "[]");
    let updateDetail = {
      time: format(dateSelected, "PP"),
      rate: update,
    };
    updateDetailList.push(updateDetail);
    localStorage.setItem(id, JSON.stringify(updateDetailList));
  };

  let footer = <p>Please pick a day.</p>;
  if (dateSelected) {
    footer = (
      <p className="pl-2 text-gray-500">
        You picked {format(dateSelected, "PP")}.
      </p>
    );
  }
  return (
    <div className="w-full h-screen bg-grey-400">
      <div className="py-5">
        <AdminNavBar />
      </div>
      <div className="mt-20 mx-50">
        <h1 className="text-center text-3xl text-[var(--dark-primary)]">
          UPDATE PRICE BY DATE
        </h1>
        <div className="mx-20 grid grid-cols-3 mt-20 px-20 py-20 rounded-md  bg-[var(--light-primary)]">
          <div className="grid grid-cols-1 gap-4 grow mr-20 col-span-2 row-span-2">
            {data.listOfRooms.map((item) => {
              return (
                <div className="grid grid-cols-2 w-full">
                  <div className="col-span-2">
                    <input
                      type="radio"
                      name="room"
                      value={item.id}
                      id={item.id}
                      className="hidden peer"
                      onClick={handleOnSelectRoom}
                    />
                    <label
                      for={item.id}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white bg-opacity-90 backdrop-blur-2xl shadow-xl hover:bg-opacity-75 peer-checked:bg-purple-900 peer-checked:text-white cursor-pointer transition"
                    >
                      <img
                        src={item.photo}
                        className="w-20 h-20 object-cover rounded-full"
                        alt="/"
                      />
                      <div>
                        <h3 className="text-base">{item.name}</h3>
                        <h4 className="text-sm opacity-60">{item.beds}</h4>
                        <h4 className="text-sm opacity-60">{item.size} m²</h4>
                      </div>
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mr-20">
            <DayPicker
              showOutsideDays
              fromYear={2022}
              toYear={2024}
              captionLayout="dropdown"
              mode="single"
              selected={dateSelected}
              onSelect={setDateSelected}
              footer={footer}
            />
          </div>

          <div>
            <div className="bg-[var(--dark-primary)] rounded-3xl mb-3 py-5 px-2">
              <form onSubmit={handleSubmit}>
                <h1 className="mb-1 text-white">Current Price</h1>
                <div className="grid grid-cols-3">
                  <input
                    name=""
                    className="p-2 mr-2 col-span-2 rounded-lg text-[var(--dark-primary)] focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
                    type="text"
                    value={update}
                    onChange={handleOnChange}
                  />
                  <button className="primary">UPDATE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdatePrice;
