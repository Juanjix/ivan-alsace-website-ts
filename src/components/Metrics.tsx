"use client";

// Style
import styled from "styled-components";

const StyledMetrics = styled.section`
  background-color: #051b19;


  .cards-container{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 40px 0;
    font-weight: bold;

    @media screen and (min-width: 920px) {
      flex-direction: row;
    }

    .metrics-card {
      max-width: 290px;
      width: 100%;
      height: auto;
      border: 1px solid;
      border-radius: 18px;
      padding: 60px 32px;
      background-color: black;
      color white;
      margin-bottom: 40px;

      p {
        color: #E0C68F;
      }

      &.white{
        background-color: white;
        color: black;
        border: 1px solid black;
        p {
          color: black;
        }
      }

      &:hover{
        border: 1px solid  #E0C68F;
      }

      @media screen and (min-width: 920px) {
        margin-bottom: 0;
      }
    }
  }
`;

const Metrics = () => {
  return (
    <StyledMetrics>
      <h2 className="titulo">Metrics sections + CTA</h2>
      <p>
        Our metrics component gives you the inside scoop on your success and
        helps you stay on top of your game in style.
      </p>

      <div className="cards-container">
        <div className="metrics-card">
          <h3>10k+</h3>
          <p>Website Lounched</p>
        </div>
        <div className="metrics-card">
          <h3>931k+</h3>
          <p>Projects created with anima</p>
        </div>
        <div className="metrics-card white">
          <h3>240k+</h3>
          <p>New users joined Anima</p>
        </div>
        <div className="metrics-card white">
          <h3>12k+</h3>
          <p>Teams used Anima</p>
        </div>
      </div>
    </StyledMetrics>
  );
};

export default Metrics;
