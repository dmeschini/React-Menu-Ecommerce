import widgetCart from '../assets/images/carrito.png'
import useCartContext from '../store/CartContext'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'

function CartWidget() {
  const {cantInCart} = useCartContext();
  return (
    <div>
      {/* <h6>{cantInCart()}</h6> */}
      
       <Link to={`/Cart`}>         
         <img src={widgetCart} alt="Carrito" width="40" height="40"/>                   
       </Link>
       <Badge bg="primary">{cantInCart()}</Badge>
    </div>    
  )
}

export default CartWidget