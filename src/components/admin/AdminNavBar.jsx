import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const AdminNavBar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const navAction = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <div className="flex w-full justify-between items-center h-20  px-4 absolute z-10 text-black text-opacity-90">
      <div>
        <h1
          onClick={navAction}
          className={logo ? "hidden" : "block text-black-700"}
        >
          ADMIN PAGE.
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li className="cursor-pointer">
          <button
            className="success"
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </button>
        </li>
        <li className="cursor-pointer ">
          <button
            className="success"
            onClick={() => {
              navigate("/admin-update-basic");
            }}
          >
            BASIC INFORMATION
          </button>
        </li>
        <li className="cursor-pointer">
          <button
            className="success"
            onClick={() => {
              navigate("/admin-update-rule");
            }}
          >
            RULES
          </button>
        </li>
        <li className="cursor-pointer">
          <button
            className="success"
            onClick={() => {
              navigate("/admin-update-room");
            }}
          >
            ROOMS
          </button>
        </li>
        <li className="cursor-pointer">
          <button
            className="success"
            onClick={() => {
              navigate("/admin-update-price");
            }}
          >
            UPDATE PRICE
          </button>
        </li>
      </ul>

      {/*Hamburger icon */}
      <div onClick={navAction} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/*Small menu*/}

      <div
        onClick={navAction}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>ADMIN.</h1>
          <li>
            <button
              className="success"
              onClick={() => {
                navigate("/");
              }}
            >
              HOME
            </button>
          </li>
          <li>
            <button
              className="success"
              onClick={() => {
                navigate("/admin-update-rule");
              }}
            >
              RULES
            </button>
          </li>
          <li>
            <button
              className="success"
              onClick={() => {
                navigate("/admin-update-room");
              }}
            >
              ROOMS
            </button>
          </li>
          <li>
            <button
              className="success"
              onClick={() => {
                navigate("/admin-update-price");
              }}
            >
              UPDATE PRICE
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminNavBar;
