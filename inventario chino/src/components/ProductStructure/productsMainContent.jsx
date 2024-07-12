import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {
  obtenerInformacionProductos,
  borrarProductos,
  editarProductos,
} from "../../services/llamados";
import Modal from "../modal/Modal";
//componente encargado de mostrar la informacion de los productos dentro de un card y mostrarlos tanto en la pagina de productos como en el home.

const productsMainContent = ({ productos1 }) => {
  //funcion que almacena un array vacio donde tendra los datos del servidor en "data".
  const [productos, setProductos] = useState([]);
  const [OpenModal, setOpenModal] = useState(false);
  const ejecutarModal = () => {
    setOpenModal(true)
  }

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

  const eliminarProducto = async (id) => {
    //funcion para eliminar los productos obteniendo su id
    await borrarProductos(id); // llamar  a la funcion para elimina
    setProductos(productos.filter((element) => element.id !== id));
  };

  const editarProducto = async (productoEditado) => {
    //funcion que edita los productos mediante un parametro enviado entre esta funcion y el componente llamados. (PUT)
    try {
      ejecutarModal()
      await editarProductos(productoEditado);
      console.log("hola");
      // mostrarProductos();
    } catch (error) {
      console.error("Error al editar el producto:", error);
    }
  };
  return (
    <div>
      <div>
        {productos1.map(
          (
            producto,
            index //mapeamos todo los productos para poderlos mostrar
          ) => (
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
              {OpenModal&&( <Modal/>)}
              
              <button onClick={() => editarProducto(producto)}>Editar</button>
              <button
                onClick={() => {
                  eliminarProducto(producto.id);
                }} //dentro de cada boton se envia las funciones necesarias para borrar y editar el producto.
              >
                Eliminar
              </button>
            </Card>
          )
        )}
      </div>

      {productos.map(
        (
          producto,
          index //mapeamos todo los productos para poderlos mostrar
        ) => (
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
            {OpenModal&&( <Modal/>)}
            <button onClick={() => editarProducto(producto)}>Editar</button>
            <button
              onClick={() => {
                eliminarProducto(producto.id);
              }} //dentro de cada boton se envia las funciones necesarias para borrar y editar el producto.
            >
              Eliminar
            </button>
          </Card>
        )
      )}
    </div>
  );
};

export default productsMainContent;
