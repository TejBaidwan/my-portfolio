"use client";
import SkillsContent from "../components/skillsPage/skillsContent";
import NavigationTabBar from "../components/navigation/NavigationTabBar";
import Footer from "../components/footer/footerContent";

//This is the SkillsPage with the different components inserted

export default function SkillsPage() {
  return (
<div className="min-h-screen bg-[#222222] text-white">
  
  {/* NavigationTabBar */}
  <div className="fixed w-full top-0 left-0 z-10">
    <NavigationTabBar />
  </div>

  {/* Skills Page Content */}
  <div className="flex flex-col items-center justify-center px-4 py-20 mt-20">
    <SkillsContent />
  </div>

  {/* Footer */}
  <div>
    <Footer />
  </div>
</div>

  );
}