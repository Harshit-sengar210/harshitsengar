"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { charRevealVariant } from "@/lib/animations";

interface TextRevealProps {
  text: string;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  staggerChildren?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
  children?: ReactNode;
}

const TextReveal = ({
  text,
  element = "p",
  className = "",
  direction = "up",
  staggerChildren = 0.03,
  delay = 0,
  threshold = 0.3,
  once = false,
  children,
}: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const [splittedText, setSplittedText] = useState<string[]>([]);

  useEffect(() => {
    // Split text into words
    if (text) {
      setSplittedText(text.split(" "));
    }
  }, [text]);

  // Motion variants based on direction
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const Tag = element;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {splittedText.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          className="inline-block"
          style={{ marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
      {children}
    </motion.div>
  );
};

export default TextReveal;
