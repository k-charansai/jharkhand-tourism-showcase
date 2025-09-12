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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Betla National Park</CardTitle>
                    <Badge variant="secondary" className="w-fit">Latehar District</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Tiger reserve with elephants, leopards, and rich biodiversity in 979 sq km area.</p>
                    <div className="space-y-1 text-xs">
                      <p><strong>Best Time:</strong> Nov-May</p>
                      <p><strong>Entry:</strong> ₹25 (Indians), ₹300 (Foreigners)</p>
                      <p><strong>Safari:</strong> 6 AM - 6 PM</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Hundru Falls</CardTitle>
                    <Badge variant="secondary" className="w-fit">Ranchi District</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">98m high waterfall on Subarnarekha River, perfect for nature photography.</p>
                    <div className="space-y-1 text-xs">
                      <p><strong>Distance:</strong> 45 km from Ranchi</p>
                      <p><strong>Best Time:</strong> Monsoon & Post-monsoon</p>
                      <p><strong>Activities:</strong> Photography, Picnic</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Netarhat</CardTitle>
                    <Badge variant="secondary" className="w-fit">Latehar District</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Queen of Chotanagpur plateau, hill station with sunrise/sunset views.</p>
                    <div className="space-y-1 text-xs">
                      <p><strong>Altitude:</strong> 1,128 meters</p>
                      <p><strong>Climate:</strong> Pleasant year-round</p>
                      <p><strong>Attractions:</strong> Lower Ghaghri Falls</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Baidyanath Temple</CardTitle>
                    <Badge variant="secondary" className="w-fit">Deoghar District</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">One of 12 Jyotirlingas, major pilgrimage site attracting millions annually.</p>
                    <div className="space-y-1 text-xs">
                      <p><strong>Festival:</strong> Shravani Mela (Jul-Aug)</p>
                      <p><strong>Timing:</strong> 4 AM - 3:30 PM, 6 PM - 9 PM</p>
                      <p><strong>Distance:</strong> 250 km from Ranchi</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Parasnath Hills</CardTitle>
                    <Badge variant="secondary" className="w-fit">Giridih District</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Highest peak in Jharkhand (1,365m), sacred to Jains with 24 temples.</p>
                    <div className="space-y-1 text-xs">
                      <p><strong>Trek Duration:</strong> 3-4 hours</p>
                      <p><strong>Difficulty:</strong> Moderate</p>
                      <p><strong>Temples:</strong> 20 Jain temples on peak</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Jamshedpur</CardTitle>
                    <Badge variant="secondary" className="w-fit">East Singhbhum District</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Steel City with Tata Steel Plant, Jubilee Park, and XLRI management institute.</p>
                    <div className="space-y-1 text-xs">
                      <p><strong>Founded:</strong> 1907 by J.N. Tata</p>
                      <p><strong>Attractions:</strong> Jubilee Park, Dalma Hills</p>
                      <p><strong>Industry:</strong> Steel, Auto, Heavy Engineering</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Hazaribagh National Park</CardTitle>
                    <Badge variant="secondary" className="w-fit">Hazaribagh District</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Wildlife sanctuary known for 186 bird species and scenic landscapes.</p>
                    <div className="space-y-1 text-xs">
                      <p><strong>Area:</strong> 186 sq km</p>
                      <p><strong>Wildlife:</strong> Sambhar, Chital, Wild boar</p>
                      <p><strong>Best Time:</strong> Nov-Mar</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Dassam Falls</CardTitle>
                    <Badge variant="secondary" className="w-fit">Ranchi District</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">44-meter cascade waterfall formed by Kanchi River, spectacular in monsoons.</p>
                    <div className="space-y-1 text-xs">
                      <p><strong>Distance:</strong> 40 km from Ranchi</p>
                      <p><strong>Best Time:</strong> July - October</p>
                      <p><strong>Activities:</strong> Trekking, Photography</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Jonha Falls</CardTitle>
                    <Badge variant="secondary" className="w-fit">Ranchi District</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">43-meter waterfall also known as Gautamdhara, mythologically significant.</p>
                    <div className="space-y-1 text-xs">
                      <p><strong>Distance:</strong> 40 km from Ranchi</p>
                      <p><strong>Legend:</strong> Buddha's meditation spot</p>
                      <p><strong>Activities:</strong> Trekking, Photography</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Maithon Dam</CardTitle>
                    <Badge variant="secondary" className="w-fit">Dhanbad District</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Major hydroelectric project on Barakar River with beautiful lake views.</p>
                    <div className="space-y-1 text-xs">
                      <p><strong>Capacity:</strong> 60,000 million gallons</p>
                      <p><strong>Activities:</strong> Boating, Fishing</p>
                      <p><strong>Best Time:</strong> Oct-Mar</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Palamau Fort</CardTitle>
                    <Badge variant="secondary" className="w-fit">Latehar District</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Historic fort complex with New Fort (1660) and Old Fort (16th century).</p>
                    <div className="space-y-1 text-xs">
                      <p><strong>Built By:</strong> Chero Dynasty</p>
                      <p><strong>Architecture:</strong> Mughal influence</p>
                      <p><strong>Distance:</strong> 24 km from Daltonganj</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Sita Falls</CardTitle>
                    <Badge variant="secondary" className="w-fit">Ranchi District</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Natural pool waterfall perfect for picnics and swimming activities.</p>
                    <div className="space-y-1 text-xs">
                      <p><strong>Distance:</strong> 60 km from Ranchi</p>
                      <p><strong>Depth:</strong> Natural swimming pool</p>
                      <p><strong>Best Time:</strong> Post-monsoon</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Topchanchi Lake</CardTitle>
                    <Badge variant="secondary" className="w-fit">Dhanbad District</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Scenic lake surrounded by hills, ideal for weekend getaways and water sports.</p>
                    <div className="space-y-1 text-xs">
                      <p><strong>Area:</strong> 8.75 sq km</p>
                      <p><strong>Activities:</strong> Boating, Bird watching</p>
                      <p><strong>Accommodation:</strong> Tourist lodge available</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Deori Temple</CardTitle>
                    <Badge variant="secondary" className="w-fit">Giridih District</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Ancient Shiva temple with archaeological significance dating back centuries.</p>
                    <div className="space-y-1 text-xs">
                      <p><strong>Age:</strong> 500+ years old</p>
                      <p><strong>Architecture:</strong> Ancient stone work</p>
                      <p><strong>Festival:</strong> Maha Shivratri</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Dalma Wildlife Sanctuary</CardTitle>
                    <Badge variant="secondary" className="w-fit">East Singhbhum District</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Elephant corridor and wildlife sanctuary on Dalma Hills near Jamshedpur.</p>
                    <div className="space-y-1 text-xs">
                      <p><strong>Area:</strong> 193.22 sq km</p>
                      <p><strong>Wildlife:</strong> Elephants, Leopards, Bears</p>
                      <p><strong>Altitude:</strong> 3,000 feet above sea level</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Plan Your Visit</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium mb-2 text-primary">Getting Around</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Ranchi Airport connects to major cities</li>
                      <li>• Extensive rail network via Ranchi Junction</li>
                      <li>• State transport buses to all districts</li>
                      <li>• Taxi services available for tourist circuits</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-primary">Best Time to Visit</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• <strong>Winter (Nov-Feb):</strong> Pleasant weather, ideal for sightseeing</li>
                      <li>• <strong>Monsoon (Jul-Sep):</strong> Best for waterfalls</li>
                      <li>• <strong>Summer (Mar-Jun):</strong> Hot, avoid peak summer</li>
                    </ul>
                  </div>
                </div>
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