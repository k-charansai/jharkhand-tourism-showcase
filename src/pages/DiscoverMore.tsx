import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users, Camera, TreePine, Mountain, Heart, Star } from "lucide-react";
import betlaParkImage from "@/assets/betla-park.jpg";
import tribalVillageImage from "@/assets/tribal-village.jpg";

const DiscoverMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-light via-background to-earth-light">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${tribalVillageImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forest/80 to-earth/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-forest-light bg-clip-text text-transparent">
            Discover More Jharkhand
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            Immerse yourself in authentic tribal culture and witness magnificent wildlife in their natural habitat
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              <Users className="w-4 h-4 mr-2" />
              Tribal Heritage
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              <TreePine className="w-4 h-4 mr-2" />
              Wildlife Safari
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              <Camera className="w-4 h-4 mr-2" />
              Photography Tours
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="tribal" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="tribal" className="text-lg py-3">
              <Users className="w-5 h-5 mr-2" />
              Tribal Villages
            </TabsTrigger>
            <TabsTrigger value="safari" className="text-lg py-3">
              <TreePine className="w-5 h-5 mr-2" />
              Betla National Park Safari
            </TabsTrigger>
          </TabsList>

          {/* Tribal Villages Tab */}
          <TabsContent value="tribal" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Tribal Village Tours
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience the authentic way of life of Jharkhand's indigenous communities including 
                Santhal, Munda, Oraon, and Ho tribes in their traditional villages.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tribalVillageImage} 
                    alt="Traditional tribal village" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-forest text-white">
                      Cultural Heritage
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Authentic Village Experience</CardTitle>
                  <CardDescription className="text-base">
                    Stay with tribal families and learn about their traditional lifestyle, 
                    customs, and age-old practices passed down through generations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-5 h-5 mr-3 text-forest" />
                      <span>Various villages across Jharkhand</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-5 h-5 mr-3 text-forest" />
                      <span>2-5 day programs available</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-5 h-5 mr-3 text-forest" />
                      <span>Small groups (max 8 people)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-forest">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="w-6 h-6 mr-3 text-forest" />
                      Santhal Tribe Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Join the Santhal community in their daily activities including traditional 
                      farming, handicraft making, and participate in their vibrant festivals 
                      like Sohrai and Karam.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-earth">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mountain className="w-6 h-6 mr-3 text-earth" />
                      Munda & Oraon Villages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Discover the rich cultural heritage of the Munda and Oraon tribes, 
                      learn about their traditional governance systems, and witness their 
                      unique architectural styles.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-tribal">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Camera className="w-6 h-6 mr-3 text-tribal" />
                      Cultural Workshops
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Learn traditional arts like Paitkar paintings, tribal music, dance forms, 
                      and pottery making directly from master artisans in their villages.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-forest-light/20 to-earth-light/20 border-forest/30">
              <CardHeader>
                <CardTitle className="text-2xl text-center">What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Users className="w-12 h-12 mx-auto mb-4 text-forest" />
                    <h4 className="font-semibold mb-2">Community Interaction</h4>
                    <p className="text-sm text-muted-foreground">
                      Direct engagement with tribal families and community leaders
                    </p>
                  </div>
                  <div>
                    <TreePine className="w-12 h-12 mx-auto mb-4 text-earth" />
                    <h4 className="font-semibold mb-2">Traditional Practices</h4>
                    <p className="text-sm text-muted-foreground">
                      Witness age-old traditions, rituals, and sustainable living practices
                    </p>
                  </div>
                  <div>
                    <Heart className="w-12 h-12 mx-auto mb-4 text-tribal" />
                    <h4 className="font-semibold mb-2">Cultural Exchange</h4>
                    <p className="text-sm text-muted-foreground">
                      Share stories, learn languages, and create lasting connections
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Safari Tab */}
          <TabsContent value="safari" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Betla National Park Safari
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Jharkhand's only national park offers thrilling wildlife encounters in 226.33 sq km 
                of pristine forests, home to tigers, elephants, and diverse flora and fauna.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <Card className="border-l-4 border-l-forest">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="w-6 h-6 mr-3 text-forest" />
                      Wildlife Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Royal Bengal Tigers in their natural habitat</li>
                      <li>• Asian Elephants and their herds</li>
                      <li>• Sloth Bears, Leopards, and Wild Boars</li>
                      <li>• Over 180 bird species including peacocks</li>
                      <li>• Sambhar, Chital, and Barking Deer</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-earth">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-6 h-6 mr-3 text-earth" />
                      Safari Timings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <strong>Morning Safari:</strong> 6:00 AM - 10:00 AM
                      </div>
                      <div>
                        <strong>Evening Safari:</strong> 2:00 PM - 6:00 PM
                      </div>
                      <div>
                        <strong>Best Season:</strong> November to May
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={betlaParkImage} 
                    alt="Betla National Park wildlife" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-earth text-white">
                      Wildlife Safari
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Palamau Tiger Reserve</CardTitle>
                  <CardDescription className="text-base">
                    Part of Project Tiger since 1973, this reserve offers the best chances 
                    to spot the majestic Royal Bengal Tiger in the wild.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-5 h-5 mr-3 text-forest" />
                      <span>Palamu & Latehar Districts</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Mountain className="w-5 h-5 mr-3 text-forest" />
                      <span>Chota Nagpur Plateau</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-forest-light/20 to-background">
                <CardHeader>
                  <CardTitle className="text-xl">Safari Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Jeep Safari</span>
                      <Badge variant="outline">₹2,500/vehicle</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Elephant Safari</span>
                      <Badge variant="outline">₹500/person</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Watchtower Stay</span>
                      <Badge variant="outline">₹1,000/night</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Photography Tour</span>
                      <Badge variant="outline">₹5,000/day</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-earth-light/20 to-background">
                <CardHeader>
                  <CardTitle className="text-xl">What to Bring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Binoculars for wildlife spotting</li>
                    <li>• Camera with telephoto lens</li>
                    <li>• Comfortable safari clothing</li>
                    <li>• Sun hat and sunscreen</li>
                    <li>• Water bottles and snacks</li>
                    <li>• Insect repellent</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-tribal-light/20 to-forest-light/20 border-tribal/30">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Conservation Success</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Betla National Park represents a conservation success story, with increasing 
                    tiger populations and successful habitat restoration. The park actively 
                    engages local communities in conservation efforts and provides sustainable 
                    livelihood opportunities.
                  </p>
                  <div className="flex justify-center">
                    <Badge className="bg-forest text-white px-6 py-2">
                      Project Tiger Reserve Since 1973
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready for Your Adventure?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your tribal village tour or wildlife safari today and experience 
            the authentic beauty of Jharkhand's heritage and nature.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-forest hover:bg-forest/90 text-white">
              <Calendar className="w-5 h-5 mr-2" />
              Book Village Tour
            </Button>
            <Button size="lg" variant="outline" className="border-earth text-earth hover:bg-earth hover:text-white">
              <Camera className="w-5 h-5 mr-2" />
              Book Safari
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;