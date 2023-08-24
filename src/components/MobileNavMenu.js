/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

const MobileNavMenu = () => {
  return (
    <>
      <nav
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #ccc;
          height: 100vh;
          text-align: left;
          padding: 2rem;

          @media (max-width: 576px) {
            width: 100%;
          }

          a {
            font-size: 2rem;
            text-transform: uppercase;
            text-align: center;
            padding: 2rem 0;
            font-weight: bold;
            letter-spacing: 0.5rem;
            color: #d84a4a;
            text-decoration: none;
            transition: color 0.3s linear;

            @media (max-width: 576px) {
              font-size: 1.5rem;
              text-align: center;
            }
          }
        `}
      >
        <a href="/?artForm=installation">Installation</a>
        <a href="/?artForm=sculpture">Sculpture</a>
        <a href="/?artForm=painting">Painting</a>
        <a href="/bio">Bio</a>
        <a href="/contact">Contact</a>
        <a href="/cv">CV</a>
      </nav>
    </>
  );
};

export default MobileNavMenu;
