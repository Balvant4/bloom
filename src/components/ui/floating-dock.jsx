"use client";

import { Facebook, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef, useState } from "react";

const dockItems = [
  {
    title: "Facebook",
    href: "https://facebook.com",
    icon: <Facebook className="w-full h-full text-blue-600" />,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin className="w-full h-full text-blue-700" />,
  },
  {
    title: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram className="w-full h-full text-pink-600" />,
  },
  {
    title: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter className="w-full h-full text-sky-500" />,
  },
  {
    title: "YouTube",
    href: "https://youtube.com",
    icon: <Youtube className="w-full h-full text-red-600" />,
  },
];

export const FloatingDock = () => {
  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <FloatingDockResponsive items={dockItems} />
    </div>
  );
};

const FloatingDockResponsive = ({ items }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex h-16 items-end gap-3 rounded-2xl bg-white px-4 pb-3 shadow-lg dark:bg-neutral-900"
    >
      {items.map((item) => (
        <IconContainer key={item.title} mouseX={mouseX} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const iconWidth = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const iconHeight = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(iconWidth, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(iconHeight, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded bg-white px-2 py-1 text-xs shadow dark:bg-neutral-700 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
