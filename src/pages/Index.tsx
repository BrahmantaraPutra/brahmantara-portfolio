import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-portrait.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useReveal, useScrollProgress, useActiveSection } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import {
  Smartphone, Monitor, Code2, Github, Mail, Linkedin, MapPin,
  Rocket, Layers, Zap, Database, GitBranch, Wrench, ArrowRight, ExternalLink, Calendar, Sparkles, Image as ImageIcon,
  Award, Trophy, GraduationCap, Instagram, Sun, Moon, BookOpen
} from "lucide-react";
import { link } from "fs";

const skills = [
  { icon: Smartphone, name: "Kotlin (Android)", level: "Expert", desc: "Native Android development dengan Jetpack Compose, MVVM, dan Coroutines." },
  { icon: Layers, name: "Flutter & Dart", level: "Expert", desc: "Cross-platform mobile apps dengan performa native dan UI yang konsisten." },
  { icon: Monitor, name: "Avalonia UI (.NET)", level: "Advanced", desc: "Aplikasi desktop cross-platform berbasis C# dengan arsitektur MVVM." },
  { icon: Zap, name: "Tauri (Rust)", level: "Advanced", desc: "Desktop app ringan dan cepat menggunakan web frontend & backend Rust." },
  { icon: Database, name: "Database & API", level: "Proficient", desc: "SQLite, Room, Supabase, SQLserver, REST & GraphQL untuk integrasi data yang andal." },
  { icon: GitBranch, name: "Git & CI/CD", level: "Proficient", desc: "Workflow Git, GitHub Actions, dan automation deployment multi-platform." },
];

// User akan menambahkan image sendiri ke /public/tech/<file>.png — fallback pakai placeholder.
const techStack = [
  { name: "Kotlin", category: "Mobile", img: "/tech/kotlin.svg" },
  { name: "Flutter", category: "Mobile", img: "/tech/flutter.svg" },
  { name: "Dart", category: "Language", img: "/tech/dart.svg" },
  { name: "Jetpack Compose", category: "Mobile UI", img: "/tech/compose.svg" },
  { name: "Avalonia", category: "Desktop", img: "/tech/avalonia.svg" },
  { name: "Tauri", category: "Desktop", img: "/tech/tauri.svg" },
  { name: "C# / .NET", category: "Language", img: "/tech/csharp.svg" },
  { name: "Rust", category: "Language", img: "/tech/rust.svg" },
  { name: "Supabase", category: "Backend", img: "/tech/firebase.svg" },
  { name: "SQLite", category: "Database", img: "/tech/sqlite.svg" },
  { name: "Git", category: "Tools", img: "/tech/git.svg" },
  { name: "SQLserver", category: "Database", img: "/tech/figma.svg" },
];

const projects = [
  { 
    title: "SmithOrigin", 
    stack: ["Avalonia UI", "C#", ".NET 10", "Tauri"], 
    desc: "Aplikasi desktop cross-platform yang berfokus pada efisiensi performa, dikembangkan dari WinForms menuju arsitektur Avalonia modern.", 
    year: "2026",
    link: "https://github.com/BrahmantaraPutra/SmithOrigin"
  },
  { 
    title: "Esemka Management System", 
    stack: ["C#", "SQL Server", "WinForms"], 
    desc: "Simulasi modul kompetisi LKS ITSSB untuk manajemen operasional bisnis dengan integrasi basis data relasional yang kompleks.", 
    year: "2026", 
    link: "https://github.com/BrahmantaraPutra/RestoSMK"
  },
  { 
    title: "Ezemkofe (Mobile)", 
    stack: ["Kotlin", "Jetpack Compose", "Retrofit"], 
    desc: "Aplikasi Android native untuk manajemen inventaris dan transaksi sebuah kafe, menggunakan arsitektur MVVM dan integrasi REST API.", 
    year: "2026",
    link: "https://github.com/BrahmantaraPutra/TugasAkhir_EzemKofie"
  },
  { 
    title: "Ecopedia", 
    stack: ["React", "Supabase", "Typescript"], 
    desc: "Website untuk mengelola, mengatur, dan mendistribusikan aktivitas peduli lingkungan masyarakat dengan sebuah organisasi.", 
    year: "2025",
    link: "https://github.com/kaound3rage/EchoPediaFiks"
  },
];

