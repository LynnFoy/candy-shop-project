const initialState = {
    cart: [],
    user: null,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingProduct = state.cart.find(item => item.id === action.payload.id);
        if (existingProduct) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        }
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
        };
  
      case 'SET_USER':
        return { ...state, user: action.payload };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  