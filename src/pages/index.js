/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { css, jsx } from "@emotion/react";
import { useTransition, animated, useSpringRef } from "@react-spring/web";

const HomePage = ({ data }) => {
  const {
    allSlidesYaml: { nodes: slides },
  } = data;

  const pages = slides.map(({ slideCaption, imageFile }) => ({ style }) => (
    <animated.div style={{ ...style }}>
      <div
        css={css`
          max-width: 700px;
        `}
      >
        <img
          alt={slideCaption}
          css={css`
            max-width: 100%;
          `}
          src={imageFile.childImageSharp.fluid.src}
        />
      </div>
      <p>{slideCaption}</p>
    </animated.div>
  ));

  const [currentSlide, setCurrentSlide] = useState(0);
  const showNextImage = () =>
    setCurrentSlide((state) => (state + 1) % slides.length);
  const showPreviousSlide = () =>
    setCurrentSlide((state) => (state - 1) % slides.length);

  const transRef = useSpringRef();
  const transitions = useTransition(currentSlide, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transition: "opacity .5s linear" },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
  });
  useEffect(() => {
    transRef.start();
  });

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
            flex-wrap: none;
            justify-content: space-between;
          `}
        >
          {currentSlide !== 0 && (
            <button onClick={showPreviousSlide}>&lt; Previous</button>
          )}
          {currentSlide !== slides.length - 1 && (
            <button onClick={showNextImage}>Next &gt;</button>
          )}
        </div>
        <div>
          {transitions((style, i) => {
            const Page = pages[i];
            return <Page style={style} />;
          })}
        </div>
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
