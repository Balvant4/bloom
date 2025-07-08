"use client";

import LoadingScreen from "@/components/Loader/LoadingScreen";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/HeroSection";
import BannerPage from "@/components/Banners/BannerPage";
import BloomAccrossIndia from "@/components/Testimonial/BloomAccrossIndia";

export default function Home() {
  return (
    <LoadingScreen>
      <Header />
      <HeroSection />
      <BannerPage />
      <BloomAccrossIndia />
    </LoadingScreen>
  );
}
