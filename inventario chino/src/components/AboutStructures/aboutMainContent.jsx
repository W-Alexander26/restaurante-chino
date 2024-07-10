import React from "react";
import "./aboutMainContent.css";

const aboutMainContent = () => {
  return (
    <div id="contenedorAbout">
      <img
        src="https://img.freepik.com/fotos-premium/comida-china-platos-cocina-tradicional-china-sobre-fondo-oscuro-vista-superior-espacio-copia_233226-930.jpg"
        alt="fuego Gif"
      />
      <div id="Contenedor-Texto">
        <p id="Titulo">Sobre Nosotros</p>
        <p id="textabout">
          Restaurante Chino X es una empresa costarricense joven y dinámica que
          ofrece al sus seguidores comida asiática estilo chino-americano, en un
          concepto de casual food en un ambiente urbano, divertido y familiar.{" "}
          <br />
          <br />
          Todas nuestras recetas están creadas con detalle y estandarizadas, se
          elaboran al 100% en el restaurante con vegetales e ingredientes
          frescos de alta calidad, libre de grasas trans, hechos a mano con
          salsas orientales creadas por sus fundadores. <br /> <br />{" "}
          Actualmente cuenta con 7 sucursales en el GAM, las cuales se
          aperturaron en el transcurso de los últimos 6 años. Nuestra VISION es
          “ser la cadena de comida asiática más grande de Costa Rica”. Contamos
          con aproximadamente 100 colaboradores distribuidos en 8 restaurantes,
          planta de producción y personal administrativo y operación. Todos con
          la única MISION “servir la mejor comida con una gran sonrisa.”
        </p>
      </div>
    </div>
  );
};

export default aboutMainContent;
