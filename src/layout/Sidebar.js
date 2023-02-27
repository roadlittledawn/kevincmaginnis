/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { Link } from "gatsby";

const Sidebar = () => {
  return (
    <aside
      css={css`
        grid-area: sidebar;
        @media screen and (max-width: 760px) {
          display: none;
        }
      `}
    >
      <nav>
        <li>
          <Link to="/">Artwork</Link>
        </li>
        <li>
          <Link to="/bio/">Bio</Link>
        </li>
        <li>Contact</li>
        <li>CV</li>
      </nav>
    </aside>
  );
};

export default Sidebar;
