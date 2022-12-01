import React from "react";
import { GrGallery } from "react-icons/gr";
import { ImOffice } from "react-icons/im";

const Gallery = ({ data }) => {
  return (
    <div className="max-w-[1240px] mx-auto py-10  text-center" id="gallery">
      <div className="flex justify-center text-black my-8">
        <GrGallery className="mr-3" size={40} />
        <h1 className="text-4xl">GALLERY</h1>
      </div>
      <div className="grid grid-rows md:grid-cols-5 gap-2 md:gap-4 py-5">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={data.photo.view1}
          alt="/"
        />
        <img
          className="w-full h-full object-cover"
          src={data.photo.view2}
          alt="/"
        />
        <img
          className="w-full h-full object-cover"
          src={data.photo.view3}
          alt="/"
        />
        <img
          className="w-full h-full object-cover"
          src={data.photo.view4}
          alt="/"
        />
        <img
          className="w-full h-full object-cover"
          src={data.photo.view5}
          alt="/"
        />
      </div>
      <div className="flex justify-center text-black my-10">
        <ImOffice className="mr-3" size={40} />
        <h1 className="text-4xl">FACILITIES</h1>
      </div>
      <ul className="my-10">
        {data.ultilities.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Gallery;
