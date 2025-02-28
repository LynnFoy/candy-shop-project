// src/context/UserContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Crée un contexte pour l'utilisateur
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("Guest"); // Le nom par défaut est "Guest"

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte de l'utilisateur
export const useUser = () => {
  return useContext(UserContext);
};
