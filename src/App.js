import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar/NavBar.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import ItemDetailsContainer from './Components/ItemDetailsContainer/ItemDetailsContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
