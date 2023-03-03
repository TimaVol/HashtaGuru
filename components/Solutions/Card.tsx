import Link from "next/link";
import Arrow from "@/public/icons/arrow.svg";
interface Props {
  subTitle: string;
  title: string;
  text: string;
  img?: string;
}

export default function Card({ subTitle, title, text, img }: Props) {
  return (
    <div className="flex flex-col">
      <div>
        <p>{subTitle}</p>
        <h3>{title}</h3>
        <p>{text}</p>
        <Link href={"#"}>
          Learn More <Arrow />
        </Link>
      </div>
    </div>
  );
}
