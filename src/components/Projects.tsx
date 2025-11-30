import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-16 tracking-tight">
          Projects
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group block"
            >
              {/* Thumbnail */}
              <div className="aspect-[16/10] overflow-hidden bg-muted mb-4">
                <img
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-light tracking-wide transition-opacity duration-300 group-hover:opacity-70">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
