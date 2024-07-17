import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return <nav className="nav">
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link to="/categorias">Categorías</Link>
        <Link to="/presupuesto">Presupuesto</Link>
      </li>
    </ul>
    
  </nav>;
};

export default Nav;
