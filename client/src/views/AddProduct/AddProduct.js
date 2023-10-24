import React, { useState } from "react";
import axios from "axios";
import showToast from "crunchy-toast";
function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [brand, setBrand] = useState("");

  const addProduct = async () => {
    if (!name || !description || !productImage || !price || !brand) {
      showToast("Please enter all feilds", "warning");
    }
    const product = {
      name: name,
      description: description,
      price: price,
      brand: brand,
      productImage: productImage,
    };
    const response = await axios.post("/products", product);

    showToast(response.data.message);
  };
  return (
    <div>
      <h1 className="text-center">Add Products</h1>

      <div
        className="container w-50  rounded shadow h-100  mt-5 py-5"
        style={{ border: "1px solid red" }}
      >
        <form action="">
          <div className="container ">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="container mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="container mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="container mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Image Url"
              value={productImage}
              onChange={(e) => {
                setProductImage(e.target.value);
              }}
            />
          </div>
          <div className="container mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Brand"
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            />
          </div>

          <div className="container mt-4 text-center">
            <button
              className="btn btn-warning fs-5 px-5 shadow"
              type="button"
              onClick={addProduct}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
