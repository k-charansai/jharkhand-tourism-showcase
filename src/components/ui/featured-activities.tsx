import { Button } from "./button";
import { Card, CardContent } from "./card";
import tribalVillage from "@/assets/tribal-village.jpg";
import betlaPark from "@/assets/betla-park.jpg";
import hillsLandscape from "@/assets/hills-landscape.jpg";

export const FeaturedActivities = () => {
  const activities = [
    {
      id: 1,
      category: "Cultural Heritage",
      title: "Explore tribal villages and traditions",
      description: "Immerse yourself in the rich cultural heritage of Jharkhand's indigenous communities and their timeless traditions.",
      image: tribalVillage,
      tag: "Cultural Experience"
    },
    {
      id: 2,
      category: "Wildlife",
      title: "Safari at Betla National Park",
      description: "Encounter elephants, tigers and diverse wildlife in one of India's premier national parks and tiger reserves.",
      image: betlaPark,
      tag: "Wildlife Adventure"
    },
    {
      id: 3,
      category: "Nature",
      title: "Trek through pristine hill stations",
      description: "Discover breathtaking waterfalls, lush valleys and scenic hill stations perfect for nature enthusiasts.",
      image: hillsLandscape,
      tag: "Nature Trails"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Top 3 experiences this season
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From cultural immersion to wildlife adventures, discover what makes Jharkhand truly special
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <Card key={activity.id} className="group overflow-hidden bg-card shadow-card hover:shadow-hero transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {activity.tag}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-2">
                  {activity.category}
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {activity.description}
                </p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  Discover more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};