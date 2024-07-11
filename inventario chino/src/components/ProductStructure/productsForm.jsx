import React, { useState } from "react";
import { guardaProductos } from "../../services/llamados";
import { obtenerInformacionProductos } from "../../services/llamados";
import Swal from "sweetalert2";
//Componente que contiene el formulario y las validaciones para introducir los productos.
const productsForm = ({ actualizarSearched }) => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [categoriaProducto, setCategoriaProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState("");
  const [descripcionProducto, setDescripcionProducto] = useState("");
//funcion que busca diferentes productos por medio del input categoria o nombre.
  const buscador = async () => {
    const data = await obtenerInformacionProductos();
    // console.log(data);
    // console.log(nombreProducto, categoriaProducto);
    const resultadoBusqueda = data.filter(
      (producto) =>
        producto.nombre === nombreProducto ||
        producto.categoria === categoriaProducto
    );
    actualizarSearched(resultadoBusqueda);
  };
//funcion que se encarga de subir los datos al servidos al mismo tiempo que valida que no hayan espacios vacios.
  const subirDatosProductos = async () => {
    setNombreProducto("");
    setCategoriaProducto("");
    setPrecioProducto("");
    setDescripcionProducto("");
    // dentro de la función de registro de producto vamos a crear otra función que valide los espacios vacios y al estar todo correcto. Admitira el ingreso de los nuevos productos.
    if (
      nombreProducto.trim() === "" ||
      categoriaProducto.trim() === "" ||
      descripcionProducto.trim() === "" ||
      precioProducto.trim() === ""
    ) {
      Swal.fire("Tienes que llenar todos los espacios")
      return;
    }
    try {
      const infoProductos = {
        // creamos un objeto que va a tener los mismos datos necesarios que los inputs para introducirlos en el json server
        nombre: nombreProducto,
        categoria: categoriaProducto,
        precio: precioProducto,
        descripcion: descripcionProducto,
      };

      await guardaProductos(infoProductos);
    } catch {
      console.error("Error al guardar el producto", error);
    }
  };
  // console.log(searched.nombre);

  return (
    <div>
      <input
        type="text"
        name="nombreProducto"
        value={nombreProducto}
        id="nombre"
        placeholder="Nombre"
        onChange={(e) => setNombreProducto(e.target.value)}
      />
      <input
        type="text"
        name="categoriaProducto"
        value={categoriaProducto}
        id="categoria"
        placeholder="Categoria"
        onChange={(e) => setCategoriaProducto(e.target.value)}
      />
      <input
        type="text"
        name="precioProducto"
        value={precioProducto}
        id="precio"
        placeholder="Precio"
        onChange={(e) => setPrecioProducto(e.target.value)}
      />
      <input
        type="text"
        name="descripcionProducto"
        value={descripcionProducto}
        id="descripcion"
        placeholder="Descripción"
        onChange={(e) => setDescripcionProducto(e.target.value)}
      />
      <button onClick={buscador}>Buscar Productos</button>
      <button onClick={subirDatosProductos}>Agregar Producto</button>
    </div>
  );
};

export default productsForm;
