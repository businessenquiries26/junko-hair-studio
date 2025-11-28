const services = [
  { name: "Women's Cut & Style", price: "$85" },
  { name: "Men's Cut", price: "$45" },
  { name: "Balayage (Full)", price: "$250" },
  { name: "Full Color", price: "$150" },
  { name: "Partial Highlights", price: "$180" },
  { name: "Keratin Treatment", price: "$300" },
  { name: "Hair Extensions", price: "From $500" },
  { name: "Bridal Package", price: "$350" },
  { name: "Deep Conditioning Treatment", price: "$65" },
  { name: "Blowout & Style", price: "$55" }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-foreground mb-4">
          Services & Pricing
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Transparent pricing for premium services
        </p>
        
        <div className="max-w-4xl mx-auto bg-cream rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="space-y-2">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group flex items-center justify-between py-6 px-6 rounded-xl hover:bg-background/60 border-b border-border/30 last:border-0 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-lg text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                    {service.name}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="hidden md:block w-32 h-px bg-gradient-to-r from-border/0 via-border to-border/0"></div>
                  <span className="flex-shrink-0 text-2xl font-heading font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12 p-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-primary mb-3">
            <i className="fas fa-info-circle"></i>
            <span className="font-semibold">Good to Know</span>
          </div>
          <p className="text-sm text-muted-foreground italic">
            Prices may vary based on hair length and complexity. All consultations are complimentary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
