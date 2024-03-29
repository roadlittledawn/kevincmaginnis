/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import PropTypes from "prop-types";
import Video from "./Video";

const SlideShow = ({
  slides,
  currentSlideIndex = 0,
  autoPlay = false,
  autoPlayInterval = 3000,
}) => {
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   setIndex(currentSlideIndex);
  // }, [currentSlideIndex]);

  // useEffect(() => {
  //   if (autoPlay) {
  //     const timer = setTimeout(() => {
  //       setIndex((index + 1) % slides.length);
  //     }, autoPlayInterval);

  //     return () => clearTimeout(timer);
  //   }
  // }, [autoPlay, autoPlayInterval, index, slides.length]);

  const nextImage = () => {
    currentSlideIndex + (1 % slides.length);
  };

  return (
    <div
      css={css`
        text-align: center;
        overflow: hidden;
        height: auto;
      `}
    >
      {slides.map((slide, i) => {
        const isShown = i === currentSlideIndex;
        return (
          <div
            key={`slide-${i}`}
            css={css`
              opacity: ${isShown ? 1 : 0};
              transform: ${isShown ? "translateX(0px)" : "translateX(9999px)"};
              transition: opacity 1s ease-in-out 0.1s;
            `}
          >
            {slide.slideMedia.type === "image" && slide.imageFile && (
              <div
                css={css`
                  position: relative;
                `}
              >
                <img
                  style={{ position: isShown ? "static" : "absolute" }}
                  css={css`
                    position: absolute;
                    right: 0;
                    left: 0;
                    margin: auto;
                    max-width: 100%;
                  `}
                  key={i}
                  src={slide.imageFile.childImageSharp.fluid.src}
                  alt={slide.slideCaption}
                  onLoad={i === 0 ? nextImage : undefined}
                />
              </div>
            )}
            {slide.slideMedia.type === "video" && (
              <Video
                style={{
                  opacity: isShown ? 1 : 0,
                  display: isShown ? "block" : "none",
                  transform: isShown ? "translateX(0px)" : "translateX(9999px)",
                }}
                type={slide.slideMedia.videoPlatform || null}
                id={slide.slideMedia.videoId}
                pause={!isShown}
              />
            )}
            <div
              style={{
                display: isShown ? "block" : "none",
                position:
                  slide.slideMedia.type === "image" && isShown
                    ? "static"
                    : "relative",
                top: slide.imageFile
                  ? `${slide.imageFile.childImageSharp.fluid.presentationHeight}px`
                  : `auto`,
              }}
            >
              {slide.slideCaption}
            </div>
          </div>
        );
      })}
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
