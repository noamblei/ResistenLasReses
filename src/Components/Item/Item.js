import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = (({id, img, name, description, price}) => {
    return(
        <div>
            <Link to={`/item/${id}`}>
                <h4>{name}</h4>
                <img src={img} width="300px" height="300px"/>
            </Link>
            <label></label>
            <h5>AR$ {price}</h5>
        </div>
    )
})

export default Item; 