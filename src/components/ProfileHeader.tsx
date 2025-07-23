import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Twitter, Twitch, Youtube, Mail } from "lucide-react";

const ProfileHeader = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/d856f0f4-6ff2-4854-b04d-356f730c0314.png" 
            alt="ZaxSky Logo" 
            className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Profile Picture */}
        <div className="relative group">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-profile transition-transform duration-300 group-hover:scale-105">
            <img 
              src="/lovable-uploads/4d473575-a2fc-4b5e-abe5-d286e6b8cded.png" 
              alt="ZaxSky Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-coral-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Name and Badge */}
        <div className="space-y-3">
          <div className="relative flex items-center justify-center gap-2">
            <img 
              src="/lovable-uploads/b0914b5a-c707-41aa-a2e6-22ce5ecdb193.png" 
              alt="Badge" 
              className="absolute -z-10 w-24 h-24 opacity-30"
            />
            <h1 className="text-4xl font-bold text-warm-text">ZaxSky</h1>
            <span className="text-2xl">⚡</span>
          </div>
          <p className="text-muted-foreground text-lg">janis</p>
          <div className="h-px bg-border w-24 mx-auto"></div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-warm-text">
            Content Creator und Streamer
          </h2>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="bg-coral-accent/20 text-warm-text border-coral-accent/30">
            Gaming
          </Badge>
          <Badge variant="secondary" className="bg-coral-accent/20 text-warm-text border-coral-accent/30">
            Streaming
          </Badge>
          <Badge variant="secondary" className="bg-coral-accent/20 text-warm-text border-coral-accent/30">
            Content Creation
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;