// Props
import { ButtonProps } from "@/types/types";

// Style
import styled from "styled-components";

const StyledButton = styled.a`
  background-color: #e0c68f;
  padding: 20px 48px;
  border-radius: 8px;
  transition: all 0.5s ease-out;

  &:hover {
    border: 1px solid #e0c68f;
    background-color: transparent;
    color: white;
  }
`;

export const Button = (props: ButtonProps) => {
  const { texto, url } = props;
  return <StyledButton href={url}>{texto}</StyledButton>;
};
