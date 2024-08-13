import { getPaginaPorRuta, initClient } from "@/lib/utils";
import { Pagina } from "@/types/types";

import { Entry, EntrySkeletonType } from "contentful";

import { notFound } from "next/navigation";
import {
  TypeHeroSkeleton,
  TypePreguntasFrecuentesSkeleton,
  TypeTestimoniosSkeleton,
  TypeVideoSkeleton,
  TypeMetricsSkeleton,
  TypeSwipeSkeleton,
  TypeSwipeSinImagenSkeleton,
  TypeGarantiaSkeleton,
  TypePaymentsSkeleton,
} from "@/types/contentful-types";

interface Params {
  params: {
    ruta: string;
  };
}

export const dynamicParams = false;

export const generateStaticParams = async (): Promise<{ ruta: string }[]> => {
  try {
    const client = initClient();

    const paginas = await client.getEntries<EntrySkeletonType<Pagina>>({
      content_type: "paginas",
    });

    const rutas = paginas.items
      .map((pagina) => pagina.fields.ruta) // Obtenemos solo las rutas

      .map((ruta) => ({ ruta })); // Mapeamos a objetos { ruta: string }

    return rutas;
  } catch (error) {
    console.error("Error fetching static params:", error);
    return []; // Retornar un array vacío en caso de error
  }
};

const Page = async ({ params }: Params) => {
  const response = await getPaginaPorRuta(params.ruta);

  if (response?.total === 0) {
    notFound();
  }

  const data = response?.items[0];

  return (
    <>
      <h1>{data.ruta}</h1>
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
    </>
  );
};

export default Page;
