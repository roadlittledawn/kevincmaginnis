/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/react";
import PropTypes from "prop-types";
import Video from "./Video";

const SlideShow = ({
  slides,
  currentSlideIndex = 0,
  autoPlay = false,
  autoPlayInterval = 3000,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(currentSlideIndex);
  }, [currentSlideIndex]);

  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(() => {
        setIndex((index + 1) % slides.length);
      }, autoPlayInterval);

      return () => clearTimeout(timer);
    }
  }, [autoPlay, autoPlayInterval, index, slides.length]);

  const nextImage = () => {
    setIndex((index + 1) % slides.length);
  };

  return (
    <div
      css={css`
        position: relative;
        text-align: center;
      `}
    >
      {slides.map((slide, i) => (
        <div
          key={`slide-${i}`}
          style={{ opacity: i === index ? 1 : 0 }}
          css={css`
            transition: opacity 1s ease-in-out;
          `}
        >
          {slide.slideMedia.type === "image" && (
            <img
              css={css`
                display: block;
                position: absolute;
                right: 0;
                left: 0;
                margin: auto;

                max-width: 100%;
              `}
              key={i}
              src={slide.imageFile.childImageSharp.fluid.src}
              alt={"slide.slideCaption"}
              onLoad={i === 0 ? nextImage : undefined}
            />
          )}
          {slide.slideMedia.type === "video" && (
            <Video
              style={{
                opacity: i === index ? 1 : 0,
                display: i === index ? "block" : "none",
              }}
              type={slide.slideMedia.videoPlatform || null}
              id={slide.slideMedia.videoId}
            />
          )}
        </div>
      ))}
    </div>
  );
};

SlideShow.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      slideCaption: PropTypes.string,
      slideMedia: PropTypes.shape({
        type: PropTypes.oneOf(["image", "video"]),
        videoPlatform: PropTypes.oneOf(["youtube"]),
        videoId: PropTypes.string,
      }),
      imageFile: PropTypes.object,
    })
  ),
  currentSlideIndex: PropTypes.number,
};

export default SlideShow;
