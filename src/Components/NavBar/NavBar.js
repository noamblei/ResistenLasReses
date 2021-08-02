import { NavDropdown, Navbar, Nav, Container} from 'react-bootstrap'
import React from "react";
import './NavBar.css';
import logoPng from '../../logo.png';
import { CartWidget } from '../CartWidget/CartWidget.js';
import { NavLink } from 'react-router-dom';


const rnd = Math.floor((Math.random() * 10) + 1);
var placeholderText;
switch(rnd){
    case 1: placeholderText = "¿Qué vas a llevar?"; break;
    case 2: placeholderText = "#GoVegan:D"; break;
    case 3: placeholderText = "¿Algún antojo?"; break;
    case 4: placeholderText = "Buscate lo que quieras"; break;
    case 5: placeholderText = "Alto proyecto este"; break;
    case 6: placeholderText = "Never gonna give you up"; break;
    default: placeholderText = "¿Qué querés comer hoy?"; break;
}

const searchProduct = () => {
    let search = document.querySelector('#search').value;
    window.location.href='/search/'+search;
    //element.setAttribute('href',search);
}

const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        let search = document.querySelector('#search').value;
        window.location.href='/search/'+search;
    }
  }

export function NavBar() {
    return(
        <navbar class="navbar navbar-expand-lg navbar-dark" style={{'backgroundColor': '#444444'}}>
            <Nav class="container-fluid">

                <Navbar.Brand as={NavLink} to="/" className="brand-class">
                    <img src={logoPng} className="d-inline-block align-top logo-class"/>
                       Resisten Las Reses
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink exact activeClassName="activo" to="/category/1" className="nav-link">Inicio</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink exact activeClassName="activo" to="/category/2" className="nav-link">Promos</NavLink>
                        </li>
                        

                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                          <NavDropdown.Item as={NavLink} to="/category/3">Alfajores</NavDropdown.Item>
                          <NavDropdown.Item as={NavLink} to="/category/4">Sandwiches</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item as={NavLink} to="/category/5">Comidan't</NavDropdown.Item>
                        </NavDropdown>



                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Próximamente</a>
                        </li>
                    </ul>

                    <div class="d-flex" method="get">
                        <input size="lg" class="form-control input-class" name="search" id="search" type="text" placeholder={placeholderText} onKeyDown={handleKeyDown}/>
                        <button class="btn btn-outline-success" type="submit" onClick={() => {searchProduct();}}>Buscar</button>
                    </div>

                    <NavLink to="/cart">
                        <CartWidget/>
                    </NavLink>
                </Navbar.Collapse>
            </Nav>
        </navbar>

    )
}
