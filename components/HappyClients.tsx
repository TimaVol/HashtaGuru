import FIcon from "@/public/icons/f_icon.svg";
import Image from "next/image";
import boyImg from "@/public/images/boy.png";
import Slider from "react-slick";
import Arrow from "@/public/icons/arrow.svg";
import { useRef } from "react";

const sliderItems = [
  {
    text: "Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest- hottest deals on the Internet.",
    author: "Rowhan Smith",
    position: "CEO, Foreclosure",
  },
  {
    text: "Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest- hottest deals on the Internet.",
    author: "Rowhan Smith",
    position: "CEO, Foreclosure",
  },
  {
    text: "Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest- hottest deals on the Internet.",
    author: "Rowhan Smith",
    position: "CEO, Foreclosure",
  },
];

export default function HappyClients() {
  const slider = useRef<any>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container p-[30px] md:mt-[70px] md:mb-[100px]">
      <h2 className="family-poppins mb-[10px] text-center text-black">
        Happy Clients
      </h2>
      <p className="mb-[40px] text-center text-darkGreen md:mb-[60px]">
        The Marketing Accountability Standards Board (MASB) endorses the
        definitions, purposes, and constructs of classes
      </p>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between 2xl:justify-around">
        <div className="relative mb-[20px] h-max md:mb-0 md:mr-[20px]">
          <FIcon className="mb-[20px] md:mb-[40px]" />

          <Slider
            ref={slider}
            {...settings}
            className="md:max-w-[330px] lg:max-w-[447px]"
          >
            {sliderItems.map((sliderItem, idx) => (
              <div key={idx} className="px-1 md:mb-0">
                <h5 className="mb-[30px] italic leading-7 text-darkGray md:mb-[55px] md:leading-[36px]">
                  {sliderItem.text}
                </h5>
                <h4 className="family-lato mb-[12px] font-bold text-black">
                  {sliderItem.author}
                </h4>
                <p className="text-lightGray">{sliderItem.position}</p>
              </div>
            ))}
          </Slider>

          <div className="absolute right-0 bottom-0 flex">
            <div
              onClick={() => slider.current.slickPrev()}
              className="mr-2 flex h-[29px] w-[29px] cursor-pointer items-center justify-center rounded border-lightGray shadow-2xl shadow-black transition-all md:hover:border"
            >
              <Arrow />
            </div>
            <div
              onClick={() => slider.current.slickNext()}
              className="flex h-[29px] w-[29px] cursor-pointer items-center justify-center rounded border-lightGray shadow-2xl shadow-black transition-all md:hover:border"
            >
              <Arrow className="rotate-180" />
            </div>
          </div>
        </div>

        <Image
          src={boyImg}
          alt="boy"
          className="mx-auto w-full max-w-[345px] md:mx-0"
        />
      </div>
    </div>
  );
}
