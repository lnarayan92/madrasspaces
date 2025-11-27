const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-light mb-6 tracking-tight">About Madras Spaces</h2>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>
                Madras Spaces is a dynamic architectural design studio based in Chennai—rooted locally yet driven by a global design vision.
              </p>
              <p>
                We are committed to creative excellence, approaching every project with openness, intent, and an unwavering pursuit of thoughtful, innovative solutions.
              </p>
              <p>
                Our process spans the entire spectrum, from concept sketches to immersive 3D visualizations, offering a comprehensive suite of both 2D and 3D services.
              </p>
              <p>
                We also provide end-to-end project management for execution, ensuring a seamless, single-point contact experience for our clients.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-light mb-6 tracking-tight">Our Approach</h3>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>
                We believe in a collaborative approach that sparks creativity and pursue new ideas through open dialogue and teamwork across different disciplines in design.
              </p>
              <p>
                This integrated way of working creates a dynamic environment where we can adapt to challenges, solve problems creatively, and explore new possibilities with a flexible and methodical approach.
              </p>
              <p>
                Our global perspective and innovative approach push beyond traditional boundaries to consistently deliver remarkable results.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 gap-8 text-center max-w-md mx-auto">
          <div>
            <p className="text-3xl sm:text-4xl font-light mb-2">2022</p>
            <p className="text-sm text-muted-foreground">Founded</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-light mb-2">Chennai</p>
            <p className="text-sm text-muted-foreground">Home</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
