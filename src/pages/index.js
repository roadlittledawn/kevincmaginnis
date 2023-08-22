/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { css, jsx } from "@emotion/react";
import { navigate } from "@reach/router";
import FeatherIcon from "../components/FeatherIcon";
import SlideShow from "../components/SlideShow";

const findIndexOfArtForm = (array, targetArtForm) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].artForm === targetArtForm.replace("/", "")) {
      return i; // Return the index if a matching artForm is found
    }
  }
  return -1; // Return -1 if the artForm is not found in any object
};

const HomePage = ({ data }) => {
  const {
    allSlidesYaml: { nodes: slides },
  } = data;

  const [allSlides, setAllSlides] = useState(slides);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (!queryParams.get("artForm") && !queryParams.get("slide")) {
      queryParams.set("slide", 0);
      queryParams.set("artForm", allSlides[0].artForm);
      setCurrentSlide(0);
      navigate(`?${queryParams.toString()}`);
    }
    if (queryParams.get("slide")) {
      const slideIndex = parseInt(queryParams.get("slide"));
      queryParams.set("artForm", allSlides[slideIndex].artForm);
      setCurrentSlide(slideIndex);
      navigate(`?${queryParams.toString()}`);
    }
    if (!queryParams.get("slide") && queryParams.get("artForm")) {
      const slideIndex = findIndexOfArtForm(
        allSlides,
        queryParams.get("artForm")
      );
      queryParams.set("slide", slideIndex);
      setCurrentSlide(slideIndex);
      navigate(`?${queryParams.toString()}`);
    }
  }, []);

  const showNextImage = () => {
    const queryParams = new URLSearchParams(location.search);
    const nextSlideIndex = (currentSlide + 1) % allSlides.length;
    queryParams.set("slide", nextSlideIndex);
    queryParams.set("artForm", allSlides[nextSlideIndex].artForm);
    setCurrentSlide(nextSlideIndex);
    navigate(`?${queryParams.toString()}`);
  };

  const showPreviousSlide = () => {
    const queryParams = new URLSearchParams(location.search);
    const previousSlideIndex = (currentSlide - 1) % allSlides.length;
    queryParams.set("slide", previousSlideIndex);
    queryParams.set("artForm", allSlides[previousSlideIndex].artForm);
    setCurrentSlide(previousSlideIndex);
    navigate(`?${queryParams.toString()}`);
  };

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
              margin-right: ${currentSlide === allSlides.length - 1
                ? "auto"
                : 0};
            `}
          >
            {currentSlide + 1} of {allSlides.length}
          </div>
          {currentSlide !== allSlides.length - 1 && (
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
        {currentSlide >= 0 && (
          <SlideShow slides={allSlides} currentSlideIndex={currentSlide} />
        )}
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
