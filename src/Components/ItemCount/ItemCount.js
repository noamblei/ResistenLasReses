import React, { useState } from 'react';
import "./ItemCount.css"

export function ItemCount (props) {
    const [count,setCount] = useState(0);
    return(
        <div className="input-group mb-3">
          <button className="btn btn-outline-info" type="button" onClick={() => count > 0 ? setCount(count - 1) : alert("No hay más items para descartar")}>-</button>
          <input disabled type="number" className="item-counter" value={count} aria-label="(Item Count)"/>
          <button className="btn btn-outline-info" type="button" onClick={() => (props.stock > count) ? setCount(count + 1) : alert("No contamos con más cantidad de este producto en el momento")}>+</button>
        </div> 
    )
}
