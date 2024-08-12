// Props
import { ButtonProps } from "@/types/types";

// Style
import styled from "styled-components";

const StyledButton = styled.a`
  background: linear-gradient(102.47deg, #c4b061 -5.34%, #574a4a 106.58%);
  padding: 20px 48px;
  border-radius: 8px;
  transition: all 0.5s ease-out;
  border: 1px solid black;

  &:hover {
    border: 1px solid #e0c68f;
    background-color: transparent;
    color: white;
  }
`;

export const Button = (props: ButtonProps) => {
  const { texto, url, onClick } = props;
  return (
    <StyledButton href={url} onClick={() => {}}>
      {texto}
    </StyledButton>
  );
};
