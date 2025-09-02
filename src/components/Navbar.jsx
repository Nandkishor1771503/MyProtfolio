import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

function Navbar() {
  const navRef = useRef(null);
  const ulRef = useRef(null);

  useEffect(() => {
    const initialX = 0;
    const initialY = 0;

    Draggable.create(navRef.current, {
      type: "x,y",
      bounds: document.documentElement, // keeps it inside viewport
      inertia: false,
      onRelease() {
        gsap.to(this.target, {
          x: initialX,
          y: initialY,
          duration: 0.8,
          ease: "expo.out",
        });
      },
    });
    // const items = ulRef.current.children;

    // gsap.fromTo(
    //   items,
    //   { x: -100, opacity: 0 },
    //   {
    //     x: 0,
    //     opacity: 1,
    //     duration: 1.5,         // same duration per item
    //     ease: "power3.inOut",
    //     stagger: {
    //       each: 0.0,           // start together
    //       amount: 0.5,         // total stagger spread over all items
    //     },
    //   }
    // );
  }, []);

  return (
    <div
      ref={navRef}
      className="md:fixed hidden bottom-8 left-1/2 -translate-x-1/2 
                 w-[90%] sm:w-[70%] md:w-[50%] 
                 bg-[#ece6b0] rounded-2xl shadow-lg border border-[#ddd]
                 p-4 select-none cursor-[url('src/assets/grab.svg'),_grab] z-30"
    >
      <ul
        className="flex items-center justify-between text-white text-lg font-medium"
        ref={ulRef}
      >
        <li className="bg-transparent flex-1 mx-2 py-2 rounded-xl text-center hover:bg-red-600 hover:text-[#fffce1] text-red-600 hover:border-red-600  border-1 transition cursor-pointer">
          About
        </li>
        <li className="bg-transparent flex-1 mx-2 py-2 rounded-xl text-center hover:bg-red-600 hover:text-[#fffce1] text-red-600 hover:border-red-600  border-1 transition cursor-pointer">
          Work
        </li>
        <li className="bg-transparent flex-1 mx-2 py-2 rounded-xl text-center hover:bg-red-600 hover:text-[#fffce1] text-red-600 hover:border-red-600  border-1 transition cursor-pointer">
          Stack
        </li>
        <li className="bg-transparent flex-1 mx-2 py-2 rounded-xl text-center hover:bg-red-600 hover:text-[#fffce1] text-red-600 hover:border-red-600  border-1 transition cursor-pointer">
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
