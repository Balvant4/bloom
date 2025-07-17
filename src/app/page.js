"use client";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/HeroSection";
import BannerPage from "@/components/Banners/BannerPage";
import { CarouselDemo } from "@/components/Acternity-ui-components/CarouselDemo";

import { StickyScrollRevealDemo } from "@/components/Acternity-ui-components/StickyScrollReveal";
import Features from "@/components/Features";
import Achievements from "@/components/Banners/Achievements";
import OfferPromotions from "@/components/OfferPromotions";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BannerPage />
      <CarouselDemo />
      <Features />
      <StickyScrollRevealDemo />
      <Achievements />
      <OfferPromotions />
    </>
  );
}
