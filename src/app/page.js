"use client";
import LoadingScreen from "@/components/Loader/LoadingScreen";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/HeroSection";
import BannerPage from "@/components/Banners/BannerPage";
import { CarouselDemo } from "@/components/Acternity-ui-components/CarouselDemo";

export default function Home() {
  return (
    <LoadingScreen>
      <Header />
      <HeroSection />
      <BannerPage />
      <CarouselDemo />
    </LoadingScreen>
  );
}
