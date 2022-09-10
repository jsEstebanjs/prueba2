import { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import React from 'react';
import Card from '../Componentes/Card'

// import Item from './Item';


function App2() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(process.env.REACT_APP_API)
      .then((res) => {
        setPosts(res.data.results)
        
      }).catch((err) => {
       console.log("error",err)
      }).finally(() => {
        setLoading(false)
      })
  }, []);
  return (
    <div className='App'>
    <h1>The Rick and Morty API</h1>
    <div className="Cards">
      {loading ? <p>Loading...</p> : React.Children.toArray(posts.map((item) => {
        return (
          <Card
          id={item.id}
          img={item.image}
          name={item.name}
          status={item.status}
          species={item.species}
          classe={item.status === "Alive" ? 'green' : item.status === "Dead" ? 'red' : 'gray'}
          />
        )
      }))} 
    </div>
    </div>
  );
}

export default App2;