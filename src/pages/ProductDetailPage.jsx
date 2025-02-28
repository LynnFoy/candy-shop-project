import React, { useState, useEffect } from 'react';  // Importation des hooks React nécessaires
import { useParams, useNavigate } from 'react-router-dom';  // Importation des hooks pour gérer les paramètres d'URL et la navigation
import productsData from '../products.json';  // Importation des données des produits depuis un fichier JSON
import { useCart } from '../context/CartContext'; // Importation du hook personnalisé pour accéder au panier
import './ProductDetailPage.css';  // Importation du fichier CSS pour le style de la page produit

const ProductDetailsPage = () => {
  const { name } = useParams();  // Récupère le nom du produit depuis les paramètres d'URL
  const [product, setProduct] = useState(null);  // Crée un état pour stocker le produit sélectionné
  const { addToCart } = useCart();  // Utilise la fonction d'ajout au panier depuis le contexte CartContext
  const navigate = useNavigate();  // Permet la navigation entre les pages

  // useEffect pour récupérer les informations du produit en fonction du nom dans l'URL
  useEffect(() => {
    // Recherche le produit dans les différentes catégories (chips, chocolats, glaces)
    const foundProduct = [
      ...productsData.chips,
      ...productsData.chocolates,
      ...productsData.iceCreams,
    ].find((product) => product.name === decodeURIComponent(name));  // Décodage du nom du produit dans l'URL

    setProduct(foundProduct);  // Mise à jour de l'état du produit avec les informations trouvées
  }, [name]);  // Ce useEffect se déclenche chaque fois que le nom du produit dans l'URL change

  // Fonction pour revenir à la page précédente
  const handleBackClick = () => {
    navigate(-1);  // Utilise la fonction navigate pour revenir à la page précédente
  };

  // Fonction pour ajouter un produit au panier
  const handleAddToCart = () => {
    if (product) {
      addToCart(product);  // Appelle la fonction pour ajouter le produit au panier
      console.log(`${product.name} ajouté au panier.`);  // Log pour confirmation
    }
  };

  // Si le produit n'a pas été trouvé, affiche un message d'erreur
  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className="product-details-page">
      {/* Bouton pour revenir à la page précédente */}
      <button className="back-button" onClick={handleBackClick}>
        Retour
      </button>
      <h2>{product.name}</h2>  {/* Affichage du nom du produit */}
      <div className="product-container">
        <img src={product.image} alt={product.name} className="product-image" />  {/* Affichage de l'image du produit */}
        <div className="product-info">
          <p><strong>Description :</strong> {product.description}</p>  {/* Description du produit */}
          <p><strong>Prix :</strong> {product.price} €</p>  {/* Prix du produit */}
          <p><strong>Origine :</strong> {product.origin}</p>  {/* Origine du produit */}
          <p><strong>Stock disponible :</strong> {product.stock}</p>  {/* Stock disponible du produit */}
          
          {/* Bouton pour ajouter le produit au panier */}
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;  // Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
