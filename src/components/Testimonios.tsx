"use client";
// Motion
import { motion } from "framer-motion";
// Imagen
import Image from "next/image";

// Styled
import styled from "styled-components";
import { Button } from "./Button";
import { Asset } from "contentful";

interface TestimonialsProps {
  titulo: string;
  imagen: Asset;
}

const StyledTestimonios = styled.section`
  .image-container {
    max-width: 420px;
    margin: 30px auto 100px auto;
  }
`;

export const Testimonios: React.FC<TestimonialsProps> = (datos) => {
  const { titulo, imagen } = datos;

  const imagenURL = imagen?.fields?.file?.url
    ? `https:${imagen.fields.file.url}`
    : "";

  return (
    <StyledTestimonios>
      <motion.h2 className="titulo">{titulo ? titulo : ""}</motion.h2>
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
      <Button texto="Give it a try" url="/" />
    </StyledTestimonios>
  );
};
