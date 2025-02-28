import { StrictMode } from 'react'; // Importation du mode strict de React pour aider à détecter des problèmes potentiels dans l'application
import { createRoot } from 'react-dom/client'; // Importation de la fonction createRoot pour gérer le rendu du DOM avec React 18+
import './index.css'; // Importation des styles CSS pour l'application
import App from './App.jsx'; // Importation du composant principal de l'application

// Rendu de l'application dans l'élément ayant l'ID 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Enveloppement du composant App dans StrictMode pour activer des vérifications supplémentaires en développement */}
    <App /> {/* Composant principal de l'application */}
  </StrictMode>,
);
