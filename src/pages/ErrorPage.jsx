import React from 'react'; // Importation de React pour pouvoir créer le composant
import { Link } from 'react-router-dom'; // Importation de Link pour la navigation entre les pages
import './ErrorPage.css';  // Importation du CSS pour la page d'erreur

const ErrorPage = () => {
  return (
    <div className="error-page"> {/* Conteneur principal de la page d'erreur */}
      <h2>Page non trouvée</h2> {/* Titre de la page d'erreur */}
      <p>Désolé, cette page n'existe pas.</p> {/* Message d'erreur indiquant que la page n'existe pas */}
      {/* Lien pour revenir à la page d'accueil */}
      <Link to="/" className="back-home-btn">Retour à l'accueil</Link>
    </div>
  );
};

export default ErrorPage; // Exportation du composant ErrorPage
