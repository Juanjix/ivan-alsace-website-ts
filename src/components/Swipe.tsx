import { Asset } from "contentful";
import React from "react";

// Libraries
import styled from "styled-components";
import { TypeSwipeSkeleton } from "@/types/contentful-types";

import Image from "next/image";

interface SwipeProps {
  texto: string;
  imagen: Asset;
  titulo: string;
  posicionDeLaImagen: string;
}

const StyledSwitchContent = styled.section`
  padding: 48px 0;
  margin: 0 auto;
  background: linear-gradient(180deg, #051b19, #000000);
  // background: linear-gradient(180deg, #000000, #051b19);

  &:last-of-type {
    background: linear-gradient(180deg, #051b19, #000000);
  }
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

    li {
      margin-bottom: 20px;
      list-style-type: none;
      text-align: start;
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

export const SwitchContent: React.FC<SwipeProps> = (data) => {
  const { titulo, texto } = data;
  const imagenURL = data.imagen?.fields?.file?.url
    ? `https:${data.imagen.fields.file.url}`
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
    <StyledSwitchContent>
      {data.posicionDeLaImagen === "izquierda" ? (
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
      ) : data.posicionDeLaImagen === "derecha" ? (
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
    </StyledSwitchContent>
  );
};

export default SwitchContent;
