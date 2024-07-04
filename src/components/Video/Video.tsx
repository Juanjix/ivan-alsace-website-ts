"use client"

// Props
import { VideoProps } from "@/types/types"

// Motion
import { motion } from "framer-motion"

// Styled
import styled from "styled-components"
import { Button } from "../Button"

const StyledVideo = styled.section`
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
`

export const Video = (props: VideoProps) => {
  const { titulo, url } = props
  return (
    <StyledVideo>
      <motion.div
        initial={{ y: 32, opacity: 0, scale: 0.99 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
        }}
      >
        <h2 className="titulo">{titulo}</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/o_mMMiT27yQ?si=5Q7XiUQ4vHM13ul3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </motion.div>
      <Button texto="Give it a try" url="/" />
    </StyledVideo>
  )
}
