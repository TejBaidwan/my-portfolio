"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image';

/*
  This is the content found in the Works Page
  It has a grid layout of my projects which show more information when hovered over and are clickable to navigate to their github repos 
 */
export default function WorksPage() {
    return (
      <div className="min-h-screen bg-[#222222] text-white py-10">

        {/* This is the header section of the page */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-transparent 
          bg-gradient-to-r from-[#FF0000] to-[#840808] bg-clip-text mb-8">
            Check out some of my projects!
          </h2>
        </div>
  
        {/* This is the grid layout of my projects which is 2 columns in large view and one in mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Arbitrage Tracker project content*/}
          <div className="relative overflow-hidden group p-4 rounded-lg shadow-lg h-80
          transform transition-transform duration-200 hover:scale-110 hover:bg-[#434242]">

            <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-200">
              <Image
                src="/images/icons/arbitrageLogo.png"
                alt="Arbitrage Tracker Project Logo"
                width={300}
                height={300}
                className="max-h-full max-w-full object-contain opacity-100"
              />
            </div>
  
            <div>
              <p className="text-2xl font-bold text-[#FF0000] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                ArbitrageTracker
              </p>
              <p className="absolute text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                A tool for tracking your inventory and profits during retail arbitrage endeavours!
              </p>
            </div>
  
            {/* Making the project clickable and adding a Github icon on hover */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 
            opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <a
                href="https://github.com/TejBaidwan/ArbitrageProductTrackers"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} className="text-white text-4xl" />
              </a>
            </div>
  
            {/* Showing the overlay on hover and adding the link */}
            <a
              href="https://github.com/TejBaidwan/ArbitrageProductTrackers"
              target="_blank"
              className="absolute inset-0"
            ></a>
          </div>
  
          {/* BloodDonationBuddy project content */}
          <div className="relative overflow-hidden group p-4 rounded-lg shadow-lg h-80
          transform transition-transform duration-200 hover:scale-110 hover:bg-[#434242]">

            <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-200">
              <Image
                src="/images/icons/bloodDonationBuddyLogo.png"
                alt="BloodDonationBuddy logo"
                width={300}
                height={300}
                className="max-h-full max-w-full object-contain opacity-100"
              />
            </div>

            <div>
              <p className="text-2xl font-bold text-[#FF0000] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                BloodDonationBuddy
              </p>
              <p className="absolute text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                An app which explains the benefits of blood donation, and determines your eligibility and nearest donation center!
              </p>
            </div>
  
            {/* Making the project clickable and adding a Github icon on hover */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 
            opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <a
                href="https://github.com/TejBaidwan/BloodDonationBuddy"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} className="text-white text-4xl" />
              </a>
            </div>
  
            {/* Showing the overlay on hover and adding the link */}
            <a
              href="https://github.com/TejBaidwan/BloodDonationBuddy"
              target="_blank"
              className="absolute inset-0"
            ></a>
          </div>
        </div>
      </div>
    );
  }
