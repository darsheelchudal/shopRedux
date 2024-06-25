import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchSingleProduct = () => {
    const response = axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Error", err));
    dispatch(selectedProduct(response));
    console.log("Response", response);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [dispatch]);

  return (
    <>
      <div>ProductDetail</div>
    </>
  );
}

export default ProductDetail;
