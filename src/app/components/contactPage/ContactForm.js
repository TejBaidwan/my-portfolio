"use client";
import dynamic from 'next/dynamic';

const serviceID = 'service_ffvbkoj'
const templateID = 'template_mf50bk2'
const userID = 'nXq4eAEjVWgXza3b0'

const emailjs = dynamic(() => import('emailjs-com'), { ssr: false });

/*
  This is the content found in the Contact Page
  This page has a simple form which allows for email sending
 */
const ContactPage = () => {

  //Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    //Sending the email using my emailJS credentials
    emailjs
      .send(serviceID, templateID, data, userID)
      .then(() => {
        alert('Message Sent!');
        e.target.reset();
      })
      .catch(() => {
        alert('Could not send message!');
      });
  };

  return (
    <div className="min-h-screen bg-[#222222] text-white flex flex-col items-center w-full">
  
  {/* Contact Form Content*/}

  <div className="flex flex-col items-center justify-center w-full max-w-screen-xl py-10">
    <h1 className="text-5xl font-bold text-center text-white mb-4">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#840808]">Contact Me</span>
    </h1>

    <form
      onSubmit={handleSubmit}
      className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto rounded-lg bg-[#1F2937]"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="sender_name"
          name="name"
          className="w-full p-2 rounded-md bg-[#000000] border border-gray-600 focus:ring-4 transition duration-200"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 rounded-md bg-[#000000] border border-gray-600 focus:ring-4 transition duration-200"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="sender_subject"
          name="subject"
          className="w-full p-2 rounded-md bg-[#000000] border border-gray-600 focus:ring-4 transition duration-200"
          placeholder="Enter the subject"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="sender_message"
          name="message"
          className="w-full p-2 rounded-md bg-[#000000] border border-gray-600 focus:ring-4 transition duration-200"
          placeholder="Write your message"
          rows="5"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-2 text-lg font-bold text-white bg-black rounded-md hover:bg-gradient-to-br hover:from-red-700 hover:via-red-800 hover:to-black transition duration-200"
      >
        Send Message
      </button>
    </form>
  </div>
</div>

  );
};

export default ContactPage;


