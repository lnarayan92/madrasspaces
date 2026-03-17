// Import competition images from clean folder structure
// Competition 1: GRIHA NIRMAAN
import griha0 from "@/assets/competitions/griha-nirmaan/0.jpg";
import griha1 from "@/assets/competitions/griha-nirmaan/1.png";
import griha2 from "@/assets/competitions/griha-nirmaan/2.png";
import griha3 from "@/assets/competitions/griha-nirmaan/3.png";
import griha4 from "@/assets/competitions/griha-nirmaan/4.png";
import griha5 from "@/assets/competitions/griha-nirmaan/5.jpg";
import griha6 from "@/assets/competitions/griha-nirmaan/6.jpg";
import griha7 from "@/assets/competitions/griha-nirmaan/7.jpg";
import griha8 from "@/assets/competitions/griha-nirmaan/8.jpg";
import griha9 from "@/assets/competitions/griha-nirmaan/9.jpg";
import griha10 from "@/assets/competitions/griha-nirmaan/10.jpg";

// Competition 2: GDA Competition
import gda0 from "@/assets/competitions/gda-competition/0.jpg";
import gda1 from "@/assets/competitions/gda-competition/1.png";
import gda2 from "@/assets/competitions/gda-competition/2.png";
import gda3 from "@/assets/competitions/gda-competition/3.png";
import gda4 from "@/assets/competitions/gda-competition/4.png";
import gda5 from "@/assets/competitions/gda-competition/5.png";
import gda7 from "@/assets/competitions/gda-competition/7.jpg";
import gda8 from "@/assets/competitions/gda-competition/8.jpg";
import gda9 from "@/assets/competitions/gda-competition/9.jpg";
import gda10 from "@/assets/competitions/gda-competition/10.jpg";

// Competition 3: LIGHTS CAMERA ACTION
import lca0 from "@/assets/competitions/lights-camera-action/0.jpeg";
import lca1 from "@/assets/competitions/lights-camera-action/1.png";
import lca2 from "@/assets/competitions/lights-camera-action/2.png";
import lca3 from "@/assets/competitions/lights-camera-action/3.png";
import lca4 from "@/assets/competitions/lights-camera-action/4.png";
import lca5 from "@/assets/competitions/lights-camera-action/5.png";
import lca6 from "@/assets/competitions/lights-camera-action/6.png";
import lca7 from "@/assets/competitions/lights-camera-action/7.jpg";
import lca8 from "@/assets/competitions/lights-camera-action/8.jpg";

// Competition 4: OASIS IIA
import oasis0 from "@/assets/competitions/oasis-iia/0.jpg";
import oasis1 from "@/assets/competitions/oasis-iia/1.png";
import oasis2 from "@/assets/competitions/oasis-iia/2.png";
import oasis3 from "@/assets/competitions/oasis-iia/3.png";
import oasis5 from "@/assets/competitions/oasis-iia/5.png";
import oasis7 from "@/assets/competitions/oasis-iia/7.png";
import oasis9 from "@/assets/competitions/oasis-iia/9.png";
import oasis10 from "@/assets/competitions/oasis-iia/10.png";
import oasis11 from "@/assets/competitions/oasis-iia/11.png";
import oasis12 from "@/assets/competitions/oasis-iia/12.png";

export interface CompetitionImage {
  src: string;
  alt: string;
}

export interface CompetitionBasicInfo {
  year: string;
  location: string;
  type: string;
  status: string;
  photographers: string;
}

export interface Competition {
  id: string;
  title: string; // NAME 01 from docx - used on homepage
  secondaryName: string; // NAME 02 from docx - used on competition detail page
  basicInfo: CompetitionBasicInfo;
  description: string[];
  conclusion?: string;
  images: CompetitionImage[];
}

