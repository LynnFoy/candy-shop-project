import React, { useEffect, useState } from 'react';  // Importation de React et des hooks nécessaires (useEffect et useState)
import { Link } from 'react-router-dom';  // Importation du composant Link pour la navigation entre les pages
import productsData from '../products.json'; // Importation des données des produits depuis le fichier JSON
import './IceCreamPage.css';  // Importation du fichier CSS pour styliser la page des glaces

const IceCreamPage = () => {
  // Déclaration de l'état local pour stocker les produits de glaces
  const [iceCreamProducts, setIceCreamProducts] = useState([]);

  // useEffect pour charger les produits de glace lorsque le composant est monté
  useEffect(() => {
    setIceCreamProducts(productsData.iceCreams); // Charge les produits de glaces depuis le fichier JSON
  }, []);  // Le tableau vide [] signifie que cet effet s'exécute une seule fois après le premier rendu du composant

  return (
    <div className="ice-cream-page">
      {/* Titre de la section Glaces */}
      <h2 className="section-title">Glaces</h2>
      <div className="carousel">
        {/* Parcours des produits de glace et affichage de chaque produit */}
        {iceCreamProducts.map((product, index) => (
          <div key={index} className="product">
            {/* Affichage de l'image du produit */}
            <img src={product.image} alt={product.name} />
            {/* Affichage du nom du produit */}
            <p>{product.name}</p>
            {/* Affichage du prix du produit */}
            <p>{product.price}€</p>
            {/* Affichage de la description du produit */}
            <p>{product.description}</p>
            {/* Lien vers la page de détails du produit */}
            <Link to={`/product/${encodeURIComponent(product.name)}`} className="product-detail-link">
              Voir détails
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IceCreamPage;  // Exportation du composant pour l'utiliser dans d'autres parties de l'application
