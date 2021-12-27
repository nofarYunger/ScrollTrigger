"use strict";

gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray("img");

const showDemo = () => {
  gsap.utils.toArray("section").forEach((section, index) => {
      console.log(section);
    const w = section.querySelector(".wrapper");
    const [x, xEnd] =
      index % 2
        ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
        : [w.scrollWidth * -1, 0];
    gsap.fromTo(
      w,
      { x },
      {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          scrub: 0.5,
        },
      }
    );
  });
};
showDemo()