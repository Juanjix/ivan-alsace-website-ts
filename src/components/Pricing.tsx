import styled from "styled-components";

const StyledPricing = styled.section`
  .pricing-cards-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;

    .pricing-card {
      max-width: 370px;
      width: 100%;
      height: auto;
      border: 1px solid grey;
      border-radius: 18px;
      padding: 40px 18px;
    }
  }
`;

const Pricing = () => {
  return (
    <StyledPricing>
      <h2 className="titulo">Select One Of The Payment Options Below Now</h2>
      <p>
        To reduce your waiting time and get straight to the point, fill out this
        simple form
      </p>
      <div className="pricing-cards-container">
        <div className="pricing-card">
          <h3>Started</h3>
          <ul>
            <li>lista de prueba</li>
          </ul>
          <ul>
            <li>lista de prueba</li>
          </ul>
          <ul>
            <li>lista de prueba</li>
          </ul>
          <ul>
            <li>lista de prueba</li>
          </ul>
        </div>
        <div className="pricing-card">
          <h3>Started</h3>
        </div>
        <div className="pricing-card">
          <h3>Started</h3>
        </div>
      </div>
    </StyledPricing>
  );
};

export default Pricing;
