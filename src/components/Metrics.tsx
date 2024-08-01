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
}

const getBackgroundPositionStyles = (position: "arriba" | "abajo") => {
  if (position === "arriba") {
    return `
      background: linear-gradient(
        180deg,
        #051b19 90%,
        #051b19 100%,
        #000000 0%,
        #000000 20%
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

const StyledMetrics = styled.section<{
  backgroundPosition: "arriba" | "abajo";
}>`
 ${({ backgroundPosition }) => getBackgroundPositionStyles(backgroundPosition)}
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
}) => {
  return (
    <StyledMetrics backgroundPosition={backgroundPosition}>
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
