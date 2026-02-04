import { useEffect, useRef, useState } from 'react';
import artGuardianImg from '../assets/artguardian.png';
import embryoAiImg from '../assets/embryoai.png';

import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'ArtGuardian – Blockchain Art Authentication',
    description:
      'Developed a blockchain-powered platform to ensure transparency and authenticity in art transactions. Implemented smart contracts for secure, tamper-proof agreements between artists, collectors, and galleries. Enabled art provenance tracking through decentralized ledgers.',
    tech: ['Blockchain', 'Smart Contracts', 'React.js', 'Node.js'],
    github: 'https://github.com/ayushss17/ArtGuardian.git',
    image: artGuardianImg,
    featured: true,
  },
  {
    title: 'EmbryoAI – AI-Powered Embryo Assessment',
    description:
      'Developed an AI-based embryo classification platform to predict stage and quality using machine learning. Implemented a ResNet50 dual-output model integrated with an ETL pipeline. Built an interactive Streamlit interface for image upload and explainable AI visualization.',
    tech: ['Python', 'TensorFlow', 'ResNet50', 'Streamlit'],
    github: 'https://github.com',
    image : embryoAiImg,
    featured: true,
  },

];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 flex items-center gap-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
          >
            <span className="text-primary font-mono text-xl">02.</span>
            Featured Projects
            <span className="hidden sm:block h-px bg-border flex-1 max-w-xs" />
          </h2>

          {/* Featured Projects */}
          <div className="space-y-24 mb-16">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={project.title}
                  className={`relative grid md:grid-cols-12 gap-4 items-center ${isVisible ? 'animate-fade-up' : 'opacity-0'
                    }`}
                  style={{ animationDelay: `${200 + index * 150}ms` }}
                >
                  {/* Project Image */}
                  <div
                    className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''
                      }`}
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-primary/20 rounded-lg group-hover:bg-transparent transition-all duration-300" />
                      <div className="aspect-video rounded-lg overflow-hidden bg-card border border-border">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />

                        <div className="aspect-video rounded-lg overflow-hidden bg-card border border-border">
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover hover:scale-105 transition"
                            />
                          ) : (
                            <Folder className="w-16 h-16 text-primary/40" />
                          )}
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div
                    className={`md:col-span-5 ${index % 2 === 1
                      ? 'md:order-1 md:text-left'
                      : 'md:text-right'
                      }`}
                  >
                    <p className="text-primary font-mono text-sm mb-2">
                      Featured Project
                    </p>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <div
                      className={`bg-card p-6 rounded-lg shadow-lg mb-4 ${index % 2 === 1 ? 'md:-mr-12' : 'md:-ml-12'
                        } relative z-10`}
                    >
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div
                      className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? 'justify-start' : 'md:justify-end'
                        }`}
                    >
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-muted-foreground font-mono text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div
                      className={`flex gap-4 ${index % 2 === 1 ? 'justify-start' : 'md:justify-end'
                        }`}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Projects */}
          <div
            className={`text-center ${isVisible ? 'animate-fade-up animation-delay-600' : 'opacity-0'
              }`}
          >

            <div className="grid sm:grid-cols-2 gap-4">
              {projects
                .filter((p) => !p.featured)
                .map((project) => (
                  <div
                    key={project.title}
                    className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 text-left"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <Folder className="text-primary" size={40} />
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                    <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-muted-foreground font-mono text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
