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
      <NavItem
        to="/?artForm=installation"
        text="Installation"
        location={location}
      />
      <NavItem to="/?artForm=sculpture" text="Sculpture" location={location} />
      <NavItem to="/?artForm=painting" text="Painting" location={location} />
      <NavItem to="/cv/" text="CV" location={location} />
      <NavItem to="/bio/" text="Bio" location={location} />
      <NavItem to="/contact/" text="Contact" location={location} />
    </nav>
  );
};

export default NavMenu;
