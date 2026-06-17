import React, { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  direction = "up",
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal scroll-reveal-${direction} ${
        isVisible ? "is-visible" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
