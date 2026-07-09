import { useEffect, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const SPOTLIGHT_RADIUS = 220;

export default function useSpotlight(active) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 25 });
  const springY = useSpring(y, { stiffness: 150, damping: 25 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!active) {
      return;
    }

    const setCenter = () => {
      x.set(window.innerWidth / 2);
      y.set(window.innerHeight / 2);
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    setCenter();

    const onMove = (event) => {
      if (!window.matchMedia("(max-width: 767px)").matches) {
        x.set(event.clientX);
        y.set(event.clientY);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", setCenter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", setCenter);
    };
  }, [active, x, y]);

  useEffect(() => {
    if (!active || !isMobile) {
      return;
    }

    let frameId = 0;
    const start = Date.now();

    const drift = () => {
      const elapsed = (Date.now() - start) / 1000;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      x.set(centerX + Math.sin(elapsed * 0.5) * 110);
      y.set(centerY + Math.cos(elapsed * 0.35) * 75);
      frameId = requestAnimationFrame(drift);
    };

    frameId = requestAnimationFrame(drift);
    return () => cancelAnimationFrame(frameId);
  }, [active, isMobile, x, y]);

  const blueprintMask = useMotionTemplate`radial-gradient(circle ${SPOTLIGHT_RADIUS}px at ${springX}px ${springY}px, black 0%, transparent 72%)`;
  const glow = useMotionTemplate`radial-gradient(circle ${SPOTLIGHT_RADIUS + 24}px at ${springX}px ${springY}px, rgba(96, 165, 250, 0.14) 0%, transparent 68%)`;

  return { springX, springY, blueprintMask, glow };
}
