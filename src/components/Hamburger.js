/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

const Hamburger = ({ open, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      css={css`
        position: absolute;
        top: 30px;
        right: 2rem;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 999;

        &:focus {
          outline: none;
        }

        div {
          width: 2rem;
          height: 0.25rem;
          background: black;
          border-radius: 10px;
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;

          :first-child {
            transform: ${open ? "rotate(45deg)" : "rotate(0)"};
          }

          :nth-child(2) {
            opacity: ${open ? "0" : "1"};
            transform: ${open ? "translateX(20px)" : "translateX(0)"};
          }

          :nth-child(3) {
            transform: ${open ? "rotate(-45deg)" : "rotate(0)"};
          }
        }
      `}
    >
      <div />
      <div />
      <div />
    </button>
  );
};

export default Hamburger;
