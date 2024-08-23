// src/components/SwitchContent.tsx
import { Asset } from "contentful";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { background } from "@chakra-ui/react";

interface SwipeProps {
  texto: string;
  imagen: Asset;
  titulo: string;
  posicionDeLaImagen: string;
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

const StyledSwitchContent = styled.section<{
  backgroundPosition: "arriba" | "abajo";
  backgroundColor: string;
}>`
  padding: 48px 0;
  margin: 0 auto;
  // background: linear-gradient(180deg, #051b19, #000000);
  ${({ backgroundPosition, backgroundColor }) =>
    getBackgroundPositionStyles(backgroundPosition, backgroundColor)}

  .izquierda {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 920px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .derecha {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    @media screen and (min-width: 920px) {
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
    }
  }

  .centro {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .content {
      text-align: center;
    }
  }

  .content {
    max-width: 550px;
    text-align: start;
    position: relative;
    padding: 20px;
    z-index: 1;

    li {
      margin-bottom: 20px;
      list-style-type: none;
    }

    &::before {
      content: "";
      position: absolute;
      top: 30%;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(25deg, #e0c68f 60%, black 50%);
      border-radius: 50%;
      filter: blur(4rem);
      height: 20vh;
      opacity: var(--halo-opacity, 0.7);
      z-index: -1;
    }
  }

  @media screen and (min-width: 920px) {
    padding: 64px 0;
  }

  .switch-image {
    margin: 32px 0;

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
      backgroundColor={backgroundColor}>
      <div className="container">
        {posicionDeLaImagen === "izquierda" ? (
          <div className="izquierda">
            <div className="content">
              <h3>{titulo}</h3>
              {parseText(texto)}
            </div>
            <div className="switch-image">
              <Image
                src={imagenURL}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={320}
                height={300}
                loading="lazy"
              />
            </div>
          </div>
        ) : posicionDeLaImagen === "derecha" ? (
          <div className="derecha">
            <div className="content">
              <h3>{titulo}</h3>
              {parseText(texto)}
            </div>
            <div className="switch-image">
              <Image
                src={imagenURL}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={320}
                height={300}
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <div className="centro">
            <div className="switch-image">
              <Image
                src={imagenURL}
                alt=""
                style={{
                  width: "100%",
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
          </div>
        )}
      </div>
    </StyledSwitchContent>
  );
};

export default SwitchContent;
