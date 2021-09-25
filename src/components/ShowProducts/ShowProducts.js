import React from "react";

import ProductCard from "../ProductCard/ProductCard";

import "./ShowProducts.css";

function ShowProducts(props) {
  const addToCart = props.addToCart;

  const searchItem = props.searchItem;
  console.log(searchItem);
  return (
    <div className="grid">
      {searchItem.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></ProductCard>
        );
      })}
    </div>
  );
}

export default ShowProducts;
