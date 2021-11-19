
import './scss/app.scss';
import { Navbar } from './components/navBar/NavBar';
import { Itemlistcontainer } from './components/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Itemlist } from './components/itemList/ItemList';
import { CartProvider } from "./context/CartContext";
import { Cart } from './components/cart/Cart';

function App() {

  return (
    <CartProvider>
            <BrowserRouter>
                <div className="App">
                      <Navbar />
                  <Switch>
                      <Route exact path='/' component={Itemlistcontainer}>
                        <Itemlistcontainer/>
                      </Route>
                      <Route path='/item/:itemid'>
                        <ItemDetailContainer/>
                      </Route>
                      <Route path="/:categoryid">
                        <Itemlist/>
                      </Route>
                  </Switch>
                      <Route exact path='/cart'>
                        <Cart/>
                      </Route>
                </div>
            </BrowserRouter>
      </CartProvider>


  );
}

export default App;

