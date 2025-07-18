"use client";
import { useEffect, useState, useRef } from "react";

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
        <img
          src="/logo.svg"
          alt="Hotel Limon Logo"
          className="h-7 xl:h-14 w-auto filter brightness-0 invert"
        />

        <div className="flex items-center gap-10 lg:translate-x-[20px]">
          <Link
            href="/about"
            className="relative hidden lg:inline-block font-bold text-white after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#71717a] after:transition-all after:duration-500 hover:after:w-full hover:after:left-0"
          >
            About
          </Link>
          <Link
            href="/hotel"
            className="relative hidden lg:inline-block font-bold text-white after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#71717a] after:transition-all after:duration-500 hover:after:w-full hover:after:left-0"
          >
            Hotels
          </Link>
          <Link
            href="/service"
            className="relative hidden lg:inline-block font-bold text-white after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#71717a] after:transition-all after:duration-500 hover:after:w-full hover:after:left-0"
          >
            Service Apartments
          </Link>
          <Link
            href="/events"
            className="relative hidden lg:inline-block font-bold text-white after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#71717a] after:transition-all after:duration-500 hover:after:w-full hover:after:left-0"
          >
            Events
          </Link>
          <Link
            href="/blogs"
            className="relative hidden lg:inline-block font-bold text-white after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#71717a] after:transition-all after:duration-500 hover:after:w-full hover:after:left-0"
          >
            Blogs
          </Link>

          <Link
            href="/contact"
            className="relative  font-bold text-white after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#71717a] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hidden lg:inline-block"
          >
            Contact
          </Link>

          <MenuDropdown />
        </div>
      </nav>
    </header>
  );
}
