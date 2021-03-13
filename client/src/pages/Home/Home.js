import React, { useState, useEffect, useContext } from "react";
import DisplayUser from "../../components/DisplayUser/DisplayUser";

//components of content:
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";

const Home = () => {
  const [color] = useState("red");
  const [secondsLeft, setSecondsLeft] = useState(65);
  const [salesProductsIds] = useState([1, 3, 5, 6]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [isSale, setSale] = useState("true");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [searchKeyword, setSearch] = useState("");
  const [numProducts, setNumProds] = useState("");

  // fetching from my server on localhost at 192.168.43.81 on port 8000:
  /*useEffect(() => {
    fetch("http://192.168.43.81:8000/products.json")
      .then((result) => result.json())
      .then((data) => {
        setProducts(data);
      });
    console.log("fetched ");
  }, []);
  */
  /* mongoose:
 fetch("http://10.0.0.193:8000/products")
 */

  useEffect(() => {
    fetch("/api/products")
      .then((result) => result.json())
      .then((data) => {
        setProducts(data);
      });
    console.log("fetched ");
    setNumProds(products.length);
  }, [products.length]);

  return (
    <div>
      <div>Num products in shop: {numProducts}</div>
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        secondsLeft={secondsLeft}
        setSecondsLeft={setSecondsLeft}
        products={products}
        setProducts={setProducts}
        isSale={isSale}
        setSale={setSale}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        searchKeyword={searchKeyword}
        setSearch={setSearch}
      ></Header>
      <Products
        color={color}
        secondsLeft={secondsLeft}
        salesProductsIds={salesProductsIds}
        selectedCategory={selectedCategory}
        products={products}
        isSale={isSale}
        priceRange={priceRange}
      ></Products>
    </div>
  );
};

export default Home;

/*
 */
