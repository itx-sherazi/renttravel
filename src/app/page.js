import CarRentalOffers from "@/components/Home/CarRenat";
import HeroSection from "@/components/Home/HeroSection";
import CarRentalSearchForm from "@/components/Home/SearchLocation";

export default function Home() {
  return (
  <div>
    <HeroSection/>
    <CarRentalSearchForm/>
    <CarRentalOffers/>
  </div>
  );
}
