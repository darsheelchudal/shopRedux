import React from "react";
import { useSelector } from "react-redux";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const { id, title, category } = products[0];
  console.log(products);
  console.log(title);

  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">Title : {title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
