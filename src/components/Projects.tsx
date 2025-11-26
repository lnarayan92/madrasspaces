import aMeasuredQuiet from "@/assets/projects/a-measured-quiet.jpg";
import axisThroughTexture from "@/assets/projects/axis-through-texture.jpg";
import composedInSilence from "@/assets/projects/composed-in-silence.jpg";
import constructedStillness from "@/assets/projects/constructed-stillness.jpg";
import softEdges from "@/assets/projects/soft-edges.jpg";
import stoneWoodLight from "@/assets/projects/stone-wood-light.jpg";
import theFramedBlue from "@/assets/projects/the-framed-blue.jpg";
import throughLine from "@/assets/projects/through-line.jpg";
import tracesOfCalm from "@/assets/projects/traces-of-calm.jpg";
import nHouse01 from "@/assets/projects/n-house-01.jpg";
import nHouse02 from "@/assets/projects/n-house-02.jpg";
import nHouse03 from "@/assets/projects/n-house-03.jpg";
import nHouse04 from "@/assets/projects/n-house-04.jpg";
import nHouse05 from "@/assets/projects/n-house-05.jpg";
import nHouse07 from "@/assets/projects/n-house-07.jpg";
import nHouse08 from "@/assets/projects/n-house-08.jpg";
import nHouse09 from "@/assets/projects/n-house-09.jpg";
import nHouse10 from "@/assets/projects/n-house-10.jpg";
import nHouse13 from "@/assets/projects/n-house-13.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Projects = () => {
  const projects = [
    {
      id: "n-house",
      title: "N House",
      subtitle: "A Contemporary Residence in Chennai",
      description: [
        "N House stands as a testament to contemporary residential architecture in the heart of Chennai. The design embraces a dialogue between traditional brick masonry and modern architectural elements, creating a distinctive presence in its urban context.",
        "The three-story residence features exposed brick facades that pay homage to Chennai's architectural heritage while incorporating clean, minimalist lines that define contemporary design. Large windows and glass balustrades allow natural light to permeate the interior spaces while maintaining visual connections with the surroundings.",
        "The interior spaces are characterized by their simplicity and functionality. Natural light floods through strategically placed openings, creating dynamic patterns throughout the day. The material palette is deliberately restrained—polished floors, clean white walls, and warm wooden accents create a serene backdrop for daily life.",
        "Each floor is designed to maximize space efficiency while maintaining a sense of openness. The living areas feature custom-designed furniture and built-in storage solutions that complement the architectural language. The use of natural materials like wood and stone adds warmth and texture to the minimalist interior.",
      ],
      conclusion: "N House represents a harmonious balance between traditional materials and contemporary design principles, creating a modern family home that is both functional and aesthetically refined.",
      images: [
        { src: nHouse01, alt: "N House - Front Elevation" },
        { src: nHouse02, alt: "N House - Exterior View" },
        { src: nHouse03, alt: "N House - Side Elevation" },
        { src: nHouse04, alt: "N House - Architectural Detail" },
        { src: nHouse05, alt: "N House - Balcony Detail" },
        { src: nHouse07, alt: "N House - Balcony View" },
        { src: nHouse08, alt: "N House - Living Room" },
        { src: nHouse09, alt: "N House - Living Space" },
        { src: nHouse10, alt: "N House - Living Area with TV" },
        { src: nHouse13, alt: "N House - Interior View" },
      ],
    },
    {
      id: "home-in-the-sky",
      title: "A Home in the Sky",
      subtitle: "Finding Stillness above the City",
      description: [
        "In the layered, ever-expanding skyline of Chennai, where residential towers rise above the urgency of daily life, Madras Spaces has crafted an apartment that offers something increasingly rare—stillness. Perched high above the ground, this home is not about amplifying altitude or chasing views; instead, it is a retreat from them—a spatial pause amidst the city's vertical rush.",
        "The design began with a question: What does calm feel like, far above a city that never pauses? This inquiry shaped every material and spatial decision, resulting in a language of design grounded not in spectacle, but in sensation.",
        "At the heart of the interior is leather-finished Kota stone—a sedimentary stone marked by time and pressure. Cool underfoot and muted in texture, its fossilized traces and tonal shifts give the home a quiet grounding. Used not just as flooring but across key surfaces, the stone absorbs light rather than reflecting it, softening each step and glance.",
        "Walls are wrapped in natural concrete tiles that seem to hold light instead of bouncing it. Concrete, often associated with starkness, is embraced here for its humility. The exposed finish of the ceiling and walls turns construction into atmosphere: formwork impressions, color gradations, and surface irregularities become quiet visual cues that trace the passing of time.",
        "Complementing this is the warmth of natural teak, used in panelling, storage units, and thresholds. Its aging process—darkening with time and touch—adds domesticity to the otherwise elemental palette. The interplay between stone, concrete, and wood is not about contrast, but balance—each material tempering the other.",
        "Together, these elements construct a mood rather than a statement. There is no overt ornamentation, no flourish—only restraint. Every line, joint, and finish is considered for how it contributes to stillness.",
      ],
      conclusion: "In a city where the line between exterior chaos and interior calm is increasingly blurred, this home draws a gentle distinction. It doesn't deny its context; it resists it quietly. What emerges is a space that sits in the sky but feels grounded—textural, quiet, and complete.",
      images: [
        { src: aMeasuredQuiet, alt: "A Measured Quiet - Interior view" },
        { src: axisThroughTexture, alt: "Axis Through Texture - Architectural detail" },
        { src: composedInSilence, alt: "Composed in Silence - Living space" },
        { src: constructedStillness, alt: "Constructed Stillness - Material composition" },
        { src: softEdges, alt: "Soft Edges - Spatial flow" },
        { src: stoneWoodLight, alt: "Stone Wood Light - Material palette" },
        { src: theFramedBlue, alt: "The Framed Blue - View perspective" },
        { src: throughLine, alt: "Through Line - Corridor design" },
        { src: tracesOfCalm, alt: "Traces of Calm - Textural detail" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-16 tracking-tight">Projects</h2>

        <Accordion type="single" collapsible className="w-full space-y-8">
          {projects.map((project) => (
            <AccordionItem key={project.id} value={project.id} className="border-none">
              <AccordionTrigger className="group text-xl sm:text-2xl font-light hover:no-underline py-0 border-t border-border transition-opacity">
                <div className="flex items-center gap-6 w-full py-6">
                  <div className="w-32 h-20 sm:w-40 sm:h-24 flex-shrink-0 overflow-hidden bg-muted">
                    <img
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="group-hover:opacity-70 transition-opacity">{project.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-8">
                <div className="space-y-16">
                  {/* Hero Image */}
                  <div className="w-full aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Subtitle */}
                  <div className="max-w-2xl">
                    <p className="text-lg sm:text-xl text-muted-foreground font-light italic">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="max-w-3xl space-y-6 text-muted-foreground font-light leading-relaxed">
                    {project.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Image Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {project.images.slice(1).map((image, index) => (
                      <div
                        key={index}
                        className="aspect-[4/3] overflow-hidden bg-muted group cursor-pointer"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Conclusion */}
                  <div className="max-w-3xl pt-8 border-t border-border">
                    <p className="text-muted-foreground font-light leading-relaxed italic">
                      {project.conclusion}
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Projects;
