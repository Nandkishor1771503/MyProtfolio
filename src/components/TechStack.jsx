import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  html,
  css,
  Js,
  react,
  Gsap,
  motion,
  lucid,
  git,
  netlify,
} from "../images/index.js";
gsap.registerPlugin(ScrollTrigger);

const sampleItems = [
  {
    id: 1,
    title: "HTML",
    image: html,
    cardStyle: "p-5 sm:p-6 bg-orange-500/70",
  },
  {
    id: 2,
    title: "CSS",
    image: css,
    cardStyle: "p-5 sm:p-6 bg-blue-500/70",
  },
  {
    id: 3,
    title: "javaScript",
    image: Js,
    cardStyle: "p-5 sm:p-6 bg-yellow-500/70",
  },
  {
    id: 4,
    title: "React",
    image: react,
    cardStyle: "p-5 sm:p-6 bg-cyan-500/70",
  },
  {
    id: 5,
    title: "GSAP animarion",
    image: Gsap,
    cardStyle: "p-5 sm:p-6 bg-green-500/70",
  },
  {
    id: 6,
    title: "Framer",
    image: motion,
    cardStyle: "p-5 sm:p-6 bg-[#b66ae1]/70",
  },
  {
    id: 7,
    title: "Lucid icons",
    image: lucid,
    cardStyle: "p-5 sm:p-6 bg-[#f56565]/70",
  },
  {
    id: 8,
    title: "Git Hub",
    image: git,
    cardStyle: "p-5 sm:p-6 bg-black/70",
  },
  {
    id: 9,
    title: "Netlify( Hosting )",
    image: netlify,
    cardStyle: "p-5 sm:p-6 bg-[#0c708a]/70",
  },
];

export default function TechStack({
  items = sampleItems,
  cta = true,
  title = "Featured Projects",
}) {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".techTitle", // parent wrapper
        start: "top 40%", // adjust when animation starts
        end: "bottom 30%",
        toggleActions: "play none none none", // play on enter, reverse on leave
      },
      defaults: { ease: "power2.out" }, // common defaults
    });

    // Animate title
    tl.fromTo(
      ".techTitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Animate subtitle after title
    tl.fromTo(
      ".techSubTitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4" // overlaps slightly for smoother flow
    );

    tl.fromTo(
      ".group",
      { opacity: 0, scale: 0.8, y: 30 }, // add slight lift
      {
        opacity: 1,
        scale: 1,
        y: 0,
        // delay:-0.2,
        duration: 1,
        stagger: {
          each: 0.15, // tighter staggering
          // from: "center"    // animate from center outwards (looks cool for grids/lists)
        },
        ease: "power2.out", // bouncy, natural entrance
      },
      "-=0.5" // overlaps previous animation for smoother flow
    );

    return () => {
      tl.scrollTrigger?.kill(); // cleanup
      tl.kill();
    };
  }, []);

  return (
    <section className="w-full py-12 md:-mt-[6%] -mt-[15%]  sm:py-16 bg-[#e5dfac] cursor-pointer">
      <h2 className="techTitle md:text-5xl text-3xl font-serif text-red-500 mx-5">
        TechStack
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 sm:mb-12 flex items-end justify-between">
          <div className="hidden sm:flex items-center gap-2 text-lg text-red-500/70">
            <span className="h-2 w-2 rounded-full bg-[#e5dfac]/60" />
            <span className="techSubTitle">MY SKILLS</span>
          </div>
        </header>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_18px_60px_rgba(0,0,0,0.25)] hover:-translate-y-1"
              style={{
                // soft inner glow on hover using the theme color
                boxShadow:
                  "inset 0 0 0 1px rgba(229,223,172,0.08), 0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              {/* Glow accent */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden
              >
                <div className="absolute -inset-20 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(229,223,172,0.15),transparent_30%)] blur-2xl" />
              </div>

              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <span className="absolute right-3 top-3 rounded-full bg-red-500/20 px-3 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-[#e5dfac]/30">
                  {item.tags?.[0] || "Featured"}
                </span>
              </div>

              {/* Content */}
              <div className={item.cardStyle}>
                {" "}
                {/* colors to change  */}{" "}
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full " />
                  {item.title}
                </h3>
                {/* Tags */}
                {item.tags?.length ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-[#e5dfac]/30 bg-[#e5dfac]/10 px-2.5 py-1 text-xs text-[#e5dfac]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
