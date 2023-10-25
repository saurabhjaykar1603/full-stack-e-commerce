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
      <h1 className="fw-bold text-center my-4">Product Details</h1>
      {/* <h3 className="fw-bold text-center mt-3">Product ID :{id}</h3> */}
      {
        <div className="d-flex justify-content-center ">
          <div
            className="card shadow"
            style={{ width: "90rem", height: "32rem" }}
          >
            <div className=" d-flex justify-content-evenly align-items-center">
              <div style={{ borderRight: "2px solid tomato" }}>
                <img
                  src={product.productImage}
                  alt=""
                  className="d-block mx-auto"
                  style={{ height: " 500px" }}
                />
              </div>
              <div>
                <div className="card-body">
                  <h1>{product.name}</h1>
                  <h4 className="mt-4">Price: {product.price}</h4>
                  <h5 className="mt-4">Description: {product.description}</h5>
                  <h5 className="mt-4">
                    Brand :{" "}
                    <span style={{ color: "tomato" }}>{product.brand}</span>{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default ProductDetails;
