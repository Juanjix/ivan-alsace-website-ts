"use client";

import React from "react";
import styled from "styled-components";
import { TypeSeccionesFields } from "@/types/contentful-types";

const StyledSeccion = styled.section``;

const Seccion: React.FC<TypeSeccionesFields> = (props) => {
  const { backgroundColor, nombreInterno } = props;

  // Aseguramos que el nombreInterno sea tratado como string
  const nombre = nombreInterno as unknown as string;

  // Utilizamos una función para manejar la conversión del color
  const getBackgroundColor = (color: string): string => {
    switch (color) {
      case "Negro":
        return "#000";
      case "Verde":
        return "green";
      default:
        return "transparent";
    }
  };

  return (
    <StyledSeccion
      style={{
        backgroundColor: getBackgroundColor(
          backgroundColor as unknown as string
        ),
      }}>
      {nombre}
    </StyledSeccion>
  );
};

export default Seccion;
