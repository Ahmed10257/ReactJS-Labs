import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand ms-3 fw-bold fs-3" to="/">
        Decor
      </Link>

      <div
        className="collapse navbar-collapse d-flex justify-content-around"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/" onClick={() => navigate("/")}>
              All Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/add"
              onClick={() => navigate("/add")}
            >
              Add New Product
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/cart"
              onClick={() => navigate("/cart")}
            >
              My Cart
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 d-flex justify-content-between">
          <input
            className="form-control mr-sm-2 me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
