function WhyChooseUs() {
  const features = [
    {
      icon: '💸',
      title: 'Best Value Guaranteed',
      description: 'We ensure you get the maximum resale value.',
    },
    {
      icon: '🔒',
      title: 'Safe & Secure Process',
      description: 'Your licenses are handled with top-tier security.',
    },
    {
      icon: '⚡',
      title: 'Fast Payouts',
      description: 'Receive payment quickly after approval.',
    },
    {
      icon: '🧑‍💻',
      title: 'Expert Support Team',
      description: 'Get help anytime from our experienced support team.',
    },
  ];

  return (
    <section className="why-section">
      <h2 className="why-title">Why Choose Us</h2>
      <div className="why-grid">
        {features.map((item, index) => (
          <div key={index} className="why-card">
            <div className="why-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;

