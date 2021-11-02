
import './scss/app.scss';
/* import { BrowserRouter, Switch, Route } from "react-router-dom"; */
import { Navbar } from './components/navBar/NavBar';

import { Itemlistcontainer } from './components/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';

function App() {

  return (

          <div className="App">
            <header className="App-header">
              <Navbar />
            </header>
              <Itemlistcontainer greeting='By Order of the Peaky Winers'/>

              <ItemDetailContainer/>
          </div>
  );
}

export default App;

