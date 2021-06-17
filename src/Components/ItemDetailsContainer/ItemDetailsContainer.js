import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetails/ItemDetails';

const ItemDetailsContainer = (({id}) => {
    const [item,setItem] = useState({});
    const time = 2000;
    const getItemDetails = new Promise((resolve, reject) => {
        setTimeout(() => {
            const allItems = [
                {
                    "id": 3, "name": "Dulce de Leche de Almendras", "price" : 420, "description": "Riki", "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.k9S8RDfe4AohoTNOecs-MgHaEJ%26pid%3DApi&f=1"
                },{
                    "id": 14, "name": "Generic Producto Vegano", "price": 666, "description": "recomendada para la electronica", "img": "https://www.casio-intl.com/product/image/1425458796018/"
                }];

            resolve(allItems.filter(item => item.id == id));
        },time)
    });

    useEffect(() => {
        getItemDetails.then((response) => {
            setItem(response[0]);
        })
    }, {});
    return(
        <div className="item-detail-container">
            <ItemDetails name={item.name} img={item.img} price={item.price} description={item.description}></ItemDetails>
        </div>
    )
})

export default ItemDetailsContainer; 