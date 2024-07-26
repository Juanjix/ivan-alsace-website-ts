"use client";

// Style
import styled from "styled-components";

// Motion
import { motion } from "framer-motion";

// Skeleton
import { TypePreguntaFrecuenteSkeleton } from "@/types/contentful-types";
import { Entry } from "contentful";
import Accordion from "./Accordion/Accordion";

const StyledPreguntasFrecuentes = styled.section`
  background: linear-gradient(
    180deg,
    #000000 0%,
    #000000 20%,
    #051b19 90%,
    #051b19 100%
  );

  .faq-container {
    border: 1px solid white;
    padding: 20px;
    margin-top: 50px;
  }
`;

interface PreguntasFrecuentesProps {
  faqs: Entry<TypePreguntaFrecuenteSkeleton>[];
}

export const PreguntasFrecuentes: React.FC<PreguntasFrecuentesProps> = ({
  faqs,
}) => {
  return (
    <StyledPreguntasFrecuentes>
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
