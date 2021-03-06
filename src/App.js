
import './scss/app.scss';
import { Navbar } from './components/navbar/NavBar';
import { Itemlistcontainer } from './components/itemlistcontainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Itemlist } from './components/itemList/ItemList';
import { CartProvider } from "./context/CartContext";
import { Cart } from './components/cart/Cart';
import { Checkout } from './components/checkOut/Checkout';
import { Footer } from './components/footer/Footer';

function App() {

  return (
    <CartProvider>
            <BrowserRouter>
                <div className="App">
                      <Navbar />
                  <Switch>
                      <Route exact path='/cart'>
                        <Cart/>
                      </Route>
                      <Route exact path='/checkout'>
                        <Checkout/>
                      </Route>
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
                    <Footer/>
                </div>
            </BrowserRouter>
      </CartProvider>


  );
}

export default App;

