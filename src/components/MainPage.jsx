import React from "react";
import About from "./About";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import Room from "./Room";
import Video from "./Video";
import Rule from "./Rule";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

const MainPage = ({ data }) => {
  return (
    <div>
      <Navbar />
      <Video data={data} />
      <About data={data} />
      <Gallery data={data} />
      <Room data={data} />
      <Rule data={data} />
      <Footer data={data} />
      <ScrollTop />
    </div>
  );
};

export default MainPage;
