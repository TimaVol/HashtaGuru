import Link from "next/link";
import Arrow from "@/public/icons/arrow.svg";
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
    <div className="flex flex-col items-center md:flex-row md:even:flex-row-reverse">
      <div>
        <p
          className={`${subTitleColor} mb-[8px] font-semibold uppercase tracking-wide`}
        >
          {subTitle}
        </p>
        <h3 className="mb-[14px] text-black">{title}</h3>
        <p className="mb-[30px] leading-6 text-darkGreen">{text}</p>
        <Link
          href={"#"}
          className="mb-3 flex w-max items-center text-[15px] text-darkGray"
        >
          Learn More <Arrow className="ml-2" />
        </Link>
      </div>
      <Image src={img} alt={title} priority className="sm:w-1/2" />
    </div>
  );
}
