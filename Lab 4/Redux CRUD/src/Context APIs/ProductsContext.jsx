import React, { useMemo, useEffect } from "react";
import { createContext, useState } from "react";
import { useCallback } from "react";

const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from an API or any other source
    // and update the products state
    fetchData().then((data) => {
      setProducts(data);
    });
  }, []);

  const fetchData = async () => {
    // Implement your data fetching logic here
    // For example, you can use the fetch API
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();
    return data;
  };

  const getProductById = useCallback(
    (id) => {
      console.log("Getting product by id:", id);
      return products.find((product) => product.id === id);
    },
    [products]
  );

  const addProduct = useCallback(
    (product) => {
      setProducts([...products, product]);
    },
    [products]
  );

  const deleteProduct = useCallback(
    (id) => {
      let updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
    },
    [products]
  );

  const editProduct = useCallback(
    (id, updatedProduct) => {
      let updatedProducts = products.map((product) =>
        product.id === id ? updatedProduct : product
      );
      setProducts(updatedProducts);
    },
    [products]
  );

  let contextValue = useMemo(
    () => ({
      products,
      addProduct,
      deleteProduct,
      editProduct,
      getProductById,
    }),
    [products, addProduct, deleteProduct, editProduct, getProductById]
  );

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
