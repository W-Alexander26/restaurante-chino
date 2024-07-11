import React, { useState } from "react";
import ProductNav from "../components/ProductStructure/productsNav";
import ProductsMainContent from "../components/ProductStructure/productsMainContent";
import ProductsForm from "../components/ProductStructure/productsForm";
//componente creado con la intención de renderizar el contenido de cada componente en una pagina y modularlo a la misma

function productPage() {//dentro de la pagina que mostrara el contenido de los productos (componentes) encontraremos la funcion que enviara props para actualizar los demas componentes a la hora que cada uno se utilice.
  const [searched, setSearched] = useState([]);

  const actualizarSearched = (resultadoBusqueda) => {
    setSearched(resultadoBusqueda);
  };
  return (
    <div>
      <ProductNav />
      <ProductsForm actualizarSearched={actualizarSearched} />
      <br />
      <ProductsMainContent productos1={searched} />
      
      <br />
    </div>
  );
}

export default productPage;
