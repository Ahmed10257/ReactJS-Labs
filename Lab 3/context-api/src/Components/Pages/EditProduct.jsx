import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ProductsContext from "../../Context APIs/ProductsContext";

export default function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
  });
  const navigator = useNavigate();
  const { getProductById, editProduct } = useContext(ProductsContext);

  useEffect(() => {
    console.log(id);
    let product = getProductById(id);
    if (!product) {
      product = {
        title: "",
        description: "",
        price: "",
      };
    }
    setProduct(product);
  }, [id, getProductById]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct(id, product);
    navigator("/");
  };

  return (
    <div className="col-8 d-flex justify-content-center flex-column ms-5">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit} className="mt-5 d-flex flex-column">
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
            value={product.title || ""}
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
            value={product.description || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Product Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            aria-describedby="emailHelp"
            value={product.price || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-25">
          Update Product
        </button>
      </form>
    </div>
  );
}
