/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useEffect, useState, CSSProperties } from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/react";
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web";

const MOBILE_BREAKPOINT = `550px`;

const HomePage = ({ data }) => {
  const {
    allArtworkSlide: { nodes: slides },
  } = data;

  const pages = slides.map(({ caption, imageFile }) => ({ style }) => (
    <animated.div style={{ ...style }}>
      <div
        css={css`
          max-width: 700px;
        `}
      >
        <img
          css={css`
            max-width: 100%;
          `}
          src={imageFile.childImageSharp.fluid.src}
        />
      </div>
      <p>{caption}</p>
    </animated.div>
  ));

  const [index, set] = useState(0);
  const showNextImage = () => set((state) => (state + 1) % slides.length);
  const showPreviousSlide = () => set((state) => (state - 1) % slides.length);

  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transition: "opacity .5s linear" },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
  });
  useEffect(() => {
    transRef.start();
  }, [index]);

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
            justify-content: space-around;
            flex-wrap: wrap;
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
            <div
              css={css`
                display: flex;
                flex-wrap: none;
                justify-content: space-between;
              `}
            >
              <button onClick={showPreviousSlide}>&lt; Previous</button>
              <button onClick={showNextImage}>Next &gt;</button>
            </div>
            <div className={`flex fill`} onClick={showNextImage}>
              {transitions((style, i) => {
                const Page = pages[i];
                return <Page style={style} />;
              })}
            </div>
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
