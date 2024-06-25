import { ActionTypes } from "../constants/product_types";

const initialState = {
  products: [],
};

console.log("Initial state in Product Reducer", initialState);

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
