import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import './styles/globals.css';
import './styles/normalize.css';

function App() {
  return (
    <>
      <Header />
      <ItemListContainer
        saludo='Buenos Días'
      />
      <Footer />
    </>
  );
}

export default App;
