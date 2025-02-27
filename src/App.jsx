import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ChipsPage from './pages/ChipsPage';
import ChocolatePage from './pages/ChocolatePage';
import IceCreamPage from './pages/IceCreamPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import ProductDetailsPage from './pages/ProductDetailPage';
import ErrorPage from './pages/ErrorPage'; // Importation de la page d'erreur
import { CartProvider } from './context/CartContext'; // ✅ Importation du panier

import './App.css';

const App = () => {
  return (
    <CartProvider> {/* ✅ On englobe toute l'app */}
      <Router>
        <Navbar />
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/category/chips" element={<ChipsPage />} />
          <Route path="/category/chocolates" element={<ChocolatePage />} />
          <Route path="/category/icecream" element={<IceCreamPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:name" element={<ProductDetailsPage />} />
          
          {/* Route par défaut pour les pages d'erreur */}
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
