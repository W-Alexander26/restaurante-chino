import React from "react";
import AboutNav from "../components/AboutStructures/aboutNavStructure";
import AboutMainContent from "../components/AboutStructures/aboutMainContent";
import Footer from "../components/HomeStructures/footer/footer";
//componente creado con la intención de renderizar el contenido de cada componente en una pagina y modularlo a la misma
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
