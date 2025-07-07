"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent" />
      </div>
    );
  }

  return children;
}
