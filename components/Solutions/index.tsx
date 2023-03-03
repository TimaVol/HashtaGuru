import Card from "./Card";
import FirstCard from "@/public/icons/Solutions/card.svg";
import SecondCard from "@/public/icons/Solutions/card2.svg";
import ProfileIcon from "@/public/icons/Solutions/profile.svg";

const cards = [
  {
    title: "Influencer marketing",
    subTitle: "Influencer",
    text: "Create infinite pieces of content with our influencer product. Build,streamline,manage large-scale influencer programs",
    icon: <FirstCard />,
    subTitleColor: "text-purpleLight",
  },
  {
    title: "Community marketing",
    subTitle: "Community",
    text: "Bring your relationships to new heights with our community product. Discover your biggest enthusiasts",
    icon: <ProfileIcon />,
    subTitleColor: "text-yellow",
  },
  {
    title: "Managed services",
    subTitle: "services",
    text: "Our full-service solution lets our experts do the heavy lifting to optimize your community for brand building and storytelling",
    icon: <SecondCard />,
    subTitleColor: "text-pink",
  },
];

export default function Solutions() {
  return (
    <div className="container">
      <h2 className="family-poppins mb-[10px] text-center font-semibold text-black">
        Solutions for every need
      </h2>
      <p className="mb-[85px] text-center text-darkGreen">
        Join thousands of marketers and entrepreneurs for a 2-day event at the
        forefront of social commerce.
      </p>

      {cards.map((card, idx) => (
        <Card
          key={idx}
          title={card.title}
          subTitle={card.subTitle}
          text={card.text}
          icon={card.icon}
          subTitleColor={card.subTitleColor}
        />
      ))}
    </div>
  );
}
