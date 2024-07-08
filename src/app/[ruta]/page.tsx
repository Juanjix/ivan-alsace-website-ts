import { getPaginaPorRuta, initClient } from "@/lib/utils";
import { Pagina } from "@/types/types";

import { Entry, EntrySkeletonType } from "contentful";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound } from "next/navigation";

// interface Params {
//   params: {
//     ruta: string;
//   };
// }

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
  const pagina = await getPaginaPorRuta(params.ruta);

  if (!pagina || pagina.total === 0) {
    notFound();
  }

  const data: Pagina = pagina.items[0].fields;

  console.log(data);

  return <h1>{data.ruta}</h1>;
};

export default Page;
