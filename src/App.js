import React from 'react';
import Home from './Pages/Home';
import Item from './Componentes/Item';
import NotFound from './Pages/404';
import { Route,Routes} from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path=':name' exact element={<Item/>}/>
      <Route path='*' exact element={<NotFound/>}/>
    </Routes>
    
  );
}

export default App;
