import { ActionTypes } from "../constants/product_types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Darsheel",
      category: "Programmer",
    },
  ],
};

console.log("Initial state in Product Reducer", initialState);

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("Reducer state:", state);
  console.log("Action type:", type);
  console.log("Action payload:", payload);

  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
