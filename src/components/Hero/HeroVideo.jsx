"use client";

export default function HeroVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover -z-10"
    >
      <source src="/hero.webm" type="video/webm" />
    </video>
  );
}
