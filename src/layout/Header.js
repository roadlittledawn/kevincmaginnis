/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

const Header = () => {
  return (
    <>
      <div
        css={css`
          padding: var(--site-content-padding);
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          font-size: 3vw;
          font-weight: 300;
          letter-spacing: 0.5em;
          text-transform: uppercase;
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
