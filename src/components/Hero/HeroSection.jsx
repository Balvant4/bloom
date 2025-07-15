"use client";
import HeroVideo from "./HeroVideo";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <HeroVideo />
      <HeroContent />
    </section>
  );
}
