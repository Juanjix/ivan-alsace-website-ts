import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Asset } from "contentful";

interface GarantiaProps {
  texto1: string;
  imagen1: Asset;
  texto2: string;
  imagen2: Asset;
  backgroundPosition: "arriba" | "abajo";
  backgroundColor: string;
  color: string;
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

const StyledGarantia = styled.section<{
  backgroundPosition: "arriba" | "abajo";
  backgroundColor: string;
}>`
  ${({ backgroundPosition, backgroundColor }) =>
    getBackgroundPositionStyles(backgroundPosition, backgroundColor)}
  .garantia {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 720px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px 50px;
    }

    .swipe {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      justify-content: center;

      &:last-of-type {
        margin-bottom: 0;
      }

      @media screen and (min-width: 720px) {
        margin-bottom: 0;
      }

      p {
        max-width: 320px;
        margin-left: 30px;
      }

      strong {
        color: ${({ color }) => (color ? color : "#c4b061")};
      }
    }
  }
`;

export const Garantia: React.FC<GarantiaProps> = ({
  texto1,
  texto2,
  imagen1,
  imagen2,
  backgroundPosition,
  backgroundColor,
  color,
}) => {
  const imagenURL1 = imagen1?.fields?.file?.url
    ? `https:${imagen1.fields.file.url}`
    : "";

  const imagenURL2 = imagen2?.fields?.file?.url
    ? `https:${imagen2.fields.file.url}`
    : "";
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
    <StyledGarantia
      backgroundPosition={backgroundPosition}
      color={color}
      backgroundColor={backgroundColor}>
      <div className="container">
        <div className="garantia">
          <div className="swipe">
            <div className="imagen-1">
              <Image
                src={imagenURL1}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={120}
                height={100}
                loading="lazy"
              />
            </div>
            <div className="texto-2">{parseText(texto1)}</div>
          </div>
          <div className="swipe">
            <div className="imagen-2">
              <Image
                src={imagenURL2}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={120}
                height={100}
                loading="lazy"
              />
            </div>
            <div className="texto-2">{parseText(texto2)}</div>
          </div>
        </div>
      </div>
    </StyledGarantia>
  );
};
