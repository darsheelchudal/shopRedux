import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

import { fetchProducts } from "../redux/actions/productActions";

function ProductListing() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => console.log("Error", err));
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log("Products", products);

  return (
    <>
      <div className="ui grid container">
        <ProductComponent />
      </div>
    </>
  );
}

export default ProductListing;
