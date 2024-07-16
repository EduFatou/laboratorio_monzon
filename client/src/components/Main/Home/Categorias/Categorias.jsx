import React from "react";
import Ferulas from './Ferulas';
import Fijas from './Fijas';
import Implantes from './Implantes';
import Removibles from "./Removibles";

const Categorias = () => {
  return <section className="categorias">
  <article>
  <Ferulas/>
  <Fijas/>
  <Implantes/>
  <Removibles/>
  </article>
</section>;
};

export default Categorias;
