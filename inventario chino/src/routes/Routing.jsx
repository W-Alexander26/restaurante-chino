import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/home";
import About from "../pages/about";
import Product from "../pages/productPage";


const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
           <Route  path="/register" element={<Register/>} />
           <Route  path="/login" element={<Login/>} />
           <Route  path="/home" element={<Home/>} />
           <Route  path="/about" element={<About/>} />
           <Route  path="/product" element={<Product/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default Routing