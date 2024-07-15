"use client";

// React
import React, { useState, useEffect } from "react";

// Types
import {
  TypeHeroSkeleton,
  TypeMetricaSkeleton,
  TypeMetricsSkeleton,
  TypePreguntaFrecuenteSkeleton,
  TypePreguntasFrecuentesSkeleton,
  TypeTestimoniosSkeleton,
  TypeVideoSkeleton,
  TypeSwipeSkeleton,
} from "@/types/contentful-types";

// Components
import Hero from "@/components/Hero";
import Seccion from "@/components/Seccion";
import { Testimonios } from "@/components/Testimonios";
import { Entry } from "contentful";
import { Video } from "@/components/Video";
import { Metrics } from "@/components/Metrics";
import Pricing from "@/components/Pricing";
import { PreguntasFrecuentes } from "@/components/PreguntasFrecuentes";
import Swipe from "@/components/Swipe";

// Client
import { resolveLinks } from "@/app/client";

// Define the PageProps interface
interface PageProps {
  sections?: Entry<
    | TypeHeroSkeleton
    | TypePreguntasFrecuentesSkeleton
    | TypeTestimoniosSkeleton
    | TypeVideoSkeleton
    | TypeMetricsSkeleton
    | TypeSwipeSkeleton
  >[];
}

const Page: React.FC<PageProps> = (props) => {
  const { sections } = props;

  const [resolvedFaqs, setResolvedFaqs] = useState<
    Entry<TypePreguntaFrecuenteSkeleton>[]
  >([]);

  const [resolvedMetrics, setResolvedMetrics] = useState<
    Entry<TypeMetricaSkeleton>[]
  >([]);

  const [metricsTitulo, setMetricsTitulo] = useState<string>("");
  const [metricsSubtitulo, setMetricsSubtitulo] = useState<string>("");

  useEffect(() => {
    const fetchFaqs = async () => {
      const faqSection = sections?.find(
        (s) => s.sys.contentType.sys.id === "preguntasFrecuentes"
      ) as Entry<TypePreguntasFrecuentesSkeleton> | undefined;

      if (faqSection) {
        const faqLinks = faqSection.fields.preguntaFrecuente;
        const resolvedFaqEntries =
          await resolveLinks<TypePreguntaFrecuenteSkeleton>(
            faqLinks,
            "preguntaFrecuente"
          );
        setResolvedFaqs(resolvedFaqEntries);
      }
    };

    const fetchMetrics = async () => {
      const metricSection = sections?.find(
        (s) => s.sys.contentType.sys.id === "metrics"
      ) as Entry<TypeMetricsSkeleton> | undefined;

      if (metricSection) {
        const metricLinks = metricSection.fields.metrica;
        const metricsTitulo = metricSection.fields.titulo;
        const metricsSubtitulo = metricSection.fields.subtitulo;
        const resolvedMetricEntries = await resolveLinks<TypeMetricaSkeleton>(
          metricLinks,
          "metrica"
        );
        setResolvedMetrics(resolvedMetricEntries);
        setMetricsTitulo(metricsTitulo || "");
        setMetricsSubtitulo(metricsSubtitulo || "");
      }
    };

    fetchFaqs();
    fetchMetrics();
  }, [sections]);

  const components: React.JSX.Element[] = [];

  sections?.forEach((s) => {
    const seccion = s as Entry;
    const contentType = seccion.sys.contentType.sys.id;

    switch (contentType) {
      case "hero":
        const data = seccion as Entry<TypeHeroSkeleton>;
        const props = data.fields;
        components.push(<Hero key={seccion.sys.id} {...props} />);
        break;

      case "testimonios":
        const dato = seccion as Entry<TypeTestimoniosSkeleton>;
        const datos = dato.fields;
        components.push(<Testimonios key={seccion.sys.id} {...datos} />);
        break;

      case "video":
        const dataVideo = seccion as Entry<TypeVideoSkeleton>;
        const dataVideos = dataVideo.fields;
        components.push(<Video key={seccion.sys.id} {...dataVideos} />);
        break;

      case "preguntasFrecuentes":
        components.push(
          <PreguntasFrecuentes key={seccion.sys.id} faqs={resolvedFaqs} />
        );
        break;

      case "swipe":
        const swipe = seccion as Entry<TypeSwipeSkeleton>;

        console.log(swipe.fields);

        components.push(
          <Swipe
            titulo={swipe.fields.titulo}
            texto={swipe.fields.texto}
            posicionDeLaImagen={swipe.fields.posicinDeLaImagen}
            imagen={swipe.fields.imagen}
            key={seccion.sys.id}
          />
        );
        break;

      case "metrics":
        components.push(
          <Metrics
            key={seccion.sys.id}
            metricas={resolvedMetrics}
            titulo={metricsTitulo}
            subtitulo={metricsSubtitulo}
          />
        );
        break;

      case "secciones":
        components.push(<Seccion key={seccion.sys.id} {...seccion.fields} />);
        break;

      default:
        break;
    }
  });

  return (
    <main>
      {components.map((component) => component)}
      <Pricing />
    </main>
  );
};

export default Page;
