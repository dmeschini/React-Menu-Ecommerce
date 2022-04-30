import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import LogoTienda from './components/LogoTienda';

function App() {
  return (
    <div className="App">
      <LogoTienda/>
      <NavBar/>       
      <CartWidget/>
      <ItemListContainer title="¡Bienvenidos a Bit-Byte Computación!"/>         
    </div>
  );
}

export default App;
