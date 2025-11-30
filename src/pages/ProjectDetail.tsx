import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { getProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : undefined;

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 px-4 text-center">
          <h1 className="text-2xl font-light mb-4">Project not found</h1>
          <Link
            to="/#projects"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
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
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-light italic">
            {project.subtitle}
          </p>
        </div>

        {/* Vertical Image Scroll */}
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="w-full overflow-hidden bg-muted animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain"
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
            {project.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground font-light leading-relaxed italic">
              {project.conclusion}
            </p>
          </div>
        </div>

        {/* Back to Projects */}
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
