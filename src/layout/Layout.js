/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/react";
import Header from "./Header";
import Main from "./Main";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Hamburger from "../components/Hamburger";
import MobileNav from "../components/MobileNav";
import { SITE_OPTIONS } from "../utils/contants";

const Layout = ({ children, location }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  useEffect(() => setIsMobileNavOpen(false), [location]);
  return (
    <div
      css={css`
        max-width: var(--site-max-width);
        padding: var(--site-content-padding);
        margin: 0 auto;
      `}
    >
      <Header />
      <Hamburger
        css={css`
          display: none;
          @media screen and (max-width: ${SITE_OPTIONS.mobileBreakpoint}) {
            display: flex;
          }
        `}
        open={isMobileNavOpen}
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      />
      <MobileNav open={isMobileNavOpen} />
      <div
        css={css`
          display: grid;
          grid-template-columns: 250px auto;
          grid-template-areas: "sidebar main";
          gap: 2em;
          min-height: calc(100vh - 5rem);
          @media screen and (max-width: 760px) {
            grid-template-columns: minmax(0, 1fr);
            grid-template-areas: "main";
            grid-template-rows: unset;
          }
        `}
      >
        <Sidebar location={location} />
        <Main>
          <Content>{children}</Content>
        </Main>
      </div>
    </div>
  );
};

export default Layout;
