// Importation de la fonction createStore depuis Redux
import { createStore } from 'redux';

// Importation du reducer (fonction qui définit comment l'état change)
import cartReducer from './reducer';

// Création du store Redux en utilisant le reducer
const store = createStore(cartReducer);  // Le store va utiliser le reducer pour gérer l'état

// Exportation du store afin qu'il soit accessible dans toute l'application
export default store;
