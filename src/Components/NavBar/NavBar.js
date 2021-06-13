import React from "react";
import './NavBar.css';
import logoPng from '~/../logo.png';
import { CartWidget } from '../CartWidget/CartWidget.js';

export function NavBar() {
    return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <img alt='logo' className='logoClass' src={logoPng}></img>
            <a className="navbar-brand tittle">Resisten Las Reses</a>

            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Combos</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Alfajores</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Galletitas</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Contacto</a>
                </li>
            </ul>
            
            <CartWidget></CartWidget>
        </nav>
    )
} 
