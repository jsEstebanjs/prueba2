import React from 'react';
import { Link } from "react-router-dom"
import '../Componentes/Card.css';

function Card({img,name,status,species,classe,id,children}){
    return (
        <div className='container'>
            <img 
            src={img}
            alt={`imagen de ${name}`}
            className='container-img'/>
            <div className='info-container'>
                <div className='title'>
                <Link to={`/character/${id}`}><h2>{name}</h2></Link>
                <p><span className={classe}></span> {status} - {species}</p>
                {children}
                </div>
            </div>
        </div>
    )
}
export default Card;