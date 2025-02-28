import React, { useState, useEffect } from 'react';  // Importation de React et des hooks nécessaires (useState et useEffect)
import { Link } from 'react-router-dom';  // Importation du composant Link pour la navigation entre les pages
import Carousel from '../components/Carousel';  // Importation du composant Carousel pour l'affichage d'un carrousel de produits
import './HomePage.css';  // Importation du fichier CSS pour styliser la page d'accueil
import productsData from '../products.json';  // Importation des données des produits depuis le fichier JSON

const HomePage = () => {
  // Déclaration des états pour stocker les produits de chaque catégorie
  const [chipsProducts, setChipsProducts] = useState([]);  // Produits de chips
  const [chocolateProducts, setChocolateProducts] = useState([]);  // Produits de chocolat
  const [iceCreamProducts, setIceCreamProducts] = useState([]);  // Produits de glace

  // useEffect pour charger les produits de chaque catégorie lorsque le composant est monté
  useEffect(() => {
    // Charge les produits pour chaque catégorie depuis le fichier JSON
    setChipsProducts(productsData.chips);  // Remplir l'état chipsProducts avec les produits de chips
    setChocolateProducts(productsData.chocolates);  // Remplir l'état chocolateProducts avec les produits de chocolat
    setIceCreamProducts(productsData.iceCreams);  // Remplir l'état iceCreamProducts avec les produits de glace
  }, []);  // Le tableau vide [] signifie que cet effet est exécuté une seule fois après le premier rendu du composant

  return (
    <div className="home-page">  {/* Conteneur principal de la page d'accueil */}
      
      {/* ✅ Div pour structurer le titre de la section "Bonbons en vedette" */}
      <div className="title-container">
        <h2 className="section-title">Bonbons en vedette</h2>  {/* Titre principal de la section */}
      </div>

      {/* ✅ Carrousel des produits en vedette, espacé du titre pour une meilleure lisibilité */}
      <Carousel />  {/* Affichage du composant Carousel pour montrer les produits en vedette */}

      {/* Section des produits Chips */}
      <h3 className="category-title">Chips en vedette</h3>  {/* Titre pour la catégorie "Chips" */}
      <div className="carousel">  {/* Conteneur pour les produits chips */}
        {/* Affichage des produits chips avec un lien vers la page de détails de chaque produit */}
        {chipsProducts.map((product, index) => (
          <Link to={`/product/${encodeURIComponent(product.name)}`} key={index} className="product-container">
            {/* Affichage de l'image de chaque produit de chips */}
            <img src={product.image} alt={product.name} className="product-image" />
          </Link>
        ))}
      </div>

      {/* Section des produits Chocolats */}
      <h3 className="category-title">Chocolats en vedette</h3>  {/* Titre pour la catégorie "Chocolats" */}
      <div className="carousel">  {/* Conteneur pour les produits chocolats */}
        {/* Affichage des produits chocolats avec un lien vers la page de détails de chaque produit */}
        {chocolateProducts.map((product, index) => (
          <Link to={`/product/${encodeURIComponent(product.name)}`} key={index} className="product-container">
            {/* Affichage de l'image de chaque produit de chocolat */}
            <img src={product.image} alt={product.name} className="product-image" />
          </Link>
        ))}
      </div>

      {/* Section des produits Glaces */}
      <h3 className="category-title">Glaces en vedette</h3>  {/* Titre pour la catégorie "Glaces" */}
      <div className="carousel">  {/* Conteneur pour les produits glaces */}
        {/* Affichage des produits glaces avec un lien vers la page de détails de chaque produit */}
        {iceCreamProducts.map((product, index) => (
          <Link to={`/product/${encodeURIComponent(product.name)}`} key={index} className="product-container">
            {/* Affichage de l'image de chaque produit de glace */}
            <img src={product.image} alt={product.name} className="product-image" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;  // Exportation du composant pour l'utiliser dans d'autres parties de l'application
