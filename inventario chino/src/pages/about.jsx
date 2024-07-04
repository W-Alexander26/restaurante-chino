import React from "react";
import AboutNav from "../components/AboutStructures/aboutNavStructure";
import AboutMainContent from "../components/AboutStructures/aboutMainContent";
import Footer from "../components/HomeStructures/footer/footer";

function about() {
  return (
    <div>
      <AboutNav />
      <AboutMainContent />
      <Footer />
    </div>
  );
}

export default about;
