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
  }
`;

const GradientText = styled.h1`
  background: linear-gradient(to right, #e6d680 0%, #9f883c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const Hero = (props: HeroProps) => {
  const { titulo, imagen } = props;
  return (
    <StyledHero imagen={imagen}>
      <GradientText>{titulo}</GradientText>
    </StyledHero>
  );
};
