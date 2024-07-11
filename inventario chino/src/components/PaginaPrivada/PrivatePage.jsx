import React from "react";
import { Navigate } from "react-router-dom";
// Componente creado para validar el paso de una pagina publica a una privada.

const PaginaPriv = ({ children }) => {
  // funcion que va a validar si usuario de localStorage existe
  const usuario = localStorage.getItem("token");
  if (!usuario) {
    // si es diferente, osea, si no existe te dirige a error
    return <Navigate to={"/error"} />;
  }
  return children;
};
export default PaginaPriv;
