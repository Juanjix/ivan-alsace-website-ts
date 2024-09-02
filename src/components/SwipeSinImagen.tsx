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
      padding: 0 50px;

      p {
        max-width: 530px;
      }
    }

    strong {
      color: #c4b061;
    }
  }
`;

export const SwipeSinImagen: React.FC<MetricsSinImagenProps> = ({
  texto1,
  texto2,
  backgroundPosition,
  backgroundColor,
}) => {
  const parseText = (text: string) => {
    const lines = text.split("\n").filter((line) => line.trim() !== "");

    return lines.map((line, index) => {
      // Reemplazar **texto** por <strong>texto</strong>
      const boldText = line.replace(/__(.*?)__/g, "<strong>$1</strong>");

      // Dividir la línea en partes de texto y HTML
      const content = boldText
        .split(/(<strong>.*?<\/strong>)/g)
        .map((part, i) => {
          if (part.startsWith("<strong>")) {
            // Si es una etiqueta <strong>, renderizar como JSX
            return <strong key={i}>{part.replace(/<\/?strong>/g, "")}</strong>;
          } else {
            // Si es texto normal, simplemente renderizar
            return part;
          }
        });

      return <p key={index}>{content}</p>;
    });
  };
  return (
    <StypedSwipeSinImagen
      backgroundPosition={backgroundPosition}
      backgroundColor={backgroundColor}>
      <div className="container">
        <div className="swipe">
          <div className="texto-1">{parseText(texto1)}</div>
          <div className="texto-2">{parseText(texto2)}</div>
        </div>
      </div>
    </StypedSwipeSinImagen>
  );
};
