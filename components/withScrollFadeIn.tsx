"use client";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef, ComponentType, FC } from "react";

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const withScrollFadeIn = <P extends object>(
  WrappedComponent: ComponentType<P>
): FC<P> => {
  const ComponentWithFadeIn: FC<P> = (props) => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleScroll = () => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          controls.start("visible");
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Trigger on mount
      return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };

  return ComponentWithFadeIn;
};

export default withScrollFadeIn;
