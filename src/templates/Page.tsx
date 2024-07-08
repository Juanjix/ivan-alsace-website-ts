"use client";

import React, { useState, useEffect } from "react";

// Types
import {
  TypeHeroSkeleton,
  TypePaginasFields,
  TypeTestimoniosSkeleton,
  TypeVideoSkeleton,
  TypePreguntaFrecuenteSkeleton,
  TypePreguntasFrecuentesSkeleton,
} from "@/types/contentful-types";

// Components
import Hero from "@/components/Hero";
import Seccion from "@/components/Seccion";
import { Testimonios } from "@/components/Testimonios";
import { Entry } from "contentful";
import { Video } from "@/components/Video";
import { PreguntasFrecuentes } from "@/components/PreguntasFrecuentes";

// Function
import { resolveLinks } from "@/app/client";

interface PageProps {
  sections?: TypePaginasFields["sections"];
}

const Page: React.FC<PageProps> = (props) => {
  const { sections } = props;

  const components: React.JSX.Element[] = [];

  const [resolvedFAQs, setResolvedFAQs] = useState<
    Entry<TypePreguntasFrecuentesSkeleton>[]
  >([]);

  useEffect(() => {
    async function fetchFAQs() {
      const faqsSection = sections?.find(
        (s: { sys: { contentType: { sys: { id: string } } } }) =>
          s.sys.contentType.sys.id === "preguntasFrecuentes"
      ) as Entry<TypePreguntasFrecuentesSkeleton>;
      if (faqsSection) {
        const resolvedLinks = await resolveLinks(
          faqsSection.fields.preguntasFrecuentes
        );
        setResolvedFAQs(resolvedLinks);
      }
    }
    fetchFAQs();
  }, [sections]);

  sections?.forEach((s) => {
    const seccion = s as Entry;
    const contentType = seccion.sys.contentType.sys.id;

    switch (contentType) {
      case "hero":
        const data = seccion as Entry<TypeHeroSkeleton>;
        const props = data.fields;
        components.push(<Hero {...props} />);
        break;

      case "testimonios":
        const dato = seccion as Entry<TypeTestimoniosSkeleton>;
        const datos = dato.fields;
        components.push(<Testimonios {...datos} />);
        break;

      case "video":
        const dataVideo = seccion as Entry<TypeVideoSkeleton>;
        const dataVideos = dataVideo.fields;
        components.push(<Video {...dataVideos} />);
        break;

      case "preguntasFrecuentes":
        components.push(<PreguntasFrecuentes faqs={resolvedFAQs} />);
        break;

      case "secciones":
        components.push(<Seccion {...seccion.fields} />);
        break;

      default:
        break;
    }
  });

  return <main>{components.map((component) => component)}</main>;
};

export default Page;
