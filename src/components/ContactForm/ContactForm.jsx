import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., connect to Netlify or Vercel serverless function)
    console.log('Form submitted:', formData);
    // Clear the form fields after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[600px] container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded py-2 px-4"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded py-2 px-4"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full border border-gray-300 rounded py-2 px-4"
        />
      </div>
      <div className="text-center">
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
