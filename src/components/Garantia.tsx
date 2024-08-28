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
}

const getBackgroundPositionStyles = (position: "arriba" | "abajo") => {
  if (position === "arriba") {
    return `
      background: linear-gradient(
      0deg,
      #000000 0%,
      #000000 20%,
      #051b19 90%, 
      #051b19 100%
      );
    `;
  }
  return `
    background: linear-gradient(
      180deg,
      #000000 0%,
      #000000 20%,
      #051b19 90%, 
      #051b19 100%
    );
  `;
};

const StyledGarantia = styled.section<{
  backgroundPosition: "arriba" | "abajo";
}>`
  ${({ backgroundPosition }) => getBackgroundPositionStyles(backgroundPosition)}
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
    }
  }
`;

export const Garantia: React.FC<GarantiaProps> = ({
  texto1,
  texto2,
  imagen1,
  imagen2,
  backgroundPosition,
}) => {
  const imagenURL1 = imagen1?.fields?.file?.url
    ? `https:${imagen1.fields.file.url}`
    : "";

  const imagenURL2 = imagen2?.fields?.file?.url
    ? `https:${imagen2.fields.file.url}`
    : "";

  return (
    <StyledGarantia backgroundPosition={backgroundPosition}>
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
            <div className="texto-2">
              <p>{texto1}</p>
            </div>
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
            <div className="texto-2">
              <p>{texto2}</p>
            </div>
          </div>
        </div>
      </div>
    </StyledGarantia>
  );
};
