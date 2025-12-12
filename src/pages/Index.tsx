import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import GothicBook from "@/components/GothicBook";
import FloatingPetals from "@/components/FloatingPetals";

const projects = [
  {
    title: "DevLinks",
    description: "Página agregadora de links pessoais com design moderno e responsivo.",
    techs: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    link: "https://github.com/yas-rocha/devlink",
  },
  {
    title: "CadCliente",
    description: "Sistema de cadastro de clientes com interface intuitiva e funcional.",
    techs: ["JavaScript", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "https://github.com/yas-rocha/CadCliente",
  },
  {
    title: "Code In The Dark",
    description: "Projeto de codificação competitiva desenvolvido durante evento.",
    techs: ["HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
    link: "https://github.com/yas-rocha/code-in-the-dark",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none texture-paper z-50" />
      
      {/* Floating petals animation */}
      <FloatingPetals />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="font-display text-xl text-cream tracking-wide">Portfolio</span>
            <div className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="link-vintage text-sm uppercase tracking-widest text-muted-foreground hover:text-cream transition-colors">Início</a>
              <a href="#projetos" className="link-vintage text-sm uppercase tracking-widest text-muted-foreground hover:text-cream transition-colors">Projetos</a>
              <a href="#sobre" className="link-vintage text-sm uppercase tracking-widest text-muted-foreground hover:text-cream transition-colors">Sobre</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-vintage" />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="text-center md:text-left">
              <div className="animate-fade-up">
                <span className="text-wine-light text-sm uppercase tracking-[0.3em] font-body">Bem-vindo ao meu portfólio</span>
              </div>
              
              <h1 className="animate-fade-up animate-delay-100 mt-6 text-5xl md:text-7xl font-display font-bold text-cream leading-tight">
                Yasmin<br />
                <span className="text-wine-light">Rocha</span>
              </h1>
              
              <p className="animate-fade-up animate-delay-200 mt-4 text-2xl md:text-3xl font-display italic text-cream-dark">
                Desenvolvedora Web Júnior
              </p>
              
              <p className="animate-fade-up animate-delay-300 mt-6 text-lg text-muted-foreground font-body max-w-md mx-auto md:mx-0">
                Aprendendo, criando e evoluindo todos os dias.
              </p>
              
              <div className="animate-fade-up animate-delay-400 mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                <Button variant="vintage" size="lg" asChild>
                  <a href="#projetos">Ver Projetos</a>
                </Button>
              </div>
            </div>
            
            {/* Gothic Book Illustration */}
            <div className="animate-fade-up animate-delay-300 flex justify-center md:justify-end">
              <GothicBook />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse-glow">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-wine-light to-transparent" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-cream">
              Projetos
            </h2>
            <div className="mt-6 divider-ornate max-w-md mx-auto text-wine-light">✦</div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article 
                key={index}
                className="group relative bg-card border border-border overflow-hidden hover:border-wine transition-all duration-500"
              >
                {/* Project image */}
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl text-cream group-hover:text-wine-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground font-body text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techs.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs uppercase tracking-wider text-silver-muted border border-silver-muted/30 px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Link */}
                  <div className="mt-6">
                    <Button variant="vintage" size="sm" asChild className="w-full">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto →</a>
                    </Button>
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-wine opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-wine opacity-0 group-hover:opacity-100 transition-opacity" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 relative bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-cream">
                Sobre Mim
              </h2>
              <div className="mt-6 divider-ornate max-w-md mx-auto text-wine-light">✦</div>
            </div>
            
            <div className="bg-card border border-border p-8 md:p-12 relative">
              {/* Decorative corners */}
              <div className="absolute -top-px -left-px w-12 h-12 border-t-2 border-l-2 border-wine" />
              <div className="absolute -top-px -right-px w-12 h-12 border-t-2 border-r-2 border-wine" />
              <div className="absolute -bottom-px -left-px w-12 h-12 border-b-2 border-l-2 border-wine" />
              <div className="absolute -bottom-px -right-px w-12 h-12 border-b-2 border-r-2 border-wine" />
              
              <div className="space-y-6 text-lg font-body text-cream-dark leading-relaxed">
                <p>
                  Olá! Sou a Yasmin — desenvolvedora web júnior e vestibulanda de Letras. A programação começou como um hobby e, sem eu perceber, virou uma paixão.
                </p>
                <p>
                  Entrei nesse mundo por pura curiosidade e acabei me encantando com a ideia de transformar pensamentos em algo real através do código. O que mais me prende é justamente essa mistura de lógica com criatividade.
                </p>
                <p>
                  Estou sempre estudando, explorando novas tecnologias e buscando evoluir um pouco mais a cada projeto.
                </p>
              </div>
              
              {/* Skills */}
              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="font-display text-xl text-cream mb-6">Tecnologias que estudo</h3>
                <div className="flex flex-wrap gap-3">
                  {["HTML", "CSS", "JavaScript", "Node.js", "React"].map((skill) => (
                    <span 
                      key={skill}
                      className="text-sm uppercase tracking-wider text-wine-light border border-wine px-4 py-2 hover:bg-wine hover:text-cream transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-cream">
              Contato
            </h2>
            <div className="mt-6 divider-ornate max-w-md mx-auto text-wine-light">✦</div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-lg font-body text-cream-dark">
                Me encontre nas redes
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex items-center justify-center gap-6">
              <a 
                href="https://github.com/yas-rocha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 border border-border flex items-center justify-center text-muted-foreground hover:border-wine hover:text-wine-light transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/yasmin-rocha-06a96930a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 border border-border flex items-center justify-center text-muted-foreground hover:border-wine hover:text-wine-light transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-body">
              © 2025 Yasmin Rocha
            </p>
            <div className="flex items-center gap-2 text-wine-light">
              <span className="text-sm">✦</span>
              <span className="font-display text-sm italic">Feito com amor e código</span>
              <span className="text-sm">✦</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
