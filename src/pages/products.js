import React from "react";

import Layout from "../components/Layout";
import ProductsTable from "../components/ProductsTable";

const ProductsPage = () => {
  return (
    <Layout>
      <title>Ofera - Ubezpieczenia</title>
      <div className="section products-section">
        <ProductsTable />
      </div>
    </Layout>
  );
};
export default ProductsPage;
