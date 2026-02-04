import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up">
            Hi, my name is
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-4 animate-fade-up animation-delay-200">
            Sammed Patil
          </h1>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-semibold text-muted-foreground mb-6 animate-fade-up animation-delay-400">
            <span className="text-gradient">Full-Stack Developer</span>
          </h2>
          
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-600">
            Computer Science student specializing in full-stack development with 
            deep interest in cloud architecture and database optimization. 
            Building scalable applications with React, Node.js, and AWS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up animation-delay-600">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow transition-all duration-300 px-8"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 px-8"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-up animation-delay-600">
            <a
              href="https://github.com/sammedpatil04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sammed-patil-107a8226a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sammedpatil912@gmail.com"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
