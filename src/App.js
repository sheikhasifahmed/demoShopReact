import { useEffect, useState } from "react/cjs/react.development";
import "./App.css";

import Shop from "./components/Shop/Shop";

function App() {
  const search = { marginTop: "20px" };
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSearchItem(data);
        let str = JSON.stringify(data);
        localStorage.setItem("data", str);
      })
      .catch((err) => console.log(err));
  }, []);

  const showItems = (e) => {
    let sInp = e.target.value.toLowerCase();
    console.log(sInp);
    let items = products.filter((pd) => pd.title.toLowerCase().includes(sInp));
    setSearchItem(items);
  };

  return (
    <div className="App">
      <div style={search}>
        <input
          className="inp"
          type="text"
          onChange={showItems}
          placeholder="search for products"
        />
        <button className="btn">search</button>
      </div>
      <Shop products={products} searchItem={searchItem}></Shop>
    </div>
  );
}

export default App;
