import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/home";
import About from "../pages/about";
import Product from "../pages/productPage";
import Pagenotfound from "../pages/pagenotfound";
import PaginaPrivada from "../components/PaginaPrivada/PrivatePage";
//Aqui enrutaremos todo para enviar un solo componente a "app" y así mismo volvemos providas algunas paginas para que no se entre a menos que se cumplan las condiciones necesarias.
const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<Pagenotfound />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/home" element={<PaginaPrivada> 
              <Home/>
          </PaginaPrivada>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
