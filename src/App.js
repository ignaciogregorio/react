
import './scss/app.scss';
import { Navbar } from './components/navbar/NavBar';
import { Itemlistcontainer } from './components/itemlistcontainer/ItemListContainer';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
          <Itemlistcontainer greeting='By Order of the Peaky Blinders'/>

      </header>
    </div>
  );
}

export default App;
