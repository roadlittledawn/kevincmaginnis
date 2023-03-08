/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { Link } from "gatsby";

const NavItem = ({ to, text, location }) => {
  const isCurrent = to === location.pathname;

  const style = css`
    color: ${isCurrent ? "red" : "auto"};
    text-decoration: none;
    text-transform: uppercase;
    :hover {
      color: red;
    }
  `;
  return (
    <li
      css={css`
        padding: 0.5em 0 0.5em 1em;
        border-left: ${isCurrent ? "2px solid red" : "none"};
      `}
    >
      <Link css={style} to={to}>
        {text}
      </Link>
    </li>
  );
};

export default NavItem;
