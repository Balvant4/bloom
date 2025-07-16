"use client";
import Link from "next/link";

function MainButton({ text = "Login or Join", href = "/", onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="hover:text-yellow-300 transition px-3 cursor-pointer py-2 font-bold border xl:border-2 rounded-md inline-block xl:text-white text-yellow-300"
    >
      {text}
    </Link>
  );
}

export default MainButton;
