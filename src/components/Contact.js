import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

  // State to store form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // States to manage submission status and response messages

  const [isSubmitting, setIsSubmitting] = useState(false);

  //const [responseMessage, setResponseMessage] = useState('');


  // Handle changes to form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsSubmitting(true); 

    // EmailJS keys
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID; 
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID; 
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY; 

    console.log('Service ID:', serviceID);
    console.log('Template ID:', templateID);
    console.log('Public Key:', publicKey);
    


    // Use EmailJS to send the form data
    emailjs
      .sendForm(serviceID, templateID, e.target, publicKey) 
      .then(
        (result) => {
          // On success
          setIsSubmitting(false); 
          alert('Message sent successfully!'); 
          setFormData({ name: '', email: '', message: '' }); 
        },
        (error) => {
          // On error
          setIsSubmitting(false); 
          alert('Something went wrong. Please try again later.');
        }
      );
  };


  return (
    <section id="contact">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-* px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:px-24 lg:pt-0">
            <div className="flex flex-col items-start lg:flex-row lg:gap-6 lg:pt-16 lg:w-full">
              <div className="mx-auto max-w-md lg:max-w-full lg:mx-0 lg:flex-auto lg:pt-16 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-8">
                  Contact Me
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600 mb-8">
                  Feel free to message me using the form below or through my email at klohtia1@gmail.com.
                </p>

                {/* Form */}
                <div className="mt-10 max-w-2xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-800 p-2"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-800 p-2"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-800 p-2"
                        placeholder="Type your message here..."
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'} {/* Change text based on submission status */}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
