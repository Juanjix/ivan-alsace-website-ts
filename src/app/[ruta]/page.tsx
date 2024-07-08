import { getPaginaPorRuta, initClient } from "@/lib/utils";
import { Pagina } from "@/types/types";
import { EntrySkeletonType } from "contentful";
import { notFound } from "next/navigation";

interface Params {
  params: {
    ruta: string;
  };
}

export const dynamicParams = false;

export const generateStaticParams = async () => {
  try {
    const client = initClient();

    const paginas = await client.getEntries<EntrySkeletonType<Pagina>>({
      content_type: "paginas",
    });

    const rutas = paginas.items.map((pagina) => ({
      ruta: pagina.fields.ruta,
    }));

    return rutas ?? [];
  } catch (error) {
    console.error(error);
    return [];
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
