import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));

    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    }).catch((err)=>{
      console.log("error while fecthing data : ",err)
    });
  }, []);
  return (
    <div className="products-container">
      <h2 className="title">Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <h3 className="product-item">{product.title}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-rating">
              {product.rating.rate}⭐ - {product.rating.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
