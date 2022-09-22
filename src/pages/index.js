import * as React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const HomePage = ({ data }) => {
  const {
    allArtworkSlide: { nodes: slides },
  } = data;

  return (
    <>
      <head>
        <title>Kevin C Maginnis | Home</title>
      </head>
      <h1>Kevin C Maginnis</h1>
      <ul>
        <li>Artwork</li>
        <li>Bio</li>
        <li>Contact</li>
        <li>CV</li>
      </ul>
      <div>Artwork slides here</div>

      {slides.map((slide) => {
        const { title, year, artForm, caption, imageFile } = slide;
        return (
          <>
            <ul>
              <li>{title}</li>
              <li>{year}</li>
              <li>{artForm}</li>
              <li>{caption}</li>
              <li>
                {imageFile && <Img fluid={imageFile.childImageSharp.fluid} />}
              </li>
            </ul>
          </>
        );
      })}
    </>
  );
};

export default HomePage;

export const query = graphql`
  query SlideQuery {
    allArtworkSlide {
      nodes {
        artForm
        caption
        imageFile {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        year
      }
    }
  }
`;
