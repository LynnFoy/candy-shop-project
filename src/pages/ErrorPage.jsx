// src/pages/ErrorPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';  // Importation du CSS pour la page d'erreur

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h2>Page non trouvée</h2>
      <p>Désolé, cette page n'existe pas.</p>
      <Link to="/" className="back-home-btn">Retour à l'accueil</Link>
    </div>
  );
};

export default ErrorPage;
