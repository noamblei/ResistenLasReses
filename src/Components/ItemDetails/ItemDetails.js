import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount.js';
import {CartContext} from '../../Context/CartContext/CartContext.js';
import { NavLink } from 'react-router-dom';
import './ItemDetails.css';

const ItemDetails = (({item, id, img, name, description, price, stock}) => {
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useContext(CartContext);
    const { isInCart } = useContext(CartContext);
    const { isStockAvailable } = useContext(CartContext);

    
    const onAdd = () => {setQuantity(quantity+1);};
    const onSubstract = () => {setQuantity(quantity-1);};
    const buy = () => {
        if (isStockAvailable(item.id, quantity)){
            if (!isInCart(item.id)){
                document.querySelector("#finish").classList.remove("hide");
                document.querySelector("#finish2").classList.remove("hide");
                document.querySelector("#finish-text").classList.remove("hide");
                document.querySelector(".input-group").classList.add("hide");
                document.querySelector("#buy").classList.add("hide");
                addItem(item, quantity);
            }else {

                var r = window.confirm("Ya tenés " + item.name + " en el carrito, querés agregar " + quantity + " más?");
                if (r == true)
                {
                    document.querySelector("#finish").classList.remove("hide");
                    document.querySelector("#finish2").classList.remove("hide");
                    document.querySelector("#finish-text").classList.remove("hide");
                    document.querySelector(".input-group").classList.add("hide");
                    document.querySelector("#buy").classList.add("hide");
                    addItem(item, quantity, false);
                }
                else
                {

                }
            }
        }
        else{
            alert("No hay más " + item.name + " disponibles en este momento");
        }
    };  

    return(
        <div>
            <h2>{name}</h2>
            <img src={img} width="300px" height="300px"/>
            <div>{description}</div>
            <h5>AR${price}</h5>

            <div className="item-details-container">
                <div id="buying-section">
                    <ItemCount id="itemCount" stock={item.stock} onAdd={() => onAdd()} onSubstract={() => onSubstract()}></ItemCount>
                    <button type="button" id="buy" className="btn btn-primary" onClick={() => buy()}>Comprar</button>
                    <NavLink to="/">
                        <button type="button" id="finish2" className="btn btn-secondary hide btns-center">Seguir comprando</button>
                    </NavLink>
                    <NavLink to="/cart">
                        <button type="button" id="finish" className="btn btn-success hide btn-margin">Finalizar compra</button>
                    </NavLink>
                    <span id="finish-text" className="hide"> {quantity} elementos</span>
                </div>
            </div>
        </div>
        
    )
})

export default ItemDetails; 