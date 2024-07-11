import React from "react";
import "./homeSection.css";
//En este componente se encuentran algunas imagenes que constituyen contenido a la página.
const homeSection = () => {
  return (
    <div id="twoimg-onetext">
      <img
        id="carton"
        src="https://st3.depositphotos.com/1037238/18303/v/450/depositphotos_183030838-stock-illustration-chinese-food-cuisine-illustration.jpg"
        alt="Comida China"
      />
      <img
        id="platoComida"
        src="https://cdn7.kiwilimon.com/recetaimagen/30129/640x640/32590.jpg.webp"
        alt="Comida China"
      />
      <div id="div-texto">
        <p id="Titulo">Bienvenid@s</p>
        <p id="Sub-Titulo">Somos Restaurante Chino X</p>

        <p id="textoChinoFinal">
          Restaurante Chino X es una empresa costarricense joven y dinámica que ofrece a sus
          seguidores comida asiática estilo chino-americano, en un concepto de
          Fast Casual en un ambiente urbano, divertido y familiar.
        </p>
        <button id="boton"><a id="link" href="/about">Conozca más</a></button>
      </div>
    </div>
  );
};

export default homeSection;
