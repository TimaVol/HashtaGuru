import Card from "./Card";
import firstCardImg from "@/public/images/Solutions/card1.png";
import secondCardImg from "@/public/images/Solutions/card2.png";
import profileImg from "@/public/images/Solutions/profile.png";

const cards = [
  {
    title: "Influencer marketing",
    subTitle: "Influencer",
    text: "Create infinite pieces of content with our influencer product. Build,streamline,manage large-scale influencer programs",
    img: firstCardImg,
    subTitleColor: "text-purpleLight",
  },
  {
    title: "Community marketing",
    subTitle: "Community",
    text: "Bring your relationships to new heights with our community product. Discover your biggest enthusiasts",
    img: profileImg,
    subTitleColor: "text-yellow",
  },
  {
    title: "Managed services",
    subTitle: "services",
    text: "Our full-service solution lets our experts do the heavy lifting to optimize your community for brand building and storytelling",
    img: secondCardImg,
    subTitleColor: "text-pink",
  },
];

export default function Solutions() {
  return (
    <div className="container max-w-[789px] py-[30px] md:pt-[82px] md:pb-[30px]">
      <h2 className="family-poppins mb-[10px] text-center font-semibold text-black">
        Solutions for every need
      </h2>
      <p className="mb-[35px] text-center text-darkGreen">
        Join thousands of marketers and entrepreneurs for a 2-day event at the
        forefront of social commerce.
      </p>

      {cards.map((card, idx) => (
        <Card
          key={idx}
          title={card.title}
          subTitle={card.subTitle}
          text={card.text}
          img={card.img}
          subTitleColor={card.subTitleColor}
        />
      ))}
    </div>
  );
}
