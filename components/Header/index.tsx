import Logo from "@/public/icons/Logo.svg";
import Arrow from "@/public/icons/arrowWithCircle.svg";
import { useState } from "react";
import Rodal from "rodal";
import headerImg from "@/public/images/header.png";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";
import Burger from "./Burger";
import Hamburger from "hamburger-react";
import Link from "next/link";
import SubMenuArrow from "@/public/icons/subMenuArrow.svg";

const styles = {
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0",
  },
  bmMenu: {
    background: "white",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    top: "0",
    background: "rgba(0, 0, 0, 0.3)",
  },
};

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const burgerOnOpenHandler = () => {
    setIsBurgerOpen(!isBurgerOpen);
    document.body.style.overflow = !isBurgerOpen ? "hidden" : "auto";
  };
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="relative z-20">
          <div className="container pt-[15px] pb-[30px] md:pt-[30px] md:pb-[120px]">
            <header className="mb-[50px] flex items-center justify-between text-white md:mb-[83px]">
              <Logo />
              <div className="md:hidden">
                <Hamburger
                  toggled={isBurgerOpen}
                  toggle={burgerOnOpenHandler}
                />
              </div>

              <div className="hidden items-center justify-between md:flex">
                <div className="relative mr-4 ">
                  <p className="peer flex cursor-pointer items-center font-medium text-white">
                    Solution <SubMenuArrow className="ml-2" />
                  </p>

                  <div className="invisible absolute -bottom-[113px] left-0 h-[110px] w-[100px] rounded border border-lightGray bg-white opacity-0 transition-all duration-300 ease-in-out hover:visible hover:opacity-100 peer-hover:visible peer-hover:opacity-100">
                    <div className="p-[10px] text-sm font-medium text-black">
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

                <Link href={"#"} className="mr-4">
                  <p className="mr-4 font-medium text-white">Plans</p>
                </Link>
                <Link href={"#"} className="mr-4">
                  <p className="mr-4 font-medium text-white">Resource</p>
                </Link>
                <Link href={"#"}>
                  <p className="mr-4 font-medium text-white">Blog</p>
                </Link>
              </div>

              <div
                onClick={() => setIsModalOpen(true)}
                className="md:display shadow-cyan-500/50 hidden w-max max-w-[202px] cursor-pointer items-center rounded-full bg-white bg-opacity-5 p-[15px] font-medium text-white shadow-lg transition-all hover:bg-white hover:text-black md:flex md:py-[17px] md:px-[42px]"
              >
                <p>Request Demo</p>
              </div>
            </header>

            <div className="flex flex-col-reverse items-center justify-between md:flex-row">
              <div className="md:w-[55%] lg:w-full lg:max-w-[571px]">
                <h1 className="family-poppins mb-[20px] bg-mainTitle bg-clip-text font-bold leading-10 text-[transparent] md:text-[66px] md:leading-[80px] lg:text-[94px]">
                  Tell a better brand story
                </h1>

                <p className="mb-[40px] leading-5 md:max-w-[490px]">
                  Automate the way you search through hashtags and suggested
                  profiles to find results 100x faster.
                </p>

                <div
                  onClick={() => setIsModalOpen(true)}
                  className="shadow-cyan-500/50 flex w-max cursor-pointer items-center rounded-full border border-transparent bg-purpleDark p-[15px] font-medium text-white shadow-lg transition-all hover:border-purpleDark hover:bg-white hover:text-purpleDark md:py-[17px] md:px-[35px]"
                >
                  <p>Request Demo</p> <Arrow className="ml-[16px]" />
                </div>
              </div>

              <Image
                src={headerImg}
                alt="header img"
                priority
                className="max-h-[489px] md:absolute md:-right-[6%] md:w-1/2 lg:w-1/3 2xl:static 2xl:right-auto 2xl:max-h-max"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-10 h-1/2 w-full bg-mainGradient bg-cover bg-center bg-no-repeat" />
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

      <Menu
        styles={styles}
        customBurgerIcon={false}
        isOpen={isBurgerOpen}
        onClose={burgerOnOpenHandler}
      >
        <Burger />
      </Menu>
    </>
  );
}
