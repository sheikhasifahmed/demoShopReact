import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./ProductCard.css";
import Rating from "react-rating";

const ProductCard = (props) => {
  let product = props.product;
  let { id, image, title, category, price, rating } = props.product;

  let star = <FontAwesomeIcon icon={faStar} />;
  let emptyStar = <FontAwesomeIcon className="empty" icon={faStar} />;

  const addToCart = props.addToCart;

  const handleDetail = (id) => {
    let str = localStorage.getItem("data");
    let data = JSON.parse(str);
    let item = data.find((i) => parseInt(i.id) === parseInt(id));
    console.log(item);
  };

  return (
    <div className="single">
      <div style={{ backgroundColor: "white" }}>
        <img className="image" src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <h4>Category: {category}</h4>
      <Rating
        readonly
        initialRating={rating.rate}
        emptySymbol={emptyStar}
        fullSymbol={star}
      />
      <h4>Rating: {rating.rate}</h4>
      <h3>Price: ${price}</h3>
      <div className="flex">
        <button className="btn" onClick={() => addToCart(product)}>
          Add to cart
        </button>
        <button className="btn" onClick={() => handleDetail(id)}>
          Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
