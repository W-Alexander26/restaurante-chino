import { useState } from "react";
import axios from "axios";

const logingForm = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContresena] = useState("");

  const obtenerDatos = async () => {
    try {
      const url = "http://localhost:3001/users";
      const response = await axios.get(url);
      const usuarios = response.data;
      const usersData = usuarios.find(
        (usuario) =>
          usuario.email === correo && usuario.contrasena === contrasena
      );
      if (correo.trim() === "" && contrasena.trim() === "") {
        alert(
          "Recuerda usar la misma usar la misma informaición que usaste en el regstro"
        );
      } else if (usersData) {
        alert("Ingreso correctamente");
      } else {
        alert("Hola");
      }
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  };

  return (
    <div>
      <div>
        <p>Login</p>
      </div>
      <p>Correo</p>
      <input
        onChange={(e) => setCorreo(e.target.value)}
        type="text"
        placeholder="Ingrese correo"
        name="correo"
        value={correo}
      />
      <p>Contraseña</p>
      <input
        onChange={(e) => setContresena(e.target.value)}
        type="password"
        placeholder="Ingrese Contraseña"
        name="contrasena"
        value={contrasena}
      />
      <button onClick={obtenerDatos}>Login</button>
    </div>
  );
};

export default logingForm;
