// État initial de l'application
const initialState = {
    cart: [],  // Le panier est initialement vide
    user: null, // Aucune information utilisateur par défaut
  };
  
  // Reducer du panier qui gère les actions liées au panier et à l'utilisateur
  const cartReducer = (state = initialState, action) => {
    // Selon le type d'action, nous mettons à jour l'état du panier ou de l'utilisateur
    switch (action.type) {
      // Action pour ajouter un produit au panier
      case 'ADD_TO_CART':
        // On cherche si le produit existe déjà dans le panier
        const existingProduct = state.cart.find(item => item.id === action.payload.id);
        
        // Si le produit existe déjà, on augmente sa quantité de 1
        if (existingProduct) {
          return {
            ...state,  // On copie l'état actuel
            cart: state.cart.map(item =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item  // On met à jour la quantité du produit existant
            ),
          };
        }
  
        // Si le produit n'est pas déjà dans le panier, on l'ajoute avec une quantité initiale de 1
        return { 
          ...state,  // On garde l'état actuel
          cart: [...state.cart, { ...action.payload, quantity: 1 }]  // On ajoute le nouveau produit avec une quantité de 1
        };
  
      // Action pour retirer un produit du panier
      case 'REMOVE_FROM_CART':
        return {
          ...state,  // On garde l'état actuel
          cart: state.cart.filter(item => item.id !== action.payload),  // On filtre le produit à supprimer en fonction de son ID
        };
  
      // Action pour définir un utilisateur (connexion, mise à jour du profil, etc.)
      case 'SET_USER':
        return { 
          ...state,  // On garde l'état actuel
          user: action.payload  // On met à jour l'utilisateur dans l'état avec les données reçues
        };
  
      // Si l'action n'est pas reconnue, on retourne l'état actuel sans modification
      default:
        return state;
    }
  };
  
  export default cartReducer;  // On exporte le reducer pour l'utiliser dans notre store Redux
  