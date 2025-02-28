import About from "@/components/About";
import FreturedProduction from "@/components/FeaturedProperties";
import Hero from "@/components/Hero";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <About />
      <FreturedProduction />
    </Suspense>
  );
};

export default page;
