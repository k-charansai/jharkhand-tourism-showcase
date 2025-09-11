import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { Input } from "./input";
import { Button } from "./button";
import { Badge } from "./badge";

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
}

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchDialog = ({ isOpen, onClose }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock data for searchable content
  const searchableContent: SearchResult[] = [
    {
      title: "Explore Jharkhand",
      description: "Discover the natural beauty and cultural heritage of Jharkhand state",
      url: "/explore",
      category: "Destinations"
    },
    {
      title: "Tribal Villages Tour", 
      description: "Experience authentic tribal culture and traditions in remote villages",
      url: "/discover-more",
      category: "Cultural"
    },
    {
      title: "Betla National Park Safari",
      description: "Wildlife safari experience with elephants, tigers and diverse flora",
      url: "/discover-more", 
      category: "Wildlife"
    },
    {
      title: "Places to Stay",
      description: "Find the best accommodation options across Jharkhand",
      url: "/places-to-stay",
      category: "Accommodation"
    },
    {
      title: "Travel Deals",
      description: "Special offers and packages for your Jharkhand journey",
      url: "/travel-deals",
      category: "Offers"
    },
    {
      title: "Waterfalls of Jharkhand",
      description: "Pristine waterfalls including Hundru Falls and Dassam Falls",
      url: "/explore",
      category: "Nature"
    },
    {
      title: "Ranchi Hill Station",
      description: "Cool climate and scenic beauty in the state capital",
      url: "/explore", 
      category: "Hill Stations"
    },
    {
      title: "Jamshedpur Steel City",
      description: "Industrial heritage and modern amenities in the steel city",
      url: "/explore",
      category: "Cities"
    }
  ];

  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate API delay
    const searchTimeout = setTimeout(() => {
      const filtered = searchableContent.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setSearchResults(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [searchQuery]);

  const handleResultClick = (url: string) => {
    window.location.href = url;
    onClose();
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Jharkhand Tourism
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for destinations, activities, places to stay..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10"
              autoFocus
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
                onClick={clearSearch}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto space-y-2">
            {isSearching && (
              <div className="text-center py-8 text-muted-foreground">
                Searching...
              </div>
            )}

            {!isSearching && searchQuery.trim().length >= 2 && searchResults.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No results found for "{searchQuery}"
              </div>
            )}

            {!isSearching && searchResults.map((result, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-border hover:bg-accent/50 cursor-pointer transition-colors"
                onClick={() => handleResultClick(result.url)}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-1">{result.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                      {result.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {result.category}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}

            {!searchQuery.trim() && (
              <div className="text-center py-8 text-muted-foreground">
                <Search className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>Start typing to search destinations, activities, and more...</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};