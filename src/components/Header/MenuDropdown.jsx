"use client";

import { useState } from "react";
import Link from "next/link";
import { X, AlignRight } from "lucide-react";

export default function MenuDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { name: "About Us", href: "/about" },
    { name: "Hotels", href: "/hotel" },
    { name: "Service Apartments", href: "/service" },
    { name: "Events", href: "/events" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const handleClose = () => setIsOpen(false);

  return (
    <div className="relative lg:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-white hover:text-yellow-400 transition duration-200"
      >
        <AlignRight className="w-7 h-7" />
      </button>

      {/* Menu Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 h-screen w-full bg-white text-black flex flex-col px-6 py-8 animate-slide-down">
          {/* Top Row: Logo + Close */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <img
              src="/logo.svg"
              alt="Bloom Logo"
              className="h-36 w-36 sm:h-44 sm:w-44 rounded-2xl"
            />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="text-black hover:text-yellow-400 transition pb-20"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="mt-5 flex flex-col gap-6">
            {pages.map((page) => (
              <Link
                key={page.name}
                href={page.href}
                onClick={handleClose}
                className="text-xl font-medium hover:text-yellow-400 transition duration-200"
              >
                {page.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Animation */}
      <style jsx>{`
        .animate-slide-down {
          animation: slideDown 0.35s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
