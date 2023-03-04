import Arrow from "@/public/icons/arrowWithCircle.svg";
import { useState } from "react";
import Rodal from "rodal";

export default function Subscribe() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="container my-[29px]">
        <div className=" rounded-xl bg-mainGradient bg-cover bg-center bg-no-repeat p-[20px] text-center text-white md:pt-[51px] md:pb-[65px]">
          <h2 className="family-poppins mb-[10px]">Subscribe our newsletter</h2>
          <p className="mb-[28px] leading-[18px] md:leading-[28px]">
            Join thousands of marketers and entrepreneurs for a 2-day event at
            the forefront of social commerce.
          </p>

          <div
            onClick={() => setIsModalOpen(true)}
            className="shadow-cyan-500/50 mx-auto flex w-max cursor-pointer items-center rounded-full bg-purpleDark py-[17px] px-[42px] font-medium shadow-lg"
          >
            Subscribe <Arrow className="ml-[30px] text-white" />
          </div>
        </div>
      </div>

      <Rodal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        closeOnEsc
        width={301}
        height={200}
      >
        <div className="mt-6">
          <h4 className="mb-2">
            Sorry, but this feature is currently unavailable
          </h4>
          <p>The function of subscription is under development.</p>
        </div>
      </Rodal>
    </>
  );
}
