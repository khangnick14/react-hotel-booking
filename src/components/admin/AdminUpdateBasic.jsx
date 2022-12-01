import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";

const AdminUpdateBasic = ({ data }) => {
  const navigate = useNavigate();
  const [update, setUpdate] = useState(data);
  const handleOnChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://api.npoint.io/1d7ed0e2e20c23cb5c1f", update)
      .then(() => {
        navigate(0);
      });
  };
  return (
    <div className="w-full h-screen bg-[var(--dark-primary)]">
      <div className="py-5">
        <AdminNavBar />
      </div>
      <div className="mt-20">
        <h1 className="text-center text-4xl text-white">UPDATE INFORMATION</h1>
        <form onSubmit={handleSubmit} className="mx-10 my-10" action="">
          <div className="flex justify-between">
            <div className="flex flex-col mb-3 w-full mr-10">
              <label className="mb-1 text-white">Name</label>
              <input
                name="name"
                className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
                type="text"
                value={update.name}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col mb-3 w-full">
              <label className="mb-1 text-white">Owner</label>
              <input
                name="owner"
                className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
                type="text"
                value={update.owner}
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col mb-3 w-full mr-10">
              <label className="mb-1 text-white">Email</label>
              <input
                name="email"
                className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
                type="text"
                value={update.email}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col mb-3 w-full">
              <label className="mb-1 text-white">Phone</label>
              <input
                name="phone"
                className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
                type="text"
                value={update.phone}
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="flex flex-col mb-3 w-full">
            <label className="mb-1 text-white">Map Coordination Link</label>
            <input
              name="coordinationMapLink"
              className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
              type="text"
              value={update.coordinationMapLink}
              onChange={handleOnChange}
            />
          </div>

          <div className="flex flex-col mb-3 w-full">
            <label className="mb-1 text-white">Address</label>
            <input
              name="address"
              className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
              type="text"
              value={update.address}
              onChange={handleOnChange}
            />
          </div>
          <button className="w-full my-8">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdminUpdateBasic;
