"use client";
import React from "react";
import { FloatingDockDemo } from "./Acternity-ui-components/FloatingDockDemo";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code2 } from "lucide-react";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative bg-[#fcf5ed] text-black pt-12 px-4 sm:px-8 md:px-16"
    >
      {/* Follow Us Section */}
      <div className="text-center ">
        <h1 className="text-3xl md:text-4xl font-bold ">Follow Us</h1>
        <FloatingDockDemo />
      </div>

      {/* Footer Grid */}
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 text-center sm:text-left mb-12  items-center justify-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex flex-col items-center sm:items-start"
        >
          <img
            src="/logo.svg"
            alt="Limon Logo"
            className="h-36 w-36 sm:h-44 sm:w-44 rounded-2xl"
          />
        </motion.div>

        {/* Information */}
        <motion.div whileHover={{ scale: 1.02 }} transition={{ delay: 0.1 }}>
          <h2 className="text-lg font-semibold underline mb-3">INFORMATION</h2>
          <ul className="space-y-2 text-base">
            <li>
              <Link href="/hotels" className="hover:text-[#fcd869] transition">
                Our Hotels
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-[#fcd869] transition">
                Events
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#fcd869] transition">
                About Us
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Policies */}
        <motion.div whileHover={{ scale: 1.02 }} transition={{ delay: 0.15 }}>
          <h2 className="text-lg font-semibold underline mb-3">POLICIES</h2>
          <ul className="space-y-2 text-base">
            <li>
              <Link
                href="/policy/booking"
                className="hover:text-[#fcd869] transition"
              >
                Booking Policy
              </Link>
            </li>
            <li>
              <Link
                href="/policy/cancellation"
                className="hover:text-[#fcd869] transition"
              >
                Cancellation Policy
              </Link>
            </li>
            <li>
              <Link
                href="/policy/refund"
                className="hover:text-[#fcd869] transition"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div whileHover={{ scale: 1.02 }} transition={{ delay: 0.2 }}>
          <h2 className="text-lg font-semibold underline mb-3">QUICK LINKS</h2>
          <ul className="space-y-2 text-base">
            <li>
              <Link href="/blogs" className="hover:text-[#fcd869] transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/sitemap" className="hover:text-[#fcd869] transition">
                Sitemap
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Credits */}
      <div className="relative mt-4 border-t border-gray-300 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        {/* Floating icon top-right */}
        <Link
          href="https://www.balvant.shop/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -top-6 right-4 md:right-6 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
        >
          <Code2 className="text-black w-6 h-6" />
        </Link>

        <p className="mb-2 md:mb-0 text-center">
          © 2023 | A Product of Hotel By Park
        </p>
        <p className="text-center">Designed & Developed By Balvantkushwaha</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
