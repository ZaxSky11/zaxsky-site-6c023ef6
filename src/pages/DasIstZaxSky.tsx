import { Link } from "react-router-dom";

const DasIstZaxSky = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Header with Logo and Navigation */}
        <div className="flex justify-between items-center mb-8 w-full">
          <img 
            src="/lovable-uploads/92eb5656-5382-4737-93be-61715951152d.png" 
            alt="ZaxSky Logo" 
            className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
          <Link 
            to="/"
            className="text-warm-text hover:text-coral-accent transition-colors duration-300 font-medium"
          >
            Zurück zum Profil
          </Link>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-warm-text">Das ist ZaxSky</h1>
          <div className="space-y-4 text-muted-foreground">
            <p>Hier erfährst du mehr über mich und meine Inhalte.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DasIstZaxSky;