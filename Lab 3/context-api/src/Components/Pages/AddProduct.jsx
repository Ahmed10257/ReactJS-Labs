import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductsContext from "../../Context APIs/ProductsContext";

export default function AddProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    images: [],
  });
  const { addProduct } = useContext(ProductsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(product);
    addProduct(product);
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Add New Product</h1>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Product Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            value={product.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            aria-describedby="emailHelp"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            aria-describedby="emailHelp"
            value={product.price}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
}
