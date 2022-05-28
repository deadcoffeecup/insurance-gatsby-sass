import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

const Logo = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Link to="/">
      <Img fixed={data.image.childImageSharp.fixed} />
    </Link>
  );
};
export default Logo;
