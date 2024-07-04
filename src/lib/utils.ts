import { TypePaginasSkeleton } from "@/types/contentful-types"
import { createClient } from "contentful"

export const initClient = () => {
  try {
    const spaceId = process.env.CONTENTFUL_SPACE_ID
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

    if (spaceId && accessToken) {
      return createClient({
        space: spaceId,
        accessToken: accessToken,
      })
    }

    throw new Error(
      "Ocurrió un error al iniciar el cliente de Contentful: no se encuentran las variables de ambiente `CONTENTFUL_SPACE_ID` o `CONTENTFUL_ACCESS_TOKEN`."
    )
  } catch (error) {
    throw error
  }
}

export const getPaginaPorRuta = async (ruta: string) => {
  try {
    const client = initClient()

    const pagina = await client.getEntries<TypePaginasSkeleton>({
      content_type: "paginas",
      "fields.ruta": ruta,
    })

    return pagina
  } catch (error) {
    console.error(error)
  }
}
