import React, {useState,useEffect} from 'react';
import useCartContext from '../store/CartContext'
import { createBuyOrder} from '../data'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table'

const Formulario = () => {  
    const {cart, clearCart,calcPriceCart,removeFromCart} = useCartContext();      
    let orderID='';
    const [border,setBorder]=useState('border border-danger');
    const [enableButton,setEnableButton]=useState('btn btn-primary disabled');   
    const [showAlert, setShowAlert] =useState(false);    
    const [order, setOrder]=useState('')
    const [data, setData] = useState({
        name: '',
        mail: '',
        phone: '',
        address: ''
    })
     
    useEffect(()=>{
      if(((data.name && data.phone && data.address && data.mail && data.remail)!=='') && (data.mail === data.remail)) {setEnableButton('btn btn-primary enabled');}
        else {setEnableButton('btn btn-primary disabled');setShowAlert(false);}
      if(data.mail === data.remail){setBorder('border border-success')}
        else setBorder('border border-danger');
    },[data]);
    
    function handleBuy(){             
          
      const itemsToBuy = cart.map((item) =>({
          name : item.name,
          cant : item.cant,
          price : item.price,
          id : item.id
        }))
      
        const buyOrder = {
          buyer:{
            name: data.name,
            email: data.mail,
            phone: data.phone, 
            address: data.address           
          },
          items:itemsToBuy,      
          total:calcPriceCart()
        }       
        orderID=createBuyOrder(buyOrder);
        orderID.then(value=>{
        setOrder(value);
        setShowAlert(true);
        clearCart();  
         })
      } 
    
    const handleInputChange = (event) => {    
      setData({...data,[event.target.name] : event.target.value})
    }
    if (cart.length === 0 && order==='') return (    
      <div className='greeting'>    
      <h4>No hay productos en el Carrito</h4>        
      <Link to={`/`}>
              <button className='btn-primary'>Volver al Catálogo</button>
      </Link>      
      </div>
    )
    if (!showAlert) return (
       <div className='greeting'>
         {cart.map(itemCart => {
        return <div key={itemCart.id}>              
        <Table responsive bordered size="md">
        <thead>
    <tr>      
      <th></th>
      <th>Nombre</th>
      <th>Precio Unitario</th>
      <th>Cantidad</th>
      <th>Total del Producto</th>
    </tr>
  </thead>
  <tbody>
    <tr>    
      <img variant="top" src={itemCart.url} alt='Imagen' style={{ width: '5rem' }} />  
      <td>{itemCart.name}</td>
      <td>{itemCart.price}</td>
      <td>{itemCart.cant}</td>
      <td>{itemCart.cant * itemCart.price}</td>
      <Button style={{ backgroundColor: 'darkred' }} className='btn-danger' onClick={()=>removeFromCart(itemCart.id)}>Eliminar</Button>
    </tr>    
  </tbody>
</Table>
      </div>
    })}
        <h3>Total de la Compra: ${calcPriceCart()}</h3>        
        <br /> 
         <h2>Ingrese sus Datos:</h2>
         <br />          
      <Form >
        <Form.Group className="mb-3">
          <Form.Label >Nombre y Apellido</Form.Label>
          <Form.Control className='border border-info' type="text" placeholder="Nombre y Apellido" onChange={handleInputChange} name="name"/>
          <Form.Label>Email</Form.Label>
          <Form.Control className={border} type="email" placeholder="Ingrese su email" onChange={handleInputChange} name="mail"/>
          <Form.Label>Ingrese Nuevamente su Email</Form.Label>
          <Form.Control className={border} type="email" placeholder="Ingrese nuevamente su email" onChange={handleInputChange} name="remail"/>
          <Form.Label>Teléfono</Form.Label>
          <Form.Control className='border border-info' type="text" placeholder="Ingrese su Teléfono" onChange={handleInputChange} name="phone"/>
          <Form.Label>Domicilio de Entrega</Form.Label>
          <Form.Control className='border border-info' type="text" placeholder="Domicilio de Entrega" onChange={handleInputChange} name="address"/>
          <Form.Text className="text-muted">
            Nota: No compartiremos sus datos.
          </Form.Text>
        </Form.Group>               
      </Form>
      <Button className={enableButton} variant="primary" type="submit" onClick={()=>handleBuy()}>
      Finalizar Compra
      </Button>       
       </div>     
    );
    else return (
      <div>
        <Alert  variant='success'>¡ Compra confirmada ! Nº de Orden: {order}</Alert>                       
        <Alert  variant='success'>¡ Muchas gracias por su compra !</Alert>
        <Link to={`/`}>
            <button className='btn-primary'>Volver al Catálogo</button>
        </Link>
      </div>
    )
}
 
export default Formulario;
