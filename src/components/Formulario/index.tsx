// src/components/Formulario.tsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  background: linear-gradient(
    180deg,
    #000000 0%,
    #000000 20%,
    #051b19 90%,
    #051b19 100%
  );

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  padding-top: 40px;

  h3 {
    margin-bottom: 40px;
    color: #e0c68f;
  }
`;

const StyledForm = styled.form`
  background: black;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  max-height: 90vh; /* Ajusta el alto máximo del formulario */
  overflow-y: auto; /* Permite el scroll vertical */
  position: relative;

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    color: #e0c68f;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }

  .form-group {
    margin-bottom: 20px;

    input,
    textarea {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border-radius: 4px;
      border: 1px solid #ccc;
      font-size: 16px;
      color: black;
    }

    textarea {
      resize: vertical;
      height: 100px;
    }
  }

  .checkbox-group {
    display: flex;
    flex-wrap: wrap;

    label {
      display: block;
      width: 100%;
      margin-bottom: 10px;
      font-size: 14px;
      color: white;

      input {
        margin-right: 10px;
        color: black;
      }
    }
  }

  button[type="submit"] {
    padding: 10px 20px;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    background: linear-gradient(102.47deg, #c4b061 -5.34%, #574a4a 106.58%);
    padding: 20px 48px;
    border-radius: 8px;
    transition: all 0.5s ease-out;

    &:hover {
      border: 1px solid #e0c68f;
      background-color: transparent;
      color: white;
    }
  }

  button[type="button"] {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background: #ccc;
    color: black;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s;
    margin-left: 10px;

    &:hover {
      background: #999;
    }
  }
`;

interface FormularioProps {
  onClose: () => void;
}

const Formulario: React.FC<FormularioProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [musicReferences, setMusicReferences] = useState("");
  const [otherCategory, setOtherCategory] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          projectTitle,
          projectDescription,
          musicReferences,
          otherCategory,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      alert("Email sent successfully");
    } catch (error: any) {
      alert(`Error: ${error.message || error}`);
    }
    onClose();
  };

  return (
    <Overlay>
      <h3 className="titulo">COMPLETA EL SIGUIENTE FORMULARIO</h3>
      <StyledForm onSubmit={handleSubmit}>
        <button type="button" className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="form-group">
          <h3>Your Name:</h3>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <h3>Your Email:</h3>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <h3>Project Category:</h3>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="category" value="standard_film" />
              Standard Film (60 minutes or more)
            </label>
            <label>
              <input type="checkbox" name="category" value="indie_film" />
              Indie Film (60 minutes or more)
            </label>
            <label>
              <input type="checkbox" name="category" value="short_film" />
              Short Film
            </label>
            <label>
              <input type="checkbox" name="category" value="series" />
              Series
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="standard_video_game"
              />
              Standard Video Game
            </label>
            <label>
              <input type="checkbox" name="category" value="indie_video_game" />
              Indie Video Game
            </label>
            <label>
              <input type="checkbox" name="category" value="major_ads" />
              Major Ads
            </label>
            <label>
              <input type="checkbox" name="category" value="indie_ads" />
              Indie Ads
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="social_media_content"
              />
              Content for Social Media
            </label>
            <label>
              <input type="checkbox" name="category" value="other" />
              Other
              <input
                type="text"
                name="other_category"
                value={otherCategory}
                onChange={(e) => setOtherCategory(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="form-group">
          <h3>Project Title:</h3>
          <input
            type="text"
            name="project_title"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <h3>What is the project about?</h3>
          <textarea
            name="project_description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required></textarea>
        </div>
        <div className="form-group">
          <h3>
            What type of music do you need? If you have references, please
            provide them:
          </h3>
          <textarea
            name="music_references"
            value={musicReferences}
            onChange={(e) => setMusicReferences(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <h3>Rights and Ownership</h3>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="rights" value="exclusive_use" />
              Exclusive Use
            </label>
            <label>
              <input type="checkbox" name="rights" value="broadcast_rights" />
              Broadcast Rights
            </label>
          </div>
        </div>
        <div className="form-group">
          <button type="submit">Send</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </StyledForm>
    </Overlay>
  );
};

export default Formulario;
