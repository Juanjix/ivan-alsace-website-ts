// Style
import styled from "styled-components";

// Components
import { Acordeon } from "../Acordeon/Acordeon";

const StyledPreguntasFrecuentes = styled.section``;

export const PreguntasFrecuentes = () => {
  const Informacion = [
    {
      pregunta: "Lo podré usar comercialmente ",
      respuesta:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      pregunta: "Tendré problemas de copyright ",
      respuesta:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      pregunta: "Claims en mí canal?",
      respuesta:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      pregunta: "Cuánto tiempo tardará",
      respuesta:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      pregunta: "Cuánto sale",
      respuesta:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      pregunta: "Quien es Iván elsasser y que ha logrado",
      respuesta:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      pregunta: "Cuales son los métodos de pago",
      respuesta:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
  ];
  return (
    <StyledPreguntasFrecuentes>
      <div className="container">
        <h2 className="titulo">Componente Preguntas Frecuentes</h2>
        {Informacion.map((info, key) => {
          return (
            <Acordeon
              pregunta={info.pregunta}
              respuesta={info.respuesta}
              key={key}
            />
          );
        })}
      </div>
    </StyledPreguntasFrecuentes>
  );
};
