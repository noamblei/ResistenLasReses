import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ defaultValue = [], children }) => {
    const [items, setItems] = useState(defaultValue);

    function addItem (value, qty, ask = true) {
        value.quantity = qty;
        if (isStockAvailable(value.id)){
            if (!isInCart(value.id)){
                setItems(items.concat([value]));
            }
            else if (ask){
                var r = window.confirm("Ya tenés " + value.name + " en el carrito, querés agregar " + value.quantity + " más?");
                if (r == true)
                {
                    for(const [key, element] in Object.entries(items)){
                        if (items[key].id == value.id){
                            items[key].quantity += value.quantity; 
                        }
                    }
                }
            }
            else{
                for(const [key, element] in Object.entries(items)){
                    if (items[key].id == value.id){
                        items[key].quantity += value.quantity; 
                    }
                }
            }
        }
        else{
            alert("No hay más " + value.name + " disponibles en este momento");
        }
    }

    function removeItem (itemId) {
        setItems(items.filter((item) => {
            return item.id !== itemId;
        }))
    }

    function removeItemByName (itemName) {
        setItems(items.filter((item) => {
            return item.Name !== itemName;
        }))
    }

    function clear () {
        setItems([]);
    }

    function isInCart (itemId) {
        return items.find(x => x.id === itemId);
    }

    function isStockAvailable (itemId, stockToaAdd) {
        let it = items.find(x => x.id === itemId);
        return it ? !((it.quantity + stockToaAdd) >= it.stock) : true;
    }

    function getTotalBuys () {
        let buy = 0;
        items.forEach(item => {
            if (item && item.quantity > 0){
                buy += item.quantity;
            }
        });
        return buy;
    }

    function getTotalPrice () {
        let price = 0;
        items.forEach(item => {
            if (item && item.quantity > 0){
                price = price + (item.quantity * item.price);
            }
        });
        return price;
    }

    return <CartContext.Provider value={{ items, addItem, removeItem, clear, isInCart, getTotalBuys, getTotalPrice, isStockAvailable }}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider;