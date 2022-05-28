import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <div>
      <title>Nie ma takiej strony</title>
      <h1>Zgubiłeś się?</h1>
      <p>
        <br />
        <Link to="/contact">Zadzwoń</Link>.
      </p>
    </div>
  );
};

export default NotFoundPage;
