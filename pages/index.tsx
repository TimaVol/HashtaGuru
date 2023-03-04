import CallBanner from "@/components/CallBanner";
import Footer from "@/components/Footer";
import HappyClients from "@/components/HappyClients";
import Socials from "@/components/Socials";
import Solutions from "@/components/Solutions";
import Statistics from "@/components/Statistics";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <Socials />
      <Solutions />
      <Statistics />
      <CallBanner />
      <HappyClients />
      <Subscribe />
      <Footer />
    </>
  );
}
