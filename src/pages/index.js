import { Link } from "gatsby";
import * as React from "react";

import Layout from "../components/Layout";
import "../scss/main.scss";

const IndexPage = () => (
  <div>
    <title>Insurance</title>
    <Layout>
      <section className="section home-section">
        <div className="section-ctn">
          <h1>We ensure a best Insurance service</h1>
          <h2>
            We know how large objects will act, but things on a small scale
          </h2>
          <Link to="/products" className="home-button-find">
            Learn More
          </Link>
        </div>
      </section>
    </Layout>
  </div>
);

export default IndexPage;
