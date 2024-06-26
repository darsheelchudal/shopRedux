import { ActionTypes } from "../constants/product_types";
import fakeStoreApi from "../../apis/fakeStoreApi";

// Thunk action for fetching products
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fakeStoreApi.get("/products");
      dispatch({
        type: ActionTypes.FETCH_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      // Handle errors if needed
      console.error("Error fetching products:", error);
    }
  };
};

// Thunk action for fetching products

export const fetchProductDetail = (id) => {
  return async (dispatch) => {
    try { 
      const response = await fakeStoreApi.get(`/products/${id}`);
      dispatch({
        type: ActionTypes.FETCH_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      // Handle errors if needed
      console.error("Error fetching products:", error);
    }
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
