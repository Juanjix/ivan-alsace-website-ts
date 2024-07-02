// components/Acordeon.tsx
import React from "react";
import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const StyledAcordeon = styled.section``;

interface AcordeonProps {
  pregunta: string;
  respuesta: string;
}

export const Acordeon: React.FC<AcordeonProps> = ({ pregunta, respuesta }) => {
  return (
    <StyledAcordeon>
      <Accordion allowToggle>
        <AccordionItem>
          <h2 className="title">
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {pregunta}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={2}>{respuesta}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </StyledAcordeon>
  );
};
