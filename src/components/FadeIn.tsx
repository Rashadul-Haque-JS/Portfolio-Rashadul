import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const FadeIn = ({ children }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
    rootMargin: '-50px', // Adjust the root margin as needed
  });

  const fadeProps = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <animated.div ref={ref} style={fadeProps}>
      {children}
    </animated.div>
  );
};

export default FadeIn;
