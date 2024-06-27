// Props
import { ButtonProps } from "@/types/types";

// Style
import styled from "styled-components";

const StyledButton = styled.a`
  background-color: #e0c68f;
  padding: 18px 32px;

  &:hover {
    border: 1px solid #e0c68f;
    background-color: black;
    color: white;
  }
`;

export const Button = (props: ButtonProps) => {
  const { texto, url } = props;
  return <StyledButton href={url}>{texto}</StyledButton>;
};
