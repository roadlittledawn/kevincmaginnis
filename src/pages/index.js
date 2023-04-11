/** @jsx jsx */
import React, { useState } from "react";
import { graphql } from "gatsby";
import { css, jsx } from "@emotion/react";
import FeatherIcon from "../components/FeatherIcon";
import SlideShow from "../components/SlideShow";

const HomePage = ({ data }) => {
  const {
    allSlidesYaml: { nodes: slides },
  } = data;

  const [currentSlide, setCurrentSlide] = useState(0);
  const showNextImage = () =>
    setCurrentSlide((state) => (state + 1) % slides.length);
  const showPreviousSlide = () =>
    setCurrentSlide((state) => (state - 1) % slides.length);

  return (
    <>
      <div
        css={css`
          width: 100%;
          max-width: 500px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            flex-wrap: none;
            justify-content: space-between;
          `}
        >
          {currentSlide !== 0 && (
            <button
              onClick={showPreviousSlide}
              css={css`
                background: none;
                border: none;
                cursor: pointer;
                margin-right: auto;
              `}
            >
              <FeatherIcon name="chevron-left" size={48} color="#515151" />
            </button>
          )}
          <div
            css={css`
              margin-left: ${currentSlide === 0 ? "auto" : 0};
              margin-right: ${currentSlide === slides.length - 1 ? "auto" : 0};
            `}
          >
            {currentSlide + 1} of {slides.length}
          </div>
          {currentSlide !== slides.length - 1 && (
            <button
              onClick={showNextImage}
              css={css`
                background: none;
                border: none;
                cursor: pointer;
                margin-left: auto;
              `}
            >
              <FeatherIcon name="chevron-right" size={48} color="#515151" />
            </button>
          )}
        </div>
        <SlideShow slides={slides} currentSlideIndex={currentSlide} />
      </div>
    </>
  );
};

export default HomePage;

export const query = graphql`
  query SlideQuery {
    allSlidesYaml {
      nodes {
        artForm
        slideCaption
        slideMedia {
          type
          videoPlatform
          videoId
        }
        imageFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
              presentationHeight
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
