function addToLocalStorage(id) {
  if (localStorage.cart) {
    let cartStr = localStorage.getItem("cart");
    let cartObj = JSON.parse(cartStr);
    if (cartObj[id]) {
      cartObj[id]++;
    } else {
      cartObj[id] = 1;
    }
    cartStr = JSON.stringify(cartObj);
    localStorage.setItem("cart", cartStr);
  } else {
    let cartObj = {};
    cartObj[id] = 1;
    let cartStr = JSON.stringify(cartObj);
    localStorage.setItem("cart", cartStr);
  }
}

export { addToLocalStorage };
