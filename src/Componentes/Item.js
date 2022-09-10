import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../Componentes/Item.css';


function Item(){
    const [item,setItem] = useState([])
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API}${location.pathname}`)
        .then((res) => {
          setItem(res.data)
          
        }).catch((err) => {
         console.log("error",err)
        }).finally(() => {
          setLoading(false)
        })
    }, []);
    console.log(item)
    return (
        <div className='container-item'>
        {loading ? <p>Loading...</p> : 
        <div className='container'>
        <img 
        src={item.image}
        alt={`imagen de ${item.name}`}
        className='container-img'/>
        <div className='info-container'>
            <div className='title'>
            <h2>{item.name}</h2>
            <p><span className={item.status === "Alive" ? 'green' : item.status === "Dead" ? 'red' : 'gray'}></span> {item.status} - {item.species}</p>
            <p>Gender: {item.gender}</p>
            <p>Planet: {item.location.name}</p>
            </div>
        </div>
      </div>
        }
        </div>
    )
}

export default Item;