import React from "react";
import './NavBar.css';
import logoPng from '../../logo.png';
import { CartWidget } from '../CartWidget/CartWidget.js';
import { NavLink } from 'react-router-dom';


const rnd = Math.floor((Math.random() * 10) + 1);
var placeholderText;
switch(rnd){
    case 1:
        placeholderText = "¿Qué vas a llevar?";
    break;
    case 2:
        placeholderText = "#GoVegan:D";
    break;
    case 3:
        placeholderText = "¿Algún antojo?";
    break;
    case 4:
        placeholderText = "Buscar productos, marcas, y más...";
    break;
    case 5:
        placeholderText = "¿Ya probaste nuestros Dulces de Leche?";
    break;
    case 6:
        placeholderText = "Buscate lo que quieras";
    break;
    case 7:
        placeholderText = "Alto proyecto este";
    break;
    case 8:
        placeholderText = "Never gonna give you up";
    break;
    default:
        placeholderText = "¿Qué querés comer hoy?";
    break;
}

export function NavBar() {
    return(    
        <nav class="navbar navbar-expand-lg navbar-dark" style={{'backgroundColor': '#444444'}}>
            <div class="container-fluid">
                <NavLink to="/">
                    <img alt='logo' className='logoClass' src={logoPng}></img>
                </NavLink>
                <a className="navbar-brand tittle">Resisten Las Reses</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink exact activeClassName="activo" to="/category/1" className="nav-link">Inicio</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink exact activeClassName="activo" to="/category/2" className="nav-link">Promos</NavLink>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Dulces</a></li>
                                <li><a class="dropdown-item" href="#">Alfajores</a></li>
                                <li><a class="dropdown-item" href="#">Sandwiches</a></li>
                                <li><a class="dropdown-item" href="#">Proteína</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Próximamente</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input size="lg" class="form-control inputClass" type="search" placeholder={placeholderText} aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    <NavLink to="/cart">
                        <CartWidget/>
                    </NavLink>
                </div>
            </div>
        </nav>

    )
}
