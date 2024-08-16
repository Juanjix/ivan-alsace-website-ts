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
      width: 100%;
    }
  }

  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    text-align: start;
    margin: 0 auto;
    justify-content: center !important;
    width: 198px;
    white-space: nowrap;

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

    .ejemplo {
      display: flex;
      flex-direction: column;
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
  selectedCategory: string | null;
}

const Formulario: React.FC<FormularioProps> = ({
  onClose,
  selectedCategory,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [musicReferences, setMusicReferences] = useState("");
  const [otherCategory, setOtherCategory] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRights, setSelectedRights] = useState<string[]>([]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(value)) {
        // Si la categoría ya está seleccionada, la removemos
        return prevCategories.filter((category) => category !== value);
      } else {
        // Si la categoría no está seleccionada, la agregamos
        return [...prevCategories, value];
      }
    });
  };
  const handleRightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedRights((prevRight) => {
      if (prevRight.includes(value)) {
        // Si la categoría ya está seleccionada, la removemos
        return prevRight.filter((category) => category !== value);
      } else {
        // Si la categoría no está seleccionada, la agregamos
        return [...prevRight, value];
      }
    });
  };

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
          selectedCategory,
          selectedCategories,
          selectedRights,
        }),
      });

      const textResponse = await response.text();
      // const data = await response.json();
      console.log("Server Response:", textResponse);

      if (!response.ok) {
        throw new Error("Error al enviar el correo.");
      }
      const data = await JSON.parse(textResponse);
      alert("Email sent successfully");
    } catch (error: any) {
      alert(`Error: ${error.message || error}`);
    }
    onClose();
  };

  return (
    <Overlay>
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
              <input
                type="checkbox"
                name="category"
                value="social_media_content"
                onChange={handleCategoryChange}
              />
              Content for social media (e.g., YouTube)
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="standard_film"
                onChange={handleCategoryChange}
              />
              Standard Film (60 minutes or more)
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="indie_film"
                onChange={handleCategoryChange}
              />
              Indie Film (60 minutes or more)
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="short_film"
                onChange={handleCategoryChange}
              />
              Short Film
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="series"
                onChange={handleCategoryChange}
              />
              Series
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="standard_video_game"
                onChange={handleCategoryChange}
              />
              Standard Video Game
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="indie_video_game"
                onChange={handleCategoryChange}
              />
              Indie Video Game
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="major_ads"
                onChange={handleCategoryChange}
              />
              Major Ads
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="indie_ads"
                onChange={handleCategoryChange}
              />
              Indie Ads
            </label>
            <label>
              Other{"  "}
              <input
                type="text"
                name="category"
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
              <input
                type="checkbox"
                name="rights"
                value="exclusive_use"
                onChange={handleRightChange}
              />
              Exclusive Use
            </label>
            <label>
              <input
                type="checkbox"
                name="rights"
                value="broadcast_rights"
                onChange={handleRightChange}
              />
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
