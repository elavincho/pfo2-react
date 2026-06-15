import { useState, useEffect } from "react";
import logoPath from "@assets/logo_1781559932086.ico";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, BarChart3, Globe, HeadphonesIcon, Linkedin, Twitter, Instagram, Github, Check, Zap, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Contacto", href: "#contacto" },
];

const services = [
  {
    icon: BarChart3,
    title: "Consultoría Estratégica",
    description: "Desarrollamos estrategias de negocio accionables para optimizar operaciones y escalar su crecimiento en mercados competitivos."
  },
  {
    icon: Globe,
    title: "Desarrollo Digital",
    description: "Creamos experiencias digitales a medida, desde plataformas web robustas hasta aplicaciones móviles intuitivas."
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte Continuo",
    description: "Acompañamiento técnico y operativo ininterrumpido para asegurar la continuidad y evolución de su negocio."
  }
];

const plans = [
  {
    name: "Básico",
    monthlyPrice: 499,
    annualPrice: 399,
    description: "Ideal para empresas que están dando sus primeros pasos en la transformación digital.",
    features: [
      "1 proyecto activo",
      "Consultoría mensual (2h)",
      "Soporte por email",
      "Acceso a recursos digitales",
      "Informe trimestral",
    ],
    cta: "Empezar",
    highlighted: false,
  },
  {
    name: "Profesional",
    monthlyPrice: 1299,
    annualPrice: 1039,
    description: "Para empresas en crecimiento que necesitan acompañamiento continuo y resultados medibles.",
    features: [
      "5 proyectos activos",
      "Consultoría semanal (4h)",
      "Soporte prioritario 24/7",
      "Desarrollo a medida incluido",
      "Informe mensual detallado",
      "Gestor de cuenta dedicado",
    ],
    cta: "Elegir Profesional",
    highlighted: true,
  },
  {
    name: "Empresarial",
    monthlyPrice: 3499,
    annualPrice: 2799,
    description: "Solución integral para grandes organizaciones con necesidades complejas y equipos distribuidos.",
    features: [
      "Proyectos ilimitados",
      "Consultoría diaria (ilimitada)",
      "SLA garantizado 99.9%",
      "Desarrollo e integración full-stack",
      "Informes en tiempo real",
      "Equipo dedicado exclusivo",
      "Auditoría estratégica anual",
    ],
    cta: "Contactar Ventas",
    highlighted: false,
  },
];

