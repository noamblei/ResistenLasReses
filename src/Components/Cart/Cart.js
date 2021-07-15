import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartContext.js';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = () => {
    const { item } = useContext(CartContext);
    const { quantity } = useContext(CartContext);
    const { items } = useContext(CartContext);
    const { removeItem } = useContext(CartContext);
    const { getTotalPrice } = useContext(CartContext);
    return(<>
        {(items.length > 0) ? <div>
            {items.map( (item, i) => {
                return(
                    <div className="card mb-3 itemMargin" style={{'maxWidth': '550px'}}>
                      <div className="row no-gutters">
                        <div className="col-md-5">
                          <img src={item.img} className="card-img imgMargin"/>
                          <div className="btn-area">
                            <button className="btn trashMargin" onClick={() => { removeItem(item.id) }}>
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                        </div>
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <h4 className="card-title">{item.name}</h4>
                            <p className="card-text"><small className="text-muted">{item.quantity} unidades * ${item.price} = ${item.quantity * item.price}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
                );
            })}
            <div className="alert card alert-primary">
                Precio final: ${getTotalPrice()}
            </div>
        </div> : 
        <div>
            <h1>Carro vacío :(</h1>
            <NavLink to='/'>
                Seguir comprando :)
            </NavLink>
        </div>
        }
    </>);
}

export default Cart;