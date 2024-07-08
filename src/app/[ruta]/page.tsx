import { getPaginaPorRuta, initClient } from "@/lib/utils";

import { Entry, EntrySkeletonType } from "contentful";
import { notFound } from "next/navigation";

interface Params {
  params: {
    ruta: string;
  };
}

// Define la interfaz Pagina con las propiedades esperadas
interface Pagina {
  ruta: string;
  // Agrega aquí otras propiedades si las hay
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
      .filter((ruta) => typeof ruta === "string" && ruta.lenght > 0) // Filtramos cualquier ruta que no sea válida
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
