import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../../Context/CartContext/CartContext.js';

const Cart = () => {
    const { items } = useContext(CartContext);
    const { quantity } = useContext(CartContext);
    return(
        <h1>Estás por comprar {quantity} {items.name}</h1>
    );
}

export default Cart;