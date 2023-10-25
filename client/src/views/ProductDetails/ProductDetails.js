import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Assuming you are using React Router
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const loadStudent = async () => {
    const response = await axios.get(`/product/${id}`);
    setProduct(response?.data?.data);
  };

  useEffect(() => {
    loadStudent();
  }, []);

  return (
    <div>
      <h1 className="fw-bold text-center">Product Details</h1>
      <h3 className="fw-bold text-center">Product ID :{id}</h3>
      {
        <div className="d-flex justify-content-center mt-5">
          <div className="card shadow" style={{ width: "90rem" }}>
            <div className=" d-flex justify-content-evenly align-items-center">
              <div>
                <img
                  src={product.productImage}
                  alt=""
                  className="d-block mx-auto"
                  style={{ height: " 700px"}}
                />
              </div>
              <div>
                <h2>{product.name}</h2>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                <p>Brand{product.brand}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default ProductDetails;
