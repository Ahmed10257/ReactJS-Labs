const INITIAL_STATE = {
  cart: [],
  total: 0,
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      let existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
          total: state.total + action.payload.price,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.price,
        };
      }
    case "REMOVE_FROM_CART":
      let product = state.cart.find((product) => product.id === action.payload);
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
        total: state.total - product.price * product.quantity,
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
        total:
          state.total +
          state.cart.find((product) => product.id === action.payload).price,
      };
    case "DECREMENT_QUANTITY":
      let productToDecrement = state.cart.find(
        (product) => product.id === action.payload
      );
      if (productToDecrement.quantity > 1) {
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
          total: state.total - productToDecrement.price,
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((product) => product.id !== action.payload),
          total: state.total - productToDecrement.price,
        };
      }
    default:
      return state;
  }
}
