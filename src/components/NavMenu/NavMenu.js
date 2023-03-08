/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import NavItem from "./NavItem";

const NavMenu = ({ location }) => {
  return (
    <nav
      css={css`
        list-style-type: none;
      `}
    >
      <NavItem to="/" text="Artwork" location={location} />
      <NavItem to="/bio/" text="Bio" location={location} />
      <NavItem to="/contact/" text="Contact" location={location} />
      <NavItem to="/cv/" text="CV" location={location} />
    </nav>
  );
};

export default NavMenu;
