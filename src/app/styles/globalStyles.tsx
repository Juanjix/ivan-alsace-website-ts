"use client";

import reset from "./themes/reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ""
    background-color: black;
    color: white;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-family: "";
    color: black;
  }

 
   h1{
    font-size: 96px;
    font-weight: 900;
    line-height: 80%;
    letter-spacing: 0;

    @media screen (min-width: 920px){
      font-size: 200px;
      margin: 0;
    }
  }

  h2{
    font-size: 32px;
    font-weight: 900;
    line-height: 80%;
    letter-spacing: 0;

    @media screen (min-width: 920px){
      font-size: 42px;
    }
  }

  h3{
    font-size: 24px;
    font-weight: 900;
    line-height: 80%;
    letter-spacing: 0;

    @media screen (min-width: 920px){
      font-size: 32px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
    letter-spacing: 0;
    color: ${({ theme }) => theme.colors.neutral__600};

    @media screen (min-width: 920px){
      font-size: 18px;
    }

    &.all-caps{
      letter-spacing: 24;
    }

    &.small{
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0;

      @media screen (min-width: 920px){
        font-size: 14px;
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    font-family: "",
    font-weight: 500; 
  }



  background-color: black;
  color: white;

  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 42px;
  }

  h3 {
    font-size: 32px;
  }

  .titulo {
    color: #e0c68f;
  }

  section {
    text-align: center;
    padding: 40px 16px;

    @media screen and (min-width: 920px) {
      padding: 40px 0;
    }
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

export default GlobalStyle;
