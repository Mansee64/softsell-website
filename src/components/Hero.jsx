function Hero() {
  return (
    <section
      style={{
        backgroundColor: '#4f46e5',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>
        Resell Your Unused Licenses
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '30px' }}>
        Turn them into cash securely and quickly.
      </p>
      <button
        style={{
          backgroundColor: 'white',
          color: '#4f46e5',
          padding: '14px 28px',
          borderRadius: '10px',
          border: 'none',
          fontWeight: 'bold',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#e0e7ff')}
        onMouseOut={(e) => (e.target.style.backgroundColor = 'white')}
      >
        Get a Quote
      </button>
    </section>
  );
}

export default Hero;
