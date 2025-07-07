"use client";

import LoadingScreen from "@/components/Loader/LoadingScreen";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/HeroSection";
import CardsPage from "@/components/Cards/CardsPage";

export default function Home() {
  return (
    <LoadingScreen>
      <Header />
      <HeroSection />
      <CardsPage />
    </LoadingScreen>
  );
}
