// src/components/Navbar.jsx

import React from 'react'; // Importation de React
import { Link } from 'react-router-dom'; // Importation de Link pour la navigation entre les pages
import { useUser } from '../context/UserContext'; // ✅ Importation du hook personnalisé pour accéder au UserContext

const Navbar = () => {
  const { username } = useUser(); // ✅ Utilisation de 'username' à partir du contexte de l'utilisateur

  return (
    <nav className="navbar"> {/* Conteneur principal de la barre de navigation */}
      <div className="navbar-logo"> {/* Section du logo */}
        <h1>Candy Shop</h1> {/* Titre du site ou logo */}
      </div>
      <div className="navbar-links"> {/* Section contenant les liens de navigation */}
        {/* Liens pour naviguer entre les pages du site */}
        <Link to="/" className="navbar-link">Accueil</Link>
        <Link to="/category/chips" className="navbar-link">Chips</Link>
        <Link to="/category/chocolates" className="navbar-link">Chocolats</Link>
        <Link to="/category/icecream" className="navbar-link">Glaces</Link>
        <Link to="/cart" className="navbar-link">Panier</Link>
        
        {/* Lien pour la page de connexion. Affiche "Connexion" si l'utilisateur est un invité, sinon le nom de l'utilisateur */}
        <Link to="/login" className="navbar-link">
          {username === "Guest" ? "Connexion" : username} 
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; // Exportation du composant Navbar
