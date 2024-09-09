"use client";

import React, { useEffect, useState } from "react";

// Contentful
import { Asset } from "contentful";
import Link from "next/link";

import { motion } from "framer-motion";

// Components
import { Button } from "./Button";

// Styles
import styled from "styled-components";

interface HeroProps {
  titulos: string[];
  imagen: Asset;
  button: boolean;
  external: boolean;
  url: string;
  label: string;
}

const StyledHero = styled.div<{ $imagen: string }>`
  height: 100vh;
  text-align: center;
  color: white;
  background-image: url(${(props) => props.$imagen});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .link {
    background: linear-gradient(102.47deg, #c4b061 -5.34%, #574a4a 106.58%);
    padding: 20px 48px;
    border-radius: 8px;
    transition: all 0.5s ease-out;
    border: 1px solid black;

    &:hover {
      border: 1px solid #e0c68f;
      background-color: transparent;
      color: white;
    }
  }
`;

const titleVariants = {
  initial: { opacity: 0, x: 0 },
  animate: { opacity: 1, x: 0 }, // Se posiciona en el centro
  exit: { opacity: 2, x: 100, transition: { duration: 4.5 } }, // Se desvanece hacia la izquierda
};

const Hero: React.FC<HeroProps> = ({
  titulos,
  imagen,
  button,
  external,
  url,
  label,
}) => {
  const [index, setIndex] = useState(0);
  const imagenURL = `https:${imagen.fields.file?.url}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === titulos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [titulos]);

  return (
    <StyledHero $imagen={imagenURL}>
      <motion.div
        initial={{ y: 32, opacity: 0, scale: 0.99 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
        }}>
        <motion.div
          key={index}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={titleVariants}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            opacity: { duration: 5.2, ease: "easeInOut" }, // Duración de la transición de opacidad
            x: { duration: 1.5, ease: "easeInOut" },
            y: { duration: 1.5, ease: "easeInOut" },
          }}
          style={{
            color: "white",
            marginBottom: "100px",
          }}>
          <h1>{titulos[index]}</h1>
        </motion.div>
        <div>
          {button && external ? (
            <Button texto={label} url={url} onClick={() => undefined} />
          ) : (
            <Link className="link" href={url}>
              {label}
            </Link>
          )}
        </div>
      </motion.div>
    </StyledHero>
  );
};

export default Hero;
