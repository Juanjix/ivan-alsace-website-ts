import React from "react";

// Types
import {
  TypeHeroSkeleton,
  TypePaginasFields,
  TypeTestimoniosSkeleton,
  TypeVideoSkeleton,
} from "@/types/contentful-types";

// Components
import Hero from "@/components/Hero";
import Seccion from "@/components/Seccion";
import { Testimonios } from "@/components/Testimonios";
import { Entry } from "contentful";
import { Video } from "@/components/Video";

interface PageProps {
  sections?: TypePaginasFields["sections"];
}

const Page: React.FC<PageProps> = (props) => {
  const { sections } = props;

  const components: React.JSX.Element[] = [];

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
