import React from "react";

const Footer = ({ data }) => {
  return (
    <div className="w-full bg-[var(--light-primary)] py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex justify-between items-center">
          <div className="flex flex-col justify-start">
            <h1>PRINCESS OF ARENA CAM RANH HOME</h1>
            <h3>{data.address}</h3>
          </div>

          <div className="flex flex-col justify-end">
            <h3>{data.email}</h3>
            <h3>{data.phone}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
