// src/context/UserContext.jsx

import React, { createContext, useState, useContext } from 'react'; // Importation des hooks React nécessaires

// Crée un contexte pour l'utilisateur (UserContext)
const UserContext = createContext(); // Le contexte permettra de partager l'état de l'utilisateur

// Composant UserProvider qui va entourer les composants enfants pour leur fournir le contexte utilisateur
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("Guest"); // L'état pour stocker le nom d'utilisateur, initialisé à "Guest"

  return (
    <UserContext.Provider value={{ username, setUsername }}> {/* Fournit le contexte avec username et setUsername */}
      {children} {/* Les composants enfants peuvent maintenant accéder au contexte */}
    </UserContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte de l'utilisateur
export const useUser = () => {
  return useContext(UserContext); // Permet d'accéder facilement au contexte de l'utilisateur dans d'autres composants
};
