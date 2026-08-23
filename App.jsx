import React, { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // landing | products | cart

  const goHome = () => setCurrentPage('landing');
  const goToProducts = () => setCurrentPage('products');
  const goToCart = () => setCurrentPage('cart');

  if (currentPage === 'products') {
    return <ProductList onHomeClick={goHome} onCartClick={goToCart} />;
  }

  if (currentPage === 'cart') {
    return <CartItem onHomeClick={goHome} onContinueShopping={goToProducts} />;
  }

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-subtitle">
          Where Green Meets Serenity — bring nature home with our
          hand-picked collection of houseplants.
        </p>
        <button className="get-started-btn" onClick={goToProducts}>
          Get Started
        </button>
        <AboutUs />
      </div>
    </div>
  );
}

export default App;

export default App;
