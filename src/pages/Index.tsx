import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import floralOrnament from "@/assets/floral-ornament.png";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Dashboard Analytics",
    description: "Painel administrativo com gráficos interativos e métricas em tempo real.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    image: project1,
    link: "#",
  },
  {
    title: "E-commerce Store",
    description: "Loja virtual completa com carrinho de compras e sistema de pagamentos.",
    techs: ["Next.js", "Stripe", "Node.js", "MongoDB"],
    image: project2,
    link: "#",
  },
  {
    title: "Landing Page",
    description: "Página de apresentação elegante com animações e design responsivo.",
    techs: ["React", "Framer Motion", "Tailwind CSS"],
    image: project3,
    link: "#",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none texture-paper z-50" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="font-display text-xl text-cream tracking-wide">Portfolio</span>
            <div className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="link-vintage text-sm uppercase tracking-widest text-muted-foreground hover:text-cream transition-colors">Início</a>
              <a href="#projetos" className="link-vintage text-sm uppercase tracking-widest text-muted-foreground hover:text-cream transition-colors">Projetos</a>
              <a href="#sobre" className="link-vintage text-sm uppercase tracking-widest text-muted-foreground hover:text-cream transition-colors">Sobre</a>
              <a href="#contato" className="link-vintage text-sm uppercase tracking-widest text-muted-foreground hover:text-cream transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-vintage" />
        
        {/* Floral ornaments */}
        <img 
          src={floralOrnament} 
          alt="" 
          className="absolute top-10 right-10 w-32 md:w-48 opacity-30 animate-float"
        />
        <img 
          src={floralOrnament} 
          alt="" 
          className="absolute bottom-10 left-10 w-32 md:w-48 opacity-30 rotate-180 animate-float"
          style={{ animationDelay: '3s' }}
        />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="text-center md:text-left">
              <div className="animate-fade-up">
                <span className="text-wine-light text-sm uppercase tracking-[0.3em] font-body">Bem-vindo ao meu portfólio</span>
              </div>
              
              <h1 className="animate-fade-up animate-delay-100 mt-6 text-5xl md:text-7xl font-display font-bold text-cream leading-tight">
                Seu Nome<br />
                <span className="text-wine-light">Aqui</span>
              </h1>
              
              <p className="animate-fade-up animate-delay-200 mt-4 text-2xl md:text-3xl font-display italic text-cream-dark">
                Desenvolvedora Web Júnior
              </p>
              
              <p className="animate-fade-up animate-delay-300 mt-6 text-lg text-muted-foreground font-body max-w-md mx-auto md:mx-0">
                "Aprendendo, criando e evoluindo todos os dias."
              </p>
              
              <div className="animate-fade-up animate-delay-400 mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                <Button variant="vintage" size="lg" asChild>
                  <a href="#projetos">Ver Projetos</a>
                </Button>
                <Button variant="gold" size="lg" asChild>
                  <a href="#contato">Entre em Contato</a>
                </Button>
              </div>
            </div>
            
            {/* Profile photo */}
            <div className="animate-fade-up animate-delay-300 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-wine to-wine-dark opacity-50 blur-2xl" />
                <div className="relative border-2 border-wine p-2">
                  <img 
                    src={profilePhoto} 
                    alt="Foto de perfil" 
                    className="w-64 md:w-80 h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    style={{ filter: 'grayscale(30%) sepia(20%)' }}
                  />
                </div>
                {/* Decorative corner elements */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-gold" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-gold" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-gold" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-gold" />
              </div>
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
            <span className="text-wine-light text-sm uppercase tracking-[0.3em] font-body">Meu trabalho</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-cream">
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
                        className="text-xs uppercase tracking-wider text-gold-muted border border-gold-muted/30 px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Link */}
                  <div className="mt-6">
                    <Button variant="vintage" size="sm" asChild className="w-full">
                      <a href={project.link}>Ver Projeto →</a>
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
              <span className="text-wine-light text-sm uppercase tracking-[0.3em] font-body">Quem sou eu</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-cream">
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
                  Olá! Sou uma desenvolvedora web júnior apaixonada por criar experiências digitais 
                  bonitas e funcionais. Atualmente estou estudando desenvolvimento web e me aprofundando 
                  em tecnologias como React, TypeScript e Node.js.
                </p>
                <p>
                  Comecei a programar por curiosidade e acabei me apaixonando pela possibilidade de 
                  transformar ideias em realidade através do código. O que mais me fascina é a 
                  combinação entre lógica e criatividade que a programação oferece.
                </p>
                <p>
                  Gosto especialmente de desenvolver interfaces de usuário elegantes, sites responsivos 
                  e aplicações web que proporcionem uma boa experiência ao usuário. Estou sempre em 
                  busca de aprender novas tecnologias e melhorar minhas habilidades.
                </p>
              </div>
              
              {/* Skills */}
              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="font-display text-xl text-cream mb-6">Tecnologias que estudo</h3>
                <div className="flex flex-wrap gap-3">
                  {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Node.js", "Git"].map((skill) => (
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
            <span className="text-wine-light text-sm uppercase tracking-[0.3em] font-body">Vamos conversar</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-cream">
              Contato
            </h2>
            <div className="mt-6 divider-ornate max-w-md mx-auto text-wine-light">✦</div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg font-body text-cream-dark">
                Interessado em trabalhar juntos ou tem alguma pergunta?<br />
                Ficarei feliz em conversar!
              </p>
            </div>
            
            {/* Email */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <Mail className="w-5 h-5 text-wine-light" />
              <a 
                href="mailto:seuemail@exemplo.com" 
                className="text-xl font-body text-cream hover:text-wine-light transition-colors"
              >
                seuemail@exemplo.com
              </a>
            </div>
            
            {/* Social links */}
            <div className="flex items-center justify-center gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:border-wine hover:text-wine-light transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:border-wine hover:text-wine-light transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:border-wine hover:text-wine-light transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            {/* Contact form placeholder */}
            <div className="mt-16 bg-card border border-border p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-4">
                <span className="text-sm uppercase tracking-widest text-wine-light">Enviar Mensagem</span>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border border-border px-4 py-3 text-cream font-body focus:border-wine focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border border-border px-4 py-3 text-cream font-body focus:border-wine focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border border-border px-4 py-3 text-cream font-body focus:border-wine focus:outline-none transition-colors resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>
                <Button variant="vintage" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Floral ornament */}
        <img 
          src={floralOrnament} 
          alt="" 
          className="absolute bottom-0 right-0 w-40 opacity-20 translate-x-1/4 translate-y-1/4"
        />
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-body">
              © 2024 Seu Nome. Todos os direitos reservados.
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
