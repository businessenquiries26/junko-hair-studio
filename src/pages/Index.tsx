import { useState } from "react";
import Header from "@/components/salon/Header";
import Hero from "@/components/salon/Hero";
import Stylists from "@/components/salon/Stylists";
import Gallery from "@/components/salon/Gallery";
import Specialties from "@/components/salon/Specialties";
import Services from "@/components/salon/Services";
import Location from "@/components/salon/Location";
import Reviews from "@/components/salon/Reviews";
import BookingModal from "@/components/salon/BookingModal";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onBookClick={() => setIsBookingOpen(true)} />
      <main>
        <Hero onBookClick={() => setIsBookingOpen(true)} />
        <Stylists />
        <Gallery />
        <Specialties />
        <Services />
        <Location />
        <Reviews />
      </main>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default Index;
