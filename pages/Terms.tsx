import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-3xl font-bold text-gray-900 mb-8">Terms & Policies</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="font-serif text-xl font-bold text-brand-blue mb-4">1. Privacy Policy</h2>
            <p>At Raj Kumar Book Dealer, we respect your privacy. We only collect necessary information (Name, Address, Phone) to process your orders. We do not share your data with third parties for marketing.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-blue mb-4">2. Return & Refund Policy</h2>
            <p>Books purchased can be returned within 3 days only if:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>The book is damaged during transit.</li>
              <li>Incorrect edition or title was delivered.</li>
              <li>Pages are missing or printing is defective.</li>
            </ul>
            <p className="mt-2">Refunds are processed within 5-7 working days to the original payment method.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-blue mb-4">3. Shipping Policy</h2>
            <p>We ship across India. Standard delivery takes 5-7 days. Local delivery in Sarita Vihar is available within 24 hours.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-blue mb-4">4. Terms & Conditions</h2>
            <p>By using this website, you agree to comply with our terms. Prices are subject to change without notice based on publisher rates.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
