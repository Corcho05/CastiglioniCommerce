import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './styles/globals.css';
import './styles/normalize.css';
import Main from './components/main/Main';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
