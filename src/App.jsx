// src/App.jsx
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
import ErrorPage from './pages/ErrorPage';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext'; // ✅ Importer UserContext

import './App.css';

const App = () => {
  return (
    <CartProvider>
      <UserProvider> {/* Fournir le UserContext */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/chips" element={<ChipsPage />} />
            <Route path="/category/chocolats" element={<ChocolatePage />} />
            <Route path="/category/glaces" element={<IceCreamPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/product/:name" element={<ProductDetailsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </UserProvider>
    </CartProvider>
  );
};

export default App;
