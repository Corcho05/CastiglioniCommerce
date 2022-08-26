import React from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './styles/globals.css';
import './styles/normalize.css';
import Main from './components/main/Main';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>

  );
}

export default App;
