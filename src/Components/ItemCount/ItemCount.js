import React, { useState } from 'react';
import "./ItemCount.css"

const ItemCount = ({stock, onAdd, onSubstract}) => {
  const [count,setCount] = useState(1);
  return(
    <div className="input-group mb-3">
      <button className="btn btn-outline-info" type="button" onClick={count > 1 ? () => {setCount(count - 1); onSubstract()} : () => alert("No puedes descartar más items")}>-</button>
      <input disabled type="number" className="item-counter" value={count} aria-label="(Item Count)"/>
      <button className="btn btn-outline-info" type="button" onClick={(stock > count) ? () => {setCount(count+1); onAdd()} : () => {alert("No contamos con más cantidad de este producto en el momento")}}>+</button>
    </div> 
  )
}
export default ItemCount;