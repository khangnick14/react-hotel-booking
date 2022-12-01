import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const About = ({ data }) => {
  return (
    <div className="w-full mx-auto text-center" id="about">
      <div className="w-full bg-[var(--dark-primary)] p-10">
        <div className="flex justify-center text-white my-8">
          <FaInfoCircle className="mr-3 " size={40} />
          <h1 className="text-4xl">ABOUT</h1>
        </div>
        <div className="text-justify text-white">
          <p className="py-2">{data.description[0]}</p>
          <p className="py-2">{data.description[1]}</p>
          <p className="py-2">{data.description[2]}</p>
          <p className="py-2">{data.description[3]}</p>
        </div>
        <div className="flex justify-center text-white my-8">
          <ImLocation className="mr-3 " size={40} />
          <h1 className="text-4xl">LOCATION</h1>
        </div>

        <div>
          <iframe
            style={{ width: "100%", height: "500px" }}
            title="Map"
            allow="fullscreen"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=UniveThe Princess of Arena Cam Ranh Homersity of Oxford&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
