import React from "react";

import productsList from "../productsAPI";

const ProductsTable = () => {
  return (
    <div className="products-ctn">
      {Object.values(productsList).map((products) => (
        <article className="product" key={products.id}>
          <div className={products.className + "-icon"}></div>
          <h3>{products.name}</h3>
          <p>{products.description}</p>
        </article>
      ))}
    </div>
  );
};

export default ProductsTable;
