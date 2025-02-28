import React, { useEffect, useState } from 'react'; // Importation des hooks React
import { Link } from 'react-router-dom'; // Importation de Link pour la navigation
import productsData from '../products.json'; // Importer les produits depuis le fichier JSON
import './ChipsPage.css'; // Importation des styles CSS pour la page des chips

const ChipsPage = () => {
  const [chipsProducts, setChipsProducts] = useState([]); // État pour stocker les produits de chips

  useEffect(() => {
    setChipsProducts(productsData.chips); // Charger les produits de chips depuis le fichier JSON au montage du composant
  }, []); // Le tableau vide [] assure que l'effet ne se lance qu'une seule fois au démarrage

  return (
    <div className="chips-page"> {/* Conteneur principal de la page des chips */}
      <h2 className="section-title">Chips</h2> {/* Titre de la section */}
      <div className="carousel"> {/* Conteneur pour le carrousel des produits */}
        {chipsProducts.map((product, index) => ( // Parcourir les produits de chips
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

export default ChipsPage; // Exportation du composant ChipsPage
