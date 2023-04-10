/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

const Main = ({ children }) => {
  return (
    <div
      css={css`
        grid-area: main;
        padding-top: 2em;
      `}
    >
      {children}
    </div>
  );
};

export default Main;
