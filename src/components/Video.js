/* eslint-disable jsx-a11y/media-has-caption */
/** @jsx jsx */
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { css, jsx } from "@emotion/react";

const videoPlatforms = {
  youtube: (id) => `//www.youtube.com/embed/${id}?modestbranding=1`,
  aws: (id) => `https://kevincmaginnis-videos.s3.us-east-2.amazonaws.com/${id}`,
};

const Video = ({ id, type = "aws", title, className, width, pause, style }) => {
  const vidRef = useRef();

  useEffect(() => {
    if (pause) {
      vidRef.current.pause();
    }
  }, [pause]);

  return (
    <div
      className={className}
      style={style}
      css={css`
        max-width: ${width};
      `}
    >
      <div
        css={css`
          position: relative;
          padding-top: 56.25%; // 16:9
          height: 0;
        `}
      >
        {type === "aws" && (
          <video
            ref={vidRef}
            controls
            width="100%"
            css={css`
              position: absolute;
              left: 0;
              top: 0;
            `}
          >
            <source src={videoPlatforms[type](id)} type="video/mp4" />
            Download the
            <a href={videoPlatforms[type](id)}>MOV</a>
            video.
          </video>
        )}
        {type !== "aws" && (
          <iframe
            src={videoPlatforms[type](id)}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title={title}
            frameBorder="0"
            allowFullScreen
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            `}
          />
        )}
      </div>
    </div>
  );
};

Video.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(videoPlatforms)),
  title: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  style: PropTypes.object,
};

export default Video;
