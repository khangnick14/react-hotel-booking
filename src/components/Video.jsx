import React from "react";
import mainVideo from "../assets/main-video.mp4";
import { HiLocationMarker } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-scroll";

const Video = ({ data }) => {
  return (
    <div className="w-full h-screen relative" id="home">
      <video
        className="w-full h-full object-cover"
        src={mainVideo}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1 className="text-4xl">{data?.owner}</h1>
        <h2 className="mt-3">{data?.name}</h2>
        <div className="flex justify-center mt-3">
          <HiLocationMarker className="mr-3" size={25} />
          <h2>{data?.shortAddress}</h2>
        </div>
        <div className="flex justify-center mt-3">
          <button className="flex justify-center">
            <FaTelegramPlane className="mr-3" size={25} />
            <Link to="room" spy={true} smooth={true} offset={0} duration={500}>
              BOOK NOW
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
