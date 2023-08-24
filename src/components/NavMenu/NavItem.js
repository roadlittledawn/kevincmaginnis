/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { css, jsx } from "@emotion/react";
import { Link } from "gatsby";

const NavItem = ({ to, text, location }) => {
  const [isCurrent, setIsCurrent] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (location.pathname === "/" && queryParams.get("artForm")) {
      const toUrl = new URL(to, "https://example.com");
      const toSearchParams = new URLSearchParams(toUrl.search);
      const ToSearchParamArtForm = toSearchParams.get("artForm");
      if (ToSearchParamArtForm) {
        const isCurrent =
          ToSearchParamArtForm.replace("/", "") === queryParams.get("artForm");
        setIsCurrent(isCurrent);
      }
    } else {
      return setIsCurrent(to === location.pathname);
    }
  }, [location.search]);

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
      <Link css={style} href={to}>
        {text}
      </Link>
    </li>
  );
};

export default NavItem;
