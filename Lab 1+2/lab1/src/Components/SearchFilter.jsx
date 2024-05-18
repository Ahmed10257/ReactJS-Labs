import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import useFetch from "../useFetch";

export default function SearchFilter() {
  const [photos, setPhotos] = useState([]);

  useFetch("https://jsonplaceholder.typicode.com/photos").then((data) => {
    setPhotos(data);
  });
  return (
    <div>
      <h1>SearchFilter</h1>
      <div className="card-body">
        <div className="d-flex justify-content-between mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
          <button className="btn btn-primary">Search</button>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button className="btn btn-primary">Filter</button>
        </div>
        {photos.map((photo) => (
          <div className="col-md-4 gallery-item" key={photo.id}>
            <img src={photo.url} className="img-fluid" alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
