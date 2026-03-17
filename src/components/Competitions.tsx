import { Link } from "react-router-dom";
import { competitions } from "@/data/competitions";

const Competitions = () => {
  return (
    <section id="competitions" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-16 tracking-tight">
          Competitions
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {competitions.map((competition) => (
            <Link
              key={competition.id}
              id={`competition-tile-${competition.id}`}
              to={`/competition/${competition.id}`}
              className="group block"
            >
              {/* Thumbnail */}
              <div className="aspect-[4/3] overflow-hidden bg-muted mb-4 relative">
                {/* First Image (Default) */}
                <img
                  src={competition.images[0].src}
                  alt={competition.images[0].alt}
                  className="w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-0 absolute inset-0"
                  loading="lazy"
                />
                {/* Second Image (Hover) - Only show if second image exists */}
                {competition.images[1] && (
                  <img
                    src={competition.images[1].src}
                    alt={competition.images[1].alt}
                    className="w-full h-full object-cover object-center transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-105 absolute inset-0"
                    loading="lazy"
                  />
                )}
              </div>
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-light tracking-wide transition-opacity duration-300 group-hover:opacity-70">
                {competition.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;