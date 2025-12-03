import React from 'react';
import { Book, GraduationCap, School, Truck, Search, PenTool } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <School size={40} className="text-brand-maroon" />,
      title: "School Book Supply",
      desc: "Complete sets of NCERT and private publisher books for Class 1 to 12. We cater to all major schools in the Delhi/NCR region."
    },
    {
      icon: <GraduationCap size={40} className="text-brand-maroon" />,
      title: "Competitive Exams",
      desc: "Specialized material for UPSC, SSC, Banking, and State PCS exams. Spectrum, Laxmikanth, Nitin Singhania - we have them all."
    },
    {
      icon: <Book size={40} className="text-brand-maroon" />,
      title: "Bulk Orders",
      desc: "Special discounts for libraries, coaching institutes, and schools. Reliable bulk supply chain management."
    },
    {
      icon: <Search size={40} className="text-brand-maroon" />,
      title: "Rare Book Sourcing",
      desc: "Can't find a specific edition? Let us know. We have a vast network to source out-of-print or rare academic books."
    },
    {
      icon: <Truck size={40} className="text-brand-maroon" />,
      title: "Home Delivery",
      desc: "Fast and safe delivery right to your doorstep. Free shipping on orders above ₹1000 in local areas."
    },
    {
      icon: <PenTool size={40} className="text-brand-maroon" />,
      title: "Stationery Supply",
      desc: "From premium pens to bulk notebooks, registers, and files. Complete office and school stationery solutions."
    },
  ];

  return (
    <div className="bg-brand-paper min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-blue font-bold tracking-widest text-sm uppercase">What We Do</span>
          <h1 className="font-serif text-4xl font-bold text-gray-900 mt-2 mb-4">Our Services</h1>
          <p className="text-gray-600">
            Beyond just selling books, we provide comprehensive educational solutions for students, teachers, and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 group">
              <div className="bg-brand-beige w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-brand-blue rounded-2xl p-8 md:p-16 text-center text-white">
          <h2 className="font-serif text-3xl font-bold mb-4">Need a Bulk Order?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Contact us today for special pricing on institutional orders for schools and coaching centers.
          </p>
          <a href="tel:8178365708" className="bg-white text-brand-blue px-8 py-3 rounded-full font-bold hover:bg-brand-beige transition inline-block">
            Call 8178365708
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
