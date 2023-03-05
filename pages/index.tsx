import CallBanner from "@/components/CallBanner";
import Footer from "@/components/Footer";
import HappyClients from "@/components/HappyClients";
import Header from "@/components/Header";
import Socials from "@/components/Socials";
import Solutions from "@/components/Solutions";
import Statistics from "@/components/Statistics";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <Header />
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
