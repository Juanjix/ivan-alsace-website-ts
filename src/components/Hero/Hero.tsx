// "use client";

// // Styled
// import styled from "styled-components";

// // Motion
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// // Components
// import { Button } from "../Button";

// const StyledHero = styled.div<{ imagen: string }>`
//   height: 100vh;
//   text-align: center;
//   color: white;
//   background-image: url(${(props) => (props.imagen ? props.imagen : "")});
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const HeroText = [
//   {
//     texto: "Save time and effort with exclusive compositions",
//   },
//   {
//     texto: "Enamora a tu audiencia",
//   },
//   {
//     texto: "Musica que gana premios (futuro)",
//   },
//   {
//     texto: "Save time and effort with exclusive compositions",
//   },
//   {
//     texto: "Make your project unforgettable",
//   },
// ];

// const titleVariants = {
//   initial: { opacity: 0, x: -100 }, // Empieza desde la derecha
//   animate: { opacity: 1, x: 0 }, // Se posiciona en el centro
//   exit: { opacity: 2, x: 100, transition: { duration: 4.5 } }, // Se desvanece hacia la izquierda
// };

// export const Hero = (props: HeroProps) => {
//   const { titulo, imagen } = props;
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) =>
//         prevIndex === HeroText.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <StyledHero imagen={imagen}>
//       <div>
//         <motion.div
//           key={index}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           variants={titleVariants}
//           transition={{
//             duration: 2.5,
//             ease: "easeInOut",
//             opacity: { duration: 5.2, ease: "easeInOut" }, // Duración de la transición de opacidad
//             x: { duration: 1.5, ease: "easeInOut" },
//             y: { duration: 1.5, ease: "easeInOut" },
//           }}
//           style={{
//             background: "linear-gradient(to right, #e6d680 0%, #9f883c 100%)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text",
//             color: "transparent",
//             marginBottom: "100px",
//           }}>
//           <h1>{HeroText[index].texto}</h1>
//         </motion.div>
//         <div>
//           <Button texto="Give it a try" url="/" />
//         </div>
//       </div>
//     </StyledHero>
//   );
// };
