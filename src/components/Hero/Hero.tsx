"use client";

// Props
import { HeroProps } from "@/types/types";

// Styled
import styled from "styled-components";

// Components
import { Button } from "../Button";

const StyledHero = styled.section<{ imagen: string }>`
  height: 100vh;
  text-align: center;
  color: white;
  background-image: url(${(props) => props.imagen});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 1200px) {
  }

  & .prueba-1,
  & .prueba-2 {
    margin-top: 200px;
  }
`;

const GradientText = styled.h1`
  background: linear-gradient(to right, #e6d680 0%, #9f883c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  & a {
    margin-top: 100px;
  }
`;

export const Hero = (props: HeroProps) => {
  const { titulo, imagen } = props;
  return (
    <StyledHero imagen={imagen}>
      <GradientText>{titulo}</GradientText>
      <div>
        <Button texto="Give it a try" url="/" />
      </div>
    </StyledHero>
  );
};
