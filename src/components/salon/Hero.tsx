import { Button } from "@/components/ui/button";

interface HeroProps {
  onBookClick: () => void;
}

const Hero = ({ onBookClick }: HeroProps) => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1080&fit=crop')"
      }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
          Welcome to Junko Hair Studio
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Where luxury meets artistry. Experience transformative hair styling in an elegant setting.
        </p>
        <Button 
          onClick={onBookClick}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Book Appointment
        </Button>
      </div>
    </section>
  );
};

export default Hero;
