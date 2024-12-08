"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython, faNodeJs, faGithub, faApple, faAndroid, faPhp, faLaravel, 
    faSwift, faJava, faFlutter, faFigma, faSuperpowers, faAngular, faCss, faHtml5, faJs} from "@fortawesome/free-brands-svg-icons";

    /*
  This is the content found in the SkillsPage
  It has a grid layout of different types of development technologies, and collections of languages which, when hovered,
  display a progress bar indicating my proficiency with them
 */
export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#222222] text-white py-10">
      
      {/* SHeader of the page */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-[#FF0000] to-[#840808] bg-clip-text">
          Skills I have Acquired & My Proficiency
        </h2>
      </div>

      {/* The grid layout of content on the page */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Front-End Languages Section */}
        <div className="bg-[#263548] p-8 group hover:bg-[#333333] transition duration-200 ease-in-out">
          <h3 className="text-xl font-bold text-[#FF0000] mb-2">Front-End Languages</h3>
          <ul>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faHtml5} className="text-[#FF0000] mr-2" /> HTML
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "95%" }}></div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCss} className="text-[#FF0000] mr-2" /> CSS
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "%90" }}></div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faJs} className="text-[#FF0000] mr-2" /> JavaScript
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </li>
          </ul>
        </div>

        {/* Back-End Languages Section */}
        <div className="bg-[#263548] p-8 group hover:bg-[#333333] transition duration-200 ease-in-out">
          <h3 className="text-xl font-bold text-[#FF0000] mb-2">Back-End Languages</h3>
          <ul>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPython} className="text-[#FF0000] mr-2" /> Python
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faNodeJs} className="text-[#FF0000] mr-2" /> Node.js
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "50%" }}></div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhp} className="text-[#FF0000] mr-2" /> PHP
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Development Section */}
        <div className="bg-[#263548] p-8 group hover:bg-[#333333] transition duration-200 ease-in-out">
          <h3 className="text-xl font-bold text-[#FF0000] mb-2">Mobile Development</h3>
          <ul>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faSwift} className="text-[#FF0000] mr-2" /> Swift
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "100%" }}></div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faJava} className="text-[#FF0000] mr-2" /> Java
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faApple} className="text-[#FF0000] mr-2" /> XCode
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faAndroid} className="text-[#FF0000] mr-2" /> Android Studio
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </li>
          </ul>
        </div>

        {/* Frameworks Section */}
        <div className="bg-[#263548] p-8 group hover:bg-[#333333] transition duration-200 ease-in-out">
          <h3 className="text-xl font-bold text-[#FF0000] mb-2">Frameworks</h3>
          <ul>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faReact} className="text-[#FF0000] mr-2" /> React
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faReact} className="text-[#FF0000] mr-2" /> Next.js
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faLaravel} className="text-[#FF0000] mr-2" /> Laravel
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faAngular} className="text-[#FF0000] mr-2" /> Angular
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </li>
          </ul>
        </div>

        {/* Tools and Software Section */}
        <div className="bg-[#263548] p-8 group hover:bg-[#333333] transition duration-200 ease-in-out">
          <h3 className="text-xl font-semibold text-[#FF0000] mb-4">Tools and Software</h3>
          <ul>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faGithub} className="text-[#FF0000] mr-2" /> Git/GitHub
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faReact} className="text-[#FF0000] mr-2" /> VS Code
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faFlutter} className="text-[#FF0000] mr-2" /> Flutter
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "70%" }}></div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faSuperpowers} className="text-[#FF0000] mr-2" /> Postman
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faFigma} className="text-[#FF0000] mr-2" /> Figma
              </div>
              <div className="w-full bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#FF0000] h-2 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


