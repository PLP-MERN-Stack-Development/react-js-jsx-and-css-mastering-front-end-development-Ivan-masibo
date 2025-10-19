import React from 'react';

function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-4">
        For questions, email{' '}
        <a
          href="mailto:support@farmhub.example"
          className="text-green-700 underline"
        >
          support@farmhub.example
        </a>
      </p>
      <div className="text-center">
        {/* ...existing code (form/links) ... */}
      </div>
    </div>
  );
}

export default Contact;