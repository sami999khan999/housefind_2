import About from "@/components/About";
import FreturedProduction from "@/components/FeaturedProperties";
import Hero from "@/components/Hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <FreturedProduction />
    </div>
  );
};

export default page;
