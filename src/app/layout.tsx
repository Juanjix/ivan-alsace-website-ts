"use client";
// React
import { useEffect } from "react";
import { PropsWithChildren } from "react";

// Sections
import { Footer } from "@/components/Footer";

// Styled
import styled from "styled-components";

// Animations
import AOS from "aos";

const StyledLayout = styled.div`
  background-color: black;
  color: white;

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 42px;
  }

  .titulo {
    color: #e0c68f;
  }

  section {
    text-align: center;
    padding: 80px 16px;

    @media screen and (min-width: 920px) {
      padding: 120px 0;
    }
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
      <body data-aos="fade-in" data-aos-duration="600">
        <StyledLayout>{children}</StyledLayout>
      </body>
    </html>
  );
};

export default RootLayout;
