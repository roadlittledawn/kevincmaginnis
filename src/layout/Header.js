/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { SITE_OPTIONS } from "../utils/contants";

const Header = () => {
  return (
    <>
      <div
        css={css`
          display: grid;
          grid-template-columns: 250px 50px auto;
          grid-template-areas: "firstName middleInitial lastName";
          gap: 2rem;
          margin-right: 2em;
          font-size: 3em;
          font-weight: 300;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          @media screen and (max-width: ${SITE_OPTIONS.mobileBreakpoint}) {
            font-size: 2em;
            display: flex;
            flex-wrap: wrap;
            row-gap: 5px;
          }
          @media screen and (max-width: ${SITE_OPTIONS.mobileWidthSmall}) {
            font-size: 1.75em;
          }
          > * {
            margin-right: 1em;
          }
        `}
      >
        <div
          css={css`
            grid-area: firstName;
          `}
        >
          Kevin
        </div>
        <div
          css={css`
            color: red;
            grid-area: middleInitial;
          `}
        >
          C
        </div>
        <div
          css={css`
            grid-area: lastName;
          `}
        >
          Maginnis
        </div>
      </div>
    </>
  );
};

export default Header;
