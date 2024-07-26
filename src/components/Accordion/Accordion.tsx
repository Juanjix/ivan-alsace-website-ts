// src/components/Accordion.tsx
import React, { useState } from "react";
import styled from "styled-components";
import Arrow from "@/../public/icons/arrow";

// Definición de las propiedades del componente Accordion
interface AccordionProps {
  pregunta: string;
  respuesta: string;
  active?: boolean;
  className?: string;
}

interface StyledAccordionProps {
  active: boolean;
}

const StyledAccordion = styled.div<StyledAccordionProps>`
  padding-top: 24px;
  border-bottom: 1px solid white;
  text-align: start;

  &:last-of-type {
    border-bottom: none;
  }

  .accordion__toggler {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding-bottom: 15px;

    .toggler__arrow {
      flex-shrink: 0;
      margin-left: 50px;

      svg {
        transform: rotate(${(props) => (props.active ? "-180deg" : "0deg")});
        transition: transform 0.3s ease;

        * {
          fill: none;
          stroke: #e0c68f;
        }
      }
    }
  }

  .accordion__content {
    display: ${(props) => (props.active ? "block" : "none")};
    margin-bottom: 24px;

    li {
      list-style-type: disc;
      margin-left: 28px;
      margin-top: 4px;
    }

    a {
      color: var(--tangerine__500);
      text-decoration: underline;
    }
  }
`;

const Accordion: React.FC<AccordionProps> = ({
  pregunta,
  respuesta,
  active: defaultState = false,
  className = "",
}) => {
  const [active, setActive] = useState(defaultState);

  return (
    <StyledAccordion className={className} active={active}>
      <button
        type="button"
        className="accordion__toggler"
        onClick={() => setActive(!active)}>
        {pregunta}

        <div className="toggler__arrow">
          <Arrow />
        </div>
      </button>

      <div className="accordion__content text--18">
        <p>{respuesta}</p>
      </div>
    </StyledAccordion>
  );
};

export default Accordion;
