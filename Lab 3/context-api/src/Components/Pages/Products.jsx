import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../Context APIs/CartContext";
import ProductsContext from "../../Context APIs/ProductsContext";

export default function Products() {
  const { cart, setCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(cart);
  const navigator = useNavigate();
  const { products, setProducts, deleteProduct } = useContext(ProductsContext);

  const editProduct = (id) => {
    navigator(`/edit/${id}`);
  };

  const addToCart = (product) => {
    let newCart = [...cart];
    if (newCart.find((item) => item.id === product.id)) {
      newCart = newCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    setCart(newCart);
    setCartItems(newCart);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">All Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 " key={product.id}>
            <div className="card mt-3 ">
              <img
                src={
                  product.images[0]
                    ? product.images[0]
                    : "https://via.placeholder.com/300"
                }
                className="card-img-top"
                alt={product.title}
                height={300}
                width={300}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <small className="text-muted fs-3">${product.price}</small>
                </p>
                <div className="d-flex justify-content-around">
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => editProduct(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
