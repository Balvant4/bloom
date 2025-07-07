"use client";
import { useEffect, useState, useRef } from "react";
import HotelDropdown from "./HotelDropdown";
import LoginDropdown from "./LoginDropdown";
import MenuDropdown from "./MenuDropdown";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      // Shrink navbar on scroll
      setScrolled(currentScrollY > 10);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-[#ffcc09] backdrop-blur shadow" : "bg-transparent"
      } ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-white transition-all duration-300 ${
          scrolled ? "py-4" : "py-10"
        }`}
      >
        <h1 className="text-4xl font-bold text-amber-50">
          <img
            src="/logo-yellow.svg"
            alt="Bloom Logo"
            className="h-7 xl:h-10 w-auto text-amber-50"
          />
        </h1>

        <div className="flex items-center gap-10 lg:translate-x-[20px]">
          <HotelDropdown />
          <Link
            href="/hyBloom"
            className="relative hidden lg:inline-block font-bold text-white after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-500 hover:after:w-full hover:after:left-0"
          >
            Why Bloom?
          </Link>

          <Link
            href="/developers"
            className="relative  font-bold text-white after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hidden lg:inline-block"
          >
            Developers & Owners
          </Link>

          <LoginDropdown />
          <MenuDropdown />
        </div>
      </nav>
    </header>
  );
}
