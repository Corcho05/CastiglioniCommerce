import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ItemListContainer from './components/main/ItemListContainer';
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
