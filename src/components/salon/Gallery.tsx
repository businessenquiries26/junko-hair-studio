const galleryImages = [
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=600&fit=crop"
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-foreground mb-4">
          Our Work
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Browse our portfolio of stunning transformations and signature styles
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image}
                alt={`Hair styling work ${index + 1}`}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
