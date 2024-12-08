"use client";
import NavigationTabBar from "../components/navigation/NavigationTabBar";
import Footer from "../components/footer/footerContent";
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('../components/contactPage/ContactForm'), { 
  ssr: false
});

//This is the ContactPage with the different components inserted

export default function ContactPage() {
  return (
<div className="min-h-screen bg-[#222222] text-white">
  
  {/* NavigationTabBar */}
  <div className="fixed w-full top-0 left-0 z-10">
    <NavigationTabBar />
  </div>

  {/* Contact Page Content */}
  <div className="flex flex-col items-center justify-center px-4 py-20 mt-10">
    <ContactForm />
  </div>

  {/* Footer */}
  <div>
    <Footer />
  </div>
</div>

  );
}


