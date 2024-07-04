// Sections

// Chakra UI

// Layout
import { getPaginaPorRuta } from "@/lib/utils"
import Page from "@/templates/Page"
import { notFound } from "next/navigation"

const Home = async () => {
  const response = await getPaginaPorRuta("/")

  if (response?.total === 0) {
    notFound()
  }

  const data = response?.items[0]

  return (
    <>
      <Page sections={data?.fields.sections} />
    </>
  )
}

export default Home
