/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/react";
import Img from "gatsby-image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

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
      <hr />
      <div
        css={css`
          width: 500px;
        `}
      >
        <Fade autoplay={false}>
          {slides.map((slide) => {
            const { title, year, caption, imageFile } = slide;
            return (
              <div className="each-slide">
                <div>
                  <img src={imageFile.childImageSharp.fluid.src} />
                </div>
                <p>
                  {title}, {year}, {caption}
                </p>
              </div>
            );
          })}
        </Fade>
      </div>
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
              src
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
