"use client";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({ count: target });
    }
  }, [inView, controls, target]);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const duration = 5000;
    const incrementTime = 30;
    const step = Math.ceil((end * incrementTime) / duration);

    if (inView) {
      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <motion.h1 ref={ref} className="text-5xl font-bold text-gray-900">
      {count}+
    </motion.h1>
  );
};

function Achievements() {
  return (
    <section className="bg-[#efeeee] py-20 w-full text-black flex flex-col items-center justify-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-semibold mb-10"
      >
        Our Achievements
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
        >
          <Counter target={50} />
          <p className="mt-2 text-lg font-medium">Stay Benefits</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
        >
          <Counter target={200} />
          <p className="mt-2 text-lg font-medium">Rooms Available</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
        >
          <Counter target={100} />
          <p className="mt-2 text-lg font-medium">Operational Staff</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;
