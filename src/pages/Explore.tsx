import { Navigation } from "@/components/ui/navigation";
import explorationImage from "@/assets/tribal-village.jpg";

const Explore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={explorationImage}
            alt="Traditional tribal village in Jharkhand showcasing rich cultural heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Discover Jharkhand
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Jharkhand is a land that needs to be seen to be believed. Find out all you need to know about this place of endless natural wonders and rich tribal heritage.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're looking for iconic places to explore in Jharkhand, hidden natural treasures, or cultural experiences loved by locals, this is where you'll find it all. From vibrant tribal villages and traditional crafts to stunning waterfalls, dense forests and wildlife sanctuaries, Jharkhand offers something for every type of traveller.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore cultural districts, visit world-famous waterfalls and discover new experiences across the state's many places to visit. Take a walk through tribal villages, spend a day in wildlife sanctuaries, browse local handicraft markets, or venture into the forests for a different side of Jharkhand. Each spot has its own story, whether you're here for nature, culture, adventure or simply to see what makes Jharkhand one of India's most pristine destinations.
            </p>
          </div>
        </section>

        {/* Journey Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Your journey starts here</h2>
            <p className="text-muted-foreground">See how Jharkhand's natural beauty and tribal heritage create unforgettable experiences.</p>
          </div>
        </section>

        {/* Explore Categories Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Interactive Map Card */}
          <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Jharkhand Interactive Map</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-4">
                Discover nearby attractions, waterfalls, wildlife sanctuaries, tribal villages, and hidden gems using our interactive maps.
              </p>
              <button className="text-primary hover:text-primary/80 font-medium">Read More →</button>
            </div>
          </div>

          {/* About Jharkhand Card */}
          <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">About Jharkhand</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-4">
                Learn about Jharkhand's rich tribal heritage, natural wonders, and how it became one of India's most pristine states.
              </p>
              <button className="text-primary hover:text-primary/80 font-medium">Read More →</button>
            </div>
          </div>

          {/* Wildlife & Nature Card */}
          <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Wildlife & Nature</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-4">
                Explore Jharkhand's incredible biodiversity, from Betla National Park to pristine waterfalls and dense forests.
              </p>
              <button className="text-primary hover:text-primary/80 font-medium">Read More →</button>
            </div>
          </div>

          {/* Tribal Heritage Card */}
          <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Tribal Heritage</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-4">
                Experience the rich cultural traditions, handicrafts, and festivals of Jharkhand's diverse tribal communities.
              </p>
              <button className="text-primary hover:text-primary/80 font-medium">Read More →</button>
            </div>
          </div>

          {/* Adventure Activities Card */}
          <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Adventure Activities</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-4">
                From trekking through hills to river rafting and rock climbing, discover thrilling adventures in Jharkhand.
              </p>
              <button className="text-primary hover:text-primary/80 font-medium">Read More →</button>
            </div>
          </div>

          {/* Local Cuisine Card */}
          <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Local Cuisine</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-4">
                Savor authentic tribal delicacies and traditional Jharkhandi dishes that reflect the state's rich culinary heritage.
              </p>
              <button className="text-primary hover:text-primary/80 font-medium">Read More →</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Explore;