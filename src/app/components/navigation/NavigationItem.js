"use client"
import Link from "next/link"

/*
This is an individual NavigationItem which represents a single nav item in the navgation tab bar
This is done to simply the NavigationTabBar structure
 */
const NavigationItem = ({ href, section }) => {
    return (
        <Link
            href={href}
            className="block p-4 sm:text-xl rounded-md 
            relative overflow-hidden group border-2
             border-red-800 bg-black text-white 
             transition-all duration-200 ease-in-out">
            <span className="relative z-10">{section}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-800 to-black opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"></span>
        </Link>
    )
}

export default NavigationItem