"use client";

export default function HeroVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full  object-cover -z-10 h-[65vh] sm:h-screen"
    >
      <source src="/hero.webm" type="video/webm" />
    </video>
  );
}
