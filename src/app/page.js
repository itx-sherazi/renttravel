import CarRentalOffers from "@/components/Home/CarRenat";
import FAQAccordion from "@/components/Home/Faq";
import HeroSection from "@/components/Home/HeroSection";
import HomeLatest from "@/components/Home/LatestCar";
import CarRentalSearchForm from "@/components/Home/SearchLocation";
import SuvRentalSection from "@/components/Home/SuvRental";
import Testimonials from "@/components/Home/Testimonials";
import WhatsappButton from "@/components/Home/Whatsapp";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CarRentalSearchForm />
      <CarRentalOffers />
      <HomeLatest />
      <WhatsappButton />
      <SuvRentalSection />
      <Testimonials />
      <FAQAccordion />
    </div>
  );
}
