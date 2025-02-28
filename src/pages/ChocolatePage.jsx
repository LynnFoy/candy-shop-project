import React, { useEffect, useState } from 'react'; // Importation des hooks React nécessaires
import { Link } from 'react-router-dom'; // Importation de Link pour la navigation
import productsData from '../products.json'; // Importer les produits depuis le fichier JSON
import './ChocolatePage.css'; // Importation des styles CSS pour la page des chocolats

const ChocolatsPage = () => {
  const [chocolateProducts, setChocolateProducts] = useState([]); // État pour stocker les produits de chocolat

  useEffect(() => {
    setChocolateProducts(productsData.chocolates); // Charger les produits de chocolat depuis le fichier JSON au montage du composant
  }, []); // Le tableau vide [] assure que l'effet ne se lance qu'une seule fois au démarrage

  return (
    <div className="chocolats-page"> {/* Conteneur principal de la page des chocolats */}
      <h2 className="section-title">Chocolats</h2> {/* Titre de la section */}
      <div className="carousel"> {/* Conteneur pour le carrousel des produits */}
        {chocolateProducts.map((product, index) => ( // Parcourir les produits de chocolat
          <div key={index} className="product"> {/* Conteneur pour chaque produit */}
            <img src={product.image} alt={product.name} /> {/* Affichage de l'image du produit */}
            <p>{product.name}</p> {/* Affichage du nom du produit */}
            <p>{product.price}€</p> {/* Affichage du prix du produit */}
            <p>{product.description}</p> {/* Affichage de la description du produit */}
            {/* Lien pour voir plus de détails sur le produit */}
            <Link to={`/product/${encodeURIComponent(product.name)}`} className="product-detail-link">
              Voir détails
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChocolatsPage; // Exportation du composant ChocolatsPage
