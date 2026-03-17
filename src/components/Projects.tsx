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
              id={`project-tile-${project.id}`}
              to={`/project/${project.id}`}
              className="group block"
            >
              {/* Thumbnail */}
              <div className="aspect-[4/3] overflow-hidden bg-muted mb-4 relative">
                {/* First Image (Default) */}
                <img
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  className="w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-0 absolute inset-0"
                  loading="lazy"
                />
                {/* Second Image (Hover) - Only show if second image exists */}
                {project.images[1] && (
                  <img
                    src={project.images[1].src}
                    alt={project.images[1].alt}
                    className="w-full h-full object-cover object-center transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-105 absolute inset-0"
                    loading="lazy"
                  />
                )}
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
