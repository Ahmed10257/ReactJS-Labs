import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: null,
    };
  }

  handleClick = (button) => {
    this.setState({ selectedButton: button });
    this.props.onClick(button);
  };

  render() {
    const { selectedButton } = this.state;

    return (
      <div className="d-flex align-items-center flex-column">
        <h1 className="text-center">React Tasks</h1>
        <div className="card-body d-flex justify-content-between col-8 mt-5">
          <button
            className={`btn btn-primary mx-2 w-25 fs-2 ${
              selectedButton === "Slider" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => this.handleClick("Slider")}
          >
            Slider
          </button>
          <button
            className={`btn btn-primary mx-2 w-25 fs-2 ${
              selectedButton === "Pagination" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => this.handleClick("Pagination")}
          >
            Pagination
          </button>
          <button
            className={`btn btn-primary mx-2 w-25 fs-2 ${
              selectedButton === "Search & Filter"
                ? "btn-primary"
                : "btn-secondary"
            }`}
            onClick={() => this.handleClick("Search & Filter")}
          >
            Search & Filter
          </button>
        </div>
      </div>
    );
  }
}
