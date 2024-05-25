import React, { useMemo } from "react";
import { createContext, useState } from "react";
// import { useEffect } from "react";

const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  let [cart, setCart] = useState([]);
  // let { children } = props;

  let ContextValue = useMemo(
    () => ({
      cart,
      setCart,
    }),
    [cart, setCart]
  );
  // let ContextValue = { cart, setCart };

  // useEffect(() => {
  //   console.log("Cart updated:", cart);
  // }, [cart]);

  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
