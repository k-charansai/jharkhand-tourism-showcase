import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { Button } from "./button";
import { Input } from "./input";
import { ScrollArea } from "./scroll-area";
import { Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface TripPlannerChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TripPlannerChatbot = ({ isOpen, onClose }: TripPlannerChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Welcome to Jharkhand Trip Planner! 🌿 I'm here to help you plan an amazing trip to Jharkhand. Whether you're interested in waterfalls, tribal culture, wildlife sanctuaries, or hill stations, I can create a personalized itinerary for you. What kind of experience are you looking for?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Simple rule-based responses for demonstration
    if (message.includes("waterfall") || message.includes("falls")) {
      return "🏞️ Jharkhand is famous for its stunning waterfalls! I recommend:\n\n• **Hundru Falls** - 98m high waterfall near Ranchi\n• **Jonha Falls** - Perfect for picnics and swimming\n• **Dassam Falls** - Beautiful cascade surrounded by forests\n• **Hirni Falls** - Hidden gem with crystal clear water\n\nWould you like a detailed 3-day waterfall tour itinerary?";
    }
    
    if (message.includes("tribal") || message.includes("culture")) {
      return "🏺 Experience authentic tribal culture in Jharkhand:\n\n• **Tribal villages** near Khunti and Saraikela\n• **Traditional handicrafts** - Dokra art, bamboo crafts\n• **Folk dances** - Chhau, Jhumar, and Paika\n• **Tribal museums** in Ranchi\n• **Local festivals** - Sarhul, Karma, Tusu\n\nI can arrange authentic village stays and cultural experiences. What interests you most?";
    }
    
    if (message.includes("wildlife") || message.includes("safari") || message.includes("animals")) {
      return "🦌 Jharkhand's wildlife sanctuaries are incredible:\n\n• **Betla National Park** - Tigers, elephants, leopards\n• **Dalma Wildlife Sanctuary** - Elephants and scenic hills\n• **Hazaribagh Wildlife Sanctuary** - Deer, wild boar, peacocks\n• **Palamau Tiger Reserve** - Project Tiger reserve\n\nBest time to visit: October to March. Would you like safari booking details?";
    }
    
    if (message.includes("hill") || message.includes("mountain") || message.includes("trekking")) {
      return "⛰️ Explore Jharkhand's beautiful hills:\n\n• **Parasnath Hills** - Highest peak, Jain pilgrimage site\n• **Netarhat** - 'Queen of Chotanagpur', sunrise/sunset views\n• **Dalma Hills** - Trekking and wildlife\n• **Ranchi Hills** - Rock climbing and adventure sports\n\nPerfect for trekking, nature walks, and adventure activities. Planning a hill station tour?";
    }
    
    if (message.includes("itinerary") || message.includes("plan") || message.includes("days")) {
      return "📅 I can create customized itineraries:\n\n• **3-day weekend trips** - Ranchi + nearby attractions\n• **5-day cultural tour** - Tribal villages + handicrafts\n• **7-day complete tour** - Waterfalls + wildlife + culture\n• **Adventure packages** - Trekking + rock climbing + rafting\n\nHow many days are you planning to visit? What's your main interest?";
    }
    
    if (message.includes("food") || message.includes("cuisine")) {
      return "🍽️ Savor authentic Jharkhandi cuisine:\n\n• **Litti Chokha** - Traditional roasted wheat balls\n• **Dhuska** - Rice and lentil fritters\n• **Bamboo shoot curry** - Tribal delicacy\n• **Rugra** - Wild mushroom dishes\n• **Handia** - Traditional rice beer\n\nI can recommend the best local restaurants and food tours!";
    }
    
    // Default response
    return "That sounds interesting! 🌟 Let me help you plan the perfect Jharkhand experience. Here are some popular options:\n\n• **Nature & Waterfalls** - Hundru, Jonha, Dassam Falls\n• **Wildlife Safaris** - Betla National Park, Dalma Sanctuary\n• **Tribal Culture** - Village visits, handicrafts, folk dances\n• **Hill Stations** - Netarhat, Parasnath, Ranchi Hills\n• **Adventure Activities** - Trekking, rock climbing, river rafting\n\nWhat type of experience interests you most? I can create a detailed itinerary based on your preferences!";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl h-[600px] flex flex-col p-0">
        <DialogHeader className="p-6 pb-4 border-b bg-gradient-subtle">
          <DialogTitle className="flex items-center gap-2 text-xl">
            <div className="p-2 bg-primary/10 rounded-full">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            AI Trip Planner for Jharkhand
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "bot" && (
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

                {message.sender === "user" && (
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-primary animate-pulse" />
                </div>
                <div className="bg-muted rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        <div className="p-4 border-t bg-background">
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about waterfalls, culture, wildlife, or anything about Jharkhand..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              size="icon"
              className="flex-shrink-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            AI-powered trip planning for Jharkhand Tourism
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};