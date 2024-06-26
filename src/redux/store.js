import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers"; // Adjust the import as necessary
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

export default store;
