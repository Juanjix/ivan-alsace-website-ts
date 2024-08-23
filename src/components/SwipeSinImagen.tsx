import React from "react";
import styled from "styled-components";

interface MetricsSinImagenProps {
  texto1: string;
  texto2: string;
  backgroundPosition: "arriba" | "abajo";
  backgroundColor: string;
}

const getBackgroundPositionStyles = (
  position: "arriba" | "abajo",
  backgroundColor: string
) => {
  if (position === "arriba") {
    return `
      background: linear-gradient(
      0deg,
      #000000 0%,
      #000000 20%,
      ${backgroundColor} 90%, 
      ${backgroundColor} 100%
      );
    `;
  }
  return `
    background: linear-gradient(
      180deg,
      #000000 0%,
      #000000 20%,
      ${backgroundColor} 90%, 
      ${backgroundColor} 100%
    );
  `;
};

const StypedSwipeSinImagen = styled.section<{
  backgroundPosition: "arriba" | "abajo";
  backgroundColor: string;
}>`
  ${({ backgroundPosition, backgroundColor }) =>
    getBackgroundPositionStyles(backgroundPosition, backgroundColor)}

  .swipe {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 920px) {
      flex-direction: row;
      text-align: left;
      justify-content: space-between;

      p {
        max-width: 520px;
      }
    }
  }
`;

export const SwipeSinImagen: React.FC<MetricsSinImagenProps> = ({
  texto1,
  texto2,
  backgroundPosition,
  backgroundColor,
}) => {
  return (
    <StypedSwipeSinImagen
      backgroundPosition={backgroundPosition}
      backgroundColor={backgroundColor}>
      <div className="container">
        <div className="swipe">
          <div className="texto-1">
            <p>{texto1}</p>
          </div>
          <div className="texto-2">
            <p>{texto2}</p>
          </div>
        </div>
      </div>
    </StypedSwipeSinImagen>
  );
};
