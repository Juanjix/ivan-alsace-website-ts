// Layout
import { getPaginaPorRuta } from "@/lib/utils";
import Page from "@/templates/Page";
import {
  TypeHeroSkeleton,
  TypePreguntasFrecuentesSkeleton,
  TypeTestimoniosSkeleton,
  TypeVideoSkeleton,
  TypeMetricsSkeleton,
  TypeSwipeSkeleton,
  TypeSwipeSinImagenSkeleton,
  TypeGarantiaSkeleton,
} from "@/types/contentful-types";
import { Entry } from "contentful";
import { notFound } from "next/navigation";

const Home = async () => {
  const response = await getPaginaPorRuta("/");

  if (response?.total === 0) {
    notFound();
  }

  const data = response?.items[0];

  return (
    <>
      <Page
        sections={
          data?.fields.sections as Entry<
            | TypeHeroSkeleton
            | TypePreguntasFrecuentesSkeleton
            | TypeTestimoniosSkeleton
            | TypeVideoSkeleton
            | TypeMetricsSkeleton
            | TypeSwipeSkeleton
            | TypeSwipeSinImagenSkeleton
            | TypeGarantiaSkeleton
          >[]
        }
      />
    </>
  );
};

export default Home;
