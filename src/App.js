import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import LogoTienda from './components/LogoTienda';
import {BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {  
  return (    
    <div className="App">
     <BrowserRouter>
     <LogoTienda/>
      <NavBar/>       
      <CartWidget/>
      <Routes>
        <Route path="/" element={<ItemListContainer title="¡Bienvenidos a Bit & Byte Computación!"/>}></Route>
        <Route path="/article/:id" element={<ItemDetailContainer title="Detalles del Producto: "/>}></Route>       
        <Route path="/categoria/:categoryid" element={<ItemListContainer title="Productos disponibles: "/>}></Route>
      </Routes>      
     </BrowserRouter>                  
    </div>
  );
}

export default App;
