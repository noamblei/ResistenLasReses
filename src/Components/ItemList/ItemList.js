import React, { useState } from 'react';
import Item from '../Item/Item.js';
import ItemDetailsContainer from '../ItemDetailsContainer/ItemDetailsContainer.js';
import ItemCount from '../ItemCount/ItemCount.js';

const ItemList = (({items}) => {
    const onAdd = (itemName) => {alert("1 (un) " + itemName + " fué añadido al carrito exitosamente")}
    const onSubstract = (itemName) => {alert("1 (un) " + itemName + " fué eliminado del carrito exitosamente")}
    return(
        <div className="items">
            {items.map((item, i) => {
                return(
                    <div className="card" key={i}>
                        <div className="card-body">
                        <Item key={i} id={item.id} name={item.name} img={item.img} price={item.price} description={item.description}></Item>
                        <ItemCount stock={item.stock} onAdd={() => onAdd(item.name)} onSubstract={() => onSubstract(item.name)}></ItemCount>
                        </div>
                    </div>
                );
            })}
        </div>
    )
})

export default ItemList;