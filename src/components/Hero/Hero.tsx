"use client";

// props
import { HeroProps } from "@/types/types";

// Components
import styled from "styled-components";

const StyledHero = styled.section<{ imagen: string }>`
  height: 100vh;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.imagen});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 1200px) {
    // Estilos responsivos aquí
  }
`;

export const Hero = (props: HeroProps) => {
  const { titulo, imagen } = props;
  return (
    <StyledHero imagen={imagen}>
      <h1>{titulo}</h1>
    </StyledHero>
  );
};
