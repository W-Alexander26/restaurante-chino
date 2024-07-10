import axios from "axios";

export async function obtenerInformacionDatos() {
  try {
    const url = "http://localhost:3001/users";
    const response = await axios.get(url);
    const usuarios = response.data;
    return usuarios;
  } catch (error) {
    console.error("Error al cargar datos:", error);
  }
}

export async function guardaProductos(infoProductos) {
  try {
    const url = "http://localhost:3001/productos"; // declaramos una variable que contendrá la url del json server
    const response = await axios.post(url, infoProductos); // declaramos otra variable que va a contener la promesa axios
    alert("producto registrado correctamente", response.data);
  } catch (error) {
    console.error("Ha habido un error en la introducción de datos", error);
    alert("Error al guardar producto");
  }
}
export async function obtenerInformacionProductos() {
  try {
    const url = "http://localhost:3001/productos";
    const response = await axios.get(url);
    const usuarios = response.data;
    return usuarios;
  } catch (error) {
    console.error("Error al cargar datos:", error);
  }
}
export const borrarProductos = async (id) => {
  try {
    const url = "http://localhost:3001/productos/";
    const response = await axios.delete(url + id);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    throw error;
  }
};

export const editarProductos = async (id,nombreProducto,categoriaProducto,precioProducto,descripcionProducto) => {
  try {
    
    const url = ( `http://localhost:3001/productos/${id}`, {

      nombre: nombreProducto,
      categoria: categoriaProducto,
      precio: precioProducto,
      descripcion: descripcionProducto
    });
    const response = await axios.put(url + id);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    throw error;
  }
};



