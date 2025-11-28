const specialties = [
  { icon: "fa-spa", name: "Balayage", description: "Hand-painted highlights for natural dimension" },
  { icon: "fa-paint-brush", name: "Color Correction", description: "Expert color repair and transformation" },
  { icon: "fa-leaf", name: "Keratin Treatment", description: "Smooth, frizz-free hair for months" },
  { icon: "fa-scissors", name: "Precision Cutting", description: "Tailored cuts for your unique style" },
  { icon: "fa-star", name: "Bridal Styling", description: "Elegant styles for your special day" },
  { icon: "fa-heart", name: "Hair Extensions", description: "Natural-looking length and volume" }
];

const Specialties = () => {
  return (
    <section id="specialties" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-foreground mb-4">
          Our Specialties
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Discover our signature services crafted with expertise and precision
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-lg bg-background hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <i className={`fas ${specialty.icon} text-2xl text-primary`}></i>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {specialty.name}
              </h3>
              <p className="text-muted-foreground">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
