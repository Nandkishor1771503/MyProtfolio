import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const text =
    "Hi, I’m Nandkishore 👋 — a passionate Frontend Developer & Freelancing Expert dedicated to transforming ideas into visually stunning, high-performing websites. With strong expertise in React.js, Tailwind CSS, and GSAP, I specialize in building responsive, modern, and interactive web experiences that bring designs to life.";
  const aboutText = text.split(" ");

  useEffect(() => {
    gsap.fromTo(
      ".horizontal",
      {
        opacity: 0,
        x: "100%",
      },
      {
        opacity: 1,
        x: "0%",
        delay: 0.2,
        duration: 0.7,

        scrollTrigger: {
          trigger: ".horizontal",
          start: "top 70%",
          end: "bottom 40%",
          // scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".aboutPara",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".aboutTextWrapper",
          start: "top 70%",
          end: "bottom 100%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".aboutDiv",
      { scale: 0.95, y: 0 },
      {
        scale: 1,
        y: -70,
        scrollTrigger: {
          trigger: ".aboutDiv",
          start: "top 100%",
          end: "bottom 110%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="aboutDiv overflow-hidden rounded-lg w-full min-h-screen bg-[#e5dfac] px-6 sm:px-12 py-12 sm:py-16 md:py-20">
      {" "}
      {/* Should flip this card at certain degree while it is scrolled up */}
      <h1 className="text-red-600 text-3xl sm:text-4xl md:text-5xl font-serif mb-6 sm:mb-8">
        About me
      </h1>
      <div className="w-full overflow-hidden">
        {/* Horizontal Line */}
        <div className="horizontal w-full sm:w-[90%] h-[3px] bg-red-600 mb-6 sm:mb-8"></div>

        {/* About Text */}
        <p className="aboutTextWrapper w-full sm:w-[90%] pl-2 sm:pl-6 text-justify text-xl sm:text-2xl md:text-4xl md:mx-12 md:my-36 text-red-700 font-serif">
          {aboutText.map((word, i) => (
            <span
              key={i}
              className="aboutPara inline-block mr-2 mb-1 tracking-wide leading-relaxed sm:leading-[2.5rem] md:leading-[2.7rem]"
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default About;
