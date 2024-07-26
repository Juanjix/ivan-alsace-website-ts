import styled from "styled-components";

import Check from "../../public/icons/check/index";

// Components
import { Button } from "./Button";

const StyledPricing = styled.section`
  background: linear-gradient(180deg, #000000, #051b19);
  .pricing-cards-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 40px;

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
    }
  }
`;

const Pricing = () => {
  return (
    <StyledPricing>
      <h2 className="">Select One Of The Payment Options Below Now</h2>
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
              {" "}
              <Check />
              ​Destroy beat block once and for all by having infinite
              inspiration at your fingertips
            </li>

            <li>
              {" "}
              <Check />
              Skyrocket your beat sales by producing the hottest beats on the
              market
            </li>
          </ul>
          <Button texto={"Get the blue print now"} url={""} />
        </div>
        <div className="pricing-card">
          <h3>Profesional</h3>
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
              {" "}
              <Check />
              ​Destroy beat block once and for all by having infinite
              inspiration at your fingertips
            </li>

            <li>
              {" "}
              <Check />
              Skyrocket your beat sales by producing the hottest beats on the
              market
            </li>
          </ul>
          <Button texto={"Get the blue print now"} url={""} />
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
              {" "}
              <Check />
              ​Destroy beat block once and for all by having infinite
              inspiration at your fingertips
            </li>

            <li>
              {" "}
              <Check />
              Skyrocket your beat sales by producing the hottest beats on the
              market
            </li>
          </ul>
          <Button texto={"Get the blue print now"} url={""} />
        </div>
      </div>
    </StyledPricing>
  );
};

export default Pricing;
