import React, { useState } from "react"; // importamos de la librería de react, el hook que nos va a permitir manipular el estado de la variable.
import obtenerInformacionDatos from "../services/llamados"; // importamos a la función que tiene el llamado al json server.
import axios from "axios"; //importamos axios desde la librería de axios

const Register = () => {
  //declaramos un arrow function de registro con las variables necesarias de los inputs para manipular su contenido.
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContresena] = useState("");

  const subirDatos = async () => {
    // dentro de la función de registro vamos a crear otra función que valide los espacios vacios y al estar todo correcto. Admitira el ingreso de los nuevos usarios.
    if (
      nombre.trim() === "" ||
      correo.trim() === "" ||
      contrasena.trim() === ""
    ) {
      alert("No olvides llenar todos los recuadros");
      return; // rompemos la función sí la condición no se cumple.
    }
    try {
      // con el try y el catch, tomaremos en la primera parte lo que queremos que se ejecute y en el catch, que capture los errores mostrandolos en un mensaje
      const usuarios = await obtenerInformacionDatos();
      const usuariosRegistrado = usuarios.find(
        //utilizamos el metodo find para validar que al resgitrarse, no exista esa información antes.
        (usuario) => usuario.correo === correo
      );
      if (usuariosRegistrado) {
        alert("Este usuario ya ha sido registrado");
        return;
      }
      const infoUsuarios = {
        // creamos un objeto que va a tener los mismos datos necesarios que los inputs para introducirlos en el json server
        nombre: nombre,
        correo: correo,
        contrasena: contrasena,
      };
      const url = "http://localhost:3001/users"; // declaramos una variable que contendrá la url del json server
      const response = await axios.post(url, infoUsuarios); // declaramos otra variable que va a contener la promesa axios
      alert("Usuario registrado correctamente", response.data);
    } catch (error) {
      console.error("Ha habido un error en la introducción de datos", error);
      alert("Error al reistrarse");
    }
  };

  return (
    <div>
      <div>
        <p>Registro</p>
      </div>
      <p>Nombre</p>
      <input // dentro de cada input le daremos son propiedad necesarias para poder usarlos y al botón le enviaremos la función a ejecutar cada vez que se de click.
        name="nombre"
        value={nombre}
        type="text"
        placeholder="Ingrese Nombre"
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="text"
        placeholder="Ingrese Correo"
        name="correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <p>Contreseña</p>
      <input
        type="password"
        placeholder="Ingrese Contraseña"
        name="contrasena"
        value={contrasena}
        onChange={(e) => setContresena(e.target.value)}
      />
      <button onClick={subirDatos}>Registrarse</button>
    </div>
  );
};

export default Register;
