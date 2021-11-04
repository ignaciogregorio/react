
import './scss/app.scss';
import { Navbar } from './components/navBar/NavBar';
import { Itemlistcontainer } from './components/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  return (

            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                      <Navbar />
                    </header>
                  <Switch>
                      <Route exact path='/' component={Itemlistcontainer}>
                        <Itemlistcontainer greeting='By Order of the Peaky Winers'/>
                      </Route>
                      <Route path='/item/:id'>
                        <ItemDetailContainer/>
                      </Route>
                  </Switch>
                </div>
            </BrowserRouter>
  );
}

export default App;

