// Styled
import styled from "styled-components";

// Icons
import Facebook from "@/../public/icons/facebook";
import Tiktok from "@/../public/icons/tiktok";
import Twitter from "@/../public/icons/twitter";
import Soundcloud from "@/../public/icons/soundcloud";

const StyledFooter = styled.footer`
  text-align: center;
  padding: 20px 0;
  .line {
    border: 1px solid white;
    max-width: 1120px;
    display: flex;
    margin: 0 auto;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Facebook />
        <Twitter />
        <Soundcloud />
        <span className="line" />
        <p>© 2024. All rights reserved.</p>
      </div>
    </StyledFooter>
  );
};
