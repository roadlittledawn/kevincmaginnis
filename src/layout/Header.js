/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

const Header = () => {
  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          font-size: 3vw;
          font-weight: 300;
          letter-spacing: 0.5em;
          text-transform: uppercase;
        `}
      >
        <div>Kevin</div>
        <div>C</div>
        <div>Maginnis</div>
      </div>
    </>
  );
};

export default Header;
