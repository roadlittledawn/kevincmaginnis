import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import featherIcons from "./icons/feather";
import svgIcons from "./icons/svgIcons";
import { ChevronLeft, ChevronRight } from "react-feather";

const FeatherIcon = ({
  name,
  size,
  color,
  viewbox,
  title,
  defs,
  props,
  strokeColor,
  strokeWidth,
  className,
}) => {
  const featherSVG = featherIcons[name];
  const svgIcon = svgIcons[name];

  if (featherSVG) {
    if (name === "chevron-left") {
      return (
        <ChevronLeft
          {...props}
          className={className}
          css={css`
            width: ${size};
            height: ${size};
            stroke: ${color || currentColor};
            stroke-width: ${strokeWidth || 2};
            stroke-linecap: round;
            stroke-linejoin: round;
          `}
        />
      );
    } else if (name === "chevron-right") {
      return (
        <ChevronRight
          {...props}
          className={className}
          css={css`
            width: ${size};
            height: ${size};
            stroke: ${strokeColor || "#515151"};
            stroke-width: ${strokeWidth || 2};
            stroke-linecap: round;
            stroke-linejoin: round;
          `}
        />
      );
    }
  }
  if (svgIcon) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewbox || "0 0 24 24"}
        css={css`
          width: ${size};
          height: ${size};
        `}
      >
        {svgIcon}
      </svg>
    );
  }

  // By default, if no known icon show generic code brackets
  return (
    <ChevronLeft
      {...props}
      className={className}
      css={css`
        width: ${size};
        height: ${size};
        stroke: ${strokeColor || "currentColor"};
        stroke-width: ${strokeWidth || 2};
        stroke-linecap: round;
        stroke-linejoin: round;
      `}
    />
  );

  // throw new Error(`Icon: ${name} did not match a known icon`);
};

FeatherIcon.propTypes = {
  name: PropTypes.string,
  strokeColor: PropTypes.string,
};

export default FeatherIcon;
