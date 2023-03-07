/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { Link } from "gatsby";
import NavMenu from "../components/NavMenu/NavMenu";

const Sidebar = ({ location }) => {
  return (
    <aside
      css={css`
        padding: var(--site-content-padding);
        grid-area: sidebar;
        @media screen and (max-width: 760px) {
          display: none;
        }
      `}
    >
      <NavMenu location={location} />
    </aside>
  );
};

export default Sidebar;
