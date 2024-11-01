import CustomerReview from "@/components/CustomerReview";
import DuctCleaning from "@/components/DuctCleaning";
import Footer from "@/components/Footer";
import FrequentlyAsked from "@/components/FrequentlyAsked";
import GetUserInfo from "@/components/GetUserInfo";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurProcess from "@/components/OurProcess";
import OurServices from "@/components/OurServices";
import Image from "next/image";


export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="h-10"></div>
      <Hero />
      <div className="flex items-center justify-center relative">
        <GetUserInfo />
      </div>
      <DuctCleaning />
      <OurServices />
      <OurProcess />
      <CustomerReview />
      <FrequentlyAsked />
      <Footer />
      {/* <Hero /> */}
    </div>
  );
}
