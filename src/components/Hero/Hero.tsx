"use client";

// props
import { HeroProps } from "@/types/types";

// Components
import styled from "styled-components";

const StyledHero = styled.section`
  height: 100vh;
  padding: 20px 0;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hero = (props: HeroProps) => {
  const { title, image } = props;
  return (
    <StyledHero>
      <h1>{title}</h1>
    </StyledHero>
  );
};
