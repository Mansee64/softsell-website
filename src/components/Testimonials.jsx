function Testimonials() {
  const testimonials = [
    {
      quote: "Fantastic experience! Quick and easy process.",
      name: "Jane Doe",
      role: "IT Manager",
    },
    {
      quote: "Got more value than expected. Highly recommended!",
      name: "John Smith",
      role: "CTO",
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p className="quote-text">"{t.quote}"</p>
            <p className="quote-author">– {t.name}, {t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
