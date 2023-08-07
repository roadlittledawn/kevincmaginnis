/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { css, jsx } from "@emotion/react";
import FeatherIcon from "../components/FeatherIcon";
import SlideShow from "../components/SlideShow";

const HomePage = ({ data }) => {
  const {
    allSlidesYaml: { nodes: slides },
  } = data;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [filteredSlides, setFilteredSlides] = useState(slides);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get("artForm")) {
      const artFormParam = queryParams.get("artForm").replace("/", "");
      const newfilteredSlides = slides.filter(
        (slide) => slide.artForm === artFormParam
      );
      setFilteredSlides(newfilteredSlides);
      setCurrentSlide(0);
    } else {
      setFilteredSlides(slides);
      setCurrentSlide(0);
    }
  }, [setFilteredSlides, setCurrentSlide, slides]);

  const showNextImage = () =>
    setCurrentSlide((state) => (state + 1) % filteredSlides.length);

  const showPreviousSlide = () =>
    setCurrentSlide((state) => (state - 1) % filteredSlides.length);

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
              margin-right: ${currentSlide === filteredSlides.length - 1
                ? "auto"
                : 0};
            `}
          >
            {currentSlide + 1} of {filteredSlides.length}
          </div>
          {currentSlide !== filteredSlides.length - 1 && (
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
        <SlideShow slides={filteredSlides} currentSlideIndex={currentSlide} />
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
