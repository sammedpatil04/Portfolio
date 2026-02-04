import { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className={`text-primary font-mono text-sm mb-4 ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            04. What's Next?
          </p>

          <h2
            className={`text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 ${
              isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'
            }`}
          >
            Get In Touch
          </h2>

          <p
            className={`text-muted-foreground mb-12 max-w-lg mx-auto ${
              isVisible ? 'animate-fade-up animation-delay-400' : 'opacity-0'
            }`}
          >
            I'm currently seeking challenging roles where technical versatility 
            meets collective innovation. Whether you have a question, want to 
            collaborate, or just want to say hi—my inbox is always open!
          </p>

          {/* Contact Info */}
          <div
            className={`flex flex-wrap items-center justify-center gap-6 mb-12 ${
              isVisible ? 'animate-fade-up animation-delay-400' : 'opacity-0'
            }`}
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span className="text-sm">Pune, India</span>
            </div>
            <a
              href="tel:+917451021008"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={18} className="text-primary" />
              <span className="text-sm">+91 7451021008</span>
            </a>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`mb-12 space-y-4 text-left ${
              isVisible ? 'animate-fade-up animation-delay-600' : 'opacity-0'
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div>
              <Input
                type="text"
                placeholder="Subject"
                required
                className="bg-card border-border focus:border-primary transition-colors"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                required
                className="bg-card border-border focus:border-primary transition-colors resize-none"
              />
            </div>
            <div className="text-center pt-4">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-10"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2" size={18} />
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Social Links */}
          <div
            className={`flex items-center justify-center gap-8 ${
              isVisible ? 'animate-fade-up animation-delay-600' : 'opacity-0'
            }`}
          >
            <a
              href="mailto:sammedpatil912@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sammed-patil-107a8226a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/sammedpatil04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
