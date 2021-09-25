import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cartItem = props.cartItem;

  const clearCart = props.clearCart;
  let quantity = cartItem.reduce((acc, p) => acc + p.quantity, 0);
  let total = 0;

  for (let pd of cartItem) {
    total = total + pd.price * pd.quantity;
  }

  // let prices = cartItem.map((pd) => pd.price);
  // total = prices.reduce((sum, cr) => sum + cr, 0);

  // total = cartItem.reduce((sum, cr) => sum + cr.price, 0);
  let pPrice = total.toFixed(2);
  let vat = (pPrice * 0.2).toFixed(2);
  let dCharge = 0;
  if (cartItem.length !== 0) dCharge = 50;
  let totalPrice = (
    parseFloat(pPrice) +
    parseFloat(vat) +
    parseFloat(dCharge)
  ).toFixed(2);
  return (
    <div className="fixed">
      <h3>Total Products: {quantity}</h3>
      <h4>Unique Items: {cartItem.length}</h4>

      <h3>Product price: ${pPrice}</h3>
      <h3>Vat: ${vat}</h3>
      <h3>Delivery Charge: ${dCharge}</h3>
      <h3>Total Price: ${totalPrice}</h3>
      <button className="btn">Buy now</button>
      <button className="btn" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
