"use client";

// Sections
import { Hero } from "@/components/Hero";
import { Testimonios } from "@/components/Testimonios";
import { Video } from "@/components/Video";
import { PreguntasFrecuentes } from "@/components/PreguntasFrecuentes";
import { Footer } from "@/components/Footer";

// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";

// Layout
import Layout from "./layout";

const Home = () => {
  return (
    <ChakraProvider>
      <Layout>
        <Hero
          titulo='"Unique music that stands out and ENGAGES"'
          imagen="images/hero-image.png"
          boton=""
        />
        <Testimonios
          titulo="Testimonials + CTA"
          imagen="/images/image-testimonials.png"
        />
        <Video titulo="Componente Video" url="/" />
        <PreguntasFrecuentes />
        <Footer />
        <div></div>
      </Layout>
    </ChakraProvider>
  );
};

export default Home;
