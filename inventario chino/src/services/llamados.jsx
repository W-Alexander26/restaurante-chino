import axios from "axios";

async function obtenerInformacionDatos() {
  try {
    const url = "http://localhost:3001/users";
    const response = await axios.get(url);
    const usuarios = response.data;
    return usuarios;
  } catch (error) {
    console.error("Error al cargar datos:", error);
  }
}

export default obtenerInformacionDatos;
