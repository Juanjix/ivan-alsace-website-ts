"use client";
// Motion
import { motion } from "framer-motion";
// Imagen
import Image from "next/image";

// Icon
import Icon from "@/../public/icons/testimonios/icon-testimonios.svg";

// Styled
import styled from "styled-components";
import { Button } from "./Button";
import { Asset } from "contentful";

interface TestimonialsProps {
  titulo: string;
  imagen: Asset;
  backgroundPosition: "arriba" | "abajo";
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

const StyledTestimonios = styled(motion.section)<{
  backgroundPosition: "arriba" | "abajo";
  backgroundColor: string;
}>`
  ${({ backgroundPosition, backgroundColor }) =>
    getBackgroundPositionStyles(backgroundPosition, backgroundColor)}
  position: relative;
  .icon-testimonios {
    display: none;
    position: absolute;
    top: calc(50% - 80px);

    @media screen and (min-width: 920px) {
      display: block;
    }
  }

  .image-container {
    max-width: 420px;
    margin: 30px auto 100px auto;
  }
`;

export const Testimonios: React.FC<TestimonialsProps> = (datos) => {
  const { titulo, imagen, backgroundPosition, backgroundColor } = datos;

  const imagenURL = imagen?.fields?.file?.url
    ? `https:${imagen.fields.file.url}`
    : "";

  return (
    <StyledTestimonios
      backgroundPosition={backgroundPosition}
      backgroundColor={backgroundColor}
      initial={{ y: 32, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}>
      <div className="container">
        <motion.h2
          initial={{ y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="">
          {titulo ? titulo : ""}
        </motion.h2>
        {Icon ? (
          <div className="icon-testimonios">
            <Image src={Icon} alt="" width={200} height={200} />
          </div>
        ) : (
          ""
        )}

        <div className="image-container">
          <Image
            src={imagenURL}
            alt=""
            style={{
              width: "100%",
              height: "auto",
            }}
            width={600}
            height={300}
          />
        </div>
        <div>
          <Button
            texto="Give it a try"
            url="#pricing-section"
            onClick={undefined}
          />
        </div>
      </div>
    </StyledTestimonios>
  );
};
