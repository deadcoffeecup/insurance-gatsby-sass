import React from "react";

import Layout from "../components/Layout";

const pricing = () => {
  return (
    <Layout>
      <title>Pricing - Insurance</title>
      <section className="section pricing-section">
        <h2>Pricing</h2>
        <span>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </span>
        <div className="pricing-articles-ctn">
          <article className="pricing-article">
            <h3 className="pricing-article-title">FREE</h3>
            <h4 className="pricing-article-subtitle">
              Organize across all apps by hand
            </h4>
            <p className="pricing-article-price"></p>
            <button className="pricing-article-try-button">Try for free</button>
            <ul className="pricing-article-features-list">
              <li className="feature-list-el">Unlimited products updates</li>
              <li className="feature-list-el">Unlimited products updates</li>
              <li className="feature-list-el">Unlimited products updates</li>
              <li className="feature-list-el">Unlimited products updates</li>
              <li className="feature-list-el">Unlimited products updates</li>
            </ul>
          </article>
          <article className="pricing-article">
            <h3 className="pricing-article-title">Silver</h3>
            <h4 className="pricing-article-subtitle">
              Organize across all apps by hand
            </h4>
            <p className="pricing-article-price"></p>
            <button className="pricing-article-try-button">Try for free</button>
            <ul className="pricing-article-features-list">
              <li className="feature-list-el">Unlimited products updates</li>
              <li className="feature-list-el">Unlimited products updates</li>
              <li className="feature-list-el">Unlimited products updates</li>
              <li className="feature-list-el">Unlimited products updates</li>
              <li className="feature-list-el">Unlimited products updates</li>
            </ul>
          </article>
          <article className="pricing-article">
            <h3 className="pricing-article-title">Gold</h3>
            <h4 className="pricing-article-subtitle">
              Organize across all apps by hand
            </h4>
            <p className="pricing-article-price"></p>
            <button className="pricing-article-try-button">Try for free</button>
            <ul className="pricing-article-features-list">
              <li className="feature-list-el">Unlimited products updates</li>
              <li className="feature-list-el">Unlimited products updates</li>
              <li className="feature-list-el">Unlimited products updates</li>
              <li className="feature-list-el">Unlimited products updates</li>
              <li className="feature-list-el">Unlimited products updates</li>
            </ul>
          </article>
        </div>
      </section>
    </Layout>
  );
};
export default pricing;
