import firstBoy from "@/public/images/boys/1.png";
import secondBoy from "@/public/images/boys/2.png";
import thirdBoy from "@/public/images/boys/3.png";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/public/icons/arrowWithCircle.svg";

const boys = [firstBoy, secondBoy, thirdBoy];

export default function CallBanner() {
  return (
    <div className="container my-[30px] md:my-[90px]">
      <h2 className="mb-[10px] text-center text-black">
        Solutions for every need
      </h2>
      <p className="mb-[30px] text-center text-darkGreen md:mb-[80px]">
        Join thousands of marketers and entrepreneurs for a 2-day event at the
        forefront of social commerce.
      </p>

      <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-3">
        {boys.map((boy, idx) => (
          <div key={idx}>
            <Image src={boy} alt="boy" />

            <div className="relative -top-[70px] w-11/12 bg-white p-[12px] drop-shadow-xl md:p-[22px]">
              <p className="family-poppins mb-[20px] font-semibold text-black">
                Rebel Clothing
              </p>

              <div className="mb-[22px] flex">
                <div className="mr-4">
                  <h4 className="family-poppins font-semibold text-black">
                    6.7 M
                  </h4>
                  <p className="text-[10px] font-medium text-lightGray">
                    FOLLOWER REACH
                  </p>
                </div>
                <div>
                  <h4 className="family-poppins font-semibold text-black">
                    6.7 M
                  </h4>
                  <p className="text-[10px] font-medium text-lightGray">
                    FOLLOWER REACH
                  </p>
                </div>
              </div>

              <Link
                href={"#"}
                className="mb-3 flex w-max items-center text-[15px] font-medium text-purpleLight"
              >
                Learn More <Arrow className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
