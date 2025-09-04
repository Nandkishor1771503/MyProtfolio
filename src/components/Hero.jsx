import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import profile from "../images/profile.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const upRef = useRef(null);
  const downRef = useRef(null);
  const text = "Hello this is Nand Kishore A Frontend developer";
  const letters = text.split(" ");
  const textRef = useRef(null);
  const mobileText = useRef(null);
  const emojiRef = useRef(null);
  const divRef = useRef(null);
  useEffect(() => {
    const tlm = gsap.timeline();
    tlm.fromTo(
      ".upToDown",
      { opacity: 0, y: -200, borderRadius: 70 },
      { opacity: 1, y: 0, borderRadius: 0, duration: 1.2 }
    );
    tlm.fromTo(
      ".mobile-hero",
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        delay: 0.2,
        duration: 1.2,
      }
    );
    tlm.fromTo(
      mobileText.current.children,
      {
        opacity: 0,
        scale: 0.7,
        y: 20, // start slightly lower
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8, // slightly faster feels smoother
        ease: "power3.out", // smoother easing
        stagger: 0.12, // balanced stagger
      },
      "-=0.8" // overlap with previous timeline section
    );

    gsap.fromTo(
      ".downToUp",
      { opacity: 0, y: 200, borderRadius: 70 },
      { opacity: 1, y: 0, borderRadius: 0, duration: 1.2 }
    );

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate the "up" element
    tl.fromTo(
      upRef.current,
      { y: 1000, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5 },
      0 // start at the very beginning of the timeline
    );

    tl.fromTo(
      downRef.current,
      { y: -1000, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5 },
      0 // start at same time as upRef
    );

    // Animate the letters staggered
    tl.to(
      textRef.current.children,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.055,
      },
      "-=1.0" // start slightly before previous ends for smoothness
    );
    tl.fromTo(
      emojiRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1.5, duration: 0.8, ease: "power3.out" }
    );

    // Fade out smoothly after pop
    tl.to(emojiRef.current, {
      opacity: 0,
      scale: 1, // optional: scale back to normal size
      duration: 0.8,
      ease: "power3.inOut",
      delay: 0.2, // optional pause before fading out
    });

    gsap.set(divRef.current, { perspective: 2000 });

    gsap.to(divRef.current, {
      borderRadius: "100px", // pill-like corners
      scale: 0.95, // optional scaling
      duration: 1,
      y: -70,
      scrollTrigger: {
        trigger: divRef.current,
        start: "top -10%",
        end: "bottom 40%",
        scrub: true,
      },
      ease: "power1.out",
    });
  }, []);
  return (
    <>
      <div className="relative md:hidden w-full h-screen">
        <div className="upToDown w-full h-[50%] bg-[#e5dfac] rounded-sm">
          <h1
            className="w-[80%] py-16 px-7 mx-10 text-2xl rounded-2xl font-serif "
            ref={mobileText}
          >
            {letters.map((letter, i) => (
              <span
                key={i}
                className="inline-block opacity-0 translate-y-10 text-red-500 mr-2"
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
        </div>
        <div className="mobile-hero absolute top-[25%] w-[50%] p-5 bg-[#e5dfac] shadow-2xl m-[25%] mt-[15%] rounded-2xl font-serif z-10">
          <img src={profile} alt="" className="rounded-xl" />
        </div>
        <div className="downToUp w-full h-[50%] bg-red-500 rounded-sm ">;</div>
      </div>

      <div
        className="hidden md:block w-52 text-5xl absolute top-[42%] left-[49.6%]  z-2"
        ref={emojiRef}
      >
        👋
      </div>
      {/* This below did should roll onScroll */}

      <div className="w-full md:flex hidden" ref={divRef}>
        <div className="w-[50%] h-screen bg-[#e5dfac] text-red-600" ref={upRef}>
          {" "}
          {/* customize focus on  hover and text color change */}
          <h1
            className="w-[80%] p-5 mx-[12%] my-[30%] text-5xl rounded-2xl font-serif "
            ref={textRef}
          >
            {letters.map((letter, i) => (
              <span key={i} className="inline-block opacity-0 translate-y-10">
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
        </div>

        {/* second half */}

        <div
          className="w-[50%] h-screen  bg-red-600" // text-[#e5dfac]
          ref={downRef}
        >
          <div className="imgContainer w-[40%] p-5 bg-[#e5dfac] m-[30%] mt-[10%] rounded-2xl font-serif">
            <img src={profile} alt="" className="rounded-xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
