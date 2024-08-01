// src/components/Pricing.tsx
import React, { useState } from "react";
import styled from "styled-components";

import Check from "../../public/icons/check/index";

import Image from "next/image";
import PricingImage from "@/../public/icons/icon-pricing.svg";
import Formulario from "./Formulario";

// Components
import { Button } from "./Button";

const StyledPricing = styled.section`
  background: linear-gradient(180deg, #000000, #051b19);
  .pricing-cards-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 40px;
    position: relative;

    @media (min-width: 920px) {
      flex-direction: row;
    }

    .pricing-card {
      max-width: 370px;
      width: 100%;
      height: auto;
      border: 1px solid grey;
      border-radius: 18px;
      padding: 40px 10px;
      position: relative;
      z-index: 1;

      .pricing-image {
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 9999;
      }

      h3 {
        margin-bottom: 22px;
      }

      ul {
        list-style: none;
        padding-left: 0;

        li {
          margin-bottom: 25px;
          display: flex;
          justify-content: center;

          &:last-of-type {
            margin-bottom: 45px;
          }

          svg {
            width: 30px;
            height: 30px;
          }
        }
      }

      &:hover {
        border: 1px solid #e0c68f;
      }

      button{
        background: linear-gradient(102.47deg, #c4b061 -5.34%, #574a4a 106.58%);
        padding: 20px 48px;
        border-radius: 8px;
        transition: all 0.5s ease-out;

        &:hover {
          border: 1px solid #e0c68f;
          background-color: transparent;
          color: white;
        }
      }
  }
`;

const Pricing = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleButtonClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleCloseForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <StyledPricing>
      <h2>Select One Of The Payment Options Below Now</h2>
      <p>
        To reduce your waiting time and get straight to the point, fill out this
        simple form
      </p>
      <div className="pricing-cards-container">
        <div className="pricing-card">
          <h3>Started</h3>
          <ul>
            <li>
              <Check />
              The only sample pack you need to finally produce placement-worthy
              beats
            </li>
            <li>
              <Check />
              The only sample pack you need to finally produce placement-worthy
              beats
            </li>
            <li>
              <Check />
              ​Destroy beat block once and for all by having infinite
              inspiration at your fingertips
            </li>
            <li>
              <Check />
              Skyrocket your beat sales by producing the hottest beats on the
              market
            </li>
          </ul>
          <button onClick={handleButtonClick}>Get the blueprint now</button>
        </div>
        <div className="pricing-card">
          <div className="pricing-image">
            <Image src={PricingImage} alt="" width={60} height={60} />
          </div>
          <h3>Professional</h3>
          <ul>
            <li>
              <Check />
              The only sample pack you need to finally produce placement-worthy
              beats
            </li>
            <li>
              <Check />
              The only sample pack you need to finally produce placement-worthy
              beats
            </li>
            <li>
              <Check />
              ​Destroy beat block once and for all by having infinite
              inspiration at your fingertips
            </li>
            <li>
              <Check />
              Skyrocket your beat sales by producing the hottest beats on the
              market
            </li>
          </ul>
          <button onClick={handleButtonClick}>Get the blueprint now</button>
        </div>
        <div className="pricing-card">
          <h3>Team</h3>
          <ul>
            <li>
              <Check />
              The only sample pack you need to finally produce placement-worthy
              beats
            </li>
            <li>
              <Check />
              The only sample pack you need to finally produce placement-worthy
              beats
            </li>
            <li>
              <Check />
              ​Destroy beat block once and for all by having infinite
              inspiration at your fingertips
            </li>
            <li>
              <Check />
              Skyrocket your beat sales by producing the hottest beats on the
              market
            </li>
          </ul>
          <button onClick={handleButtonClick}>Get the blueprint now</button>
        </div>
      </div>
      {isFormVisible && <Formulario onClose={handleCloseForm} />}
    </StyledPricing>
  );
};

export default Pricing;
