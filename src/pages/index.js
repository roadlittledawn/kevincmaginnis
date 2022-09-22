/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/react";
import Img from "gatsby-image";

const HomePage = ({ data }) => {
  const {
    allFile: { nodes: fileNodes },
  } = data;
  console.log({ fileNodes });
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
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        year
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "artworkImages" } }) {
      nodes {
        absolutePath
        relativePath
        base
        dir
        relativeDirectory
        childImageSharp {
          fluid(maxWidth: 800) {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            originalImg
            originalName
          }
        }
        sourceInstanceName
      }
    }
  }
`;
