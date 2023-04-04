/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import MobileNavMenu from "./MobileNavMenu";

const MobileNav = ({ open }) => {
  return (
    <div
      css={css`
        z-index: ${open ? 998 : 500};
        opacity: ${open ? 1 : 0};
        visibility: ${open ? "shown" : "hidden"};
        transform: ${open ? "translateX(0)" : "translateX(100%)"};
        transition: visibility 0.3s ease-in-out, transform 0.3s ease-in-out,
          opacity 0.3s ease-in-out;
        height: 100vh;
        position: fixed;
        inset: 0;
        height: 100vh;
        width: 100vw;
        overflow-y: auto;
      `}
    >
      <MobileNavMenu open={open} />
    </div>
  );
};

export default MobileNav;
