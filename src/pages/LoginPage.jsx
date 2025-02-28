import React, { useState } from "react";  // Importation des hooks React nécessaires
import { useNavigate } from "react-router-dom";  // Importation du hook pour la navigation
import { useUser } from "../context/UserContext"; // ✅ Utilisation du hook personnalisé pour accéder au UserContext
import "./LoginPage.css";  // Importation du fichier CSS pour styliser la page de connexion

const LoginPage = () => {
  // Déclaration de l'état local pour gérer l'input du nom d'utilisateur
  const [inputName, setInputName] = useState("");  
  const { setUsername } = useUser();  // Accède à la fonction setUsername du contexte pour mettre à jour le nom de l'utilisateur
  const navigate = useNavigate();  // Permet la navigation entre les pages

  // Fonction pour gérer la connexion
  const handleLogin = (e) => {
    e.preventDefault();  // Empêche le comportement par défaut du formulaire (rechargement de la page)
    if (inputName.trim() !== "") {  // Vérifie que l'input n'est pas vide
      setUsername(inputName);  // Met à jour le nom de l'utilisateur dans le contexte
      navigate("/");  // Redirige vers la page d'accueil après la connexion
    }
  };

  return (
    <div className="login-container">
      {/* Titre de la page */}
      <h2 className="header">Connexion</h2>
      <div className="login-box">
        {/* Champ de texte pour entrer le nom d'utilisateur */}
        <input
          type="text"
          placeholder="Entrez votre nom"
          value={inputName}  // La valeur de l'input est liée à l'état inputName
          onChange={(e) => setInputName(e.target.value)}  // Met à jour l'état inputName chaque fois que l'utilisateur tape
        />
        {/* Bouton pour soumettre le formulaire de connexion */}
        <button type="submit" className="view-more-btn" onClick={handleLogin}>
          Se connecter
        </button>
      </div>
    </div>
  );
};

export default LoginPage;  // Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
