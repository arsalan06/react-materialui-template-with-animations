import { useState, useEffect, useRef } from "react";

export const useAnimationOnIntersection = (ref, options) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldAnimate(true);
      }
    }, options);

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [ref, options]);

  return shouldAnimate;
};
