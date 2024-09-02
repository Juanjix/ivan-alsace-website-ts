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
  TypeSwipeSinImagenSkeleton,
  TypeGarantiaSkeleton,
  TypePaymentsSkeleton,
  TypeFooterSkeleton,
} from "@/types/contentful-types";

// Components
import Hero from "@/components/Hero";
import Seccion from "@/components/Seccion";
import { Testimonios } from "@/components/Testimonios";
import { Entry } from "contentful";
import { Video } from "@/components/Video";
import { Metrics } from "@/components/Metrics";
import { Garantia } from "@/components/Garantia";
import Pricing from "@/components/Pricing";
import { PreguntasFrecuentes } from "@/components/PreguntasFrecuentes";
import Swipe from "@/components/Swipe";

// Client
import { resolveLinks } from "@/app/client";
import { SwipeSinImagen } from "@/components/SwipeSinImagen";

// Define the PageProps interface
interface PageProps {
  sections?: Entry<
    | TypeHeroSkeleton
    | TypePreguntasFrecuentesSkeleton
    | TypeTestimoniosSkeleton
    | TypeVideoSkeleton
    | TypeMetricsSkeleton
    | TypeSwipeSkeleton
    | TypeSwipeSinImagenSkeleton
    | TypeGarantiaSkeleton
    | TypePaymentsSkeleton
    | TypeFooterSkeleton
  >[];
}

