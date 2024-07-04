import React from "react"

// Types
import {
  TypePaginasFields,
  TypeSeccionesSkeleton,
} from "@/types/contentful-types"

// Components
import Hero from "@/components/Hero"
import Seccion from "@/components/Seccion"

interface PageProps {
  sections?: TypePaginasFields["sections"]
}

const Page: React.FC<PageProps> = (props) => {
  const { sections } = props

  const components = []

  sections?.forEach((s) => {
    const seccion = s as Entry
    const contentType = seccion.sys.contentType.sys.id

    switch (contentType) {
      case "hero":
        const data = seccion as Entry<TypeHeroSkeleton>
        const props = data.fields
        components.push(<Hero {...props} />)
        break

      case "secciones":
        components.push(<Seccion {...seccion.fields} />)

      default:
        break
    }
  })

  return <main>{components.map((component) => component)}</main>
}

export default Page
