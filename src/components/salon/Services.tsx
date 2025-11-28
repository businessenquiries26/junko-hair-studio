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
        
        <div className="max-w-3xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex items-center justify-between py-6 border-b border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-lg text-foreground font-medium">
                {service.name}
              </span>
              <span className="flex-shrink-0 ml-4 text-xl font-heading font-semibold text-primary">
                {service.price}
              </span>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-12 italic">
          Prices may vary based on hair length and complexity. Consultation is complimentary.
        </p>
      </div>
    </section>
  );
};

export default Services;
