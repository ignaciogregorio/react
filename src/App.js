
import './scss/app.scss';
import { Navbar } from './components/navBar/NavBar';
import { Itemlistcontainer } from './components/itemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Itemlistcontainer greeting='By Order of the Peaky Winers'/>

      </header>
    </div>
  );
}

export default App;

