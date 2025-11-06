import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const People = () => {
  const team = [
    {
      name: "Aswin Karthik",
      role: "Founding Partner",
      about: "As a Founding Partner of Madras Spaces, I am proud to drive our vision for design excellence. At Madras Spaces, we are reshaping the design landscape, committed to global standards. Our journey as a design studio embodies a comprehensive approach that spans from concept sketches to immersive 3D visualizations, providing a complete suite of 2D and 3D services. Our mission is to bring visions to life, inspiring the world with our architectural and interior design expertise. As a Founding Partner, I am personally dedicated to our shared pursuit of innovation and excellence. Join us on this remarkable journey as we craft spaces that push the boundaries of design.",
      linkedin: "https://www.linkedin.com/in/aswin-karthik/",
    },
    {
      name: "Abhijit Haridas",
      role: "Co-founder & Partner",
      about: "As an architect with diverse experience across multi-dimensional design studios across various locations, I am currently the Co-founder and Partner at Madras Spaces, a dynamic architectural design studio based in Chennai, transcending geographical boundaries, embodying a global design vision. At Madras Spaces, we are committed to creative excellence, approaching each project with an open-ended and an unwavering dedication to delivering innovative and thoughtful design solutions. Our global perspective and innovative approach push beyond traditional boundaries to consistently deliver remarkable results. We believe in a collaborative approach that sparks creativity and pursue new ideas through open dialogue and teamwork across different disciplines in design. This integrated way of working creates a dynamic environment where we can adapt to challenges, solve problems creatively, and explore new possibilities with a flexible and methodical approach.",
      linkedin: "https://www.linkedin.com/in/abhijitharidas/",
    },
  ];

  return (
    <section id="people" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-16 tracking-tight">People</h2>

        <div className="space-y-16 lg:space-y-24">
          {team.map((member, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-16"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-light mb-2">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  asChild
                >
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
              <div>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {member.about}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default People;
