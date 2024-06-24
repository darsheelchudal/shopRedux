import { useState } from "react";
import Header from "./containers/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductComponent from "./containers/ProductComponent";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing />}></Route>
          <Route path="/product/:productId" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
