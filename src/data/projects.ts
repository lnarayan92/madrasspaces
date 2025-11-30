import nHouse00 from "@/assets/projects/n-house-00.jpg";
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

import aMeasuredQuiet from "@/assets/projects/a-measured-quiet.jpg";
import axisThroughTexture from "@/assets/projects/axis-through-texture.jpg";
import composedInSilence from "@/assets/projects/composed-in-silence.jpg";
import constructedStillness from "@/assets/projects/constructed-stillness.jpg";
import softEdges from "@/assets/projects/soft-edges.jpg";
import stoneWoodLight from "@/assets/projects/stone-wood-light.jpg";
import theFramedBlue from "@/assets/projects/the-framed-blue.jpg";
import throughLine from "@/assets/projects/through-line.jpg";
import tracesOfCalm from "@/assets/projects/traces-of-calm.jpg";

import brickHouse01 from "@/assets/projects/brick-house-01.jpg";
import brickHouse02 from "@/assets/projects/brick-house-02.jpg";
import brickHouse03 from "@/assets/projects/brick-house-03.jpg";
import brickHouse04 from "@/assets/projects/brick-house-04.jpg";
import brickHouse05 from "@/assets/projects/brick-house-05.jpg";
import brickHouse06 from "@/assets/projects/brick-house-06.jpg";
import brickHouse07 from "@/assets/projects/brick-house-07.jpg";
import brickHouse08 from "@/assets/projects/brick-house-08.jpg";
import brickHouse09 from "@/assets/projects/brick-house-09.jpg";
import brickHouse10 from "@/assets/projects/brick-house-10.jpg";

import house8701 from "@/assets/projects/87-house-01.jpg";
import house8702 from "@/assets/projects/87-house-02.jpg";
import house8703 from "@/assets/projects/87-house-03.jpg";
import house8704 from "@/assets/projects/87-house-04.jpg";
import house8705 from "@/assets/projects/87-house-05.jpg";
import house8706 from "@/assets/projects/87-house-06.jpg";
import house8707 from "@/assets/projects/87-house-07.jpg";
import house8708 from "@/assets/projects/87-house-08.jpg";
import house8709 from "@/assets/projects/87-house-09.jpg";
import house8710 from "@/assets/projects/87-house-10.jpg";
import house8711 from "@/assets/projects/87-house-11.jpg";
import house8712 from "@/assets/projects/87-house-12.jpg";
import house8713 from "@/assets/projects/87-house-13.jpg";
import house8714 from "@/assets/projects/87-house-14.gif";

export interface ProjectImage {
  src: string;
  alt: string;
}

export type ProjectStatus = "Ongoing" | "Completed" | "Unbuilt";

