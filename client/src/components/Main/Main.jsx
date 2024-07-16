import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Detalles from './Detalles'
import Presupuesto from './Presupuesto';
import Equipo from './Equipo';
import Categorias from './Home/Categorias';
import Ferulas from './Home/Categorias/Ferulas';
import Fijas from './Home/Categorias/Fijas';
import Implantes from './Home/Categorias/Implantes';
import Removibles from './Home/Categorias/Removibles';

const Main = () => {
  return <main className="main">
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/presupuesto' element={<Presupuesto />} />
    <Route path='/equipo' element={<Equipo />} />
    <Route path='/categorias' element={<Categorias />} />
    <Route path='/ferulas' element={<Ferulas />} />
    <Route path='/fijas' element={<Fijas />} />
    <Route path='/implantes' element={<Implantes />} />
    <Route path='/removibles' element={<Removibles />} />
    <Route path='/detalles/:product_name' element={<Detalles />} />
    <Route path='/*' element={<Navigate to={"/"} />} />
  </Routes>
</main>;
};

export default Main;
