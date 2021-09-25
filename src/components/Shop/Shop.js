import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { addToLocalStorage } from "../../utility/addToLocalStorage/addToLocalStorage";
import getCartFromLS from "../../utility/getCartFromLS/getCartFromLS";
import Cart from "../Cart/Cart";
import ShowProducts from "../ShowProducts/ShowProducts";
import "./Shop.css";

const Shop = (props) => {
  const [cartItem, setCartItem] = useState([]);

  const products = props.products;
  const searchItem = props.searchItem;
  console.log("search item", searchItem);
  useEffect(() => {
    if (products.length) {
      let cartArr = getCartFromLS(products);

      setCartItem(cartArr);
    }
  }, [products]);

  const addToCart = (pd) => {
    if (cartItem.some((p) => p.id == pd.id)) {
      let repPd = cartItem.find((p) => p.id == pd.id);
      repPd.quantity++;
      let ct = [...cartItem];
      setCartItem(ct);
      addToLocalStorage(pd.id);
    } else {
      pd.quantity = 1;
      let ct = [...cartItem, pd];
      setCartItem(ct);

      addToLocalStorage(pd.id);
    }
  };

  const clearCart = () => {
    let ct = [];
    setCartItem(ct);
    localStorage.removeItem("cart");
  };

  return (
    <div className="grid3">
      <ShowProducts
        addToCart={addToCart}
        products={products}
        searchItem={searchItem}
      ></ShowProducts>

      <Cart cartItem={cartItem} clearCart={clearCart}></Cart>
    </div>
  );
};

export default Shop;
