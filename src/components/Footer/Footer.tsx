"use client";

// Styled
import styled from "styled-components";

// Icons
import Facebook from "@/../public/icons/facebook";
import Twitter from "@/../public/icons/twitter";
import Soundcloud from "@/../public/icons/soundcloud";
import Image from "next/image";
import { Entry } from "contentful";
import React from "react";
import { TypeFooterSkeleton } from "@/types/contentful-types";

const StyledFooter = styled.footer`
  text-align: center;
  padding: 20px 0;
  background: linear-gradient(180deg, #051b19, #000000);

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    list-style-type: none;

    img {
      margin-left: 12px;
      margin-right: 12px;

      &:hover {
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
        -webkit-transform: scale(0.9);
        border-radius: 18px;
      }
    }
  }

  .line {
    border: 1px solid white;
    max-width: 1120px;
    display: flex;
    margin: 22px auto;
  }
`;

interface FooterProps {
  footers: Entry<TypeFooterSkeleton>[];
}

export const Footer: React.FC<FooterProps> = ({ footers }) => {
  console.log(" Esta es la data que viene del footer ---> ", footers);
  return (
    <StyledFooter>
      <div className="icons">
        <ul className="icons">
          {footers &&
            footers.map((footer) => (
              <li key={footer.sys.id}>
                {footer.fields.link && (
                  <a href={footer.fields.link} target="_black" rel="noreferrer">
                    {footer.fields.icono && (
                      <Image
                        src={`https:${footer.fields.icono.fields.file.url}`}
                        alt={footer.fields.icono.fields.title || "Icon"}
                        width={30}
                        height={30}
                      />
                    )}
                  </a>
                )}
              </li>
            ))}
        </ul>
      </div>

      <span className="line" />
      <p>© 2024. All rights reserved.</p>
    </StyledFooter>
  );
};
