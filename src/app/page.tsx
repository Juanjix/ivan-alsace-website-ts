"use client";

// Sections
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";

// Layout
import Layout from "./layout";

const Home = () => {
  return (
    <Layout>
      <Hero
        titulo='"Unique music that stands out and ENGAGES"'
        imagen="images/hero-image.png"
        button=""
      />
      <Testimonials
        titulo="Testimonials + CTA"
        imagen="/images/image-testimonials.png"
      />
    </Layout>
  );
};

export default Home;
