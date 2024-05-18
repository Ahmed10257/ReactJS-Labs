import React, { Component } from "react";
import styles from "../Styles/Slider.module.css";

export default class Slider extends Component {
  state = {
    images: [
      "https://www.fullstacktechnology.com/wp-content/uploads/2021/09/ReactJS-career-1024x538.jpg",
      "https://cdn.acowebs.com/wp-content/uploads/2019/08/ReactJS.png",
      "https://media.licdn.com/dms/image/D4D12AQGKsIM51C_baQ/article-cover_image-shrink_720_1280/0/1675918704296?e=2147483647&v=beta&t=X4GoHg7kntE1eLtNYxGbysOA2Z3v1NLFzVK39WJlyJE",
    ],
    currentImage: "",
    index: 0,
  };

  componentDidMount() {
    this.setState({ currentImage: this.state.images[this.state.index] });
  }

  nextImage = () => {
    this.setState((prevState) => {
      clearInterval(this.interval);
      let newIndex = prevState.index + 1;
      if (newIndex > prevState.images.length - 1) {
        newIndex = 0;
      }
      return {
        index: newIndex,
        currentImage: prevState.images[newIndex],
      };
    });
  };

  prevImage = () => {
    this.setState((prevState) => {
      clearInterval(this.interval);
      let newIndex = prevState.index - 1;
      if (newIndex < 0) {
        newIndex = prevState.images.length - 1;
      }
      return {
        index: newIndex,
        currentImage: prevState.images[newIndex],
      };
    });
  };

  autoPlay = () => {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        let newIndex = prevState.index + 1;
        if (newIndex > prevState.images.length - 1) {
          newIndex = 0;
        }
        return {
          index: newIndex,
          currentImage: prevState.images[newIndex],
        };
      });
    }, 1000);
  };

  stopAutoPlay = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div className="d-flex align-items-center flex-column mt-5">
        <h1>Images Slider</h1>
        <div className="fixed-size-image">
          <img
            src={this.state.currentImage}
            className="img-fluid"
            alt=""
            style={{ width: "600px", height: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="d-flex justify-content-between w-50 m-5">
          <button
            className={`btn btn-success ${styles.button_width}`}
            onClick={this.autoPlay}
          >
            Play
          </button>
          <button
            className={`btn btn-warning ${styles.button_width}`}
            onClick={this.prevImage}
          >
            Previous
          </button>
          <button
            className={`btn btn-primary ${styles.button_width}`}
            onClick={this.nextImage}
          >
            Next
          </button>
          <button
            className={`btn btn-danger ${styles.button_width}`}
            onClick={this.stopAutoPlay}
          >
            Stop
          </button>
        </div>
      </div>
    );
  }
}
