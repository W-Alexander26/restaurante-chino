import React, { useState } from "react"; // importamos de la librería de react, el hook que nos va a permitir manipular el estado de la variable.
import { useNavigate } from "react-router-dom";// importamos el hook que nos va a permitir movernos entre páginas.
import { obtenerInformacionDatos } from "../../services/llamados"; // importamos a la función que tiene el llamado al json server.
import "./registerForm.css";//importamos el archivo de css.
import axios from "axios"; //importamos axios desde la librería de axios.
import Swal from "sweetalert2";// importamos sweet alert desde su líbreria.

const Register = () => {
  //declaramos un arrow function de registro con las variables necesarias de los inputs para manipular su contenido.
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContresena] = useState("");

  const subirDatos = async () => {
    // dentro de la función de registro vamos a crear otra función que valide los espacios vacios y al estar todo correcto. Admitira el ingreso de los nuevos usuarios.
    if (
      nombre.trim() === "" ||
      correo.trim() === "" ||
      contrasena.trim() === ""
    ) {
      Swal.fire("No olvides llenar todos los recuadros");//mostramos una alerta para darle inforación al usuario.
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
        Swal.fire(
          "Este usuario ya existe, intenta utilizar otro."
        );
        return;
      }
      const infoUsuarios = {
        // creamos un objeto que va a tener los mismos datos necesarios que los inputs para introducirlos en el json server
        nombre: nombre,
        correo: correo,
        contrasena: contrasena,
      };
      const url = "http://localhost:3001/users"; // declaramos una variable que contendrá la url del json server
      const response = await axios.post(url, infoUsuarios); // declaramos otra variable que va a contener la promesa axio
      Swal.fire("Usuario registrado correctamente", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Ha habido un error en la introducción de datos", error);
      Swal.fire("Error al reistrarse");
    }
  };

  return (
    <div id="div-inputs">
      <h1 className="titulo">Registro</h1>
      <br />

      <input // dentro de cada input le daremos son propiedad necesarias para poder usarlos y al botón le enviaremos la función a ejecutar cada vez que se de click.
        name="nombre"
        value={nombre}
        className="inputs"
        type="text"
        placeholder="Ingrese Nombre"
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="text"
        placeholder="Ingrese Correo"
        name="correo"
        value={correo}
        className="inputs"
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        type="password"
        placeholder="Ingrese Contraseña"
        name="contrasena"
        value={contrasena}
        className="inputs"
        onChange={(e) => setContresena(e.target.value)}
      />
      <button className="boton" onClick={subirDatos}>
        Registrarse
      </button>
      <a href="/login">Ya tienes cuenta? Logeate directamente.</a>
    </div>
  );
};

export default Register;
