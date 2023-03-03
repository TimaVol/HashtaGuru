import Link from "next/link";
import Arrow from "@/public/icons/arrow.svg";
interface Props {
  subTitle: string;
  title: string;
  text: string;
  icon: React.ReactElement;
  subTitleColor: string;
}

export default function Card({
  subTitle,
  title,
  text,
  icon,
  subTitleColor,
}: Props) {
  return (
    <div className="flex flex-col items-center">
      <div>
        <p
          className={`${subTitleColor} mb-[8px] font-semibold uppercase tracking-wide`}
        >
          {subTitle}
        </p>
        <h3 className="mb-[14px]">{title}</h3>
        <p className="mb-[30px]">{text}</p>
        <Link
          href={"#"}
          className="flex w-max items-center text-[15px] text-darkGray"
        >
          Learn More <Arrow className="ml-2" />
        </Link>
      </div>
      {icon}
    </div>
  );
}
