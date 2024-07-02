// // components/PreguntasFrecuentes.tsx
// "use client";

// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Entry } from "contentful";
// import { PreguntasFrecuentesEntrySkeleton } from "@/types/types";
// import { Acordeon } from "../Acordeon/Acordeon";
// import { getPreguntasFrecuentes } from "@/app/client";
// import { info } from "console";

// const StyledPreguntasFrecuentes = styled.section``;

// export const PreguntasFrecuentes = () => {
//   const [informacion, setInformacion] = useState<
//     Entry<PreguntasFrecuentesEntrySkeleton>[]
//   >([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getPreguntasFrecuentes();
//       setInformacion(data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <StyledPreguntasFrecuentes>
//       <div className="container">
//         <h2 className="titulo">Componente Preguntas Frecuentes</h2>
//         {informacion.map((info, key) => (
//           <Acordeon
//             key={key}
//             respuesta={info.fields.respuesta}
//             pregunta={info.fields.pregunta}
//           />
//         ))}
//       </div>
//     </StyledPreguntasFrecuentes>
//   );
// };
