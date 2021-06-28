import React, { useState } from 'react';

const ItemDetails = (({id, img, name, description, price}) => {
    return(
        <div>
            <h2>{name}</h2>
            <img src={img} width="300px" height="300px"/>
            <div>{description}</div>
            <h5>AR${price}</h5>
        </div>
    )
})

export default ItemDetails; 