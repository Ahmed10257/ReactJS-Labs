import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import useFetch from "../useFetch";

export default function SearchFilter() {
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  const {
    data: FetchedAlbums,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/albums");

  useEffect(() => {
    console.log("Use Effect has been triggered");

    if (FetchedAlbums) {
      setAlbums(FetchedAlbums);
      setFilteredAlbums(FetchedAlbums);
    }
  }, [FetchedAlbums]);

  const handleSearch = (e) => {
    const filteredAlbums = albums.filter((album) => album.title.includes(e));
    setFilteredAlbums(filteredAlbums);
  };

  const handleFilter = (e) => {
    const filteredAlbums = albums.filter((album) => album.userId === Number(e));
    setFilteredAlbums(filteredAlbums);
  };

  const handleReset = () => {
    setFilteredAlbums(albums);
  };
  return (
    <div>
      <h1>SearchFilter</h1>
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="d-flex flex-row justify-content-center">
          <div className="d-flex justify-content-center flex-column col-8">
            <div className="d-flex justify-content-between mt-2">
              <input
                type="text"
                className="form-control w-75 me-2"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                onChange={(e) => handleSearch(e.target.value)}
              />
              <button className="btn btn-primary w-25">Search</button>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <select
                className="form-select w-75 me-2"
                aria-label="Default select example"
                onChange={(e) => handleFilter(e.target.value)}
              >
                <option selected>Open this select menu</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <button className="btn btn-primary w-25">Filter</button>
            </div>
          </div>
          <button
            className="btn btn-warning ms-2 mt-2"
            onClick={() => handleReset()}
          >
            Reset
          </button>
        </div>

        <div className="d-flex flex-wrap justify-content-center">
          {filteredAlbums.map((album) => (
            <div
              class="card col-3 m-2"
              key={album.id}
              style={{ width: "18rem" }}
            >
              <div class="card-body">
                <h4 class="card-title">User ID: {album.userId}</h4>
                <p class="card-text text-start">{album.title}</p>
                <p class="card-text text-start">Album ID: {album.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
