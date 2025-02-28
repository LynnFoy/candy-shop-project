import React from 'react'; // Importation de React
import { useSelector } from 'react-redux'; // Importation du hook useSelector pour accéder au state global avec Redux

const Header = () => {
  // Récupération de l'utilisateur depuis le state global via Redux
  const user = useSelector(state => state.user);

  return (
    <header> {/* Conteneur principal de l'en-tête */}
      <h1>Candy Shop</h1> {/* Titre du site */}
      <div>{user}</div> {/* Affichage du nom de l'utilisateur récupéré depuis le Redux store */}
    </header>
  );
};

export default Header; // Exportation du composant Header
