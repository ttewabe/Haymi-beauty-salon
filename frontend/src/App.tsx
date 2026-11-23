import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/header';
import Footer from './component/Footer';
import Gallery from './sections/Gallery';
import Home from './sections/Home';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
