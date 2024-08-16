"use client";
// React
import { useEffect } from "react";
import { PropsWithChildren } from "react";

// Styled
import styled from "styled-components";
import StyledComponentsRegistry from "./registry";

// Chakra provider
import { Providers } from "./providers";

// Animations
import AOS from "aos";
import { Footer } from "@/components/Footer";

const StyledLayout = styled.div`
  background-color: black;
  color: white;
  scroll-behavior: smooth;

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
      padding: 80px 0;
    }
  }

  .container {
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;
    padding: 0 10px;
    scroll-behavior: smooth;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const RootLayout: React.FC<PropsWithChildren> = (props) => {
  // Initializes `AOS` plugin
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  /**
   * PROPS
   */
  const { children } = props;

  return (
    <html lang="es">
      <body>
        <StyledLayout>
          <Providers>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            <Footer />
          </Providers>
        </StyledLayout>
      </body>
    </html>
  );
};

export default RootLayout;
