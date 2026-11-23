import { motion, useReducedMotion } from "motion/react";

export function ScrollReveal({
  children,
  className,
  delay = 0,
  distance = 32,
  direction = "up",
}) {
  const reduceMotion = useReducedMotion();
  const offset =
    direction === "left"
      ? { x: distance, y: 0 }
      : direction === "right"
        ? { x: -distance, y: 0 }
        : { x: 0, y: distance };

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
