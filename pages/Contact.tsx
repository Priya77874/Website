import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    
    const whatsappMessage = `*New Inquiry from Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/918178365708?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-900 py-16 text-center text-white">
        <h1 className="font-serif text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-gray-400">We'd love to hear from you. Visit us or send a message.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-beige p-3 rounded-full text-brand-maroon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Visit Our Store</h3>
                  <p className="text-gray-600">H. No. 416/152 Mehla Mohalla,<br/>Madanpur Khadar, Sarita Vihar,<br/>New Delhi 110076</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-beige p-3 rounded-full text-brand-maroon">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+91 8178365708</p>
                  <p className="text-xs text-green-600 font-medium mt-1">Available on WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-beige p-3 rounded-full text-brand-maroon">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">rajkumar20060308@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-beige p-3 rounded-full text-brand-maroon">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Working Hours</h3>
                  <p className="text-gray-600">Mon - Sat: 10:00 AM - 9:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-gray-100 rounded-xl overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.686467364567!2d77.2916!3d28.5491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce40000000001%3A0x0!2sSarita+Vihar!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" 
                  placeholder="john@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" 
                  placeholder="+91 98765 43210" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" 
                  placeholder="I need a specific book..."
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-maroon text-white py-3 rounded-lg font-bold hover:bg-red-900 transition flex items-center justify-center gap-2">
                <Send size={18} /> Send Message on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;