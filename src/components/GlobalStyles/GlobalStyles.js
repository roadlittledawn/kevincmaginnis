import React from "react";
import { normalize } from "polished";
import { Global, css } from "@emotion/react";
import typography from "./typography";
import variables from "./variables";

const GlobalStyles = () => (
  <Global
    styles={css`
      ${normalize()}

      :root {
        ${variables};
        ${typography};

        --site-content-padding: 2rem 2rem 0 2rem;
        --site-max-width: 1260px;
      }

      * {
        box-sizing: border-box;
      }

      body {
        font-size: 16px;
        font-family: var(--primary-font-family);
        color: #515151;
        background-color: #fff;
        line-height: 1.5;
      }

      a {
        cursor: pointer;
        color: var(--link-color);
        transition: 0.2s ease-out;

        &:hover {
          color: var(--link-hover-color);
        }
      }

      p {
        margin-top: 0;
        margin-bottom: var(--paragraph-spacing);
        line-height: 1.75;

        &:last-child {
          margin-bottom: 0;
        }
      }

      h1 {
        line-height: 1.15;
        font-weight: bold;
        margin-bottom: 1rem;
      }

      h2 {
        line-height: 1.25;
        margin-bottom: 0.75rem;
        font-weight: 600;
      }

      h3 {
        margin-bottom: 0.75rem;
        font-weight: 600;
      }
    `}
  />
);

export default GlobalStyles;
