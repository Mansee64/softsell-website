
function HowItWorks() {
  const steps = [
    {
      icon: '📤',
      title: 'Upload License',
      description: 'Submit your software license through our secure portal.',
    },
    {
      icon: '💰',
      title: 'Get Valuation',
      description: 'We assess its resale value and send you an offer.',
    },
    {
      icon: '✅',
      title: 'Get Paid',
      description: 'Accept the offer and receive your payment instantly.',
    },
  ];

  return (
    <section className="how-it-works-section">
      <h2 className="how-title">How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-icon">{step.icon}</div>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
