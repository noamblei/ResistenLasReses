import React, { useState } from 'react';

const ItemDetails = (({id, img, name, description, price}) => {
    return(
        <div>
            <h4>{name}</h4>
            <img src={img} width="69px" height="69px"/>
            <div>{description}</div>
            <h5>AR${price}</h5>
        </div>
    )
})

export default ItemDetails; 