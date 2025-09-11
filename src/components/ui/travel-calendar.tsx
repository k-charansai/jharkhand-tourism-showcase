import { useState } from "react";
import { Calendar as CalendarIcon, MapPin, Thermometer, Droplets, Sun } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { Calendar } from "./calendar";
import { Badge } from "./badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { format, isSameMonth } from "date-fns";

interface TravelCalendarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SeasonInfo {
  name: string;
  months: number[];
  temperature: string;
  rainfall: string;
  description: string;
  highlights: string[];
  recommendations: string[];
  color: string;
}

export const TravelCalendar = ({ isOpen, onClose }: TravelCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const seasons: SeasonInfo[] = [
    {
      name: "Winter",
      months: [11, 12, 1, 2], // Nov, Dec, Jan, Feb
      temperature: "10°C - 25°C",
      rainfall: "Low (10-20mm)",
      description: "Perfect weather for outdoor activities and wildlife viewing",
      highlights: ["Pleasant temperatures", "Clear skies", "Best for trekking"],
      recommendations: ["Betla National Park Safari", "Waterfall visits", "Tribal village tours"],
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    },
    {
      name: "Summer",
      months: [3, 4, 5], // Mar, Apr, May
      temperature: "25°C - 40°C",
      rainfall: "Low (20-40mm)",
      description: "Hot weather, ideal for hill stations and indoor cultural activities",
      highlights: ["Early morning visits recommended", "Hill stations are cooler", "Cultural festivals"],
      recommendations: ["Ranchi hill areas", "Museums and cultural sites", "Early morning safaris"],
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
    },
    {
      name: "Monsoon", 
      months: [6, 7, 8, 9], // Jun, Jul, Aug, Sep
      temperature: "20°C - 30°C",
      rainfall: "High (1200-1400mm)",
      description: "Lush green landscapes, waterfalls at their peak, but travel can be challenging",
      highlights: ["Waterfalls at full flow", "Lush green forests", "Cooler temperatures"],
      recommendations: ["Hundru Falls", "Dassam Falls", "Indoor cultural experiences"],
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    },
    {
      name: "Post-Monsoon",
      months: [10], // Oct
      temperature: "20°C - 30°C", 
      rainfall: "Moderate (40-80mm)",
      description: "Fresh, clean air with pleasant weather returning",
      highlights: ["Clear views after rains", "Pleasant temperatures", "Good for all activities"],
      recommendations: ["All outdoor activities", "Photography tours", "Complete sightseeing"],
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    }
  ];

  const getCurrentSeason = (date: Date | undefined): SeasonInfo | null => {
    if (!date) return null;
    const month = date.getMonth() + 1; // getMonth() returns 0-11, we need 1-12
    return seasons.find(season => season.months.includes(month)) || null;
  };

  const currentSeason = getCurrentSeason(selectedDate);

  const festivals = [
    { date: "January 15", name: "Makar Sankranti", description: "Kite festival celebrated across Jharkhand" },
    { date: "March (varies)", name: "Holi", description: "Festival of colors with tribal variations" },
    { date: "August (varies)", name: "Karam Festival", description: "Tribal harvest festival" }, 
    { date: "October (varies)", name: "Dussehra", description: "Victory of good over evil celebrations" },
    { date: "November (varies)", name: "Diwali", description: "Festival of lights" },
    { date: "November (varies)", name: "Sohrai Festival", description: "Tribal cattle worship festival" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CalendarIcon className="h-6 w-6" />
            Plan Your Jharkhand Trip
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Calendar Section */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Select Travel Dates</CardTitle>
                <CardDescription>
                  Choose your preferred travel dates to get seasonal recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border pointer-events-auto"
                />
                {selectedDate && (
                  <div className="mt-4 p-3 bg-accent rounded-lg">
                    <p className="font-medium">Selected Date:</p>
                    <p className="text-sm text-muted-foreground">
                      {format(selectedDate, "EEEE, MMMM d, yyyy")}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Seasonal Information */}
          <div className="space-y-4">
            {currentSeason && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      {currentSeason.name} Season
                    </CardTitle>
                    <Badge className={currentSeason.color}>
                      {currentSeason.name}
                    </Badge>
                  </div>
                  <CardDescription>{currentSeason.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-orange-500" />
                      <div>
                        <p className="text-xs text-muted-foreground">Temperature</p>
                        <p className="font-medium">{currentSeason.temperature}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <div>
                        <p className="text-xs text-muted-foreground">Rainfall</p>
                        <p className="font-medium">{currentSeason.rainfall}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Sun className="h-4 w-4 text-yellow-500" />
                      Season Highlights
                    </h4>
                    <ul className="text-sm space-y-1">
                      {currentSeason.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-green-500" />
                      Recommended Activities
                    </h4>
                    <ul className="text-sm space-y-1">
                      {currentSeason.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Festivals & Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Festivals & Events</CardTitle>
                <CardDescription>
                  Experience local culture during these special occasions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {festivals.map((festival, index) => (
                    <div key={index} className="border-l-2 border-primary pl-3">
                      <h4 className="font-medium text-sm">{festival.name}</h4>
                      <p className="text-xs text-muted-foreground mb-1">{festival.date}</p>
                      <p className="text-xs">{festival.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-2">
              <Button variant="outline" onClick={onClose} className="flex-1">
                Close
              </Button>
              <Button className="flex-1" onClick={() => {
                // This could navigate to booking or planning page
                window.location.href = "/explore";
                onClose();
              }}>
                Start Planning Trip
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};