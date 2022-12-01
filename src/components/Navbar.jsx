import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-scroll";
import { Link as Navigation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const navAction = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-black text-opacity-90">
      <div>
        <h1 onClick={navAction} className={logo ? "hidden" : "block"}>
          PRINCESS OF ARENA CAM RANH HOME.
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li className="cursor-pointer">
          <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
            About
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="gallery" spy={true} smooth={true} offset={0} duration={500}>
            Gallery
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="room" spy={true} smooth={true} offset={0} duration={500}>
            Room
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="rule" spy={true} smooth={true} offset={0} duration={500}>
            {"Rule"}
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-3" size={20} />
        <Navigation to="/admin">
          <BsPerson size={20} />
        </Navigation>
      </div>

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
          <h1>PRINCESS OF ARENA CAM RANH HOME</h1>
          <li>Home</li>
          <li>About</li>
          <li>Room</li>
          <li>Rule</li>
          <div className="flex flex-col">
            <button className="my-3">Search</button>
            <button>Sign-In</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
