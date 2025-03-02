import About from "@/components/About";
import BestFeaaturedItmes from "@/components/BestFeaaturedItmes";
import BlogPosts from "@/components/BlogPosts";
import FreturedProduction from "@/components/FeaturedProperties";
import FeedBack from "@/components/FeedBack";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PropertyLoactions from "@/components/PropertyLoactions";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <About />
      <FreturedProduction />
      <PropertyLoactions />
      <BestFeaaturedItmes />
      <FeedBack />
      <BlogPosts />
      <Footer />
    </Suspense>
  );
};

export default page;
