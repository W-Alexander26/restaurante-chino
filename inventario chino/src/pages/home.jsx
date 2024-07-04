import React from "react";
import HomeNav from "../components/HomeStructures/homeNav";
import HomeCarousel from "../components/HomeStructures/homeCarousel";
import HomeSection from "../components/HomeStructures/homeSection/homeSection";
import HomeSectionSecond from "../components/HomeStructures/homeSection/homeSectionSecond";
import Footer from "../components/HomeStructures/footer/footer";

const home = () => {
  return (
    <div>
      <HomeNav />
      <HomeCarousel />
      <HomeSection />
      <HomeSectionSecond />
      <Footer />
    </div>
  );
};

export default home;
