function getCartFromLS(products) {
  if (localStorage.cart === undefined) {
    return [];
  }
  let cartStr = localStorage.getItem("cart");
  let cartObj = JSON.parse(cartStr);
  let ct = [];
  for (let key in cartObj) {
    let cp = products.find((pd) => pd.id == key);
    cp.quantity = cartObj[key];
    ct.push(cp);
  }
  return ct;
}

export default getCartFromLS;
