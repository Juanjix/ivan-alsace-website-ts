import { Asset } from "contentful";
import React from "react";
import { RenderText } from "@contentful/rich-text-react-renderer";

// Libraries
import styled from "styled-components";

import Image from "next/image";

interface SwipeProps {
  texto: string;
  imagen: Asset;
  titulo: string;
  posicionDeLaImagen: string;
}

const StyledSwitchContent = styled.section`
  padding: 48px 0;
  max-width: 1200px;
  margin: 0 auto;

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

const SwitchContent: React.FC<SwipeProps> = (data) => {
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
            <h3>{data.titulo}</h3>
            {parseText(data.texto)}
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
        <div className="derecha">
          <div className="content">
            <h3>{data.titulo}</h3>
            {parseText(data.texto)}
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
      )}
    </StyledSwitchContent>
  );
};

export default SwitchContent;
