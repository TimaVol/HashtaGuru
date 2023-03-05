import Walmart from "@/public/icons/Walmart.svg";
import Asana from "@/public/icons/asana.svg";
import Buzzfeed from "@/public/icons/buzzfeed.svg";
import Chase from "@/public/icons/chase.svg";
import Google from "@/public/icons/google.svg";
import toggleImg from "@/public/images/toggle.png";
import Image from "next/image";

export default function Socials() {
  return (
    <div className="container">
      <p className="fality-lato mb-[30px] text-center text-lightGray md:mb-[65px]">
        SOME OF OUR TRUSTED CLIENTS
      </p>

      <div className="grid grid-cols-2 justify-items-center gap-4 md:grid-cols-4 lg:grid-cols-6">
        <Chase />
        <Asana />
        <Google />
        <Buzzfeed />
        <Image src={toggleImg} alt="toggleImg" className="max-w-[95px]" />
        <Walmart />
      </div>
    </div>
  );
}
