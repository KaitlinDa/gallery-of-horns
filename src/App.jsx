import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Gallery from './components/Gallery';
import SelectedBeast from './components/SelectedBeast';
import jsonData from './components/data.json';

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);

  const handleBeastSelect = (beast) => {
    setSelectedBeast(beast);
  };

  const handleClose = () => {
    setSelectedBeast(null);
  };

  return (
    <>
      <Header title="Gallery of Horns" />
      <Main />
      <Gallery data={jsonData} onBeastSelect={handleBeastSelect} />
      <SelectedBeast selectedBeast={selectedBeast} onClose={handleClose} />
      <Footer year="2023" />
    </>
  );
}

export default App;