const experience = [
  { role: "SMK NEGERI 2 YOGYAKARTA", org: "Sistem Informasi Jaringan dan Aplikasi", period: "2023 — Sekarang", desc: "Membangun beragam aplikasi mobile, web dan desktop untuk projek pribadi dan klien lokal dengan fokus pada UX dan performa." },
];

const certificates = [
  {
    icon: Trophy,
    title: "Juara 2 LKS Provinsi 2026",
    org: "IT Software Solution for Business",
    year: "2026",
    desc: "Meraih Juara 2 tingkat Provinsi dalam Lomba Kompetensi Siswa cabang IT Software Solution for Business.",
    highlight: true,
  },
  {
    icon: Award,
    title: "Finalis Tecnoversary - EcoDigital for Environment",
    org: "Web Design",
    year: "2025",
    desc: "Menjadi finalis dalam lomba membangun dan mendesain sebuah webite bertema edukasi lingkungan.",
  },
  {
    icon: BookOpen,
    title: "MTCNA",
    org: "Online Course",
    year: "2025",
    desc: "Sertifikasi resmi dari MikroTik untuk mengkonfigurasi, mengelola, dan menggunakan MikroTik RouterOS",
  },
];

const Index = () => {
  const [dark, setDark] = useState(false);
  const scrollProgress = useScrollProgress();
  const navItems = ["About", "Tech", "Skills", "Projects", "Certificates", "Experience", "Contact"];
  const active = useActiveSection(["home", ...navItems.map(i => i.toLowerCase())]);

  useEffect(() => {
    document.title = "Brahmantara Putra Wirabhakti — Portfolio";
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Brahmantara Putra Wirabhakti",
    jobTitle: "Mobile & Desktop Application Developer",
    knowsAbout: ["Kotlin", "Flutter", "Avalonia", "Tauri"],
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Scroll progress bar */}
      <div
        aria-hidden
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none"
      >
        <div
          className="h-full bg-gradient-accent shadow-[0_0_12px_hsl(var(--accent)/0.6)] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <nav className="container flex items-center justify-between h-16">
          <a href="#home" className="font-display font-bold text-lg tracking-tight">
            Brahmantara<span className="text-accent">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground">
            {navItems.map(i => {
              const id = i.toLowerCase();
              const isActive = active === id;
              return (
                <li key={i}>
                  <a
                    href={`#${id}`}
                    className={cn(
                      "relative px-3 py-2 rounded-full transition-all duration-300 hover:text-foreground active:scale-95",
                      isActive && "text-foreground",
                    )}
                  >
                    <span className="relative z-10">{i}</span>
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-accent/15 ring-1 ring-accent/30 animate-scale-in" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          <Badge variant="outline" className="hidden sm:flex gap-1.5 rounded-full">
            <Sparkles className="h-3 w-3 text-accent" /> Portfolio
          </Badge>
        </nav>
      </header>

      {/* HERO — fokus profil */}
      <section id="home" className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(hsl(var(--foreground))_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />

        <div className="container relative grid md:grid-cols-5 gap-12 items-center py-24 md:py-32">
          <div className="md:col-span-3 space-y-6 animate-fade-in">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" /> Siswa · SMK NEGERI 2 YOGYAKARTA 
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Halo, saya{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Brahmantara Putra
                </span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-accent/20 -z-0" />
              </span>
              .
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Seorang <strong className="text-foreground">siswa SMK</strong> yang berfokus pada pengembangan aplikasi <strong className="text-foreground">mobile & desktop</strong>. Saat ini sedang mencari kesempatan <strong className="text-foreground">magang</strong> untuk mengasah keahlian di lingkungan kerja nyata. Selamat datang di ruang dokumentasi karya dan perjalanan belajar saya.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg" variant="outline" className="hover-scale">
                <a href="#tech">Lihat Tech Stack <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="#projects">Jelajahi Project</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><GraduationCap className="h-4 w-4" /> Siswa SMK</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Indonesia</span>
              <span className="flex items-center gap-2"><Code2 className="h-4 w-4" /> Mobile · Desktop · Website</span>
            </div>
          </div>

          <div className="md:col-span-2 relative animate-scale-in">
            <div className="relative mx-auto w-fit animate-float">
              <div className="absolute -inset-4 bg-accent/15 blur-2xl rounded-full animate-[pulse_5s_ease-in-out_infinite]" />
              <img
                src={heroImg}
                alt="Foto profil Brahmantara Putra Wirabhakti"
                width={320}
                height={320}
                className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-card shadow-soft mx-auto transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12">
            <Reveal variant="left">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">About</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Tentang Saya</h2>
            </Reveal>
            <Reveal variant="right" delay={120} className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Saya seorang <strong className="text-foreground">siswa SMK</strong> jurusan IT yang antusias pada dunia pengembangan aplikasi <strong className="text-foreground">mobile dan desktop</strong>. Saya banyak belajar secara mandiri sambil mengikuti berbagai kompetensi dan kompetisi di sekolah.
              </p>
              <p>
                Saat ini saya sedang mencari kesempatan <strong className="text-foreground">magang (PKL)</strong> untuk menerapkan keahlian saya di lingkungan profesional. Stack favorit: Kotlin (Android), Flutter, Avalonia (.NET), serta Tauri (Rust) untuk desktop ringan.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <Stat value="10+" label="Project" />
                <Stat value="3+" label="Tahun belajar" />
                <Stat value="12+" label="Teknologi dipelajari" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech" className="py-20 bg-secondary/40 relative overflow-hidden">
        <div className="container">
          <Reveal variant="up" className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Tech Stack</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Teknologi yang Saya Gunakan</h2>
            <p className="text-muted-foreground">Sekumpulan tools, bahasa, dan framework yang menjadi keseharian saya dalam membangun aplikasi.</p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((t, i) => (
              <TechCard key={t.name} tech={t} delay={i * 40} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 md:py-28">
        <div className="container">
          <Reveal variant="up" className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Skills</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Keahlian Teknis</h2>
            <p className="text-muted-foreground">Bidang keahlian utama dengan tingkat penguasaan masing-masing.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((s, i) => (
              <Reveal key={s.name} variant="up" delay={i * 80}>
              <Card className="group p-6 shadow-card border-border bg-card hover:-translate-y-1 hover:shadow-soft transition-all duration-300 cursor-default">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground group-hover:rotate-6 transition-all duration-300">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className="text-xs">{s.level}</Badge>
                </div>
                <h3 className="font-display font-semibold text-lg mb-1.5">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-secondary/40">
        <div className="container">
          <Reveal variant="up" className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Selected Work</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Pengalaman Projek</h2>
              <p className="text-muted-foreground">Beberapa karya yang merepresentasikan keahlian dan pendekatan kerja saya.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.title} variant={i % 2 === 0 ? "left" : "right"} delay={i * 100}>
              <Card className="p-7 shadow-card hover:shadow-soft transition-all duration-300 border-border bg-card group hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {p.year}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.stack.map(t => <Badge key={t} variant="secondary" className="font-normal">{t}</Badge>)}
                </div>
                <a href="#contact" className="story-link inline-flex items-center text-sm font-medium text-primary">
                  Lihat detail <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <Reveal variant="up" className="mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Experience</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Jenjang Pendidikan</h2>
          </Reveal>
          <div className="relative space-y-6 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-border md:before:left-6">
            {experience.map((e, i) => (
              <Reveal key={e.role} variant="left" delay={i * 120} className="relative pl-12 md:pl-16">
                <span className="absolute left-2 top-6 w-5 h-5 rounded-full bg-gradient-accent ring-4 ring-background md:left-4" />
                <Card className="p-6 shadow-card border-border bg-card hover:shadow-soft transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-lg">{e.role}</h3>
                      <p className="text-primary font-medium text-sm">{e.org}</p>
                    </div>
                    <Badge variant="outline" className="self-start">{e.period}</Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{e.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-20 bg-secondary/40">
        <div className="container">
          <Reveal variant="up" className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Achievements</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Sertifikat & Penghargaan</h2>
            <p className="text-muted-foreground">Beberapa pencapaian dan sertifikasi yang saya raih selama proses belajar.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificates.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 100}>
              <Card
                className={`group p-6 shadow-card border-border bg-card hover:-translate-y-1 hover:shadow-soft transition-all duration-300 relative overflow-hidden ${c.highlight ? "ring-2 ring-accent/40" : ""}`}
              >
                {c.highlight && (
                  <div className="absolute top-0 right-0 bg-gradient-accent text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                    Highlight
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <c.icon className="h-6 w-6" />
                </div>
                <Badge variant="outline" className="mb-3 text-xs">{c.year}</Badge>
                <h3 className="font-display font-bold text-lg mb-1.5 leading-snug">{c.title}</h3>
                <p className="text-primary text-sm font-medium mb-2">{c.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-hero">
        <Reveal variant="up" className="container max-w-3xl text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-5">Mari Terhubung</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Tertarik berdiskusi soal teknologi mobile, desktop, website, atau sekadar menyapa? Jangan ragu untuk menghubungi saya melalui kanal di bawah.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <ContactCard icon={Mail} label="Email" value="brahmantaraputraw@gmail.com" href="mailto:brahmantaraputraw@gmail.com" />
            <ContactCard icon={Github} label="GitHub" value="@BrahmantaraPutra" href="https://github.com/BrahmantaraPutra" />
            <ContactCard icon={Linkedin} label="LinkedIn" value="Brahmantara P.W." href="https://www.linkedin.com/in/brahmantara-putra-wirabhakti-55128736b/" />
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Brahmantara Putra Wirabhakti.</p>
          <p>Portofolio</p>
        </div>
      </footer>

      {/* Floating dock */}
      <FloatingDock dark={dark} toggleTheme={toggleTheme} />
    </div>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="font-display text-3xl font-bold text-primary">{value}</div>
    <div className="text-xs text-muted-foreground mt-1">{label}</div>
  </div>
);

type RevealVariant = "up" | "left" | "right" | "fade";

const Reveal = ({
  children,
  variant = "up",
  delay = 0,
  className,
  as: As = "div",
}: {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  as?: any;
}) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const animMap: Record<RevealVariant, string> = {
    up: "animate-slide-up",
    left: "animate-slide-in-left",
    right: "animate-slide-in-right",
    fade: "animate-fade-in",
  };
  return (
    <As
      ref={ref}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
      className={cn(
        "transition-opacity",
        visible ? animMap[variant] : "opacity-0",
        className,
      )}
    >
      {children}
    </As>
  );
};

const ContactCard = ({ icon: Icon, label, value, href }: any) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
    className="group p-5 rounded-xl bg-card border border-border shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
    <Icon className="h-5 w-5 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
    <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
    <div className="font-medium text-sm mt-1 group-hover:text-primary transition-colors truncate">{value}</div>
  </a>
);

const TechCard = ({ tech, delay }: { tech: { name: string; category: string; img: string }; delay: number }) => {
  const [errored, setErrored] = useState(false);
  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className="group relative aspect-square rounded-2xl bg-card border border-border shadow-card hover:shadow-soft hover:-translate-y-1 hover:border-accent/40 transition-all duration-300 cursor-default animate-fade-in flex flex-col items-center justify-center p-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-[0.06] transition-opacity" />
      <div className="relative w-12 h-12 md:w-14 md:h-14 mb-3 flex items-center justify-center">
        {!errored ? (
          <img
            src={tech.img}
            alt={`${tech.name} logo`}
            loading="lazy"
            onError={() => setErrored(true)}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full rounded-xl bg-muted flex items-center justify-center text-muted-foreground">
            <ImageIcon className="h-6 w-6" />
          </div>
        )}
      </div>
      <div className="text-center relative">
        <div className="font-display font-semibold text-sm">{tech.name}</div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{tech.category}</div>
      </div>
    </div>
  );
};

const FloatingDock = ({ dark, toggleTheme }: { dark: boolean; toggleTheme: () => void }) => {
  const items = [
    { icon: Mail, label: "Email", href: "mailto:brahmantaraputtraw@gmail.com" },
    { icon: Github, label: "GitHub", href: "https://github.com/BrahmantaraPutra" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/brahmantara-putra-wirabhakti-55128736b/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/searchforoutra?igsh=eG51NzcxZGIzMXlx" },
  ];
  return (
    <div className="fixed bottom-5 inset-x-0 z-50 flex justify-center pointer-events-none animate-fade-in">
      <div className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-soft">
        {items.map(it => (
          <a
            key={it.label}
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={it.label}
            title={it.label}
            className="group relative w-11 h-11 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent-foreground hover:bg-accent transition-all duration-300 hover:scale-110 active:scale-90"
          >
            <it.icon className="h-[18px] w-[18px]" />
          </a>
        ))}
        <span className="w-px h-6 bg-border mx-1" />
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={dark ? "Mode terang" : "Mode gelap"}
          className="group relative w-11 h-11 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent-foreground hover:bg-accent transition-all duration-300 hover:scale-110 active:scale-90 active:rotate-12"
        >
          {dark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
        </button>
      </div>
    </div>
  );
};

export default Index;
