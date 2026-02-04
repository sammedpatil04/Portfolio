import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['C++', 'JavaScript', 'Python', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Node.js', 'React.js', 'Pandas', 'NumPy'],
  },
  {
    title: 'Databases & Cloud',
    skills: ['MySQL', 'AWS S3', 'AWS EC2'],
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
  },
  {
    title: 'Core Concepts',
    skills: ['OOPs', 'DBMS', 'Data Structures', 'Algorithms'],
  },
];

const Skills = () => {
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
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 flex items-center gap-4 ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            <span className="text-primary font-mono text-xl">03.</span>
            Skills & Expertise
            <span className="hidden sm:block h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-card p-6 rounded-lg border border-border hover:border-primary/30 transition-colors ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${200 + categoryIndex * 100}ms` }}
              >
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-md border border-border hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div
            className={`mt-12 ${
              isVisible ? 'animate-fade-up animation-delay-600' : 'opacity-0'
            }`}
          >
            <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
              Achievements
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card p-5 rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Technocrat 2022 Winner</h4>
                    <p className="text-muted-foreground text-sm">
                      National level hackathon at Sharad Institute of Technology
                    </p>
                  </div>
                </div>
              </div>


              {/* Achievement 3 (NEW) */}
    <div className="bg-card p-5 rounded-lg border border-border">
      <div className="flex items-start gap-3">
        <span className="text-2xl">🏅</span>
        <div>
          <h4 className="font-semibold text-foreground">
            Dipex 2023 Finalist
          </h4>
          <p className="text-muted-foreground text-sm">
            National level project competition held at Terna College of Engineering, Nerul, Mumbai
          </p>
        </div>
      </div>
    </div>

              <div className="bg-card p-5 rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h4 className="font-semibold text-foreground">PCU Ideathon 2024 Finalist</h4>
                    <p className="text-muted-foreground text-sm">
                      Qualified for finals among 400+ teams
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
