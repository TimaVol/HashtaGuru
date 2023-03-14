import { useState } from "react";
import Rodal from "rodal";
import Link from "next/link";
import SubMenuArrow from "@/public/icons/subMenuArrow.svg";

export default function Burger() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div>
        <div className="text-black">
          <div className="relative mb-4">
            <p className="peer flex w-max cursor-pointer items-center text-lg font-medium ">
              Solution <SubMenuArrow className="ml-2" />
            </p>

            <div className="invisible absolute -bottom-[113px] left-0 h-[110px] w-[100px] rounded border border-black  bg-white opacity-0 transition-all duration-300 ease-in-out hover:visible hover:opacity-100 peer-hover:visible peer-hover:opacity-100">
              <div className="p-[10px] text-sm font-medium">
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
            <p className="text-lg font-medium">Plans</p>
          </Link>
          <Link href={"#"} className="mb-4">
            <p className="text-lg font-medium">Resource</p>
          </Link>
          <Link href={"#"} className="mb-4">
            <p className=" text-lg font-medium">Blog</p>
          </Link>
        </div>

        <div
          onClick={() => setIsModalOpen(true)}
          className="shadow-cyan-500/50 mx-auto flex w-max max-w-[202px] cursor-pointer items-center rounded-full bg-purpleDark p-[15px] font-medium text-white  shadow-lg md:py-[17px] md:px-[42px]"
        >
          <p>Request Demo</p>
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
