import React from "react";
import HomeNav from "../components/HomeStructures/homeNav";
import HomeCarousel from "../components/HomeStructures/homeCarousel";
import HomeSection from "../components/HomeStructures/homeSection/homeSection";
import HomeSectionSecond from "../components/HomeStructures/homeSection/homeSectionSecond";
import Footer from "../components/HomeStructures/footer/footer";
import MostrarProductos from "../components/ProductStructure/MostrarProducto";
//componente creado con la intención de renderizar el contenido de cada componente en una pagina y modularlo a la misma

const home = () => {
  return (
    <div>
      <HomeNav />
      <HomeCarousel />
      <HomeSection />
      <HomeSectionSecond />
      <MostrarProductos />
      <Footer />
    </div>
  );
};

export default home;
