import { useEffect, useRef, useState } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // detecta se é mobile
    const isMobile = window.innerWidth <= 768;
    // se for mobile, começa a aparecer com 20%, senão 50%
    const thresholdValue = isMobile ? 0.2 : 0.5;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio > thresholdValue);
      },
      { threshold: [0, thresholdValue, 1] }
    );

    observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return { ref, isVisible };
}
