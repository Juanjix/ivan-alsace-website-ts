import React, { useState } from "react";
import styled from "styled-components";
import Check from "../../public/icons/check/index";
import Formulario from "./Formulario";
import { Entry } from "contentful";
import { TypePaymentCardSkeleton } from "@/types/contentful-types";

// Icons
import IconPricing from "../../public/icons/icon-pricing";

interface PrincingProps {
  titulo: string;
  payments: Entry<TypePaymentCardSkeleton>[];
  subtitulo: string;
  backgroundPosition: "arriba" | "abajo";
}

const getBackgroundPositionStyles = (position: "arriba" | "abajo") => {
  if (position === "arriba") {
    return `
      background: linear-gradient(
      0deg,
      #000000 0%,
      #000000 20%,
      #051b19 90%, 
      #051b19 100%
      );
    `;
  }
  return `
    background: linear-gradient(
      180deg,
      #000000 0%,
      #000000 20%,
      #051b19 90%, 
      #051b19 100%
    );
  `;
};

const StyledPricing = styled.section<{
  backgroundPosition: "arriba" | "abajo";
}>`
  background: linear-gradient(180deg, #000000, #051b19);
  ${({ backgroundPosition }) => getBackgroundPositionStyles(backgroundPosition)}
  .pricing-cards-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 40px;

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: stretch;
    }

    .pricing-card {
      max-width: 370px;
      width: 100%;
      border: 1px solid grey;
      border-radius: 18px;
      padding: 40px 20px;
      position: relative;
      z-index: 1;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between; /* Ajuste importante */

      .icon-pricing {
        position: absolute;
        top: 10px; /* Ajusta según sea necesario */
        right: 10px; /* Ajusta según sea necesario */
      }

      h3 {
        margin-bottom: 22px;
      }

      ul {
        list-style: none;
        padding-left: 0;
        text-align: start;

        li {
          margin-bottom: 25px;
          display: flex;
          max-width: 300px;
          height: auto;
          margin-left: 40px;

          &:last-of-type {
            margin-bottom: 45px;
          }

          svg {
            margin-right: 12px;
            position: absolute;
            left: 10px;
          }
        }
      }

      &:hover {
        border: 1px solid #e0c68f;
      }

      button {
        background: linear-gradient(102.47deg, #c4b061 -5.34%, #574a4a 106.58%);
        padding: 20px 48px;
        border-radius: 8px;
        transition: all 0.5s ease-out;
        align-self: center;
        margin-top: auto;
        white-space: nowrap;
        border: 1px solid black;

        &:hover {
          border: 1px solid #e0c68f;
          background-color: transparent;
          color: white;
        }
      }

      .deshabilitado {
        cursor: not-allowed;
      }
    }
  }
`;

const Pricing: React.FC<PrincingProps> = ({
  titulo,
  subtitulo,
  backgroundPosition,
  payments,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleButtonClick = (category: string) => {
    setSelectedCategory(category);
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
    setSelectedCategory(null);
  };
  const parseText = (text: string) => {
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    return lines.map((line, index) => {
      if (line.startsWith(`${(<Check />)}`)) {
        return <li key={index}>{line.substring(2)}</li>;
      }
      return (
        <li key={index}>
          <Check />
          {line}
        </li>
      );
    });
  };
  return (
    <StyledPricing backgroundPosition={backgroundPosition} id="pricing-section">
      <h2>{titulo}</h2>
      <p>{subtitulo}</p>
      <div className="pricing-cards-container">
        {payments &&
          payments.map((payment) => (
            <div className="pricing-card" key={payment.sys.id}>
              {payment.fields.titulo === "Profesional" && (
                <div className="icon-pricing">
                  <IconPricing />
                </div>
              )}
              <h3>{payment.fields.titulo}</h3>
              <ul>{parseText(payment.fields.contenido)}</ul>
              {payment.fields.deshabilitarBoton ? (
                <button className="deshabilitado">SOLD OUT</button>
              ) : (
                <button
                  onClick={() => handleButtonClick(payment.fields.titulo)}>
                  Select {payment.fields.titulo}
                </button>
              )}
            </div>
          ))}
      </div>
      {isFormVisible && (
        <Formulario
          onClose={handleCloseForm}
          selectedCategory={selectedCategory}
        />
      )}
    </StyledPricing>
  );
};

export default Pricing;
