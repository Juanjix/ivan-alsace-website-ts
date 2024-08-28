"use client";

// Style
import styled from "styled-components";

// Motion
import { motion } from "framer-motion";

// Skeleton
import { TypePreguntaFrecuenteSkeleton } from "@/types/contentful-types";
import { Entry } from "contentful";
import Accordion from "./Accordion/Accordion";

interface PreguntasFrecuentesProps {
  faqs: Entry<TypePreguntaFrecuenteSkeleton>[];
  backgroundPosition: "arriba" | "abajo";
  backgroundColor: string;
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

const StyledPreguntasFrecuentes = styled.section<{
  backgroundPosition: "arriba" | "abajo";
  backgroundColor: string;
}>`
  ${({ backgroundPosition, backgroundColor }) =>
    getBackgroundPositionStyles(backgroundPosition, backgroundColor)}
  @media screen and (min-width: 920px) {
    padding: px 50px;
  }
  .faq-container {
    border: 1px solid white;
    padding: 20px;
    margin-top: 50px;
  }

  .container {
    @media screen and (min-width: 920px) {
      padding: 0px 50px;
    }
  }
`;

export const PreguntasFrecuentes: React.FC<PreguntasFrecuentesProps> = ({
  faqs,
  backgroundPosition,
  backgroundColor,
}) => {
  return (
    <StyledPreguntasFrecuentes
      backgroundPosition={backgroundPosition}
      backgroundColor={backgroundColor}>
      <div className="container">
        <motion.h2
          initial={{ y: 32, opacity: 0, scale: 0.99 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
          }}
          className="">
          Componente Preguntas Frecuentes
        </motion.h2>
        <div className="faq-container">
          {faqs.map((faq, key) => {
            return (
              <Accordion
                pregunta={faq.fields.pregunta}
                respuesta={faq.fields.respuesta}
                {...faq}
                key={faq.sys.id}
              />
            );
          })}
        </div>
      </div>
    </StyledPreguntasFrecuentes>
  );
};
