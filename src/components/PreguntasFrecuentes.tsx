"use client";

// Style
import styled from "styled-components";

import { Acordeon } from "./Acordeon/Acordeon";

// Motion
import { motion } from "framer-motion";

// Skeleton
import { TypePreguntaFrecuenteSkeleton } from "@/types/contentful-types";
import { Entry } from "contentful";

const StyledPreguntasFrecuentes = styled.section``;

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
          className="titulo">
          Componente Preguntas Frecuentes
        </motion.h2>
        {faqs.map((faq, key) => {
          return (
            <Acordeon
              pregunta={faq.fields.pregunta || undefined}
              respuesta={faq.fields.respuesta}
              key={faq.sys.id}
            />
          );
        })}
      </div>
    </StyledPreguntasFrecuentes>
  );
};
