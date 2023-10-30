import "./slider.css";
import Rating from "../rating/Rating";
import { useState } from "react";
import { Link } from "react-router-dom";

const Slider = ({ products }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Handle Click
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((slideIndex) => slideIndex - 1);
    } else {
      setSlideIndex((slideIndex) => slideIndex + 1);
    }
  };

  return (
    <div className="slider-container">
      <button
        disabled={slideIndex === -products.length}
        onClick={() => handleClick("left")}
        className="bi bi-chevron-left arrow-left"
      ></button>
      <div
        style={{ transform: `translate(${slideIndex * -250}px)` }}
        className="slider-wrapper"
      >
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            className="slide"
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.title}
              className="slide-img"
            />
            <h3 className="slide-title">{product.title}</h3>
            <Rating rating={product.rating} reviews={product.reviews} />
            <div className="slide-price">${product.price}</div>
          </Link>
        ))}
      </div>
      <button
        disabled={slideIndex === 0}
        onClick={() => handleClick("right")}
        className="bi bi-chevron-right arrow-right"
      ></button>
    </div>
  );
};

export default Slider;
