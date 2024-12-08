"use client";

const SkillsContent = dynamic(() => import('../components/skillsPage/skillsContent'), { 
  ssr: false
});
const Footer = dynamic(() => import('../components/footer/footerContent'), { 
  ssr: false
});
const NavigationTabBar = dynamic(() => import('../components/navigation/NavigationTabBar'), { 
  ssr: false
});

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