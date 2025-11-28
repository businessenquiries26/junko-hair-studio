const reviews = [
  {
    name: "Emily Watson",
    rating: 5,
    text: "Absolutely transformed my hair! Junko is a true artist. The balayage she created is exactly what I wanted. The salon is beautiful and the service is impeccable.",
    date: "2 weeks ago"
  },
  {
    name: "David Martinez",
    rating: 5,
    text: "Best haircut I've ever had. Michael really listened to what I wanted and delivered perfectly. The attention to detail is outstanding. Will definitely be coming back!",
    date: "1 month ago"
  },
  {
    name: "Rachel Kim",
    rating: 5,
    text: "Sarah saved my hair after a color disaster at another salon. Her color correction skills are amazing! My hair has never looked or felt better. Highly recommend!",
    date: "3 weeks ago"
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
              className="bg-cream rounded-lg p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-primary mr-1"></i>
                ))}
              </div>
              <p className="text-foreground mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-semibold text-foreground">
                    {review.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {review.date}
                  </p>
                </div>
                <i className="fas fa-quote-right text-3xl text-primary/20"></i>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">See more reviews on</p>
          <div className="flex items-center justify-center space-x-6">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <i className="fab fa-google text-2xl"></i>
            </a>
            <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <i className="fab fa-yelp text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
