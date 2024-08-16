import { Footer } from "@/components/Footer";
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
  TypeFooterSkeleton,
  TypePaymentsSkeleton,
} from "@/types/contentful-types";

import { Entry } from "contentful";
import { notFound } from "next/navigation";

// Función para obtener la URL y ALT del icono
const resolveIcon = (icono: Entry<TypeFooterSkeleton>["fields"]["icono"]) => {
  if (!icono || !icono.sys.id) return null;

  const url = icono.fields.file.url;
  const alt = icono.fields.title || "Icon";

  return { url, alt };
};

const Home = async () => {
  const response = await getPaginaPorRuta("/");

  if (response?.total === 0) {
    notFound();
  }

  const data = response?.items[0];
  const footerData = data?.fields.footer?.[0];

  const icon = footerData ? resolveIcon(footerData.fields.icono) : null;
  const link = footerData?.fields.link || "#";

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
            | TypePaymentsSkeleton
          >[]
        }
      />
      {icon && (
        <Footer
          footers={data?.fields.footer as unknown as Entry<TypeFooterSkeleton>}
        />
      )}
    </>
  );
};

export default Home;
