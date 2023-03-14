import Arrow from "@/public/icons/arrowWithCircle.svg";
import { useState } from "react";
import Rodal from "rodal";

export default function Subscribe() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="container my-[29px]">
        <div className="rounded-xl bg-mainGradient bg-cover bg-center bg-no-repeat p-[20px] text-center text-white md:pt-[51px] md:pb-[65px]">
          <h2 className="family-poppins mb-[10px]">Subscribe our newsletter</h2>
          <p className="mb-[28px] leading-[18px] md:leading-[28px]">
            Join thousands of marketers and entrepreneurs for a 2-day event at
            the forefront of social commerce.
          </p>

          <div
            onClick={() => setIsModalOpen(true)}
            className="shadow-cyan-500/50 mx-auto flex w-max cursor-pointer items-center rounded-full border border-transparent bg-purpleDark py-[17px] px-[42px] font-medium text-white shadow-lg transition-all hover:border-purpleDark hover:bg-white hover:text-purpleDark"
          >
            Subscribe <Arrow className="ml-[30px]" />
          </div>
        </div>
      </div>

      <Rodal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        closeOnEsc
        width={301}
        height={130}
        className="text-black"
      >
        <div className="flex h-full items-center">
          <h5 className="text-center">
            Sorry, but this feature is currently unavailable
          </h5>
        </div>
      </Rodal>
    </>
  );
}
