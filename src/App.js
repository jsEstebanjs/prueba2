import React from 'react';
import Home from './Pages/Home';
import Item from './Componentes/Item';
import NotFound from './Pages/404';
import { Route,Routes,Link} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div>
      <nav>
      <Link to="/">Home</Link>
      </nav>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/character/:name' exact element={<Item/>}/>
      <Route path='*' exact element={<NotFound/>}/>
    </Routes>
    </div>
    
  );
}

export default App;
