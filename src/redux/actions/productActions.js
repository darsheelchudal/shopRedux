import { ActionTypes } from "../constants/product_types";
import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("/products");
  console.log(response);

  return {
    type: ActionTypes.FETCH_PRODUCTS,
    payload: response,
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
  k;
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
