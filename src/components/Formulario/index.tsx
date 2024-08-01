// src/components/Formulario.tsx
import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  scroll-behavior: none;
`;

const StyledForm = styled.form`
  background: white;
  color: black;
  border-radius: 16px;
  padding: 20px;
  max-width: 90vw; /* 90% of viewport width */
  max-height: 400px;
  width: 100%;
  height: auto;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* Enable vertical scrolling if needed */
  position: relative;

  h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .form-group {
    margin-bottom: 20px;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 8px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    font-size: 1rem;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  .checkbox-group {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }

  .checkbox-group label {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    font-size: 0.9rem;
  }

  .checkbox-group input {
    margin-right: 10px;
  }

  input[type="text"][name="other_category"] {
    width: auto;
    margin-left: 10px;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #f44336;
    color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 8px;
  }
`;

interface FormularioProps {
  onClose: () => void;
}

const Formulario: React.FC<FormularioProps> = ({ onClose }) => {
  return (
    <Overlay>
      <StyledForm>
        <button type="button" className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="form-group">
          <h3>Your Name:</h3>
          <input type="text" name="name" required />
        </div>
        <div className="form-group">
          <h3>Your Email:</h3>
          <input type="email" name="email" required />
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
              <input type="text" name="other_category" />
            </label>
          </div>
        </div>
        <div className="form-group">
          <h3>Project Title:</h3>
          <input type="text" name="project_title" required />
        </div>
        <div className="form-group">
          <h3>What is the project about?</h3>
          <textarea name="project_description" required></textarea>
        </div>
        <div className="form-group">
          <h3>
            What type of music do you need? If you have references, please
            provide them:
          </h3>
          <textarea name="music_references"></textarea>
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
      </StyledForm>
    </Overlay>
  );
};

export default Formulario;
