
import React from 'react';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <FeaturedProducts />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
};

export default App;
