import { useEffect, useRef, useState } from 'react';

const techStack = [
  { name: 'React.js', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Git', icon: '📦' },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 flex items-center gap-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
          >
            <span className="text-primary font-mono text-xl">01.</span>
            About Me
            <span className="hidden sm:block h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Text Content */}
            <div
              className={`md:col-span-3 space-y-4 ${isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'
                }`}
            >
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm a motivated Computer Science student specializing in
                full-stack development with deep interest in cloud architecture
                and database optimization. I excel at breaking down complex problems
                and streamlining team collaboration to accelerate project delivery.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my{' '}
                <span className="text-primary">Bachelor's in Computer Science and Engineering (Data Science)</span>{' '}
                at Vishwakarma Institute of Information Technology, Pune with a CGPA of 8.69.
                Previously completed my Diploma in Computer Engineering with 87.89%.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I completed comprehensive full-stack development training at{' '}
                <span className="text-primary">ITnium Sangli</span>, gaining hands-on
                experience with React.js, Node.js, and cloud services. I'm passionate
                about building scalable applications and exploring AI/ML technologies.
              </p>

              {/* Tech Stack */}
              <div className="pt-6">
                <p className="text-foreground font-medium mb-4">
                  Technologies I work with:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {techStack.map((tech, index) => (
                    <div
                      key={tech.name}
                      className={`flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors ${isVisible ? 'animate-fade-up' : 'opacity-0'
                        }`}
                      style={{ animationDelay: `${400 + index * 100}ms` }}
                    >
                      <span className="text-xl">{tech.icon}</span>
                      <span className="text-sm font-mono">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div
              className={`md:col-span-2 ${isVisible ? 'animate-fade-up animation-delay-400' : 'opacity-0'
                }`}
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-primary/20 rounded-lg blur-lg group-hover:bg-primary/30 transition-all duration-300" />
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-colors duration-300">
                    <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-colors duration-300">
                      <img
                        src="/profile.jpeg"
                        alt="Sammed Patil"
                        className="w-full h-full object-cover"
                      />
                    </div>

                  </div>
                  <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
