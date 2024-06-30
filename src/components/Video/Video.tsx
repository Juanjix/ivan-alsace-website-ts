// Props
import { VideoProps } from "@/types/types";

// Styled
import styled from "styled-components";

const StyledVideo = styled.section`
  background-color: #051b19;

  iframe {
    margin: 20px auto;
  }
`;

export const Video = (props: VideoProps) => {
  const { titulo, url } = props;
  return (
    <StyledVideo>
      <h2 className="titulo">{titulo}</h2>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/o_mMMiT27yQ?si=5Q7XiUQ4vHM13ul3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
    </StyledVideo>
  );
};
