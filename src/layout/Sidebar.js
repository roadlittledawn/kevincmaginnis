/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import NavMenu from "../components/NavMenu/NavMenu";
import { SITE_OPTIONS } from "../utils/contants";

const Sidebar = ({ location }) => {
  return (
    <aside
      css={css`
        padding: var(--site-content-padding);
        grid-area: sidebar;
        @media screen and (max-width: ${SITE_OPTIONS.mobileBreakpoint}) {
          display: none;
        }
      `}
    >
      <NavMenu location={location} />
    </aside>
  );
};

export default Sidebar;
