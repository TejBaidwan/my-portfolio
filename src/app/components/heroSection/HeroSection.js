"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import 'flowbite'
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, } from "@fortawesome/free-brands-svg-icons";
import Footer from "../footer/footerContent";

/*
  This is the content found in the HeroPage aka LandingPage
  It has my image, a button for downloading my CV, and one for navigating to my linkedin
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#222222] w-full px-5">
      <section className="flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center w-full">

        <div className="flex flex-col justify-center lg:items-start items-center min-h-[300px] lg:min-h-[400px] max-w-full px-4">

          {/* Header which uses the NPM React-Type-Animation for a typing effect */}
          <h1 className="text-5xl sm:text-4xl lg:text-7xl font-bold text-center lg:text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#840808]">
              Hey, I am{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#840808]">Tej</span>
            <br />
            <TypeAnimation
              sequence={[
                "Mobile Developer",
                800,
                "Full-Stack Web Dev",
                800,
              ]}
              wrapper="span"
              speed={35}
              repeat={Infinity}
              className="text-center lg:text-left"
            />
          </h1>

          {/* Download CV and Linkdin Buttons */}
          <div className="flex items-center gap-2">
            <a
              href="/docs/tejB_Resume.pdf"
              target="_blank"
              className="relative inline-flex items-center justify-center overflow-hidden 
              font-medium text-white rounded-lg border-2 border-red-800 bg-black focus:ring-red-500 
              group hover:bg-gradient-to-br hover:from-red-500 hover:via-red-800 hover:to-black mt-2"
            >
              <button className="p-3 font-medium text-white">
                Download CV
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/tejvir-baidwan/"
              target="_blank"
              className="text-white hover:text-[#4d91de] transition-all duration-200"
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
          </div>
        </div>

        {/* The portrait of me on the landing page */}
        <div className="flex justify-center items-center">
          <div className="relative w-40 h-40 sm:w-68 sm:h-68 md:w-88 md:h-88 lg:w-[300px] lg:h-[300px] xl:w-[450px] xl:h-[450px]">
            <Image
              src="/images/profilePic.jpg"
              alt="My Image"
              layout="fill"
              className="object-contain"
              priority
            />
          </div>
        </div>

        </div>

      </section>

      {/* Inserting the footer at the bottom of the page */}
      <div>
        <Footer />
      </div>

</main>

  );
}

