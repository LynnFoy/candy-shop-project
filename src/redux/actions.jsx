// Action pour ajouter un produit au panier
export const addToCart = (product) => {
    // La fonction retourne un objet action avec un type et un payload
    return {
      type: 'ADD_TO_CART',  // Type d'action indiquant qu'on veut ajouter un produit au panier
      payload: product,  // Le produit que l'on veut ajouter (passé en paramètre)
    };
  };
  
  // Action pour retirer un produit du panier
  export const removeFromCart = (productId) => {
    // La fonction retourne un objet action avec un type et un payload
    return {
      type: 'REMOVE_FROM_CART',  // Type d'action indiquant qu'on veut retirer un produit du panier
      payload: productId,  // L'ID du produit à supprimer, passé en paramètre
    };
  };
  
  // Action pour définir un utilisateur (par exemple lors de la connexion)
  export const setUser = (user) => {
    // La fonction retourne un objet action avec un type et un payload
    return {
      type: 'SET_USER',  // Type d'action pour définir ou mettre à jour l'utilisateur
      payload: user,  // L'utilisateur que l'on veut définir (passé en paramètre)
    };
  };
  