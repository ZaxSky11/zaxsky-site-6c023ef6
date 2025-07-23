import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-warm py-8 px-4 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-coral-accent fill-coral-accent" />
          <span>by ZaxSky</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2024 ZaxSky. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;