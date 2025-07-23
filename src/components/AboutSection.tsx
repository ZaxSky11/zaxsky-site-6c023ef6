import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Video, Users, Trophy } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, label: "Follower", value: "12.5K", color: "text-coral-accent" },
    { icon: Video, label: "Videos", value: "250+", color: "text-coral-accent" },
    { icon: Gamepad2, label: "Spiele", value: "50+", color: "text-coral-accent" },
    { icon: Trophy, label: "Erfolge", value: "25", color: "text-coral-accent" },
  ];

  const games = [
    "Valorant", "League of Legends", "Minecraft", "Among Us", "Fall Guys", "Rocket League"
  ];

  return (
    <div className="bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* About Me */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-warm-text">Über mich</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hallo! Ich bin ZaxSky, ein leidenschaftlicher Content Creator und Streamer. 
              Seit mehreren Jahren erstelle ich Videos und streame verschiedene Spiele. 
              Meine Community bedeutet mir alles und ich freue mich über jeden, der Teil davon wird!
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border/50 shadow-soft hover:shadow-profile transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center space-y-3">
                <stat.icon className={`h-8 w-8 mx-auto ${stat.color}`} />
                <div>
                  <div className="text-2xl font-bold text-warm-text">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Games Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-warm-text text-center">Meine Lieblingsspiele</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {games.map((game, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm border-coral-accent/30 hover:bg-coral-accent/10 transition-colors cursor-pointer"
              >
                {game}
              </Badge>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <Card className="border-coral-accent/20 shadow-soft">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-warm-text mb-6 text-center">Stream-Zeiten</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-warm-text">Wochentage</h4>
                <p className="text-muted-foreground">Montag - Freitag: 18:00 - 22:00 Uhr</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-warm-text">Wochenende</h4>
                <p className="text-muted-foreground">Samstag - Sonntag: 14:00 - 20:00 Uhr</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;