import React, { useState, useEffect } from 'react';
import ItemDetails from '../ItemDetails/ItemDetails.js';
import { useParams } from 'react-router-dom';
import './ItemDetailsContainer.css';
import { getFirestore } from '../../firebase';

const ItemDetailsContainer = (() => {
    const [item, setItem] = useState({});
    const { itemId } = useParams();
    const time = 100;

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const dbItem = itemCollection.doc(itemId);

        dbItem.get().then((doc) => {
            if (doc.size === 0){
                console.log("No se encontraron resultados");
            }
            setItem({ id: doc.id, ...doc.data() })
        }).catch((error) => {
            console.error(error);
        });
    }, {});
    return(
        <ItemDetails item={item} name={item.name} img={item.img} price={item.price} description={item.description} stock={item.stock}></ItemDetails>
    )
})

export default ItemDetailsContainer; 