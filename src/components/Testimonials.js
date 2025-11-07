import React from 'react';
import '../styles/components.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Critic",
      text: "The best Italian restaurant in town! Every dish is a masterpiece.",
      rating: 5
    },
    {
      name: "Michael Brown",
      role: "Regular Customer",
      text: "Authentic flavors and exceptional service. Our go-to spot for special occasions.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "First-time Visitor",
      text: "Amazing atmosphere and even better food. Will definitely be back!",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>What our customers say about us</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p>"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;