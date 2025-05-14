import { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Form submitted (frontend only)');
  }

  return (
    <section style={{ backgroundColor: '#4f46e5', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto', marginTop: '40px' }}>
        <input name="name" placeholder="Name" required onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: 'none' }} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: 'none' }} />
        <input name="company" placeholder="Company" required onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: 'none' }} />
        <select name="license" required onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: 'none' }}>
          <option value="">Select License Type</option>
          <option value="software">Software</option>
          <option value="cloud">Cloud</option>
        </select>
        <textarea name="message" placeholder="Your Message" required onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: 'none' }}></textarea>
        <button type="submit" style={{ backgroundColor: 'white', color: '#4f46e5', padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
          Send
        </button>
      </form>
    </section>
  );
}

export default ContactForm;