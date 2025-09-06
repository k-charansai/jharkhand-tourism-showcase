import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturedActivities } from "@/components/ui/featured-activities";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedActivities />
        
        {/* Stats Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">24</div>
                <div className="text-sm md:text-base opacity-90">Districts</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">5</div>
                <div className="text-sm md:text-base opacity-90">National Parks</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">32</div>
                <div className="text-sm md:text-base opacity-90">Tribal Communities</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
                <div className="text-sm md:text-base opacity-90">Waterfalls</div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Stay updated with Jharkhand Tourism
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest updates on festivals, new destinations, and travel tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-mountain text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
                Jharkhand Tourism
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Discover the heart of India with pristine nature, rich culture, and unforgettable experiences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Destinations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Activities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wildlife</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Culture</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Plan</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Travel Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Time to Visit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accommodation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transportation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tourist Helpline</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 Jharkhand Tourism Board. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;