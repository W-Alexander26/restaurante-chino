import React, { useState } from "react";
import ProductNav from "../components/ProductStructure/productsNav";
import ProductsMainContent from "../components/ProductStructure/productsMainContent";
import ProductsForm from "../components/ProductStructure/productsForm";

function productPage() {
  const [searched, setSearched] = useState([]);

  const actualizarSearched = (resultadoBusqueda) => {
    setSearched(resultadoBusqueda);
  };
  return (
    <div>
      <ProductNav />
      <ProductsForm actualizarSearched={actualizarSearched} />
      <br />
      <ProductsMainContent productos={searched} />
      <br />
    </div>
  );
}

export default productPage;
