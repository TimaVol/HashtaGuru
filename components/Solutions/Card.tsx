import Link from "next/link";
import Arrow from "@/public/icons/arrowWithCircle.svg";
import Image, { StaticImageData } from "next/image";
interface Props {
  subTitle: string;
  title: string;
  text: string;
  img: StaticImageData;
  subTitleColor: string;
}

export default function Card({
  subTitle,
  title,
  text,
  img,
  subTitleColor,
}: Props) {
  return (
    <div className="mt-[25px] mb-[70px] flex flex-col items-center gap-x-[50px] last:mb-0 md:flex-row md:even:flex-row-reverse">
      <div>
        <p
          className={`${subTitleColor} mb-[8px] font-semibold uppercase tracking-wide`}
        >
          {subTitle}
        </p>
        <h3 className="family-poppins mb-[14px] text-black">{title}</h3>
        <p className="mb-[30px] leading-6 text-darkGreen">{text}</p>
        <Link
          href={"#"}
          className="mb-3 flex w-max items-center text-[15px] text-darkGray"
        >
          Learn More <Arrow className="ml-2" />
        </Link>
      </div>
      <Image
        src={img}
        alt={title}
        priority
        className="max-w-[300px] drop-shadow-xl sm:w-1/2"
      />
    </div>
  );
}
