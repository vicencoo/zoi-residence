// // components/Animate.jsx
// import { useEffect, useRef, useState } from "react";

// // const presets = {
// //   fadeUp: {
// //     from: "opacity: 0; transform: perspective(600px) translateY(24px) rotateX(8deg) translateZ(0);",
// //     to: "opacity: 1; transform: perspective(600px) translateY(0)    rotateX(0deg) translateZ(0);",
// //   },
// //   fadeIn: {
// //     from: "opacity: 0;",
// //     to: "opacity: 1;",
// //   },
// //   fadeDown: {
// //     from: "opacity: 0; transform: perspective(600px) translateY(-24px) rotateX(-8deg) translateZ(0);",
// //     to: "opacity: 1; transform: perspective(600px) translateY(0)      rotateX(0deg) translateZ(0);",
// //   },
// //   scaleUp: {
// //     from: "opacity: 0; transform: perspective(600px) scale(0.92) translateZ(-40px);",
// //     to: "opacity: 1; transform: perspective(600px) scale(1)    translateZ(0px);",
// //   },
// //   slideLeft: {
// //     from: "opacity: 0; transform: perspective(600px) translateX(-32px) rotateY(-10deg) translateZ(0);",
// //     to: "opacity: 1; transform: perspective(600px) translateX(0)      rotateY(0deg)  translateZ(0);",
// //   },
// //   slideRight: {
// //     from: "opacity: 0; transform: perspective(600px) translateX(32px) rotateY(10deg) translateZ(0);",
// //     to: "opacity: 1; transform: perspective(600px) translateX(0)     rotateY(0deg) translateZ(0);",
// //   },
// // };

// let styleInjected = false;

// const injectStyles = () => {
//   if (styleInjected) return;
//   styleInjected = true;

//   const css = `
//     @keyframes animate-fadeUp {
//       from { opacity: 0; transform: perspective(600px) translateY(24px) rotateX(8deg)   translateZ(0); }
//       to   { opacity: 1; transform: perspective(600px) translateY(0)    rotateX(0deg)   translateZ(0); }
//     }
//     @keyframes animate-fadeIn {
//       from { opacity: 0; }
//       to   { opacity: 1; }
//     }
//     @keyframes animate-fadeDown {
//       from { opacity: 0; transform: perspective(600px) translateY(-24px) rotateX(-8deg) translateZ(0); }
//       to   { opacity: 1; transform: perspective(600px) translateY(0)      rotateX(0deg) translateZ(0); }
//     }
//     @keyframes animate-scaleUp {
//       from { opacity: 0; transform: perspective(600px) scale(0.92) translateZ(-40px); }
//       to   { opacity: 1; transform: perspective(600px) scale(1)    translateZ(0px);   }
//     }
//     @keyframes animate-slideLeft {
//       from { opacity: 0; transform: perspective(600px) translateX(-32px) rotateY(-10deg) translateZ(0); }
//       to   { opacity: 1; transform: perspective(600px) translateX(0)      rotateY(0deg)  translateZ(0); }
//     }
//     @keyframes animate-slideRight {
//       from { opacity: 0; transform: perspective(600px) translateX(32px) rotateY(10deg) translateZ(0); }
//       to   { opacity: 1; transform: perspective(600px) translateX(0)     rotateY(0deg) translateZ(0); }
//     }
//     .animate-will-change {
//       will-change: transform, opacity;
//       backface-visibility: hidden;
//       transform-style: preserve-3d;
//     }
//   `;

//   const tag = document.createElement("style");
//   tag.textContent = css;
//   document.head.appendChild(tag);
// };

// export const Animate = ({
//   children,
//   preset = "fadeUp",
//   delay = 0,
//   duration = 0.8, // slower = more weight
//   easing = "cubic-bezier(0.08, 0.82, 0.17, 1)", // slow start, confident land
//   threshold = 0.15,
//   once = true,
//   as: Tag = "div",
//   className = "",
//   style = {},
//   ...props
// }) => {
//   injectStyles();

//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           if (once) observer.disconnect();
//         } else if (!once) {
//           setVisible(false);
//         }
//       },
//       { threshold },
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [once, threshold]);

//   return (
//     <Tag
//       ref={ref}
//       className={`animate-will-change ${className}`}
//       style={{
//         opacity: 0,
//         ...(visible && {
//           animation: `animate-${preset} ${duration}s ${easing} ${delay}s both`,
//         }),
//         ...style,
//       }}
//       {...props}
//     >
//       {children}
//     </Tag>
//   );
// };

import { useEffect, useRef, useState } from "react";

const presets = {
  fadeUp: ["translate-y-6 opacity-0", "translate-y-0 opacity-100"],
  fadeIn: ["opacity-0", "opacity-100"],
  fadeDown: ["-translate-y-6 opacity-0", "translate-y-0 opacity-100"],
  scaleUp: ["scale-[0.97] opacity-0", "scale-100 opacity-100"],
  slideLeft: ["-translate-x-6 opacity-0", "translate-x-0 opacity-100"],
  slideRight: ["translate-x-6 opacity-0", "translate-x-0 opacity-100"],
};

const shouldReduceMotion = () =>
  typeof window === "undefined" ||
  window.innerWidth < 768 ||
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const Animate = ({
  children,
  preset = "fadeUp",
  delay = 0,
  duration = 500,
  threshold = 0.1,
  once = true,
  as: Tag = "div",
  className = "",
  style,
  ...props
}) => {
  const ref = useRef(null);
  const reduceMotion = shouldReduceMotion();
  const [visible, setVisible] = useState(reduceMotion);
  const [hiddenClass, visibleClass] = presets[preset] ?? presets.fadeUp;

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold,
        // No rootMargin — fires exactly when the element enters the viewport
        rootMargin: "0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once, reduceMotion]);

  return (
    <Tag
      ref={ref}
      className={`transform-gpu transition-all ease-out ${
        visible ? visibleClass : hiddenClass
      } ${className}`}
      style={{
        transitionDuration: reduceMotion ? "0ms" : `${duration}ms`,
        transitionDelay: visible && !reduceMotion ? `${delay}ms` : "0ms",
        willChange: "transform, opacity",
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};
