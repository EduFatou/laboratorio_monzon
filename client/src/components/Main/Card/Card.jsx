import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductListContext } from '../../../context/ProductListContext';
import { Link } from 'react-router-dom';




const Card = ({ dataName, dataType, dataNumber, dataImg }) => {


  return <article className="card" >
    <Link to={`/${dataNumber}`} >
      <div>
        <div className="info">
        <p>Name: {dataName}</p>
        <p>ID: {dataNumber}</p>
        <p>Type: {dataType}</p>
        </div>
        <img src={dataImg} alt={dataName} className="img-card"/>
      </div>
    </Link>

  </article>
};

export default Card;