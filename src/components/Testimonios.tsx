"use client";
// Motion
import { motion } from "framer-motion";
// Imagen
import Image from "next/image";

// Icon
import Icon from "@/../public/icons/Testimonios/icon-testimonios.svg";

// Styled
import styled from "styled-components";
import { Button } from "./Button";
import { Asset } from "contentful";

interface TestimonialsProps {
  titulo: string;
  imagen: Asset;
}

const StyledTestimonios = styled(motion.section)`
  background: linear-gradient(180deg, #051b19, #000000);
  position: relative;

  .icon-testimonios {
    position: absolute;
    top: calc(50% - 80px);
  }

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
    <StyledTestimonios
      initial={{ y: 32, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}>
      <motion.h2
        initial={{ y: 32, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="">
        {titulo ? titulo : ""}
      </motion.h2>
      <div className="icon-testimonios">
        <Image src={Icon} alt="" width={200} height={200} />
      </div>

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
        <Button texto="Give it a try" url="/" />
      </div>
    </StyledTestimonios>
  );
};
