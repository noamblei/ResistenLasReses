import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount.js';
import CartContext from '../../Context/CartContext/CartContext.js';

const ItemDetails = (({item, id, img, name, description, price, stock}) => {
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useContext(CartContext);

    
    const onAdd = () => {setQuantity(quantity+1);};
    const onSubstract = () => {setQuantity(quantity-1);};
    const buy = () => {
        document.querySelector("#finish").classList.remove("hide");
        document.querySelector("#finish-text").classList.remove("hide");
        document.querySelector(".input-group").classList.add("hide");
        document.querySelector("#buy").classList.add("hide");
    };
    const finishBuy = () => {
        addItem(item, quantity);
        window.location.href = "/cart";
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
                    <button type="button" id="finish" className="btn btn-success hide" onClick={() => finishBuy()}>Finalizar compra</button>
                    <span id="finish-text" className="hide"> {quantity} elementos</span>
                </div>
            </div>
        </div>
        
    )
})

export default ItemDetails; 