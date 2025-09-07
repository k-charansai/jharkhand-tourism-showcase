import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Eye, Star, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const TravelDeals = () => {
  const tourPackages = [
    {
      id: 1,
      title: "Ranchi - Netarhat - Betla Adventure",
      duration: "2 Nights - 3 Days",
      distance: "600 Kms Approx.",
      price: "₹15,999",
      originalPrice: "₹18,999",
      rating: 4.8,
      highlights: [
        "Betla National Park & Wildlife",
        "Chero Fort & Museum",
        "Netarhat Sunset & Sunrise",
        "Seven Rivers & Mirchaia Falls"
      ],
      destinations: {
        "Betla": ["Chero Fort", "National Park", "Museum", "Kechki Sangam", "Koel View", "Seven Rivers", "Mirchaia fall", "Suga Bandh", "Lodha Fall"],
        "Netarhat": ["Sunset Point", "Sunrise Point"],
        "Ranchi": ["Ratu Fort", "Fun Castle", "Pahari Mandir", "Museum", "Tagore Hill"]
      },
      category: "Wildlife & Nature"
    },
    {
      id: 2,
      title: "Ranchi - Jamshedpur - Ghatshila Circuit",
      duration: "1 Night - 2 Days",
      distance: "500 Kms Approx.",
      price: "₹8,999",
      originalPrice: "₹10,999",
      rating: 4.6,
      highlights: [
        "Dalma Wildlife Sanctuary",
        "Jubilee Park & Amusement",
        "Dimna Lake Boating",
        "Rankini Temple Darshan"
      ],
      destinations: {
        "Jamshedpur": ["Jubilee Park", "Jubilee Amusement Park", "Dimna Lake", "Dalma Wild Life Sanctuary"],
        "Ghatshila": ["Fuldungri", "Ghatshila Local Sites", "Burudih Lake", "Rankini Temple"]
      },
      category: "Family Fun"
    },
    {
      id: 3,
      title: "Sacred Circuit - Hazaribagh & Parasnath",
      duration: "1 Night - 2 Days",
      distance: "500 Kms Approx.",
      price: "₹9,999",
      originalPrice: "₹12,999",
      rating: 4.7,
      highlights: [
        "Parasnath Jain Temple",
        "Maa Bhadrakali Temple",
        "Suraj Kund Hot Springs",
        "Hazaribagh Wildlife Sanctuary"
      ],
      destinations: {
        "Hazaribagh": ["Wildlife Sanctuary", "Canary Hills", "Local Sightseeing"],
        "Itkhori": ["Maa Bhadrakali Temple"],
        "Urwan": ["Tilaiya Dam", "Suraj Kund Hot Spring"],
        "Other": ["Parasnath Temple", "Tenughat Dam", "Rajrappa Temple"]
      },
      category: "Spiritual"
    },
    {
      id: 4,
      title: "Grand Jharkhand - Deoghar Pilgrimage",
      duration: "3 Nights - 4 Days",
      distance: "1000 Kms Approx.",
      price: "₹22,999",
      originalPrice: "₹27,999",
      rating: 4.9,
      highlights: [
        "Baba Baidyanath Dham",
        "Multiple Sacred Temples",
        "Scenic Dam Views",
        "Complete Jharkhand Experience"
      ],
      destinations: {
        "Deoghar": ["Baba Baidyanath Dham", "Satsang Ashram", "Rikhiya Ashram", "Ramkrishna Mission", "Shivganga", "Nauklakha Temple", "Trikuti"],
        "Basukinath": ["Tarapith"],
        "Dhanbad": ["Shakti Mandir", "Nation School of Mines"],
        "Other": ["Rajrappa Temple", "Massanjore Dam", "Maithan Dam", "Panchet Dam"]
      },
      category: "Pilgrimage"
    },
    {
      id: 5,
      title: "Parasnath & Dhanbad Explorer",
      duration: "1 Night - 2 Days",
      distance: "550 Kms Approx.",
      price: "₹7,999",
      originalPrice: "₹9,999",
      rating: 4.5,
      highlights: [
        "Parasnath Hill Trek",
        "Topchanchi Bird Sanctuary",
        "Hundru & Jonha Falls",
        "Rajrappa Temple"
      ],
      destinations: {
        "Parasnath": ["Parasnath Hill", "Topchanchi Bird Sanctuary"],
        "Dhanbad": ["Local Sightseeing"],
        "Ranchi": ["Jonha Fall", "Hundru Fall", "Rajrappa Temple", "Tenughat Dam"]
      },
      category: "Adventure"
    },
    {
      id: 6,
      title: "Ultimate Betla - Netarhat Experience",
      duration: "4 Nights - 5 Days",
      distance: "680 Kms Approx.",
      price: "₹28,999",
      originalPrice: "₹34,999",
      rating: 4.9,
      highlights: [
        "Extended Wildlife Safari",
        "Multiple Waterfall Visits",
        "Netarhat Hill Station",
        "Tea Garden Experience"
      ],
      destinations: {
        "Betla": ["Chero Fort", "National Park", "Museum", "Kechki Sangam", "Koel View", "Seven Rivers", "Mirchaia Fall", "Suga Bandh", "Lodha Fall"],
        "Netarhat": ["Sunset Point", "Sunrise Point", "Netarhat Public School", "Netarhat Dam", "Naspati Garden", "Tea Garden", "Koel View", "Upper Ghaghri"],
        "Ranchi": ["Ratu Fort", "Fun Castle", "Pahari Mandir", "Museum", "Tagore Hill"]
      },
      category: "Premium"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Wildlife & Nature": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Family Fun": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Spiritual": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "Pilgrimage": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "Adventure": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "Premium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Travel Deals & Tour Packages
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover Jharkhand's hidden gems with our carefully curated tour packages. 
            From wildlife adventures to spiritual journeys, find the perfect trip for you.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((pkg) => (
              <Card key={pkg.id} className="group hover:shadow-elegant transition-all duration-300 border-border/50 overflow-hidden">
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getCategoryColor(pkg.category)}>
                      {pkg.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{pkg.rating}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {pkg.title}
                  </CardTitle>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {pkg.distance}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Eye className="h-4 w-4 text-primary" />
                      Highlights
                    </h4>
                    <ul className="text-sm space-y-1">
                      {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                        <span className="text-sm text-muted-foreground line-through">
                          {pkg.originalPrice}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">per person</p>
                    </div>
                    <Button size="sm" className="shadow-sm">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Need a Custom Package?</h2>
            <p className="text-muted-foreground mb-8">
              Our travel experts can create personalized itineraries based on your preferences, 
              budget, and travel dates. Get in touch for a tailor-made Jharkhand experience.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto">
              <Button variant="outline" size="lg" className="gap-2">
                <Phone className="h-4 w-4" />
                Call Us
              </Button>
              <Button size="lg" className="gap-2">
                <Mail className="h-4 w-4" />
                Email Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Jharkhand Tourism. All rights reserved. | Discover the beauty of Jharkhand
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TravelDeals;