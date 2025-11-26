import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl text-center">
        <div className="mb-12 flex justify-center">
          <img src={logo} alt="Madras Spaces Logo" className="h-32 sm:h-40 md:h-48 w-auto" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
          Crafting Spaces That
          <br />
          Push the Boundaries
          <br />
          of Design
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
          A dynamic architectural design studio in Chennai, transcending geographical boundaries with a global design vision.
        </p>
      </div>
    </section>
  );
};

export default Hero;
