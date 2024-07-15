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
}

const StyledMetrics = styled.section`
  background-color: #051b19;


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
}) => {
  return (
    <StyledMetrics>
      <h2 className="titulo">{titulo && titulo}</h2>
      <p>{subtitulo && subtitulo}</p>

      <div className="cards-container">
        {metricas.map((metrica) => (
          <div className="metrics-card" key={metrica.sys.id}>
            <h3>{metrica.fields.numero}</h3>
            <p>{metrica.fields.descripcion}</p>
          </div>
        ))}
      </div>
    </StyledMetrics>
  );
};
