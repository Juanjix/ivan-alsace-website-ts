// src/components/SwitchContent.tsx
import { Asset } from "contentful";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface SwipeProps {
  texto: string;
  imagen: Asset;
  titulo: string;
  posicionDeLaImagen: "izquierda" | "derecha" | "centro";
  backgroundPosition: "arriba" | "abajo";
  backgroundColor: string;
  imagenGradient: boolean;
  color: string;
}

const getBackgroundPositionStyles = (
  position: "arriba" | "abajo",
  backgroundColor: string
) => `
  background: linear-gradient(
    ${position === "arriba" ? "0deg" : "180deg"},

    #000000 0%,
    #000000 60%,
    ${backgroundColor} 90%, 
    ${backgroundColor} 100%
  );
`;

const StyledSwitchContent = styled.section<{
  backgroundPosition: "arriba" | "abajo";
  backgroundColor: string;
  posicionDeLaImagen: "izquierda" | "derecha" | "centro";
  imagenGradient: boolean;
  color: string;
}>`
  padding: 48px 0;
  margin: 0 auto;
  ${({ backgroundPosition, backgroundColor }) =>
    getBackgroundPositionStyles(backgroundPosition, backgroundColor)}

  @media screen and (min-width: 920px) {
    background-repeat: no-repeat;
    background-size: ${({ posicionDeLaImagen, imagenGradient }) =>
      posicionDeLaImagen === "centro"
        ? "100vw"
        : (posicionDeLaImagen === "derecha" || "izquierda") && imagenGradient
        ? "50vw 500px"
        : ""};
  }

  background-position: ${({ posicionDeLaImagen }) =>
    posicionDeLaImagen === "derecha" ? "top right" : ""};

  .container {
    display: flex;
    align-items: center;
    flex-direction: ${({ posicionDeLaImagen }) =>
      posicionDeLaImagen === "izquierda"
        ? "column-reverse"
        : posicionDeLaImagen === "derecha"
        ? "column"
        : "column-reverse"};

    @media screen and (min-width: 920px) {
      flex-direction: ${({ posicionDeLaImagen }) =>
        posicionDeLaImagen === "izquierda"
          ? "row-reverse"
          : posicionDeLaImagen === "derecha"
          ? "row"
          : "column"};
      justify-content: space-between;
    }
  }

  .content {
    text-align: start;
    position: relative;

    strong {
      color: #c4b061;
      color: ${({ color }) => (color ? color : "#c4b061")};
    }
    z-index: 1;

    @media screen and (min-width: 920px) {
      padding: 0px 40px;

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 500px; /* Ajusta el tamaño según sea necesario */
        height: 500px; /* Ajusta el tamaño según sea necesario */
        background: ${({ backgroundColor }) =>
          `radial-gradient(circle, ${backgroundColor}4D 0%, ${backgroundColor}00 60%)`};
        border-radius: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
      }
    }

    li {
      margin-bottom: 20px;
      list-style-type: none;
    }
  }

  .switch-image {
    margin: 32px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;

    img {
      display: flex;
      justify-content: center;
    }

    @media screen and (min-width: 920px) {
      margin: 0;
    }
  }
`;

export const SwitchContent: React.FC<SwipeProps> = ({
  titulo,
  texto,
  imagen,
  posicionDeLaImagen,
  backgroundPosition,
  backgroundColor,
  imagenGradient,
  color,
}) => {
  const imagenURL = imagen?.fields?.file?.url
    ? `https:${imagen.fields.file.url}`
    : "";

  // Función para parsear el texto con soporte básico para markdown
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
    <StyledSwitchContent
      backgroundPosition={backgroundPosition}
      backgroundColor={backgroundColor}
      posicionDeLaImagen={posicionDeLaImagen}
      imagenGradient={imagenGradient}
      color={color}>
      <div className="container">
        {posicionDeLaImagen !== "centro" ? (
          <>
            <div className="content">
              <h3>{titulo}</h3>
              {parseText(texto)}
            </div>
            <div className="switch-image">
              <Image
                src={imagenURL}
                alt=""
                style={{
                  width: "400px",
                  height: "auto",
                }}
                width={320}
                height={300}
                loading="lazy"
              />
            </div>
          </>
        ) : (
          <>
            <div className="switch-image">
              <Image
                src={imagenURL}
                alt=""
                style={{
                  width: "400px",
                  height: "auto",
                }}
                width={320}
                height={300}
                loading="lazy"
              />
            </div>
            <div className="content">
              <h3>{titulo}</h3>
              {parseText(texto)}
            </div>
          </>
        )}
      </div>
    </StyledSwitchContent>
  );
};

export default SwitchContent;
