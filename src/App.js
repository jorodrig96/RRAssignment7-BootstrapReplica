import './App.css';
import ImageInfo from './components/ImageInfo';
import NavBarLink from './components/NavBarLink';
import NavBar from './components/NavBarLink';
import StoreItems from './components/StoreItems';

function App() {
  return (
    <div className="App">
      <NavBarLink />
      <ImageInfo/>
      <StoreItems />
    </div>
  );
}

export default App;
