"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react"; // Optional: install lucide-react or replace with ✕
import { AlignRight } from "lucide-react";

export default function MenuDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group hover:text-yellow-300 transition px-2 py-1 cursor-pointer font-bold"
      >
        <AlignRight
          size={28}
          className=" transition-transform duration-300 ease-in-out group-hover:translate-x-1"
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 text-white flex flex-col items-center justify-center transition-all duration-300">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white hover:text-yellow-400 text-2xl"
            aria-label="Close menu"
          >
            <X size={30} />
            {/* Or just use: ✕ */}
          </button>

          {/* Navigation links */}
          <nav className="flex flex-col gap-6 text-2xl font-medium">
            {pages.map((page) => (
              <Link
                key={page.name}
                href={page.href}
                onClick={handleClose}
                className="hover:text-yellow-400 transition"
              >
                {page.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
