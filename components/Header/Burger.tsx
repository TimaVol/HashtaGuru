import { useState } from "react";
import Rodal from "rodal";
import Link from "next/link";
import SubMenuArrow from "@/public/icons/subMenuArrow.svg";

export default function Burger() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div>
        <div>
          <div className="relative mb-4">
            <p className="peer flex w-max cursor-pointer items-center text-lg font-medium text-white">
              Solution <SubMenuArrow className="ml-2" />
            </p>

            <div className="invisible absolute -bottom-[113px] left-0 h-[110px] w-[100px] rounded border border-lightGray bg-black opacity-0 transition-all duration-300 ease-in-out hover:visible hover:opacity-100 peer-hover:visible peer-hover:opacity-100">
              <div className="p-[10px] text-sm font-medium text-white">
                <Link href={"#"} className="mb-2 w-max">
                  About
                </Link>
                <Link href={"#"} className="mb-2 w-max">
                  Docs
                </Link>
                <Link href={"#"} className="mb-2 w-max">
                  Showcase
                </Link>
                <Link href={"#"} className="mb-2 w-max">
                  Explore
                </Link>
              </div>
            </div>
          </div>

          <Link href={"#"} className="mb-4">
            <p className="text-lg font-medium text-white">Plans</p>
          </Link>
          <Link href={"#"} className="mb-4">
            <p className="text-lg font-medium text-white">Resource</p>
          </Link>
          <Link href={"#"} className="mb-4">
            <p className=" text-lg font-medium text-white">Blog</p>
          </Link>
        </div>

        <div
          onClick={() => setIsModalOpen(true)}
          className="shadow-cyan-500/50 mx-auto flex w-max max-w-[202px] cursor-pointer items-center rounded-full bg-white bg-opacity-5 p-[15px] font-medium text-white shadow-lg md:py-[17px] md:px-[42px]"
        >
          <p>Request Demo</p>
        </div>
      </div>

      <Rodal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        closeOnEsc
        width={301}
        height={200}
        className="text-black"
      >
        <div className="mt-6">
          <h4 className="mb-2">
            Sorry, but this feature is currently unavailable
          </h4>
          <p>The function of request demo is under development.</p>
        </div>
      </Rodal>
    </>
  );
}
