
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import HobbiesSection from "@/components/HobbiesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <HobbiesSection />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
