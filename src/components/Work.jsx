import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import mockup1 from "../images/mockup_1.png";
import mockup2 from "../images/mockup_2.png";
import mockup3 from "../images/mockup_3.png";
import mockup4 from "../images/mockup_4.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Work() {
  const details = [
    {
      id: 1,
      title: "Agency Website",
      imgSource: mockup1,
    },
    {
      id: 2,
      title: "Restaurant website",
      imgSource: mockup2,
    },
    {
      id: 3,
      title: "Fashion store",
      imgSource: mockup3,
    },
    {
      id: 4,
      title: "E-Book website",
      imgSource: mockup4,
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".mockParent",
      { scale: 0.95, opacity: 0.9 },
      {
        scale: 1.06,
        opacity: 1,
        y: -80,
        scrollTrigger: {
          trigger: ".mockParent",
          start: "top 85%",
          end: "bottom 100%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="mockParent">
      <div className="mockContent w-full md:h-screen h-[90vh] overflow-hidden bg-red-600 flex flex-col items-center justify-center relative px-4 sm:px-8">
      <h2 className="text-[#f3f0d8] text-3xl sm:text-4xl md:text-5xl font-serif mb-5 text-center">
        MY WORK
      </h2>
      <div className="w-full sm:w-[90%] h-[3px] bg-[#e5dfac] mb-10"></div>

      <div className="relative w-full flex items-center justify-center">
        {/* Navigation Arrows */}
        <div className="custom-prev hidden sm:absolute sm:flex left-5 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#e5dfac]/20 rounded-full cursor-pointer hover:bg-[#e5dfac]/40 transition-all text-[#e5dfac] text-3xl font-bold items-center justify-center">
          &#8592;
        </div>
        <div className="custom-next hidden sm:absolute sm:flex right-5 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#e5dfac]/20 rounded-full cursor-pointer hover:bg-[#e5dfac]/40 transition-all text-[#e5dfac] text-3xl font-bold items-center justify-center">
          &#8594;
        </div>

        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Mousewheel]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: false,
          }}
          pagination={{ clickable: true }}
          speed={800}
          className="w-full max-w-[1200px] h-[350px] sm:h-[450px] md:h-[500px]"
        >
          {details &&
            details.map(({ id, title, imgSource }) => {
              return (
                <SwiperSlide
                  className="!w-[70%] sm:!w-[80%] md:!w-[50%] !h-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  key={id}
                >
                  <div className="w-full h-[90%] bg-white/10  shadow-lg rounded-2xl flex flex-col items-center justify-center">
                    <h1 className="text-[#f3f0d8] text-xl sm:text-3xl md:text-4xl font-serif mb-4 text-center">
                      {title}
                    </h1>
                    <img
                      src={imgSource}
                      alt="mockup1"
                      className="w-[90%] sm:w-[80%] rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
    </div>
  );
}

export default Work;
