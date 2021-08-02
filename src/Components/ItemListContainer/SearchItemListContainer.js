import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.js';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';

const SearchItemListContainer = (() => {
    const [items,setItems] = useState([]);
    const { name } = useParams();
    const time = 100;
    var nameSearch = name.charAt(0).toUpperCase() + name.slice(1);
    var resultText = "Resultados de la busqueda";

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items").where('name', '>=', nameSearch).where('name', '<=', nameSearch + '\uf8ff')

        itemCollection.get().then((snapshot) => {
            setItems(snapshot.docs.map(doc => doc.data()));
        }).catch((error) => {
            console.error(error);
        })
    },name);
    return(
        <div>
            <h3>{resultText}</h3>
            <ItemList items={items}></ItemList>
        </div>
        
    )
})

export default SearchItemListContainer