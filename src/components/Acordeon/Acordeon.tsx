// Props
import { PreguntasFrecuentesProps } from "@/types/types";

// Styles
import styled from "styled-components";

//Chakra
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const StyledAcordeon = styled.section``;

export const Acordeon = (props: PreguntasFrecuentesProps) => {
  const { pregunta, respuesta } = props;
  return (
    <StyledAcordeon>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
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
