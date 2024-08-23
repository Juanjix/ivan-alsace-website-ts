"use client";

import { TypeMetricaSkeleton } from "@/types/contentful-types";
import { Entry } from "contentful";

// Style
import styled from "styled-components";

// Props
interface MetricsProps {
  titulo: string;
  subtitulo: string;
  metricas: Entry<TypeMetricaSkeleton>[];
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

const StyledMetrics = styled.section<{
  backgroundPosition: "arriba" | "abajo";
  backgroundColor: string;
}>`
 ${({ backgroundPosition, backgroundColor }) =>
   getBackgroundPositionStyles(backgroundPosition, backgroundColor)}
  .cards-container{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 40px 0;
    font-weight: bold;

    @media screen and (min-width: 920px) {
      flex-direction: row;
    }

    .metrics-card {
      max-width: 290px;
      width: 100%;
      height: auto;
      border: 1px solid;
      border-radius: 18px;
      padding: 60px 32px;
      background-color: black;
      color white;
      margin-bottom: 40px;

      p {
        color: #E0C68F;
      }

      &.white{
        background-color: white;
        color: black;
        border: 1px solid black;
        p {
          color: black;
        }
      }

      &:hover{
        border: 1px solid  #E0C68F;
      }

      @media screen and (min-width: 920px) {
        margin-bottom: 0;
      }
    }
  }
`;

export const Metrics: React.FC<MetricsProps> = ({
  metricas,
  titulo,
  subtitulo,
  backgroundPosition,
  backgroundColor,
}) => {
  return (
    <StyledMetrics
      backgroundPosition={backgroundPosition}
      backgroundColor={backgroundColor}>
      <h2 className="">{titulo && titulo}</h2>
      <p>{subtitulo && subtitulo}</p>

      <div className="cards-container">
        {metricas &&
          metricas.map((metrica) => (
            <div className="metrics-card" key={metrica.sys.id}>
              <h3>{metrica.fields.numero}</h3>
              <p>{metrica.fields.descripcion}</p>
            </div>
          ))}
      </div>
    </StyledMetrics>
  );
};
