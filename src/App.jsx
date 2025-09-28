import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Problems from './components/Problems';
import Solution from './components/Solution';
import ProductGallery from './components/ProductGallery';
import OrderForm from './components/OrderForm';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Problems />
      <Solution />
      <ProductGallery />
      <OrderForm />
      <Certificates />
    </div>
  );
}

export default App;
