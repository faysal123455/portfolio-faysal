import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

const directionClass = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
};

const Animated: React.FC<AnimatedProps> = ({
  children,
  delay = 0,
  direction = "up",
  duration = 500,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out duration-700",
        `delay-[${delay}ms]`,
        visible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directionClass[direction]}`
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Animated;
