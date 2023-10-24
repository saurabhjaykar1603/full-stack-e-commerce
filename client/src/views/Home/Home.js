import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const response = await axios.get("/products");
    setProducts(response?.data?.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <>
      <h1 className="text-center">Home Page</h1>

      <div className="d-flex justify-content-evenly flex-wrap">
        {products?.map((product, i) => {
          const { name, description, productImage, brand, price } = product;
          return (
            <div key={i} className="card shadow" style={{ width: "18rem", border: "1px solid tomato" }}>
              <div className="card-body text-center">
                <img
                  src={productImage}
                  alt=""
                  className="mx-auto d-block m-0"
                  style={{ height: "200px" }}
                />
                <p className="fw-bold m-0 fs-5"> {name}</p>
                <p className="text-success m-0 mt-2"> {description} </p>
                <p className="m-0 mt-2">Price : {price}/ rs</p>
                <p className="m-0 mt-2">{brand}</p>
                <div className="container mt-2 bg-warning py-1 w-75  rounded">
                  <a
                    href="/product/:${_id}"
                    className="m-0 mt-1 text-dark"
                    target="_blank"
                  >
                    View details
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
