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
}

const StyledVideo = styled(motion.section)`
  background-color: #051b19;

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
  const { titulo, videoCode } = props;

  const url = `https://www.youtube.com/embed/${videoCode}`;
  return (
    <StyledVideo
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}>
      <div>
        <h2 className="titulo">{titulo ? titulo : ""}</h2>
      </div>

      {videoCode ? (
        <div>
          <iframe
            width="560"
            height="315"
            src={url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        </div>
      ) : (
        ""
      )}
      <div>
        <Button texto="Give it a try" url="/" />
      </div>
    </StyledVideo>
  );
};
