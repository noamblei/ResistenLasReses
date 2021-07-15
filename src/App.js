import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar/NavBar.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import ItemDetailsContainer from './Components/ItemDetailsContainer/ItemDetailsContainer';
import Cart from './Components/Cart/Cart';
import CartContextProvider from './Context/CartContext/CartContext.js';
import { CartContext } from './Context/CartContext/CartContext.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartContextProvider>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route path="/category/:categoryId">
              <ItemListContainer/>
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetailsContainer/>
            </Route>
            <Route exact path="/cart">
              <Cart/>
            </Route>
          </Switch>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
