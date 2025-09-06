import { Button } from "./button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/jharkhand-hero.jpg";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/explore");
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful Jharkhand landscape with waterfalls and forests"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Jharkhand
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Pristine waterfalls, ancient forests and tribal heritage like no other – 
          Jharkhand is the place to discover this season.
        </p>

        <Button variant="hero" size="lg" className="shadow-hero" onClick={handleExploreClick}>
          Discover 99 ways to explore Jharkhand
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};