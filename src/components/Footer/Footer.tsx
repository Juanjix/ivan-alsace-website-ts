// Styled
import styled from "styled-components";

// Icons
import Facebook from "@/../public/icons/facebook";
import Twitter from "@/../public/icons/twitter";
import Soundcloud from "@/../public/icons/soundcloud";

const StyledFooter = styled.footer`
  text-align: center;
  padding: 20px 0;
  background: linear-gradient(180deg, #051b19, #000000);

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 12px;
      margin-right: 12px;
    }
  }

  .line {
    border: 1px solid white;
    max-width: 1120px;
    display: flex;
    margin: 22px auto;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="icons">
        <Facebook />
        <Facebook />
        <Facebook />
        <Twitter />
        <Soundcloud />
        <Twitter />
        <Soundcloud />
      </div>
      <span className="line" />
      <p>© 2024. All rights reserved.</p>
    </StyledFooter>
  );
};
