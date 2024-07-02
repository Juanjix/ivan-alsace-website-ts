"use client";

// Props
import { HeroProps } from "@/types/types";

// Styled
import styled from "styled-components";

// Motion
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Components
import { Button } from "../Button";

const StyledHero = styled.div<{ imagen: string }>`
  height: 100vh;
  text-align: center;
  color: white;
  background-image: url(${(props) => (props.imagen ? props.imagen : "")});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroText = [
  {
    texto: 'DIFERENCIATE DE LO ESTÁNDAR" MUSICA UNICA PARA UN PROYECTO ÚNICO"',
  },
  {
    texto: "Enamora a tu audiencia",
  },
  {
    texto: "Musica que gana premios (futuro)",
  },
  {
    texto: "Save time and effort with exclusive compositions",
  },
  {
    texto: "Make your project unforgettable",
  },
];

export const Hero = (props: HeroProps) => {
  const { titulo, imagen } = props;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === HeroText.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledHero imagen={imagen}>
      <div>
        <motion.h1
          initial={{ y: 32, opacity: 0, scale: 0.99 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
          }}
          style={{
            background: "linear-gradient(to right, #e6d680 0%, #9f883c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "100px",
          }}
          key={index}>
          {HeroText[index].texto}
        </motion.h1>
        <div>
          <Button texto="Give it a try" url="/" />
        </div>
      </div>
    </StyledHero>
  );
};
