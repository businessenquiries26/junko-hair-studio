const Location = () => {
  return (
    <section id="location" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-foreground mb-4">
          Visit Us
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Located in the heart of the city, easily accessible and always welcoming
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    123 Luxury Lane<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i className="fas fa-phone text-primary"></i>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+13105551234" className="hover:text-primary transition-colors">
                      (310) 555-1234
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@junkohairstudio.com" className="hover:text-primary transition-colors">
                      info@junkohairstudio.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i className="fas fa-clock text-primary"></i>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Tuesday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 5:00 PM<br />
                    Monday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="rounded-lg overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8395188757925!2d-118.40125668478594!3d34.07336208060522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0x1ba8f6eb24b30575!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Junko Hair Studio Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
