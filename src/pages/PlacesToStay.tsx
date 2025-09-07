import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Star, Wifi, Car, Coffee, Waves, Mountain, Users, Phone, Mail, Calendar } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const PlacesToStay = () => {
  const hotels = [
    {
      id: 1,
      name: "The Royale Residency",
      location: "Ranchi",
      rating: 4.5,
      reviews: 1240,
      price: "₹4,500",
      originalPrice: "₹6,000",
      image: "/placeholder.svg",
      category: "Luxury",
      amenities: ["Free WiFi", "Pool", "Parking", "Restaurant", "Spa", "Gym"],
      description: "Experience luxury in the heart of Ranchi with modern amenities and traditional hospitality.",
      distance: "2.5 km from Ranchi Railway Station"
    },
    {
      id: 2,
      name: "Hotel Capitol Hill",
      location: "Ranchi",
      rating: 4.3,
      reviews: 890,
      price: "₹3,200",
      originalPrice: "₹4,200",
      image: "/placeholder.svg",
      category: "Business",
      amenities: ["Free WiFi", "Conference Room", "Parking", "Restaurant", "Room Service"],
      description: "Perfect for business travelers with excellent connectivity and modern facilities.",
      distance: "1.8 km from Birsa Munda Airport"
    },
    {
      id: 3,
      name: "Mayfair Lagoon",
      location: "Jamshedpur",
      rating: 4.6,
      reviews: 950,
      price: "₹5,800",
      originalPrice: "₹7,200",
      image: "/placeholder.svg",
      category: "Resort",
      amenities: ["Pool", "Spa", "Multiple Restaurants", "Gardens", "Free WiFi", "Gym"],
      description: "Luxury resort with beautiful lagoon views and world-class amenities.",
      distance: "3.2 km from Dimna Lake"
    },
    {
      id: 4,
      name: "Hotel Yuvraj Palace",
      location: "Deoghar",
      rating: 4.2,
      reviews: 650,
      price: "₹2,800",
      originalPrice: "₹3,500",
      image: "/placeholder.svg",
      category: "Heritage",
      amenities: ["Traditional Architecture", "Restaurant", "Parking", "Room Service", "WiFi"],
      description: "Traditional palace hotel near Baba Baidyanath Dham with authentic hospitality.",
      distance: "500m from Baidyanath Temple"
    },
    {
      id: 5,
      name: "Hotel Ashoka International",
      location: "Dhanbad",
      rating: 4.1,
      reviews: 720,
      price: "₹2,400",
      originalPrice: "₹3,000",
      image: "/placeholder.svg",
      category: "Budget",
      amenities: ["Free WiFi", "Restaurant", "Parking", "24/7 Service", "AC"],
      description: "Comfortable budget accommodation with all essential amenities.",
      distance: "1.5 km from Dhanbad Junction"
    },
    {
      id: 6,
      name: "Netarhat Forest Lodge",
      location: "Netarhat",
      rating: 4.4,
      reviews: 340,
      price: "₹3,800",
      originalPrice: "₹4,500",
      image: "/placeholder.svg",
      category: "Eco-Lodge",
      amenities: ["Mountain Views", "Nature Walks", "Bonfire", "Restaurant", "WiFi"],
      description: "Eco-friendly lodge surrounded by pristine forests with stunning sunrise views.",
      distance: "At Netarhat Hill Station"
    },
    {
      id: 7,
      name: "Betla Forest Rest House",
      location: "Betla National Park",
      rating: 4.0,
      reviews: 280,
      price: "₹2,200",
      originalPrice: "₹2,800",
      image: "/placeholder.svg",
      category: "Wildlife",
      amenities: ["Nature Views", "Safari Booking", "Restaurant", "Basic WiFi", "Parking"],
      description: "Stay close to wildlife in the heart of Betla National Park.",
      distance: "Inside Betla National Park"
    },
    {
      id: 8,
      name: "Hotel Grand Plaza",
      location: "Bokaro",
      rating: 4.2,
      reviews: 560,
      price: "₹3,000",
      originalPrice: "₹3,800",
      image: "/placeholder.svg",
      category: "Business",
      amenities: ["Conference Hall", "Free WiFi", "Restaurant", "Parking", "Room Service"],
      description: "Modern hotel in Bokaro with excellent business facilities.",
      distance: "2 km from Bokaro Steel City Station"
    }
  ];

  const destinations = [
    { name: "Ranchi", count: 45, description: "Capital city with urban amenities" },
    { name: "Jamshedpur", count: 32, description: "Industrial city with modern facilities" },
    { name: "Deoghar", count: 28, description: "Spiritual destination with pilgrim facilities" },
    { name: "Dhanbad", count: 18, description: "Coal capital with business hotels" },
    { name: "Netarhat", count: 12, description: "Hill station with nature resorts" },
    { name: "Bokaro", count: 15, description: "Steel city with comfortable stays" }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Luxury": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "Business": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Resort": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Heritage": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "Budget": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      case "Eco-Lodge": return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200";
      case "Wildlife": return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
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
            Places to Stay in Jharkhand
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            From luxury resorts to cozy eco-lodges, find the perfect accommodation 
            for your Jharkhand adventure. Book with confidence and comfort.
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="destination">Destination</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ranchi">Ranchi</SelectItem>
                    <SelectItem value="jamshedpur">Jamshedpur</SelectItem>
                    <SelectItem value="deoghar">Deoghar</SelectItem>
                    <SelectItem value="dhanbad">Dhanbad</SelectItem>
                    <SelectItem value="netarhat">Netarhat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="checkin">Check In</Label>
                <Input id="checkin" type="date" />
              </div>
              <div>
                <Label htmlFor="checkout">Check Out</Label>
                <Input id="checkout" type="date" />
              </div>
              <div>
                <Label htmlFor="guests">Guests</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="2 Guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button size="lg" className="px-8">
                Search Hotels
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.map((dest, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-1">{dest.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{dest.count} properties</p>
                  <p className="text-xs text-muted-foreground">{dest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Hotels & Resorts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {hotels.map((hotel) => (
              <Card key={hotel.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Mountain className="h-12 w-12 text-primary/60" />
                  </div>
                  <Badge className={`absolute top-3 left-3 ${getCategoryColor(hotel.category)}`}>
                    {hotel.category}
                  </Badge>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">
                        {hotel.name}
                      </CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {hotel.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      <span className="text-xs font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {hotel.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {hotel.amenities.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{hotel.amenities.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {hotel.distance}
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-primary">{hotel.price}</span>
                        <span className="text-xs text-muted-foreground line-through">
                          {hotel.originalPrice}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">per night</p>
                    </div>
                    <Button size="sm">
                      Book Now
                    </Button>
                  </div>

                  <div className="text-xs text-muted-foreground text-center">
                    {hotel.reviews} reviews
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Need Help Finding the Perfect Stay?</h2>
            <p className="text-muted-foreground mb-8">
              Our accommodation experts can help you find hotels that match your preferences, 
              budget, and travel needs. Get personalized recommendations for your Jharkhand trip.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto">
              <Button variant="outline" size="lg" className="gap-2">
                <Phone className="h-4 w-4" />
                Call for Bookings
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
            © 2024 Jharkhand Tourism. All rights reserved. | Find your perfect stay in Jharkhand
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PlacesToStay;