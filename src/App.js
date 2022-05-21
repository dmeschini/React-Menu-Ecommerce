import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartView from './components/CartView'
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import LogoTienda from './components/LogoTienda';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import {CartContextProvider} from './store/CartContext'

function App() {  
  return (    
    <div className="App">
    <CartContextProvider>
     <BrowserRouter>     
     <LogoTienda/>
      <NavBar/>       
      <CartWidget/>
      <Routes>
        <Route path="/" element={<ItemListContainer title="¡Bienvenidos a Bit & Byte Computación!"/>}></Route>
        <Route path="/article/:id" element={<ItemDetailContainer title="Detalles del Producto: "/>}></Route>       
        <Route path="/categoria/:categoryid" element={<ItemListContainer title="Productos disponibles: "/>}></Route>
        <Route path='/Cart' element={<CartView/>}></Route>
      </Routes>   
     </BrowserRouter>  
     </CartContextProvider>                 
    </div>
  );
}

export default App;
