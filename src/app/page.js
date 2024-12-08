"use client"
import React from 'react';
import NavigationTabBar from './components/navigation/NavigationTabBar';
import HeroSection from './components/heroSection/HeroSection';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#222222] w-full px-20">
      <NavigationTabBar />
      <HeroSection />
    </div>
  );
};

export default Home;