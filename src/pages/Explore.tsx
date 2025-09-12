import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import explorationImage from "@/assets/tribal-village.jpg";
const jharkhandMapUrl = "/lovable-uploads/8634e242-df53-4093-9007-3d18fb6c5fe7.png";

const Explore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={explorationImage}
            alt="Traditional tribal village in Jharkhand showcasing rich cultural heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Discover Jharkhand
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-6">
            The Land of Forests - A treasure trove of natural wonders, rich tribal heritage, and pristine wilderness
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="text-sm px-4 py-2">28th State of India</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">32 Tribal Communities</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">40% Forest Cover</Badge>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Interactive Map Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Jharkhand Interactive Map</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore the 24 districts of Jharkhand with their unique attractions, from industrial hubs to pristine tribal villages
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-8 shadow-lg border">
            <div className="max-w-4xl mx-auto">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-md mb-8">
                <iframe
                  src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dw901SwHSR3g2Q&q=tourist+places+in+jharkhand&zoom=8&center=23.3852802,83.940329"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tourist Places in Jharkhand"
                ></iframe>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Northern Region</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Chatra, Hazaribagh, Koderma, Giridih - Known for coal mines and scenic landscapes</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Central Region</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Ranchi, Bokaro, Dhanbad - Industrial heartland and state capital region</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Southern Region</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Gumla, Simdega, Latehar - Pristine forests and tribal heritage</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* About Jharkhand */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Jharkhand</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Formed on November 15, 2000, Jharkhand is India's 28th state, carved out from Bihar to preserve and promote tribal culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">The Heart of Tribal India</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Jharkhand, meaning "Land of Forests," is home to 32 tribal communities including the Santhals (largest tribal group), Mundas, Oraons, and Ho tribes. These communities have preserved their ancient traditions, languages, and customs for centuries.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The state covers 79,716 sq km with a population of 33 million people, of which 26.2% are tribal communities. Ranchi, the capital city, is known as the "City of Waterfalls" and serves as the political and cultural center.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">24</div>
                    <div className="text-sm text-muted-foreground">Districts</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">32</div>
                    <div className="text-sm text-muted-foreground">Tribal Groups</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Hindi, Santali, Mundari, Ho, Oraon, Bengali, Urdu</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Climate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Tropical, Best time: Oct-Mar (15-25°C)</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Economy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Mining, Steel, Agriculture, Forestry</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Formed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">November 15, 2000 (28th State)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Wildlife & Nature */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Wildlife & Natural Wonders</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From majestic waterfalls to dense forests and wildlife sanctuaries, Jharkhand is a paradise for nature lovers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Spectacular Waterfalls</CardTitle>
                <CardDescription>City of Waterfalls around Ranchi</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>Hundru Falls:</strong> 98m high, Subarnarekha River</li>
                  <li><strong>Dassam Falls:</strong> 44m cascade, monsoon spectacle</li>
                  <li><strong>Jonha Falls:</strong> 43m drop, also called Gautamdhara</li>
                  <li><strong>Sita Falls:</strong> Natural pool, perfect for picnics</li>
                  <li><strong>Panchghagh Falls:</strong> Five streams confluence</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Wildlife Sanctuaries</CardTitle>
                <CardDescription>Rich biodiversity and endangered species</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>Betla National Park:</strong> Tigers, elephants, leopards</li>
                  <li><strong>Palamau Tiger Reserve:</strong> 1,026 sq km protected area</li>
                  <li><strong>Hazaribagh Wildlife Sanctuary:</strong> 186 species of birds</li>
                  <li><strong>Dalma Wildlife Sanctuary:</strong> Elephant corridor</li>
                  <li><strong>Koderma Wildlife Sanctuary:</strong> Mica mining region</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Forest Ecosystems</CardTitle>
                <CardDescription>40% forest cover across the state</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>Sal Forests:</strong> Dominant tree species</li>
                  <li><strong>Teak Plantations:</strong> Commercial forestry</li>
                  <li><strong>Bamboo Groves:</strong> Traditional craft material</li>
                  <li><strong>Medicinal Plants:</strong> 1,000+ species documented</li>
                  <li><strong>Saranda Forest:</strong> Dense sal forest area</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tribal Heritage */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Rich Tribal Heritage</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the vibrant culture of 32 tribal communities, each with unique traditions, arts, and festivals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Santhal Tribe</CardTitle>
                <CardDescription>Largest tribal community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">Known for Santali language, folk dances like Karam and Sohrai festivals. Master craftsmen in traditional art.</p>
                <Badge variant="outline" className="text-xs">Population: 2.7 million</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Munda Tribe</CardTitle>
                <CardDescription>Indigenous community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">Birsa Munda's homeland. Known for traditional governance system and resistance movement against British.</p>
                <Badge variant="outline" className="text-xs">Language: Mundari</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Oraon Tribe</CardTitle>
                <CardDescription>Kurukh speaking community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">Agricultural community known for their rich oral traditions, folk songs, and dance forms like Jhumar.</p>
                <Badge variant="outline" className="text-xs">Region: Central Jharkhand</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ho Tribe</CardTitle>
                <CardDescription>Iron smelting pioneers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">Traditional iron and copper smelters. Known for their expertise in metallurgy and tribal governance.</p>
                <Badge variant="outline" className="text-xs">Speciality: Metallurgy</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Traditional Festivals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div><strong>Sarhul:</strong> Spring festival celebrating sal trees</div>
                  <div><strong>Karam:</strong> Worship of Karam tree for prosperity</div>
                  <div><strong>Sohrai:</strong> Harvest festival with tribal paintings</div>
                  <div><strong>Tusu:</strong> Folk festival dedicated to goddess Tusu</div>
                  <div><strong>Jani Shikar:</strong> Traditional hunting festival</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Arts & Crafts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div><strong>Paitkar Paintings:</strong> Scroll paintings by Santhals</div>
                  <div><strong>Sohrai Art:</strong> Mud house wall paintings</div>
                  <div><strong>Bamboo Crafts:</strong> Baskets, furniture, instruments</div>
                  <div><strong>Dhokra Art:</strong> Lost wax bronze casting</div>
                  <div><strong>Tribal Jewelry:</strong> Silver ornaments and beadwork</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Adventure Activities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Adventure & Activities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From trekking through pristine forests to exploring ancient caves and water sports
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Trekking & Hiking</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>Netarhat:</strong> "Queen of Chotanagpur" hill station</li>
                  <li><strong>Parasnath Hills:</strong> Highest peak (1,365m)</li>
                  <li><strong>Tagore Hill:</strong> Ranchi's viewpoint</li>
                  <li><strong>McCluskieganj:</strong> Anglo-Indian settlement</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Water Sports</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>Kanke Dam:</strong> Boating and fishing</li>
                  <li><strong>Rukka Dam:</strong> Water sports activities</li>
                  <li><strong>Tilaiya Dam:</strong> Scenic boat rides</li>
                  <li><strong>Maithon Dam:</strong> Largest in Jharkhand</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cave Exploration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>Isco Caves:</strong> Buddhist archaeological site</li>
                  <li><strong>Rajrappa Caves:</strong> Religious significance</li>
                  <li><strong>Baidyanath Caves:</strong> Near Deoghar temple</li>
                  <li><strong>Hazaribagh Caves:</strong> Prehistoric rock art</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Cuisine */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Authentic Tribal Cuisine</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the unique flavors of tribal cuisine, featuring organic ingredients and traditional cooking methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Staple Foods</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>Dhuska:</strong> Deep-fried rice and lentil pancake</li>
                  <li><strong>Litti Chokha:</strong> Roasted wheat balls with mashed vegetables</li>
                  <li><strong>Handia:</strong> Traditional rice beer</li>
                  <li><strong>Chilka Roti:</strong> Rice flour flatbread</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tribal Delicacies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>Rugra:</strong> Mushroom curry</li>
                  <li><strong>Bamboo Shoot Curry:</strong> Local forest vegetable</li>
                  <li><strong>Mahua Flower:</strong> Traditional sweet preparation</li>
                  <li><strong>Red Ant Chutney:</strong> Protein-rich tribal food</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Festival Foods</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>Pithas:</strong> Rice cakes for festivals</li>
                  <li><strong>Arsa:</strong> Sweet sesame preparations</li>
                  <li><strong>Kheer:</strong> Rice pudding with jaggery</li>
                  <li><strong>Tribal Thali:</strong> Complete traditional meal</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Jharkhand?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Plan your journey through India's tribal heartland and discover experiences that will last a lifetime
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">Best Time: October - March</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">Duration: 5-7 Days Recommended</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">Ideal For: Nature & Culture Lovers</Badge>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Explore;