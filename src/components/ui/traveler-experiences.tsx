import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Input } from './input';
import { Textarea } from './textarea';
import { Badge } from './badge';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './dialog';
import { useToast } from '@/hooks/use-toast';
import { Heart, MessageCircle, Share2, Camera, Video, MapPin, Calendar, Star, Plus } from 'lucide-react';

interface Experience {
  id: string;
  user_name: string;
  user_avatar?: string;
  title: string;
  content: string;
  location: string;
  visit_date: string;
  rating: number;
  images: string[];
  videos: string[];
  tags: string[];
  likes: number;
  comments: Experience[];
  created_at: string;
}

const TravelerExperiences = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isAddingExperience, setIsAddingExperience] = useState(false);
  const [newExperience, setNewExperience] = useState({
    title: '',
    content: '',
    location: '',
    visit_date: '',
    rating: 5,
    tags: [] as string[],
  });
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const { toast } = useToast();

  // Mock data for demonstration
  useEffect(() => {
    const mockExperiences: Experience[] = [
      {
        id: '1',
        user_name: 'Priya Sharma',
        user_avatar: '',
        title: 'Magical Sunset at Hundru Falls',
        content: 'The Hundru Falls during sunset was absolutely breathtaking! The 98-meter waterfall creates a misty atmosphere that\'s perfect for photography. Best time to visit is early morning or late afternoon for the best lighting.',
        location: 'Hundru Falls, Ranchi',
        visit_date: '2024-01-15',
        rating: 5,
        images: ['/lovable-uploads/8634e242-df53-4093-9007-3d18fb6c5fe7.png'],
        videos: [],
        tags: ['waterfall', 'photography', 'sunset', 'ranchi'],
        likes: 24,
        comments: [],
        created_at: '2024-01-16T10:30:00Z'
      },
      {
        id: '2',
        user_name: 'Rajesh Kumar',
        user_avatar: '',
        title: 'Wildlife Safari at Betla National Park',
        content: 'Amazing wildlife experience at Betla! Spotted elephants, tigers, and various bird species. The forest stay was comfortable and the guides were knowledgeable. Pack light but don\'t forget your camera with a good zoom lens.',
        location: 'Betla National Park, Latehar',
        visit_date: '2023-12-20',
        rating: 4,
        images: [],
        videos: [],
        tags: ['wildlife', 'safari', 'betla', 'tigers', 'elephants'],
        likes: 18,
        comments: [],
        created_at: '2023-12-22T14:15:00Z'
      },
      {
        id: '3',
        user_name: 'Anita Devi',
        user_avatar: '',
        title: 'Spiritual Journey to Baidyanath Dham',
        content: 'The spiritual energy at Baidyanath Temple is incredible. Completed the morning aarti and the evening prayers. The temple complex is well-maintained and the local prasad is delicious. Plan for early morning visit to avoid crowds.',
        location: 'Baidyanath Dham, Deoghar',
        visit_date: '2024-02-10',
        rating: 5,
        images: [],
        videos: [],
        tags: ['temple', 'spiritual', 'deoghar', 'baidyanath'],
        likes: 32,
        comments: [],
        created_at: '2024-02-11T09:20:00Z'
      }
    ];
    setExperiences(mockExperiences);
  }, []);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  };

  const handleSubmitExperience = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would integrate with Supabase to:
    // 1. Upload files to storage
    // 2. Insert experience data to database
    // 3. Handle authentication
    
    const experience: Experience = {
      id: Date.now().toString(),
      user_name: 'Current User', // This would come from auth
      title: newExperience.title,
      content: newExperience.content,
      location: newExperience.location,
      visit_date: newExperience.visit_date,
      rating: newExperience.rating,
      images: [], // URLs from uploaded files
      videos: [],
      tags: newExperience.tags,
      likes: 0,
      comments: [],
      created_at: new Date().toISOString()
    };

    setExperiences(prev => [experience, ...prev]);
    setNewExperience({
      title: '',
      content: '',
      location: '',
      visit_date: '',
      rating: 5,
      tags: [],
    });
    setSelectedFiles(null);
    setIsAddingExperience(false);
    
    toast({
      title: "Experience Shared!",
      description: "Thank you for sharing your travel experience with fellow travelers.",
    });
  };

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const tag = (e.target as HTMLInputElement).value.trim();
      if (tag && !newExperience.tags.includes(tag)) {
        setNewExperience(prev => ({
          ...prev,
          tags: [...prev.tags, tag]
        }));
        (e.target as HTMLInputElement).value = '';
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setNewExperience(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleLike = (experienceId: string) => {
    setExperiences(prev => prev.map(exp => 
      exp.id === experienceId 
        ? { ...exp, likes: exp.likes + 1 }
        : exp
    ));
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Traveler Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Share your adventures and discover hidden gems through fellow travelers' stories, photos, and insider tips.
          </p>
          
          <Dialog open={isAddingExperience} onOpenChange={setIsAddingExperience}>
            <DialogTrigger asChild>
              <Button size="lg" className="gap-2">
                <Plus className="w-5 h-5" />
                Share Your Experience
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Share Your Travel Experience</DialogTitle>
              </DialogHeader>
              
              <form onSubmit={handleSubmitExperience} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Experience Title</label>
                  <Input
                    placeholder="e.g., Amazing sunset at Hundru Falls"
                    value={newExperience.title}
                    onChange={(e) => setNewExperience(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Input
                    placeholder="e.g., Hundru Falls, Ranchi"
                    value={newExperience.location}
                    onChange={(e) => setNewExperience(prev => ({ ...prev, location: e.target.value }))}
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Visit Date</label>
                  <Input
                    type="date"
                    value={newExperience.visit_date}
                    onChange={(e) => setNewExperience(prev => ({ ...prev, visit_date: e.target.value }))}
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewExperience(prev => ({ ...prev, rating: star }))}
                        className="p-1"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newExperience.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Experience & Travel Tips</label>
                  <Textarea
                    placeholder="Share your experience, what you loved, travel tips, best times to visit..."
                    value={newExperience.content}
                    onChange={(e) => setNewExperience(prev => ({ ...prev, content: e.target.value }))}
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Photos & Videos</label>
                  <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      multiple
                      accept="image/*,video/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex gap-2">
                          <Camera className="w-8 h-8 text-muted-foreground" />
                          <Video className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">
                          Click to upload photos and videos
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {selectedFiles ? `${selectedFiles.length} files selected` : 'Support: JPG, PNG, MP4, MOV'}
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Tags</label>
                  <Input
                    placeholder="Add tags (press Enter to add) e.g., waterfall, photography, adventure"
                    onKeyDown={handleTagInput}
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {newExperience.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                        {tag} ×
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1">
                    Share Experience
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setIsAddingExperience(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-8">
          {experiences.map((experience) => (
            <Card key={experience.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={experience.user_avatar} />
                      <AvatarFallback>{experience.user_name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{experience.user_name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                        <Calendar className="w-4 h-4 ml-2" />
                        {new Date(experience.visit_date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: experience.rating }, (_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardTitle className="text-xl mb-3">{experience.title}</CardTitle>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {experience.content}
                </p>
                
                {experience.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                    {experience.images.map((image, index) => (
                      <div key={index} className="aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={image} 
                          alt={`Experience ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(experience.id)}
                      className="gap-2"
                    >
                      <Heart className="w-4 h-4" />
                      {experience.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Comment
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date(experience.created_at).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Experiences
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TravelerExperiences;