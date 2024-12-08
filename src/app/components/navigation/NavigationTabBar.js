"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavigationItem from './NavigationItem';
import Image from "next/image";

/*
  This is the content found in the Navigation Tab Bar
  It has the links to the different sites in my portfolio website
 */
const NavigationTabBar = () => {

  //Using boolean values to check to see if the overlay menu in mobile mode is open or not (hamburger menu)
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const toggleMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  return (
    <nav className="flex items-center justify-between mx-auto w-full bg-[#222222]">
  
  {/* My Custom created logo placed in the top left of the page, which can be clicked on any page to take you to the landing page */}
  <div className="flex items-center">
    <Link href="/" passHref>
      <Image 
        src="/images/icons/initialsLogo.png" 
        alt="Logo" 
        width={150} 
        height={50} 
        className="cursor-pointer transition-transform duration-200 transform hover:scale-125"
      />
    </Link>
  </div>

  {/* Hamburger Icon fused for smaller screens (mobile), which toggles the open/closed boolean, and is hidden originally */}
  <div className="block md:hidden">
    <button onClick={toggleMenu} className="text-white">
      <Image 
        src="/images/icons/hamburgerIcon.png" 
        alt="Menu Options" 
        width={16}
        height={16}
        className=" transition-transform duration-200 transform hover:scale-125" 
      />
    </button>
  </div>

  {/* Standard navigation bar layout for larger screens */}
  <div className={`hidden md:flex space-x-6`}>
    <ul className="flex space-x-6">
      <li><NavigationItem href="/about" section={"About"} /></li>
      <li><NavigationItem href="/skills" section={"Skills"} /></li>
      <li><NavigationItem href="/work" section={"Work"} /></li>
      <li><NavigationItem href="/contact" section={"Contact"} /></li>
    </ul>
  </div>

  {/* Showing the overlay menu layout for mobile if the hamburger icon is pressed (isMenuOpen is true) */}
  {hamburgerMenu && (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-10">
      <div className="flex justify-end p-6">
        <button 
          onClick={toggleMenu} 
          className="text-white transition-transform duration-300 transform hover:scale-125"
        >
          X
        </button>
      </div>
      <div className="flex justify-center items-center text-white">
        <ul className="flex flex-col space-y-3">
          <li><NavigationItem href="/about" section={"About"} /></li>
          <li><NavigationItem href="/skills" section={"Skills"} /></li>
          <li><NavigationItem href="/work" section={"Work"} /></li>
          <li><NavigationItem href="/contact" section={"Contact"} /></li>
        </ul>
      </div>
    </div>
  )}
</nav>

  )
}

export default NavigationTabBar;