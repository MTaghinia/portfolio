"use client";

import { motion } from "framer-motion";

const firstVariants = {
  rest: {
    width: 0,
    transition: { delay: 0.3 },
  },
  hover: {
    width: "69px",
    transition: { delayChildren: 0.3, ease: "easeIn" },
  },
};

const secondVariants = {
  rest: {
    height: 0,
    overflow: "hidden",
    opacity: 0,
    y: 15,
  },
  hover: {
    height: "auto",
    overflow: "visible",
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeIn",
    },
  },
};

export default function Branding() {
  return (
    <motion.div
      className="flex select-none items-center gap-x-1"
      animate="rest"
      whileHover="hover"
      initial={false}
    >
      <div className="capitalize">Web developer</div>
      <div className="h-0.5 w-5 bg-white"></div>
      <div className="flex">
        <div>&lt;</div>
        <div className="font-bold">M</div>
        <motion.div variants={firstVariants}>
          <motion.div variants={secondVariants}>ahmoud</motion.div>
        </motion.div>
        <div className="font-bold">T</div>
        <motion.div variants={firstVariants}>
          <motion.div variants={secondVariants}>aghinia</motion.div>
        </motion.div>
        <div className="ml-1">/&gt;</div>
      </div>
    </motion.div>
  );
}
