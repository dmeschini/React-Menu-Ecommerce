import {Link} from 'react-router-dom'
import useCartContext from '../store/CartContext';

function NavBar(){
  const {contextFunction}=useCartContext();
  contextFunction();
    return(                 
<nav className="navbar navbar-expand-lg navbar-light fs-5">
  <div className="container-fluid">    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="#">Ofertas Especiales</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Opciones
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/categoria/components">Componentes</Link></li>
            <li><Link className="dropdown-item" to="/categoria/peripheral">Periféricos</Link></li>
            <li><Link className="dropdown-item" to="/categoria/audio">Audio</Link></li>
            <li><Link className="dropdown-item" to="/categoria/video">Video</Link></li>
            <li><Link className="dropdown-item" to="/categoria/">Ofertas</Link></li>  
          </ul>
        </li>        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
       
    )
}
export default NavBar