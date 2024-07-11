// "use client";

// // Style
// import styled from "styled-components";

// // Components
// import { Acordeon } from "./Acordeon/Acordeon";

// // Motion
// import { motion } from "framer-motion";

// // Skeleton
// import { TypePreguntasFrecuentesSkeleton } from "@/types/contentful-types";
// import { Entry } from "contentful";

// const StyledPreguntasFrecuentes = styled.section``;

// interface PreguntasFrecuentesProps {
//   faqs: Entry<TypePreguntasFrecuentesSkeleton>[];
// }

// export const PreguntasFrecuentes: React.FC<PreguntasFrecuentesProps> = ({
//   faqs,
// }) => {
//   console.log(faqs);
//   return (
//     <StyledPreguntasFrecuentes>
//       <div className="container">
//         <motion.h2
//           initial={{ y: 32, opacity: 0, scale: 0.99 }}
//           animate={{ y: 0, opacity: 1, scale: 1 }}
//           transition={{
//             duration: 0.6,
//           }}
//           className="titulo">
//           Componente Preguntas Frecuentes
//         </motion.h2>
//         {faqs.map((faq, key) => {
//           const { pregunta, respuesta } = faq.fields;
//           return (
//             <Acordeon pregunta={pregunta} respuesta={respuesta} key={key} />
//           );
//         })}
//       </div>
//     </StyledPreguntasFrecuentes>
//   );
// };
