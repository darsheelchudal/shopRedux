import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";

function ProductListing() {
  const products = useSelector((state) => state);
  console.log(products);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("Error", err));
    console.log("Response", response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="ui grid container">
        <ProductComponent />
      </div>
    </>
  );
}

export default ProductListing;
