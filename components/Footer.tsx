import Logo from "@/public/icons/Logo.svg";
import Facebook from "@/public/icons/facebook.svg";
import Instagram from "@/public/icons/instagram.svg";
import Youtube from "@/public/icons/youtube.svg";
import Arrow from "@/public/icons/subMenuArrow.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container py-[30px] md:pt-[75px]">
      <div className="mb-[20px] grid grid-cols-1 justify-items-start gap-4 md:mb-[53px] md:grid-cols-3 md:justify-items-stretch">
        <Logo />

        <div className="flex items-center justify-between">
          <div className="relative mr-4 ">
            <p className="peer flex cursor-pointer items-center font-medium text-black">
              Solution <Arrow className="ml-2" />
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
            <p className="mr-4 font-medium text-black">Plans</p>
          </Link>
          <Link href={"#"} className="mr-4">
            <p className="mr-4 font-medium text-black">Resource</p>
          </Link>
          <Link href={"#"}>
            <p className="mr-4 font-medium text-black">Blog</p>
          </Link>
        </div>

        <div className="flex w-max items-center justify-between md:justify-self-end">
          <Link href={"#"}>
            <Facebook className="mr-4" />
          </Link>
          <Link href={"#"}>
            <Instagram className="mr-4" />
          </Link>
          <Link href={"#"}>
            <Youtube />
          </Link>
        </div>
      </div>

      <p className="border-t pt-[30px] text-center text-lightGray">
        Copyright © 2020 Besnik
      </p>
    </footer>
  );
}
