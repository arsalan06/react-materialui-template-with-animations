//This custom hook takes a ref as an argument and returns a boolean value indicating whether the animation should be triggered on scroll.
// You can use this hook in any component by importing it and calling it like this:

//const shouldAnimate = useAnimationOnScroll(ref);

import { useState, useEffect, useCallback } from "react";

export const useAnimationOnScroll = (ref) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleAnimation = useCallback(() => {
    if (window.pageYOffset >= ref.current.getBoundingClientRect().top) {
      setShouldAnimate(true);
    }
  }, [ref]);

  useEffect(() => {
    window.addEventListener("scroll", handleAnimation);
    return () => {
      window.removeEventListener("scroll", handleAnimation);
    };
  }, [handleAnimation]);

  return shouldAnimate;
};
