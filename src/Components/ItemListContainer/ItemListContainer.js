import React, { useState } from 'react';
import './ItemListContainer.css'
import { ItemCount } from '../ItemCount/ItemCount.js';
import Item from '../Item/Item.js';
import ItemList from '../ItemList/ItemList.js';

export function ItemListContainer (props){
    const onAdd = () => {alert("1 (un) item fué añadido al carrito exitosamente")}
    const onSubstract = () => {alert("1 (un) item fué eliminado del carrito exitosamente")}
    const [items,setItems] = useState([]);
    const time = 2000;
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    "name": "Dulce de Leche de Almendras", "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.k9S8RDfe4AohoTNOecs-MgHaEJ%26pid%3DApi&f=1"
                }]);
        }, time)
    });

    promise.then(result => {
        setItems(result);
    });
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-tittle">{props.tittle}</h5>
                <p className="card-text">{props.message}</p>
                <ItemCount stock="4" onAdd={() => onAdd()} onSubstract={() => onSubstract()}></ItemCount>
            </div>
        </div>
    )
} 