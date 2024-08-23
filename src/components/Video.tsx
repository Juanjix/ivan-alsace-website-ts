"use client";

// Motion
import { motion } from "framer-motion";

// Styled
import styled from "styled-components";
import { Button } from "./Button";
import React from "react";

interface VideoProps {
  titulo: string;
  videoCode: string;
  backgroundPosition: "arriba" | "abajo";
  backgroundColor?: string; // Agregamos backgroundColor como prop opcional
}

const getBackgroundPositionStyles = (
  position: "arriba" | "abajo",
  backgroundColor: string = "#051b19" // Valor por defecto si no se proporciona
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

const StyledVideo = styled(motion.section)<{
  backgroundPosition: "arriba" | "abajo";
  backgroundColor?: string;
}>`
  ${({ backgroundPosition, backgroundColor }) =>
    getBackgroundPositionStyles(backgroundPosition, backgroundColor)}

  iframe {
    margin: 20px auto;
    max-width: 720px;
    width: 100%;
    height: 400px;
    border-radius: 18px;
    margin-bottom: 62px;

    &:hover {
      border: 1px solid #e0c68f;
    }
  }
`;

export const Video: React.FC<VideoProps> = (props) => {
  const { titulo, videoCode, backgroundPosition, backgroundColor } = props;

  const url = `https://www.youtube.com/embed/${videoCode}`;
  return (
    <StyledVideo
      backgroundPosition={backgroundPosition}
      backgroundColor={backgroundColor}>
      <div>
        <h2>{titulo || ""}</h2>
      </div>

      {videoCode ? (
        <div>
          <iframe
            width="560"
            height="315"
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        </div>
      ) : null}
      <div>
        <Button
          texto="Give it a try"
          url="#pricing-section"
          onClick={undefined}
        />
      </div>
    </StyledVideo>
  );
};
