import { ActionTypes } from "../constants/product_types";

const initialState = {
  product: [
    {
      id: 1,
      name: "Darsheel",
      category: "Programmer",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
