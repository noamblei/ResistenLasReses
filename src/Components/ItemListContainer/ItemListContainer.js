import React from 'react'
import './ItemListContainer.css'
import { ItemCount } from '../ItemCount/ItemCount.js';
import { Item } from '../Item/Item.js';
import { ItemList } from '../ItemList/ItemList.js';

export function ItemListContainer (props){
    const onAdd = () => {alert("1 (un) item fué añadido al carrito exitosamente")}
    const onSubstract = () => {alert("1 (un) item fué eliminado del carrito exitosamente")}
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