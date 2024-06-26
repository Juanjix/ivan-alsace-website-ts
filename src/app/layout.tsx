"use client";

import { PropsWithChildren } from "react";

// Styled
import styled from "styled-components";

const StyledLayout = styled.div`
  background-color: black;
`;

const RootLayout: React.FC<PropsWithChildren> = (props) => {
  /**
   * PROPS
   */
  const { children } = props;

  return (
    <html lang="es">
      <body>
        <StyledLayout>{children}</StyledLayout>
      </body>
    </html>
  );
};

export default RootLayout;
