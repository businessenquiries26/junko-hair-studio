const stylists = [
  {
    name: "Junko Tanaka",
    title: "Founder & Master Stylist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    specialty: "Color Specialist & Balayage Expert"
  },
  {
    name: "Sarah Chen",
    title: "Senior Colorist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    specialty: "Keratin Treatments & Color Correction"
  },
  {
    name: "Michael Rodriguez",
    title: "Master Stylist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    specialty: "Precision Cutting & Men's Grooming"
  }
];

const Stylists = () => {
  return (
    <section id="stylists" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-foreground mb-4">
          Our Expert Stylists
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Meet our talented team of award-winning stylists dedicated to bringing your vision to life
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stylists.map((stylist, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                {stylist.name}
              </h3>
              <p className="text-primary font-medium mb-2">
                {stylist.title}
              </p>
              <p className="text-muted-foreground">
                {stylist.specialty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stylists;
