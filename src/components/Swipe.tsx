import { Asset } from "contentful";
import React from "react";

// Libraries
import styled from "styled-components";

import Image from "next/image";

interface SwipeProps {
  texto: string;
  imagen: Asset;
  titulo: string;
  posicionDeLaImagen: string;
}

// Components

const StyledSwitchContent = styled.section`
  padding: 48px 0;

  .izquierda {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 920px) {
      flex-direction: row;
      align-items: center;
    }
  }

  .derecha {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    align-items: center;

    @media screen and (min-width: 920px) {
      flex-direction: row-reverse;
      align-items: center;
    }
  }

  .content {
    max-width: 500px;
  }

  @media screen and (min-width: 920px) {
    padding: 64px 0;
  }

  p {
    margin-bottom: 8px;
  }

  .switch-image {
    margin-top: 32px;

    @media screen and (min-width: 920px) {
      margin-top: 0;
    }
  }
`;

const SwitchContent: React.FC<SwipeProps> = (data) => {
  // console.log("data dentro del componente swipe --->", data);

  const imagenURL = data.imagen?.fields?.file?.url
    ? `https:${data.imagen.fields.file.url}`
    : "";
  return (
    <StyledSwitchContent>
      <div className="container">
        {data.posicionDeLaImagen === "izquierda" ? (
          <div className="izquierda">
            <div className="content">
              <h3>{data.titulo} derecha</h3>
              <p>{data.texto}</p>
            </div>
            <div>
              <Image
                src={imagenURL}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={600}
                height={300}
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <div className="derecha">
            <div className="content">
              <h3>{data.titulo}</h3>
              <p>{data.texto}</p>
            </div>
            <div>
              <Image
                src={imagenURL}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={600}
                height={300}
              />
            </div>
          </div>
        )}
      </div>
    </StyledSwitchContent>
  );
};

export default SwitchContent;
