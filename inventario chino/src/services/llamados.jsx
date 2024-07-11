import axios from "axios";
//compente que interactua con el servidor, enviando datos, recibiendolos, editandolos y borrando (CRUD)
export async function obtenerInformacionDatos() {//funcion que obtiene la informacion de los usuarios
  try {
    const url = "http://localhost:3001/users";
    const response = await axios.get(url);
    const usuarios = response.data;
    return usuarios;
  } catch (error) {
    console.error("Error al cargar datos:", error);
  }
}

export async function guardaProductos(infoProductos) {//funcion que guarda los productos
  try {
    const url = "http://localhost:3001/productos"; // declaramos una variable que contendrá la url del json server
    const response = await axios.post(url, infoProductos); // declaramos otra variable que va a contener la promesa axios
    alert("producto registrado correctamente", response.data);
  } catch (error) {
    console.error("Ha habido un error en la introducción de datos", error);
    alert("Error al guardar producto");
  }
}
export async function obtenerInformacionProductos() {//funcion que obtiene los productos
  try {
    const url = "http://localhost:3001/productos";
    const response = await axios.get(url);
    const usuarios = response.data;
    return usuarios;
  } catch (error) {
    console.error("Error al cargar datos:", error);
  }
}
export const borrarProductos = async (id) => {//funcion que borra los productos.
  try {
    const url = "http://localhost:3001/productos/";
    const response = await axios.delete(url + id);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    throw error;
  }
};

export const editarProductos = async (producto) => {//funcion que edita los productos.
  try {
    console.log(producto);
    const url = `http://localhost:3001/productos/${producto.id}`;
    const response = await axios.put(url,producto);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    throw error;
  }
};