export const competitions: Competition[] = [
  {
    id: "griha-nirmaan",
    title: "NIRMAAN", // NAME 01 for homepage
    secondaryName: "The Breathing Office", // NAME 02 for competition detail page
    basicInfo: {
      year: "2025",
      location: "NA",
      type: "Competition",
      status: "NA",
      photographers: "NA"
    },
    description: [
      "Located within a warm and humid climatic context, NIRMAAN is conceived as a building that works with climate rather than against it. The design prioritises passive strategies, landscape integration, and material intelligence to create comfortable, naturally ventilated workspaces with minimal reliance on mechanical systems.",
      "A reduced built-to-ground ratio allows the landscape to take precedence, enabling the creation of a dense Miyawaki forest within the site. This green mass extends into and over the building, forming a self-sustaining microclimate that cools the surroundings and enhances thermal comfort. The built form is carefully positioned, with service blocks along the western edge acting as a thermal buffer against the harsh afternoon sun. All workspace bays are oriented along the north–south axis, maximising soft daylight while promoting effective cross-ventilation throughout the day.",
      "At the heart of the building, courtyards function as its lungs—inhaling and exhaling air while anchoring social interaction. These spaces draw from local cultural traditions, offering shaded, communal environments that balance work and pause. Above, staggered terraces transform the roofscape into layered green zones, while deep overhangs below provide shade and reduce heat gain. Automated louvers respond to user needs, regulating daylight and glare while maintaining visual comfort.",
      "The roof system further strengthens the passive strategy. Jack-arch roofs with ventilated cavities allow hot air to escape naturally, enhancing stack ventilation and reducing dependence on artificial cooling. Material choices reinforce this approach. Earth walls increase thermal mass, moderating indoor temperatures while grounding the building in its context. The use of local, eco-friendly materials reduces embodied energy and strengthens the project's relationship with place.",
      "Nature is not treated as an addition but as an integral layer of the architecture. The raised built form enables both horizontal and vertical continuity of green spaces, allowing landscape to flow seamlessly through courtyards, terraces, and workspaces. This continuous interface between indoors and outdoors improves air quality, visual comfort, and the overall microclimate experienced within the building."
    ],
    conclusion: "Performance studies—focusing on daylight, ventilation, and thermal comfort—validate the effectiveness of the design. The results demonstrate that carefully orchestrated passive strategies can deliver energy-efficient, healthy, and well-lit work environments, reaffirming the potential of climate-responsive architecture as a sustainable and humane approach to building design.",
    images: [
      { src: griha0, alt: "NIRMAAN - Overall concept view" },
      { src: griha1, alt: "NIRMAAN - Building massing diagram" },
      { src: griha2, alt: "NIRMAAN - Landscape integration" },
      { src: griha3, alt: "NIRMAAN - Courtyard design" },
      { src: griha4, alt: "NIRMAAN - Passive cooling strategy" },
      { src: griha5, alt: "NIRMAAN - Material palette" },
      { src: griha6, alt: "NIRMAAN - Ventilation diagram" },
      { src: griha7, alt: "NIRMAAN - Roof system detail" },
      { src: griha8, alt: "NIRMAAN - Interior workspace" },
      { src: griha9, alt: "NIRMAAN - Green terrace design" },
      { src: griha10, alt: "NIRMAAN - Miyawaki forest integration" },
    ],
  },
  {
    id: "gda-competition",
    title: "GDA & COA competition", // NAME 01 for homepage
    secondaryName: "The Public Plinth", // NAME 02 for competition detail page
    basicInfo: {
      year: "2025",
      location: "Ghaziabad, Uttar Pradesh",
      type: "Competition",
      status: "NA",
      photographers: "NA"
    },
    description: [
      "The project is conceived as a civic environment rather than a singular building—an open, participative space shaped by the cultural traditions and everyday public life of northern India. It draws from familiar patterns of gathering, movement, and pause, translating them into a contemporary architectural form that encourages interaction, inclusivity, and collective identity.",
      "Stepped plinths, courtyards, and open gathering zones structure the spatial experience, allowing spaces to be occupied informally for pause, dialogue, and performance. The organisation of movement is inspired by the density and flow of traditional public streets, creating an intuitive sequence of spaces that remain accessible and engaging at multiple scales.",
      "The built form is expressed as a monolithic volume, carved to introduce light, air, and permeability. A central vertical void acts as both a light well and wind catcher, strengthening passive ventilation while forming a civic core. Circulation elements double as social edges, blurring the boundary between interior and exterior. At the heart of the project, a community square functions as a public threshold, supporting everyday use and larger collective events.",
      "Designed for extreme climatic conditions and resource efficiency, the building relies primarily on passive strategies. North–south orientation ensures optimal daylight with reduced heat gain. Cross ventilation is achieved across all major spaces, supported by stack ventilation through vertical voids and internal courtyards that assist in cooling. Deep overhangs and shaded transitional zones protect interiors from harsh climatic exposure, reducing dependence on mechanical systems.",
      "Landscape is integral to the project's environmental performance. Indigenous planting, rainwater harvesting, and reuse of treated grey water significantly reduce water demand while enhancing the microclimate. The massing is zoned to allow different functions to respond independently to climate, ensuring comfort even during peak summer conditions.",
      "Material choices are local, durable, and climate-responsive. Red sandstone provides thermal stability while anchoring the architecture in regional material traditions. Jali screens offer shading and filtered daylight while maintaining airflow and visual connection. Solar energy systems further reduce operational energy demand.",
      "Efficient space planning, compact circulation, and multifunctional areas ensure optimal utilisation of built space. Construction strategies prioritise locally available materials, labour, and cost-effective systems, making the project suitable for beneficiary-led execution and long-term durability."
    ],
    conclusion: "Overall, the project offers a sustainable civic space rooted in climate, culture, and collective life—where architecture emerges from context rather than imposition.",
    images: [
      { src: gda0, alt: "Public Plinth - Civic space concept" },
      { src: gda1, alt: "Public Plinth - Monolithic volume" },
      { src: gda2, alt: "Public Plinth - Stepped plinths design" },
      { src: gda3, alt: "Public Plinth - Central void light well" },
      { src: gda4, alt: "Public Plinth - Community square" },
      { src: gda5, alt: "Public Plinth - Climate responsive design" },
      { src: gda7, alt: "Public Plinth - Material expression" },
      { src: gda8, alt: "Public Plinth - Jali screen details" },
      { src: gda9, alt: "Public Plinth - Passive cooling systems" },
      { src: gda10, alt: "Public Plinth - Red sandstone facade" },
    ],
  },
  {
    id: "lights-camera-action",
    title: "LIGHT CAMERA ACTION", // NAME 01 for homepage
    secondaryName: "A Home in Motion", // NAME 02 for competition detail page
    basicInfo: {
      year: "2024",
      location: "Mumbai",
      type: "Competition",
      status: "NA",
      photographers: "NA"
    },
    description: [
      "This residence is conceived as a spatial reflection of an actor's life—fluid, layered, and constantly shifting between intensity and stillness. The design embraces duality, allowing spaces to move seamlessly between high-energy environments of creation and quiet sanctuaries of retreat. Like the actor's craft, the home is shaped by moments of action, pause, and transformation.",
      "The plan is organised into two primary zones. A vibrant public lounge, oriented towards expansive sea views, becomes a space of expression and possibility—open, dynamic, and outward-looking. In contrast, the private bedroom, equally connected to the sea, is conceived as a calm refuge, defined by a restrained palette and a monolithic presence. Between these two worlds lies a flexible transition zone adjacent to the kitchen—an adaptable space that negotiates between public and private, city and sea, activity and rest.",
      "This transition is not abrupt but choreographed. Sliding panels dissolve boundaries, allowing spaces to expand, contract, and overlap. When open, the home reads as a continuous sequence of views and experiences; when closed, each zone retains its own identity. Defined visual axes extend through every space, maintaining an uninterrupted dialogue with the surrounding environment.",
      "Materiality plays a crucial role in expressing the dual moods of the house. Materials chosen for their ageing qualities and breathability reflect the actor's evolving journey and continuous growth. The lounge is energetic and expressive—metals introduce movement and tension, softened by white marble flooring and oxide-finished ceilings and walls. Pop furniture bridges the lounge and the transition zone, culminating in a vivid red portal that marks the passage from public life to private introspection.",
      "Beyond this threshold, the bedroom shifts in tone. Solid, composed, and inward-looking, it becomes a sanctuary—offering stillness after motion.",
      "Central to the design narrative are the panels, both functional and symbolic. Strategically placed, they establish strong visual axes—linking the sea, the bedroom, and the inner spaces—ensuring connectivity across the home. Crafted from two complementary materials, burnished brass and moulded concrete, the panels narrate a story of journey and transformation.",
      "Brass, with its reflective and ageing qualities, embodies the actor's dynamic public life—physical, expressive, and constantly evolving. Concrete, adaptable and textural, represents the process of learning and transformation, its varied finishes echoing the diversity of characters portrayed. Grooves carved into the surface suggest fluidity and movement, reinforcing the idea of versatility.",
      "An imaginary line divides the panels, marking a progression in time. Toward the entry, the design remains softer and more fluid, symbolising early exploration and emerging craft. As it moves inward, the composition becomes structured and grounded—reflecting experience, maturity, and a solid foundation. At the core, the innermost groove acts as a mirror, quietly reflecting the actor's inner self and personal evolution."
    ],
    conclusion: "Together, space, material, and movement come together to create a home that is not static, but alive—a lived narrative that mirrors the rhythm, depth, and transformation of an actor's life.",
    images: [
      { src: lca0, alt: "Home in Motion - Actor's residence concept" },
      { src: lca1, alt: "Home in Motion - Sea view lounge" },
      { src: lca2, alt: "Home in Motion - Sliding panel system" },
      { src: lca3, alt: "Home in Motion - Material composition" },
      { src: lca4, alt: "Home in Motion - Private bedroom sanctuary" },
      { src: lca5, alt: "Home in Motion - Transition zone design" },
      { src: lca6, alt: "Home in Motion - Visual axes through space" },
      { src: lca7, alt: "Home in Motion - Brass and concrete panels" },
      { src: lca8, alt: "Home in Motion - Interior material palette" },
    ],
  },
  {
    id: "oasis-iia",
    title: "OASIS", // NAME 01 for homepage
    secondaryName: "Interpreting Hope into Design", // NAME 02 for competition detail page
    basicInfo: {
      year: "2023",
      location: "Kozhikode, Kerala",
      type: "Competition",
      status: "NA",
      photographers: "NA"
    },
    description: [
      "Hope forms the underlying framework of the project—quiet yet persistent, shaping space, movement, and experience. Rather than being expressed as a singular gesture, hope is interpreted through a constellation of elements: light, path, nature, and horizon. Together, they guide the user through a spatial journey that moves from introspection to openness.",
      "Light becomes an instrument of clarity and direction, gently illuminating movement and moments of pause. Paths are conceived as narratives of progress, guiding users forward—physically and metaphorically—towards collective and individual futures. Nature is woven into the experience as a reminder of resilience and renewal, offering moments of calm, grounding, and continuity. The horizon remains ever-present, framing distant views and symbolising boundless possibility.",
      "At the heart of the design lies a carefully developed axis, functioning as the project's primary spatial and social spine. Defined by the placement of pavilions and recreational spaces, this axis draws people inward, guiding movement while encouraging interaction. Secondary axes emerge organically from existing buildings, intersecting the primary path to form natural points of convergence. These intersections evolve into vibrant social nodes—places of pause, exchange, and shared experience. Strategically placed blocks activate the axis, introducing varied functions that animate the space throughout the day and foster a sense of community.",
      "The project responds sensitively to its terrain. All built blocks are aligned along existing contours, significantly reducing cut and fill and allowing the architecture to settle gently into the landscape. This approach preserves the site's natural character while enhancing visual continuity between built and unbuilt realms.",
      "Materiality is restrained yet expressive, drawn from elements that age with dignity and purpose. Exposed concrete and brick reflect strength, permanence, and endurance, while ferrocement—used extensively for pavilion roofs—offers a cost-effective and versatile solution that balances structural efficiency with sculptural expression. Together, the materials speak of resilience, honesty, and time.",
      "Anchoring the axis are three pavilions—the Entry, Community, and Spiritual Pavilions—each conceived as a quiet beacon of hope. The Entry Pavilion unfolds like an amphitheatre, welcoming and gathering. The Community Pavilion fosters interaction and collective engagement, while the Spiritual Pavilion offers an intimate space for reflection and inward pause. Unified by a single source of light opening toward the sky, these structures establish a symbolic connection to the larger universe—inviting contemplation, renewal, and a sense of belonging."
    ],
    conclusion: "Through minimal intervention and thoughtful orchestration of space, the project translates hope into architecture—not as an object, but as an experience, unfolding through movement, light, landscape, and time.",
    images: [
      { src: oasis0, alt: "OASIS - Hope interpreted in design" },
      { src: oasis1, alt: "OASIS - Primary axis and pavilions" },
      { src: oasis2, alt: "OASIS - Entry pavilion amphitheatre" },
      { src: oasis3, alt: "OASIS - Community gathering spaces" },
      { src: oasis5, alt: "OASIS - Spiritual pavilion design" },
      { src: oasis7, alt: "OASIS - Natural light integration" },
      { src: oasis9, alt: "OASIS - Landscape contour alignment" },
      { src: oasis10, alt: "OASIS - Material expression" },
      { src: oasis11, alt: "OASIS - Social node intersections" },
      { src: oasis12, alt: "OASIS - Overall site plan" },
    ],
  },
];

export const getCompetitionById = (id: string): Competition | undefined => {
  return competitions.find((competition) => competition.id === id);
};