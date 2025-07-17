"use client";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/HeroSection";
import BannerPage from "@/components/Banners/BannerPage";
import { CarouselDemo } from "@/components/Acternity-ui-components/CarouselDemo";

import { StickyScrollRevealDemo } from "@/components/Acternity-ui-components/StickyScrollReveal";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BannerPage />
      <CarouselDemo />
      <Features />
      <StickyScrollRevealDemo />
    </>
  );
}
