import React, { useState, useEffect } from "react";
import { Global, css, connect, styled, fetch } from "frontity";

const Footer = () => {
  return (
    <>
      <footer
        css={css`
           {
            max-width: 1100px;
            width: 100%;
            margin: 0 auto;
          }
        `}
      >
        <h4
          css={css`
             {
              color: #fff;
            }
          `}
        >
          푸터입니다.
        </h4>
      </footer>
    </>
  );
};

export default connect(Footer);
