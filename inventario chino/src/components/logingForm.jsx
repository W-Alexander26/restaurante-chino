import { useState } from "react";
import obtenerInformacionDatos from "../services/llamados";

const logingForm = () => {
  //creamos una función que va a validar que el usuario que se vaya a logear, exista y en caso positivo será redirigido al mainpage.
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
      } else {
        alert("Hubo un error con los datos, intentelo de nuevo");
      }
    } catch (error) {
      alert("Problemas al subir datos", error);
    }
  };

  return (
    <div>
      <div>
        <p>Login</p>
      </div>
      <p>Correo</p>
      <input //le damos a cada input las propiedadades necesarias para utilizarlas y al botón le enviamos la función.
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
