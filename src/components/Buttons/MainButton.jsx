import Link from "next/link";
import React from "react";

function MainButton({ text = "Login or Join", href = "/" }) {
  return (
    <Link
      href={href}
      className="hover:text-yellow-300 transition px-3 cursor-pointer py-2 font-bold border-0 xl:border-2 rounded-md inline-block text-white"
    >
      {text}
    </Link>
  );
}

export default MainButton;
