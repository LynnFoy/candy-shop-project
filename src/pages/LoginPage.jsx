// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // ✅ Utiliser le hook personnalisé pour accéder à UserContext
import "./LoginPage.css";

const LoginPage = () => {
  const [inputName, setInputName] = useState("");
  const { setUsername } = useUser(); // ✅ Utiliser setUsername du contexte
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputName.trim() !== "") {
      setUsername(inputName); // Mettre à jour le nom de l'utilisateur dans le contexte
      navigate("/"); // Redirige vers la page d'accueil après la connexion
    }
  };

  return (
    <div className="login-container">
      <h2 className="header">Connexion</h2>
      <div className="login-box">
        <input
          type="text"
          placeholder="Entrez votre nom"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button type="submit" className="view-more-btn" onClick={handleLogin}>
          Se connecter
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
