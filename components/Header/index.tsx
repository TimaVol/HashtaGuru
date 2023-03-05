import Logo from "@/public/icons/Logo.svg";
import Arrow from "@/public/icons/arrowWithCircle.svg";
import { useState } from "react";
import Rodal from "rodal";
import headerImg from "@/public/images/header.png";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";
import Burger from "./Burger";
import Hamburger from "hamburger-react";

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
    background: "#373a47",
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

              <div
                onClick={() => setIsModalOpen(true)}
                className="md:display shadow-cyan-500/50 hidden w-max max-w-[202px] cursor-pointer items-center rounded-full bg-white bg-opacity-5 p-[15px] font-medium text-white shadow-lg md:flex md:py-[17px] md:px-[42px]"
              >
                <p>Request Demo</p>
              </div>
            </header>

            <div className="flex flex-col-reverse items-center justify-between md:flex-row">
              <div className="md:max-w-[571px]">
                <h1 className="family-poppins mb-[20px] bg-mainTitle bg-clip-text font-bold leading-10 text-[transparent] md:leading-[80px]">
                  Tell a better brand story
                </h1>

                <p className="mb-[40px] leading-5 md:max-w-[490px]">
                  Automate the way you search through hashtags and suggested
                  profiles to find results 100x faster.
                </p>

                <div
                  onClick={() => setIsModalOpen(true)}
                  className="shadow-cyan-500/50 flex w-max cursor-pointer items-center rounded-full bg-purpleDark p-[15px] font-medium text-white shadow-lg md:py-[17px] md:px-[35px]"
                >
                  <p>Request Demo</p> <Arrow className="ml-[16px] text-white" />
                </div>
              </div>

              <Image
                src={headerImg}
                alt="header img"
                className="md:absolute md:-right-[1%] md:w-1/3"
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
        height={200}
      >
        <div className="mt-6">
          <h4 className="mb-2">
            Sorry, but this feature is currently unavailable
          </h4>
          <p>The function of request demo is under development.</p>
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
