import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerInformacionDatos } from "../../services/llamados";
import "./loginForm.css";

const logingForm = () => {
  //creamos una función que va a validar que el usuario que se vaya a logear, exista y en caso positivo será redirigido al mainpage.
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContresena] = useState("");

  const obtenerDatos = async () => {
    if (correo.trim() === "" || contrasena.trim() === "") {
      alert("No olvides llenar todos los recuadros");
      return; //si está condición no se cumple, se termina.
    }
    try {
      const usuarios = await obtenerInformacionDatos();
      const usuariosRegistrado = usuarios.find(
        //utilizamos el metodo find para validar que al logearse, esa información exista antes.
        (usuario) =>
          usuario.correo === correo && usuario.contrasena === contrasena
      );
      if (usuariosRegistrado) {
        alert("Datos correctos, en breve será dirigido a la página de inicio");
        navigate("/home");
      } else {
        alert("Hubo un error con los datos, intentelo de nuevo");
      }
    } catch (error) {
      alert("Problemas al subir datos", error);
    }
  };

  return (
    <div className="div-inputs-login">
      <h1 className="titulo">Login</h1>
      <input //le damos a cada input las propiedadades necesarias para utilizarlas y al botón le enviamos la función.
        onChange={(e) => setCorreo(e.target.value)}
        type="text"
        placeholder="Ingrese correo"
        name="correo"
        value={correo}
        className="inputs-login"
      />
      <input
        onChange={(e) => setContresena(e.target.value)}
        type="password"
        placeholder="Ingrese Contraseña"
        name="contrasena"
        value={contrasena}
        className="inputs-login"
      />
      <button className="boton" onClick={obtenerDatos}>Login</button>
    </div>
  );
};

export default logingForm;
