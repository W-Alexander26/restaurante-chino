import React from "react";
import ProductsForm from "./productsForm";
import ProductsMainContent from "./productsMainContent";
import { useState } from "react";

//función que nos permite enviar props al contenido de los productos y también al formulario.
const MostrarProductos = () => {
  //constante que almacena un array vacio que se irá llenado con la información de cada producto.
  const [searched, setSearched] = useState([]);
//función que setea el parametro de la función actualizar busqueda.
  const actualizarSearched = (resultadoBusqueda) => {
    setSearched(resultadoBusqueda);
  };
  return (
    <div>
      <ProductsForm actualizarSearched={actualizarSearched} />
      <ProductsMainContent productos1={searched} />
    </div>
  );
};

export default MostrarProductos;
