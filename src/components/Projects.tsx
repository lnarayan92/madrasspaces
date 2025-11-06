import aMeasuredQuiet from "@/assets/projects/a-measured-quiet.jpg";
import axisThroughTexture from "@/assets/projects/axis-through-texture.jpg";
import composedInSilence from "@/assets/projects/composed-in-silence.jpg";
import constructedStillness from "@/assets/projects/constructed-stillness.jpg";
import softEdges from "@/assets/projects/soft-edges.jpg";
import stoneWoodLight from "@/assets/projects/stone-wood-light.jpg";
import theFramedBlue from "@/assets/projects/the-framed-blue.jpg";
import throughLine from "@/assets/projects/through-line.jpg";
import tracesOfCalm from "@/assets/projects/traces-of-calm.jpg";

const Projects = () => {
  const projectImages = [
    { src: aMeasuredQuiet, alt: "A Measured Quiet - Interior view" },
    { src: axisThroughTexture, alt: "Axis Through Texture - Architectural detail" },
    { src: composedInSilence, alt: "Composed in Silence - Living space" },
    { src: constructedStillness, alt: "Constructed Stillness - Material composition" },
    { src: softEdges, alt: "Soft Edges - Spatial flow" },
    { src: stoneWoodLight, alt: "Stone Wood Light - Material palette" },
    { src: theFramedBlue, alt: "The Framed Blue - View perspective" },
    { src: throughLine, alt: "Through Line - Corridor design" },
    { src: tracesOfCalm, alt: "Traces of Calm - Textural detail" },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 tracking-tight">A Home in the Sky</h2>
        <p className="text-lg sm:text-xl text-muted-foreground font-light mb-12 max-w-3xl">
          Finding Stillness above the City
        </p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
            <p>
              In the layered, ever-expanding skyline of Chennai, where residential towers rise above the urgency of daily life, Madras Spaces has crafted an apartment that offers something increasingly rare—stillness. Perched high above the ground, this home is not about amplifying altitude or chasing views; instead, it is a retreat from them—a spatial pause amidst the city's vertical rush.
            </p>
            <p>
              The design began with a question: What does calm feel like, far above a city that never pauses? This inquiry shaped every material and spatial decision, resulting in a language of design grounded not in spectacle, but in sensation.
            </p>
            <p>
              At the heart of the interior is leather-finished Kota stone—a sedimentary stone marked by time and pressure. Cool underfoot and muted in texture, its fossilized traces and tonal shifts give the home a quiet grounding. Used not just as flooring but across key surfaces, the stone absorbs light rather than reflecting it, softening each step and glance.
            </p>
          </div>
          <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
            <p>
              Walls are wrapped in natural concrete tiles that seem to hold light instead of bouncing it. Concrete, often associated with starkness, is embraced here for its humility. The exposed finish of the ceiling and walls turns construction into atmosphere: formwork impressions, color gradations, and surface irregularities become quiet visual cues that trace the passing of time.
            </p>
            <p>
              Complementing this is the warmth of natural teak, used in panelling, storage units, and thresholds. Its aging process—darkening with time and touch—adds domesticity to the otherwise elemental palette. The interplay between stone, concrete, and wood is not about contrast, but balance—each material tempering the other.
            </p>
            <p>
              Together, these elements construct a mood rather than a statement. There is no overt ornamentation, no flourish—only restraint. Every line, joint, and finish is considered for how it contributes to stillness.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projectImages.map((image, index) => (
            <div
              key={index}
              className="aspect-[4/5] overflow-hidden bg-muted group cursor-pointer"
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

        <div className="mt-12 max-w-3xl">
          <p className="text-muted-foreground font-light leading-relaxed">
            In a city where the line between exterior chaos and interior calm is increasingly blurred, this home draws a gentle distinction. It doesn't deny its context; it resists it quietly. What emerges is a space that sits in the sky but feels grounded—textural, quiet, and complete.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
