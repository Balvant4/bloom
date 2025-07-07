"use client";
import HeroVideo from "./HeroVideo";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex  overflow-hidden">
      <HeroVideo />
      <HeroContent />
    </section>
  );
}
// This component serves as the hero section of the page, combining the video background and content.
