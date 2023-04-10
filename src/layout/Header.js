/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { SITE_OPTIONS } from "../utils/contants";

const Header = () => {
  return (
    <>
      <div
        css={css`
          padding: var(--site-content-padding);
          display: grid;
          grid-template-columns: 2fr 1fr 4fr 3fr;
          font-size: 3em;
          font-weight: 300;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          @media screen and (max-width: ${SITE_OPTIONS.mobileBreakpoint}) {
            font-size: 2em;
          }
          @media screen and (max-width: ${SITE_OPTIONS.mobileWidthSmall}) {
            font-size: 1.75em;
          }
          > * {
            margin-right: 1em;
          }
        `}
      >
        <div>Kevin</div>
        <div
          css={css`
            color: red;
          `}
        >
          C
        </div>
        <div>Maginnis</div>
      </div>
    </>
  );
};

export default Header;
