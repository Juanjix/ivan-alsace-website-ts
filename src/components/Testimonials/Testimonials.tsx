// Props
import { TestimonialsProps } from "@/types/types";

// Imagen
import Image from "next/image";

// Styled
import styled from "styled-components";

const StyledTestominals = styled.section`
  .image-container {
    max-width: 420px;
    margin: 0 auto;
  }
`;

export const Testimonials = (props: TestimonialsProps) => {
  const { titulo, imagen } = props;
  return (
    <StyledTestominals>
      <h2 className="titulo">{titulo}</h2>
      <div className="image-container">
        <Image
          src={imagen}
          alt=""
          style={{
            width: "100%",
            height: "auto",
          }}
          width={600}
          height={300}
        />
      </div>
    </StyledTestominals>
  );
};
