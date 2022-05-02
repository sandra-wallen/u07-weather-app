import { useState } from 'react';

import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  const [unit, setUnit] = useState("metric");

  const handleOnChange = (val) => {
    setUnit(val);
  }

  return (
    <>
      <Header unit={unit} handleOnChange={handleOnChange} />
      <Main unit={unit} />
      <Footer />
    </>
  );
}

export default App;