const Page: React.FC<PageProps> = (props) => {
  const { sections } = props;

  const [resolvedFaqs, setResolvedFaqs] = useState<{
    [key: string]: Entry<TypePreguntaFrecuenteSkeleton>[];
  }>({});

  const [faqBackgrounds, setFaqBackgrounds] = useState<{
    [key: string]: string;
  }>({});

  const [faqBackgroundColor, setFaqBackgroundColor] = useState<{
    [key: string]: string;
  }>({});
  const [resolvedMetrics, setResolvedMetrics] = useState<
    Entry<TypeMetricaSkeleton>[]
  >([]);

  const [resolvedPayments, setResolvedPayments] = useState<
    Entry<TypePaymentsSkeleton>[]
  >([]);

  const [metricsTitulo, setMetricsTitulo] = useState<string>("");
  const [metricsSubtitulo, setMetricsSubtitulo] = useState<string>("");
  const [metricsBackground, setMetricsBackground] = useState<string>("");
  const [metricsBackgroundColor, setMetricsBackgroundColor] =
    useState<string>("");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const paymentsSection = sections?.find(
          (s) => s.sys.contentType.sys.id === "payments"
        ) as Entry<TypePaymentsSkeleton> | undefined;

        if (paymentsSection) {
          const paymentsLinks = paymentsSection.fields.payments;
          if (paymentsLinks) {
            const validPaymentsLinks = paymentsLinks.filter(
              (
                link: any
              ): link is {
                sys: { id: string; linkType: string; type: string };
              } => link !== undefined && "sys" in link
            );
            const resolvedPaymentsEntries =
              await resolveLinks<TypePaymentsSkeleton>(
                validPaymentsLinks,
                "paymentCard"
              );
            setResolvedPayments(resolvedPaymentsEntries);
          }
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    const fetchFaqs = async () => {
      try {
        // Filtra todas las secciones de FAQs
        const faqSections = sections?.filter(
          (s) => s.sys.contentType.sys.id === "preguntasFrecuentes"
        ) as Entry<TypePreguntasFrecuentesSkeleton>[] | undefined;

        if (faqSections) {
          const faqEntries = await Promise.all(
            faqSections.map(async (faqSection) => {
              const faqLinks = faqSection.fields.preguntaFrecuente;
              const backgroundPosition =
                faqSection.fields.backgroundPosition || "";
              const backgroundColor = faqSection.fields.backgroundColor || "";

              if (faqLinks) {
                const validFaqLinks = faqLinks.filter(
                  (
                    link: any
                  ): link is {
                    sys: { id: string; linkType: string; type: string };
                  } => link !== undefined && "sys" in link
                );
                const resolvedFaqEntries =
                  await resolveLinks<TypePreguntaFrecuenteSkeleton>(
                    validFaqLinks,
                    "preguntaFrecuente"
                  );
                return {
                  id: faqSection.sys.id,
                  faqs: resolvedFaqEntries,
                  backgroundPosition: backgroundPosition,
                  backgroundColor: backgroundColor,
                };
              }
              return {
                id: faqSection.sys.id,
                faqs: [],
                backgroundPosition: backgroundPosition,
                backgroundColor: backgroundColor,
              };
            })
          );

          // Actualiza el estado con los FAQs resueltos y backgroundPositions
          const faqsMap = faqEntries.reduce((acc, entry) => {
            acc[entry.id] = entry.faqs;
            return acc;
          }, {} as { [key: string]: Entry<TypePreguntaFrecuenteSkeleton>[] });

          const backgroundMap = faqEntries.reduce((acc, entry) => {
            acc[entry.id] = entry.backgroundPosition;
            return acc;
          }, {} as { [key: string]: string });

          const backgroundColor = faqEntries.reduce((acc, entry) => {
            acc[entry.id] = entry.backgroundColor;
            return acc;
          }, {} as { [key: string]: string });

          setResolvedFaqs(faqsMap);
          setFaqBackgrounds(backgroundMap);
          setFaqBackgroundColor(backgroundColor);
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    const fetchMetrics = async () => {
      try {
        const metricSection = sections?.find(
          (s) => s.sys.contentType.sys.id === "metrics"
        ) as Entry<TypeMetricsSkeleton> | undefined;

        if (metricSection) {
          const metricLinks = metricSection.fields.metrica;
          const metricsTitulo = metricSection.fields.titulo;
          const metricsSubtitulo = metricSection.fields.subtitulo;
          const metricsBackground = metricSection.fields.backgroundPosition;
          const metricsBackgroundColor = metricSection.fields.backgroundColor;
          if (metricLinks) {
            const validMetricLinks = metricLinks.filter(
              (
                link: any
              ): link is {
                sys: { id: string; linkType: string; type: string };
              } => link !== undefined && "sys" in link
            );
            const resolvedMetricEntries =
              await resolveLinks<TypeMetricaSkeleton>(
                validMetricLinks,
                "metrica"
              );
            setResolvedMetrics(resolvedMetricEntries);
            setMetricsTitulo(metricsTitulo || "");
            setMetricsSubtitulo(metricsSubtitulo || "");
            setMetricsBackground(metricsBackground || "");
            setMetricsBackgroundColor(metricsBackgroundColor || "");
          }
        }
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    };

    fetchFaqs();
    fetchMetrics();
    fetchPayments();
  }, [sections]);

  const components: React.JSX.Element[] = [];

  sections?.forEach((s) => {
    try {
      const seccion = s as Entry;
      const contentType = seccion.sys.contentType.sys.id;

      switch (contentType) {
        case "hero":
          const data = seccion as Entry<TypeHeroSkeleton>;
          const props = data.fields;
          console.log(" aca viene la data del hero ---> ", props);
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
          console.log("a ver que viene aca ---> ", dataVideos);
          components.push(<Video key={seccion.sys.id} {...dataVideos} />);
          break;

        case "preguntasFrecuentes":
          components.push(
            <PreguntasFrecuentes
              key={seccion.sys.id}
              faqs={resolvedFaqs[seccion.sys.id] || []}
              backgroundPosition={faqBackgrounds[seccion.sys.id] || ""}
              backgroundColor={faqBackgroundColor[seccion.sys.id] || ""}
            />
          );
          break;

        case "swipe":
          const swipe = seccion as Entry<TypeSwipeSkeleton>;
          components.push(
            <Swipe
              titulo={swipe.fields.titulo}
              texto={swipe.fields.texto}
              posicionDeLaImagen={swipe.fields.posicinDeLaImagen}
              imagen={swipe.fields.imagen}
              backgroundPosition={swipe.fields.backgroundPosition}
              backgroundColor={swipe.fields.backgroundColor}
              imagenGradient={swipe.fields.imagenGradient}
              color={swipe.fields.color}
              key={seccion.sys.id}
            />
          );
          break;

        case "swipeSinImagen":
          const swipeSinImagen = seccion as Entry<TypeSwipeSinImagenSkeleton>;
          components.push(
            <SwipeSinImagen
              texto1={swipeSinImagen.fields.texto1}
              texto2={swipeSinImagen.fields.texto2}
              backgroundPosition={swipeSinImagen.fields.backgroundPosition}
              backgroundColor={swipeSinImagen.fields.backgroundColor}
              color={swipeSinImagen.fields.color}
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
              backgroundPosition={metricsBackground}
              backgroundColor={metricsBackgroundColor}
            />
          );
          break;

        case "garantia":
          const garantia = seccion as Entry<TypeGarantiaSkeleton>;
          components.push(
            <Garantia
              texto1={garantia.fields.texto1}
              imagen1={garantia.fields.imagen1}
              texto2={garantia.fields.texto2}
              imagen2={garantia.fields.imagen2}
              backgroundPosition={garantia.fields.backgroundPosition}
              backgroundColor={garantia.fields.backgroundColor}
              color={garantia.fields.color}
            />
          );
          break;

        case "payments":
          const payments = seccion as Entry<TypePaymentsSkeleton>;

          components.push(
            <Pricing
              titulo={payments.fields.titulo}
              payments={resolvedPayments}
              subtitulo={payments.fields.subtitulo}
              backgroundPosition={payments.fields.backgroundPosition}
            />
          );
          break;

        case "secciones":
          components.push(<Seccion key={seccion.sys.id} {...seccion.fields} />);
          break;

        default:
          break;
      }
    } catch (error) {
      console.error("Error processing section:", error);
    }
  });

  return <main>{components.map((component) => component)}</main>;
};

export default Page;
