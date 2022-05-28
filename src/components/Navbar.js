import React from "react";
import { Link } from "gatsby";

function Navbar() {
  return (
    <nav>
      <Link className="nav-el-link" to="/">
        <h1>BrandName</h1>
      </Link>
      <ul className="nav-list">
        <li className="nav-el">
          <Link className="nav-el-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-el">
          <Link className="nav-el-link" to="/products">
            Products
          </Link>
        </li>
        <li className="nav-el">
          <Link className="nav-el-link" to="/pricing">
            Pricing
          </Link>
        </li>
        <li className="nav-el">
          <Link className="nav-el-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
