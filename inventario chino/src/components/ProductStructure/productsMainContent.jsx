import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {
  obtenerInformacionProductos,
  borrarProductos,
} from "../../services/llamados";

const productsMainContent = ({ productos1 }) => {
  const [productos, setProductos] = useState([]);
  const eliminarProducto = async (id) => {
    await borrarProductos(id); // llamar  a la funcion para elimina
    setProductos(productos.filter((element) => element.id !== id));
  };
  const mostrarProductos = async () => {
    try {
      const data = await obtenerInformacionProductos();
      setProductos(data);
    } catch (error) {
      console.error("Ha ocurrido un error para obtener los datos", error);
    }
  };
  useEffect(() => {
    mostrarProductos();
  }, []);
  mostrarProductos();
  return (
    <div>
      {productos.map((producto, index) => (
        <Card key={index} style={{ width: "18rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            src="https://cdn.sanity.io/images/ph1nl998/production/6f9f3a893db52f051b4c9264b62d90981cab0851-1200x720.jpg"
          />
          <Card.Body>
            <Card.Title>Nombre: {producto.nombre}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Categoría: {producto.categoria}</ListGroup.Item>
            <ListGroup.Item>Precio: {producto.precio}</ListGroup.Item>
          </ListGroup>
          <Card.Body style={{ width: "auto" }}>
            Descripción: {producto.descripcion}
          </Card.Body>
          <button>Editar</button>
          <button
            onClick={() => {
              eliminarProducto(producto.id);
            }}
          >
            Eliminar
          </button>
        </Card>
      ))}
    </div>
  );
};

export default productsMainContent;
