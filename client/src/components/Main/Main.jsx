import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Presupuesto from './Presupuesto';
import Equipo from './Equipo';
import CategoriesList from './Home/CategoriesList/CategoriesList';
import Category from './Home/CategoriesList/Category/Category';
import SignUp from "./Home/SignUp/SignUp";

const Main = () => {
  return <main className="main">
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/presupuesto' element={<Presupuesto />} />
    <Route path='/equipo' element={<Equipo />} />
    <Route path='/categorias' element={<CategoriesList />} />
    <Route path="/categorias/:category" element={<Category />} />
    <Route path="/registro" element={<SignUp />} />    
    <Route path='/*' element={<Navigate to={"/"} />} />
  </Routes>
</main>;
};

export default Main;
