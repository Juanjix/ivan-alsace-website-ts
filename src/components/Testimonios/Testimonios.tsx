"use client"

// Props
import { TestimoniosProps } from "@/types/types"

// Imagen
import Image from "next/image"

// Styled
import styled from "styled-components"
import { Button } from "../Button"

const StyledTestimonios = styled.section`
  .image-container {
    max-width: 420px;
    margin: 30px auto 100px auto;
  }
`

export const Testimonios = (props: TestimoniosProps) => {
  const { titulo, imagen } = props
  return (
    <StyledTestimonios>
      <h2 className="titulo">{titulo}</h2>
      <div className="image-container">
        <Image
          src={imagen}
          alt=""
          style={{
            width: "100%",
            height: "auto",
          }}
          width={600}
          height={300}
        />
      </div>
      <Button texto="Give it a try" url="/" />
    </StyledTestimonios>
  )
}
