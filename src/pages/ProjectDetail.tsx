import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { getProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 px-4 text-center">
          <h1 className="text-2xl font-light mb-4">Project not found</h1>
          <Link to="/#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 sm:pt-24">
        {/* Back Link */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full aspect-[16/9] overflow-hidden bg-muted">
            <img
              src={project.images[0].src}
              alt={project.images[0].alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Project Content */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="space-y-16">
            {/* Title & Subtitle */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
                {project.title}
              </h1>
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
                  className="aspect-[4/3] overflow-hidden bg-muted group"
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
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
