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
      <hr />
      <main
        css={css`
          margin: 0 auto;
          max-width: 900px;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <div>
            <nav>
              <ul
                css={css`
                  list-style-type: none;
                  padding-left: 0;
                `}
              >
                <li>Artwork</li>
                <li>Bio</li>
                <li>Contact</li>
                <li>CV</li>
              </ul>
            </nav>
          </div>
          <div
            css={css`
              width: 100%;
              max-width: 500px;
            `}
          >
            <Fade autoplay={false}>
              {slides.map((slide) => {
                const { title, year, caption, imageFile } = slide;
                return (
                  <>
                    <div
                      css={css`
                        display: block;
                        width: 100%;
                        /* height: 400px; */
                      `}
                    >
                      <div
                        css={css`
                          width: 100%;
                        `}
                      >
                        <img
                          css={css`
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                          `}
                          src={imageFile.childImageSharp.fluid.src}
                        />
                      </div>
                    </div>
                    <p>
                      {title}, {year}, {caption}
                    </p>
                  </>
                );
              })}
            </Fade>
          </div>
        </div>
      </main>
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
