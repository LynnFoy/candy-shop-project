import React, { useState, useEffect } from 'react'; // Importation de React et des hooks nécessaires (useState et useEffect)
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importation des icônes de flèches gauche et droite de React Icons
import './Carousel.css'; // Importation des styles CSS pour le carrousel

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // État pour suivre l'index de l'image actuellement affichée

  // Liste des images à afficher dans le carrousel
  const images = [
    "/images/candy1.png", // Première image
    "/images/candy2.png", // Deuxième image
    "/images/candy3.png"  // Troisième image
  ];

  // useEffect pour changer l'image toutes les 3 secondes
  useEffect(() => {
    // Définit un intervalle pour faire défiler les images
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Change l'index de l'image de manière circulaire
    }, 3000); // Intervalle de 3000ms (3 secondes)

    return () => clearInterval(intervalId); // Nettoyage de l'intervalle lors du démontage du composant
  }, [images.length]); // Dépendance sur la longueur des images pour éviter un recalcul inutile

  // Fonction pour passer à l'image suivante
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Change l'index de manière circulaire
  };

  // Fonction pour revenir à l'image précédente
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length // Change l'index de manière circulaire dans l'autre sens
    );
  };

  return (
    <div className="carousel-container"> {/* Conteneur principal du carrousel */}
      <button className="prev-btn" onClick={handlePrev}> {/* Bouton pour l'image précédente */}
        <FaChevronLeft /> {/* Icône flèche gauche */}
      </button>
      <div className="carousel-slide"> {/* Conteneur de l'image active */}
        <img src={images[currentIndex]} alt="slide" className="carousel-image" /> {/* Affichage de l'image actuelle */}
      </div>
      <button className="next-btn" onClick={handleNext}> {/* Bouton pour l'image suivante */}
        <FaChevronRight /> {/* Icône flèche droite */}
      </button>
    </div>
  );
};

export default Carousel; // Exportation du composant Carousel
