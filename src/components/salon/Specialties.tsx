const specialties = [
  { 
    icon: "fa-spa", 
    name: "Balayage", 
    description: "Hand-painted highlights for natural dimension",
    gradient: "from-coral-red/10 to-coral-red/5"
  },
  { 
    icon: "fa-paint-brush", 
    name: "Color Correction", 
    description: "Expert color repair and transformation",
    gradient: "from-primary/10 to-primary/5"
  },
  { 
    icon: "fa-leaf", 
    name: "Keratin Treatment", 
    description: "Smooth, frizz-free hair for months",
    gradient: "from-coral-red/10 to-coral-red/5"
  },
  { 
    icon: "fa-scissors", 
    name: "Precision Cutting", 
    description: "Tailored cuts for your unique style",
    gradient: "from-primary/10 to-primary/5"
  },
  { 
    icon: "fa-star", 
    name: "Bridal Styling", 
    description: "Elegant styles for your special day",
    gradient: "from-coral-red/10 to-coral-red/5"
  },
  { 
    icon: "fa-heart", 
    name: "Hair Extensions", 
    description: "Natural-looking length and volume",
    gradient: "from-primary/10 to-primary/5"
  }
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
              className={`group relative overflow-hidden text-center p-10 rounded-2xl bg-gradient-to-br ${specialty.gradient} border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative background element */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <i className={`fas ${specialty.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {specialty.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {specialty.description}
                </p>
                
                {/* Decorative bottom accent */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
