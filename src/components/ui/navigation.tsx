import { useState } from "react";
import { Menu, X, Search, Calendar, Heart } from "lucide-react";
import { Button } from "./button";
import { TripPlannerChatbot } from "./trip-planner-chatbot";

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className = "" }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const navItems = [
    { label: "Explore Jharkhand", href: "/explore" },
    { label: "Things to do", href: "#activities" },
    { label: "Places to Stay", href: "/places-to-stay" },
    { label: "Events & Festivals", href: "#events" },
    { label: "Plan your trip", href: "#plan" },
    { label: "Travel Deals", href: "/travel-deals" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              Jharkhand
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Calendar className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="default" onClick={() => setIsChatbotOpen(true)}>
              Plan Trip with AI
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border space-y-2">
                <Button variant="outline" className="w-full">
                  Search
                </Button>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => {
                    setIsChatbotOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Plan Trip with AI
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <TripPlannerChatbot 
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
      />
    </nav>
  );
};