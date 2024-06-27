"use client";
// React
import { useEffect } from "react";
import { PropsWithChildren } from "react";

// Styled
import styled from "styled-components";

// Animations
import AOS from "aos";

const StyledLayout = styled.div`
  background-color: black;

  h1 {
    font-size: 40px;
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