const testimonials = [
  {
    name: "Elena Rodríguez",
    role: "Directora de Operaciones, NexusCorp",
    quote: "El equipo transformó nuestra infraestructura digital en tiempo récord. Su enfoque profesional y cercano hizo que el proceso fuera excepcionalmente fluido.",
    initials: "ER"
  },
  {
    name: "Carlos Mendoza",
    role: "CEO, Innova Solutions",
    quote: "Más que proveedores, se convirtieron en aliados estratégicos. La calidad de su consultoría ha sido fundamental para nuestra expansión este año.",
    initials: "CM"
  },
  {
    name: "Sofía Vargas",
    role: "Gerente de Tecnología, Fintera Group",
    quote: "Implementaron nuestra plataforma de pagos en tiempo récord y con cero incidencias. El nivel de detalle técnico y la comunicación constante superaron todas nuestras expectativas.",
    initials: "SV"
  },
  {
    name: "Andrés Castillo",
    role: "Fundador, LaunchPad Studios",
    quote: "Desde el primer día demostraron entender nuestra visión. El producto final fue exactamente lo que necesitábamos para escalar nuestro negocio al siguiente nivel.",
    initials: "AC"
  },
  {
    name: "Mariana Torres",
    role: "Directora de Marketing, Vértice Digital",
    quote: "Gracias a su trabajo en SEO y desarrollo web, incrementamos el tráfico orgánico un 180% en seis meses. Un equipo serio, comprometido y con resultados reales.",
    initials: "MT"
  }
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [annual, setAnnual] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Visual only
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoPath} alt="elavincho.dev logo" className="w-8 h-8 object-contain" data-testid="logo-icon" />
            <span className="text-xl font-bold tracking-tight" data-testid="logo-text">elavincho.dev</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Cambiar tema"
              data-testid="toggle-dark-desktop"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Button onClick={(e) => scrollToSection(e as any, '#contacto')} data-testid="nav-cta">
              Hablemos
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Cambiar tema"
              data-testid="toggle-dark-mobile"
              className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
            >
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-4 flex flex-col gap-4 shadow-lg"
            data-testid="mobile-menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-base font-medium p-2 hover:bg-muted rounded-md"
              >
                {link.name}
              </a>
            ))}
            <Button onClick={(e) => scrollToSection(e as any, '#contacto')} className="w-full mt-2">
              Hablemos
            </Button>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 container mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-8" data-testid="hero-badge">
              Soluciones profesionales para empresas modernas
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-balance text-foreground">
              Impulsamos el futuro de su <span className="text-primary">negocio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Combinamos visión estratégica y excelencia técnica para construir soluciones que aceleran el crecimiento corporativo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full" onClick={(e) => scrollToSection(e as any, '#contacto')} data-testid="hero-cta-primary">
                Comenzar Ahora <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full" onClick={(e) => scrollToSection(e as any, '#servicios')} data-testid="hero-cta-secondary">
                Ver Servicios
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Sobre Nosotros */}
        <section id="nosotros" className="py-24 bg-muted/50 border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="about-title">Sobre elavincho.dev</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Somos una firma de consultoría y desarrollo dedicada a transformar la manera en que las empresas operan en la era digital. Nacimos con la convicción de que la tecnología y la estrategia deben caminar de la mano.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nuestro compromiso es ofrecer excelencia. Trabajamos codo a codo con nuestros clientes, entendiendo sus desafíos únicos y diseñando soluciones a medida que garantizan resultados medibles y sostenibles.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-border"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50" />
                <div className="relative z-10 text-center">
                  <div className="text-6xl font-black text-primary mb-2">10+</div>
                  <div className="text-lg font-medium text-foreground">Años de experiencia</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-24 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="services-title">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground">Soluciones integrales diseñadas para resolver problemas complejos y potenciar el rendimiento corporativo.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 transition-colors hover:shadow-md bg-background" data-testid={`service-card-${index}`}>
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="testimonials-title">Lo que dicen nuestros clientes</h2>
              <p className="text-primary-foreground/80 text-lg">La confianza de quienes han trabajado con nosotros es nuestra mejor carta de presentación.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((test, index) => (
                <motion.div
                  key={test.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 border-white/20 text-primary-foreground backdrop-blur-sm" data-testid={`testimonial-card-${index}`}>
                    <CardContent className="p-8">
                      <div className="mb-6">
                        {/* Fake quotes icon using basic text for simplicity without extra deps */}
                        <span className="text-4xl font-serif text-primary-foreground/40 leading-none">"</span>
                        <p className="text-lg leading-relaxed relative -top-2">
                          {test.quote}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar className="border border-white/20 bg-primary-foreground text-primary">
                          <AvatarFallback className="bg-white text-primary font-bold">{test.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{test.name}</p>
                          <p className="text-sm text-primary-foreground/70">{test.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Precios */}
        <section id="precios" className="py-24 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="pricing-title">Planes y Precios</h2>
            <p className="text-lg text-muted-foreground">Elige el plan que mejor se adapte a tu empresa. Sin sorpresas, sin letra pequeña.</p>
          </motion.div>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex items-center justify-center gap-4 mb-12"
            data-testid="billing-toggle"
          >
            <span className={`text-sm font-medium transition-colors ${!annual ? "text-foreground" : "text-muted-foreground"}`}>
              Mensual
            </span>
            <button
              role="switch"
              aria-checked={annual}
              onClick={() => setAnnual(!annual)}
              className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${annual ? "bg-primary" : "bg-input"}`}
              data-testid="toggle-billing"
            >
              <span
                className={`pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${annual ? "translate-x-7" : "translate-x-0.5"}`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors flex items-center gap-2 ${annual ? "text-foreground" : "text-muted-foreground"}`}>
              Anual
              <motion.span
                key={annual ? "on" : "off"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`text-xs font-bold px-2 py-0.5 rounded-full transition-colors ${annual ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"}`}
              >
                {annual ? "Ahorra 20%" : "–20%"}
              </motion.span>
            </span>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
            {plans.map((plan, index) => {
              const price = annual ? plan.annualPrice : plan.monthlyPrice;
              const savings = plan.monthlyPrice - plan.annualPrice;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex"
                >
                  <Card
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`flex flex-col w-full cursor-pointer transition-all duration-200 ${
                      selectedPlan === plan.name
                        ? "border-primary ring-2 ring-primary shadow-xl shadow-primary/20 scale-[1.02]"
                        : plan.highlighted
                        ? "border-primary shadow-xl shadow-primary/10 relative hover:shadow-2xl hover:scale-[1.015]"
                        : "border-border/50 hover:border-primary/50 hover:shadow-lg hover:scale-[1.015]"
                    }`}
                    data-testid={`pricing-card-${index}`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                        <Zap className="w-3.5 h-3.5" />
                        Más popular
                      </div>
                    )}
                    <CardContent className={`p-8 flex flex-col flex-1 ${plan.highlighted ? "pt-10" : ""}`}>
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                      </div>

                      <div className="mb-2">
                        <div className="flex items-end gap-1">
                          <motion.span
                            key={`${plan.name}-${annual}`}
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-5xl font-extrabold tracking-tight"
                          >
                            {price.toLocaleString("es-ES")}€
                          </motion.span>
                          <span className="text-muted-foreground text-sm mb-2">/ mes</span>
                        </div>
                        <div className="h-5 mt-1">
                          {annual && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-xs text-green-600 font-medium"
                            >
                              Ahorras {savings.toLocaleString("es-ES")}€/mes · facturado anualmente
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-3 flex-1 mb-8 mt-4">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm">
                            <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className="w-full"
                        variant={plan.highlighted ? "default" : "outline"}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.querySelector("#contacto");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        data-testid={`pricing-cta-${index}`}
                      >
                        {plan.cta}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-24 container mx-auto px-6">
          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="contact-title">Inicie su proyecto</h2>
              <p className="text-lg text-muted-foreground">Complete el formulario y un consultor se pondrá en contacto con usted en menos de 24 horas.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.12 }}
            >
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre Completo</Label>
                    <Input id="nombre" placeholder="Ej. Juan Pérez" required data-testid="input-nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="juan@empresa.com" required data-testid="input-email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea 
                      id="mensaje" 
                      placeholder="Cuéntenos sobre sus necesidades o el proyecto que tiene en mente..." 
                      className="min-h-[120px]" 
                      required 
                      data-testid="input-mensaje"
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg" data-testid="button-submit">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="bg-foreground text-background py-12"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <img src={logoPath} alt="elavincho.dev logo" className="w-6 h-6 object-contain" />
              <span className="text-xl font-bold tracking-tight">elavincho.dev</span>
            </div>
            <p className="text-muted-foreground text-sm">Excelencia corporativa y desarrollo digital.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors" data-testid="social-linkedin">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors" data-testid="social-twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors" data-testid="social-instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors" data-testid="social-github">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-8 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} elavincho.dev Consulting. Todos los derechos reservados.
        </div>
      </motion.footer>

      {/* Botón flotante volver al inicio */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.8, y: showScrollTop ? 0 : 16 }}
        transition={{ duration: 0.25 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Volver al inicio"
        data-testid="scroll-to-top"
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 pointer-events-auto"
        style={{ pointerEvents: showScrollTop ? "auto" : "none" }}
      >
        <ArrowRight className="w-5 h-5 -rotate-90" />
      </motion.button>
    </div>
  );
}