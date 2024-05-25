import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Products() {
  const navigator = useNavigate();
  let products = useSelector((state) => state.product.products);
  let cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      fetch("http://localhost:4000/products")
        .then((res) => res.json())
        .then((products) => {
          dispatch({ type: "SET_PRODUCTS", payload: products });
        });
    }
  }, []);

  let deleteProduct = (id) => {
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  };

  const editProduct = (id) => {
    navigator(`/edit/${id}`);
  };

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
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
