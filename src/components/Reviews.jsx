import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const Data = [
  {
    id: 1,
    title: "Praveen Salon",
    para: "Working with NKtechSolutions was a great experience coding sessions were done in front of us. Nand Kishor was excellent, and overall our work was done with great satisfaction.",
    stars: 5,
    style: "bg-red-500",
  },
  {
    id: 2,
    title: "Akhilesh",
    para: "NKtechSolutions delivered exceptional mockups, design tutorials, and a custom-built site. Fast response and professionalism made it outstanding!",
    stars: 4,
    style: "bg-blue-500",
  },
  {
    id: 3,
    title: "THIRD",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maiores quibusdam ad commodi corrupti temporibus.",
    stars: 4,
    style: "bg-green-500",
  },
  {
    id: 4,
    title: "FOURTH",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maiores quibusdam ad commodi corrupti temporibus.",
    stars: 4,
    style: "bg-orange-500",
  },
];

function Reviews() {
  return (
    <>
      <div className="w-full md:h-screen h-screen bg-[#111] -z-10">
        <h2 className="text-[#f3f0d8] text-4xl font-serif p-10">Reviews </h2>
        <div className=" flex items-center justify-center">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Pagination, Navigation]}
            // pagination={{ clickable: true }}
            // navigation
            className="w-[300px] sm:w-[400px] h-[400px] sm:h-[500px]"
          >
            {Data.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className={`w-full h-full rounded-2xl shadow-2xl flex flex-col justify-between p-6 ${item.style} text-white`}
                >
                  <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                  <p className="text-sm sm:text-base mb-4">{item.para}</p>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar
                        key={i}
                        className={`mr-1 ${
                          i < item.stars ? "text-yellow-400" : "text-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Reviews;
