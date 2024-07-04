"use client"

import React from "react"

// Libraries
import styled from "styled-components"

// Types
import { TypeSeccionesFields } from "@/types/contentful-types"

const StyledSeccion = styled.section``

const Seccion: React.FC<TypeSeccionesFields> = (props) => {
  /**
   * PROPS
   */
  const { backgroundColor, nombreInterno } = props

  const nombre = nombreInterno as string

  return (
    <StyledSeccion
      style={{
        backgroundColor: backgroundColor === "Negro" ? "#000" : "green",
      }}
    >
      {nombreInterno}
    </StyledSeccion>
  )
}

export default Seccion
