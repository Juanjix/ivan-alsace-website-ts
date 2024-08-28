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
}>`
  padding: 48px 0;
  margin: 0 auto;
  ${({ backgroundPosition, backgroundColor }) =>
    getBackgroundPositionStyles(backgroundPosition, backgroundColor)}
  @media screen and (min-width: 920px) {
    background-repeat: no-repeat;
    background-size: ${({ posicionDeLaImagen }) =>
      posicionDeLaImagen === "centro" ? "100vw" : "50vw 500px"};
  }

  background-position: ${({ posicionDeLaImagen }) =>
    posicionDeLaImagen === "izquierda" ? "top right" : ""};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 920px) {
      flex-direction: ${({ posicionDeLaImagen }) =>
        posicionDeLaImagen === "izquierda"
          ? "row"
          : posicionDeLaImagen === "derecha"
          ? "row-reverse"
          : "column"};
      justify-content: space-between;
    }
  }

  .content {
    // width: calc(40vw);
    text-align: start;
    position: relative;
    padding: 20px;
    z-index: 1;

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
}) => {
  const imagenURL = imagen?.fields?.file?.url
    ? `https:${imagen.fields.file.url}`
    : "";

  const parseText = (text: string) => {
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    return lines.map((line, index) => {
      if (line.startsWith("-")) {
        return <li key={index}>{line.substring(2)}</li>;
      }
      return <p key={index}>{line}</p>;
    });
  };

  return (
    <StyledSwitchContent
      backgroundPosition={backgroundPosition}
      backgroundColor={backgroundColor}
      posicionDeLaImagen={posicionDeLaImagen}>
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
