/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import Header from "./Header";
import Main from "./Main";
import Content from "./Content";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div
      css={css`
        max-width: var(--site-max-width);
        margin: 0 auto;
      `}
    >
      <Header />
      <div
        css={css`
          display: grid;
          grid-template-columns: 300px 700px;
          grid-template-areas: "sidebar main";
          grid-template-rows: 1fr auto;
          min-height: calc(100vh - 5rem);

          @media screen and (max-width: 760px) {
            grid-template-columns: minmax(0, 1fr);
            grid-template-areas: "main";
            grid-template-rows: unset;
          }
        `}
      >
        <Sidebar />
        <Main>
          <Content>{children}</Content>
        </Main>
      </div>
    </div>
  );
};

export default Layout;
