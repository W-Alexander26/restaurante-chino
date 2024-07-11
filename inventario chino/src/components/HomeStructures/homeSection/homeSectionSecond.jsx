import React from "react";
import "./homeSectionSecond.css";
//En este componente se encuentran algunas imagenes que constituyen contenido a la página.
const homeSectionSecond = () => {
  return (
    <div id="onetext-twoimgs">
      <p id="textoChino"></p>
      <img
        id="rolls"
        src="https://static.wixstatic.com/media/784daf_f6f36f8339294d97b47b843b55a22629~mv2.gif"
        alt="Comida China"
      />
      <img
        id="comidaVariada"
        src="https://img.freepik.com/fotos-premium/comida-china-platos-cocina-tradicional-china-sobre-fondo-oscuro-vista-superior-espacio-copia_233226-930.jpg?w=360"
        alt="Comida China"
      />
    </div>
  );
};

export default homeSectionSecond;
