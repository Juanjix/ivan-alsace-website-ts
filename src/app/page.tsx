"use client";

// Sections
import { Hero } from "@/components/Hero";

// Layout
import Layout from "./layout";

const Home = () => {
  return (
    <Layout>
      <Hero
        titulo="Unique music that stands out and ENGAGES"
        imagen="images/hero-image.png"
        button=""
      />
    </Layout>
  );
};

export default Home;
