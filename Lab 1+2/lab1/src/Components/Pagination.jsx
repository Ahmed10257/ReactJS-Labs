import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default class Pagination extends Component {
  state = {
    posts: [],
    min: 0,
    max: 10,
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }));
  }

  next = () => {
    this.setState((prevState) => {
      let newMin = prevState.min + 10;
      let newMax = prevState.max + 10;
      return {
        min: newMin,
        max: newMax,
      };
    });
  };

  prev = () => {
    this.setState((prevState) => {
      let newMin = prevState.min - 10;
      let newMax = prevState.max - 10;
      return {
        min: newMin,
        max: newMax,
      };
    });
  };

  render() {
    return (
      <div className="d-flex align-items-center flex-column mt-5">
        <h1 className="text-center">Pagination</h1>
        <div className="card-body d-flex justify-content-between col-8 flex-column">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts
                .filter(
                  (post) =>
                    post.id >= this.state.min && post.id <= this.state.max
                )
                .map((post) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-warning mx-2 fs-4"
              onClick={this.prev}
              disabled={this.state.min === 0}
            >
              Prev
            </button>
            <button
              className="btn btn-primary mx-2 fs-4"
              onClick={this.next}
              disabled={this.state.max >= this.state.posts.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