export interface Project {
  id: string;
  title: string;
  secondaryName: string;
  status: ProjectStatus;
  subtitle: string;
  description: string[];
  conclusion: string;
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: "01-061-house",
    title: "01 061 House",
    secondaryName: "A Contemporary Residence in Chennai",
    status: "Completed",
    subtitle: "A Contemporary Residence in Chennai",
    description: [
      "N House stands as a testament to contemporary residential architecture in the heart of Chennai. The design embraces a dialogue between traditional brick masonry and modern architectural elements, creating a distinctive presence in its urban context.",
      "The three-story residence features exposed brick facades that pay homage to Chennai's architectural heritage while incorporating clean, minimalist lines that define contemporary design. Large windows and glass balustrades allow natural light to permeate the interior spaces while maintaining visual connections with the surroundings.",
      "The interior spaces are characterized by their simplicity and functionality. Natural light floods through strategically placed openings, creating dynamic patterns throughout the day. The material palette is deliberately restrained—polished floors, clean white walls, and warm wooden accents create a serene backdrop for daily life.",
      "Each floor is designed to maximize space efficiency while maintaining a sense of openness. The living areas feature custom-designed furniture and built-in storage solutions that complement the architectural language. The use of natural materials like wood and stone adds warmth and texture to the minimalist interior.",
    ],
    conclusion: "N House represents a harmonious balance between traditional materials and contemporary design principles, creating a modern family home that is both functional and aesthetically refined.",
    images: [
      { src: nHouse00, alt: "01 061 House - Ideation Sketch" },
      { src: nHouse01, alt: "01 061 House - Front Elevation" },
      { src: nHouse02, alt: "01 061 House - Exterior View" },
      { src: nHouse03, alt: "01 061 House - Side Elevation" },
      { src: nHouse04, alt: "01 061 House - Architectural Detail" },
      { src: nHouse05, alt: "01 061 House - Balcony Detail" },
      { src: nHouse07, alt: "01 061 House - Balcony View" },
      { src: nHouse08, alt: "01 061 House - Living Room" },
      { src: nHouse09, alt: "01 061 House - Living Space" },
      { src: nHouse10, alt: "01 061 House - Living Area with TV" },
      { src: nHouse13, alt: "01 061 House - Interior View" },
    ],
  },
  {
    id: "t-12-c-16",
    title: "T 12 C 16",
    secondaryName: "Finding Stillness above the City",
    status: "Completed",
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
      { src: constructedStillness, alt: "Constructed Stillness - Material composition" },
      { src: aMeasuredQuiet, alt: "A Measured Quiet - Interior view" },
      { src: axisThroughTexture, alt: "Axis Through Texture - Architectural detail" },
      { src: composedInSilence, alt: "Composed in Silence - Living space" },
      { src: softEdges, alt: "Soft Edges - Spatial flow" },
      { src: stoneWoodLight, alt: "Stone Wood Light - Material palette" },
      { src: theFramedBlue, alt: "The Framed Blue - View perspective" },
      { src: throughLine, alt: "Through Line - Corridor design" },
      { src: tracesOfCalm, alt: "Traces of Calm - Textural detail" },
    ],
  },
  {
    id: "01-203-house",
    title: "01 203 House",
    secondaryName: "A Sanctuary of Tranquility in Chennai's Outskirts",
    status: "Completed",
    subtitle: "A Sanctuary of Tranquility in Chennai's Outskirts",
    description: [
      "Nestled on a tight plot measuring 60'x40' in the outskirts of Chennai, Tamil Nadu, this 3BHK home stands as a testament to thoughtful design and the enduring harmony between nature and architecture. Designed to cater to the needs of a young couple, their child, and cherished pets, it offers a sanctuary of tranquility amidst the bustling urban life.",
      "At the heart of this home is its expansive courtyard, ingeniously designed to breathe with changing qualities of light and breeze throughout the day. Crafted with the potential growth of neighboring homes in mind, the courtyard ensures privacy while inviting natural elements to enhance its charm.",
      "A majestic neem tree stands tall on the outside of the site, on the north side, offering its protective shade and natural beauty. The large north-facing window, meticulously designed as an extension of the house, frames this picturesque view, seamlessly blending the outdoors with the indoors. It serves as a visual bridge between the family's living space and the serene presence of the neem tree, creating a sense of harmony and connection.",
      "For the inhabitants, the neem tree has become more than just a natural element; it has become a cherished member of their family. Its sprawling branches provide shade and shelter, while its presence brings a sense of tranquility and continuity to their lives. The tree's seasonal changes, from vibrant green leaves in spring to golden hues in autumn, mark the passage of time and create a deep bond between the family and their surroundings.",
      "As the family gathers around the large north-facing window, they feel a profound connection to nature and to each other. Whether enjoying a morning cup of coffee or watching the sunset in the evening, the window serves as a constant reminder of the beauty and resilience of the natural world, enriching their lives in ways they never imagined.",
      "The house features three bedrooms, ingeniously distributed to optimize space and privacy. Ascending above the car parking level, a mezzanine bedroom offers a private space, overlooking the verdant landscape from a balcony in the front. Natural light floods into the interiors through large windows and skylights, complemented by the captivating play of shadows cast by pergolas and foliage, creating an ever-changing tapestry of light and shade.",
      "Cross ventilation channels fresh air throughout, enhancing the sense of vitality and well-being within the home. Rooftop ventilation facilitates the escape of hot air, ensuring comfort even in the heat of summer. Additionally, a west-facing wall adorned with glass blocks ensures that even as the sun sets, the house is bathed in a beautiful ambient light, providing the perfect atmosphere for the clients to unwind and enjoy their cherished moments.",
    ],
    conclusion: "This home represents a harmonious dialogue between built form and natural context, where every architectural decision reinforces the family's connection to their environment and to each other.",
    images: [
      { src: brickHouse01, alt: "01 203 House - Mezzanine volume extends outwards on the northern side" },
      { src: brickHouse02, alt: "01 203 House - West-facing blank wall envelops exposed brick volume" },
      { src: brickHouse03, alt: "01 203 House - House nestled within the local existing vegetation" },
      { src: brickHouse04, alt: "01 203 House - Mezzanine volume cantilevers outward on north side" },
      { src: brickHouse05, alt: "01 203 House - The play of built volumes with the existing site vegetation" },
      { src: brickHouse06, alt: "01 203 House - Entrance view with cantilevered volume" },
      { src: brickHouse07, alt: "01 203 House - Central staircase court filled with filtered natural light" },
      { src: brickHouse08, alt: "01 203 House - Staircase court with glass block windows" },
      { src: brickHouse09, alt: "01 203 House - Split levels inside the house" },
      { src: brickHouse10, alt: "01 203 House - Skylights creating everchanging play of shadows" },
    ],
  },
  {
    id: "01-87-house",
    title: "House of Stillness",
    secondaryName: "Residence of Light and Stillness",
    status: "Ongoing",
    subtitle: "Residence of Light and Stillness",
    description: [
      "Conceived on a slender strip of land surrounded by dense built fabric, this residence turns inward, searching for light and silence within. Like shafts of sun piercing through a forest canopy, daylight here enters from above — softened, filtered, and held in stillness. It drifts across rooms, stitching together a seamless flow of spaces, each moment marked by a different hue of light.",
      "At the heart of the house, two courtyards breathe. Each carries its own temperament: one quiet and shaded, like a grove at dawn; the other open and luminous, like midday skies. A pool of calm water, edged with rocks unearthed from the very site, anchors the home. Its still surface reflects not only the sky above but also the tranquil rhythm of living inside.",
      "In the warm and humid climate of Tamil Nadu, the courts act as lungs, drawing air and light deep into the home. Skylights, like openings between clouds, release the harshness of the sun, leaving only its softened glow.",
      "The architecture is pared back, almost ascetic — a vessel that allows nature to write its own poetry in light, air, and shadow. Minimal yet soulful, the home embodies a lifestyle of restraint and calm. More than shelter, it is imagined as a sanctuary where stillness is not the absence of sound, but the quiet presence of light and water.",
    ],
    conclusion: "This residence stands as a testament to the power of minimalist architecture to create profound connections between inhabitants and their environment, where every element serves to amplify the experience of light, space, and tranquility.",
    images: [
      { src: house8712, alt: "01 87 House - Section Drawing" },
      { src: house8701, alt: "01 87 House - Exterior View" },
      { src: house8702, alt: "01 87 House - Architectural Detail" },
      { src: house8703, alt: "01 87 House - Skylight Detail" },
      { src: house8704, alt: "01 87 House - Interior Courtyard" },
      { src: house8705, alt: "01 87 House - Living Space" },
      { src: house8706, alt: "01 87 House - Staircase Design" },
      { src: house8707, alt: "01 87 House - Kitchen Area" },
      { src: house8708, alt: "01 87 House - Art Display" },
      { src: house8709, alt: "01 87 House - Corridor View" },
      { src: house8710, alt: "01 87 House - Ground Floor Plan" },
      { src: house8711, alt: "01 87 House - First Floor Plan" },
      { src: house8713, alt: "01 87 House - Site Plan" },
      { src: house8714, alt: "01 87 House - Massing Diagram" },
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
