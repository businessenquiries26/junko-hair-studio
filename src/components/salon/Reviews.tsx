const reviews = [
  {
    name: "Emily Watson",
    rating: 5,
    text: "Absolutely transformed my hair! Junko is a true artist. The balayage she created is exactly what I wanted. The salon is beautiful and the service is impeccable.",
    date: "2 weeks ago",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  },
  {
    name: "David Martinez",
    rating: 5,
    text: "Best haircut I've ever had. Michael really listened to what I wanted and delivered perfectly. The attention to detail is outstanding. Will definitely be coming back!",
    date: "1 month ago",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
  },
  {
    name: "Rachel Kim",
    rating: 5,
    text: "Sarah saved my hair after a color disaster at another salon. Her color correction skills are amazing! My hair has never looked or felt better. Highly recommend!",
    date: "3 weeks ago",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-foreground mb-4">
          Client Reviews
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Don't just take our word for it - hear from our satisfied clients
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="relative bg-cream rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote decoration */}
              <i className="fas fa-quote-left text-5xl text-primary/10 absolute top-6 right-6"></i>
              
              <div className="relative z-10">
                {/* Client Image and Rating */}
                <div className="flex items-center mb-6">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 mr-4"
                  />
                  <div>
                    <div className="flex items-center mb-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-primary text-sm mr-0.5"></i>
                      ))}
                    </div>
                    <p className="font-heading font-semibold text-foreground">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.date}
                    </p>
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-foreground leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">Read more reviews on</p>
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://www.google.com/search?q=junko+hair+studio+reviews" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center space-x-3 px-8 py-4 bg-background rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <i className="fab fa-google text-3xl text-foreground group-hover:text-primary transition-colors"></i>
              <div className="text-left">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Google Reviews</p>
                <p className="text-sm text-muted-foreground">See all reviews</p>
              </div>
            </a>
            <a 
              href="https://www.yelp.com/search?find_desc=junko+hair+studio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center space-x-3 px-8 py-4 bg-background rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <i className="fab fa-yelp text-3xl text-foreground group-hover:text-primary transition-colors"></i>
              <div className="text-left">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Yelp Reviews</p>
                <p className="text-sm text-muted-foreground">Read on Yelp</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
