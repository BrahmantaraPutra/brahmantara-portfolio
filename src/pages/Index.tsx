import { useEffect } from "react";
import heroImg from "@/assets/hero-portrait.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone, Monitor, Code2, Github, Mail, Linkedin, MapPin,
  Rocket, Layers, Zap, Database, GitBranch, Wrench, ArrowRight, ExternalLink, Calendar
} from "lucide-react";

const skills = [
  { icon: Smartphone, name: "Kotlin (Android)", level: "Expert", desc: "Native Android development dengan Jetpack Compose, MVVM, dan Coroutines." },
  { icon: Layers, name: "Flutter & Dart", level: "Expert", desc: "Cross-platform mobile apps dengan performa native dan UI yang konsisten." },
  { icon: Monitor, name: "Avalonia UI (.NET)", level: "Advanced", desc: "Aplikasi desktop cross-platform berbasis C# dengan arsitektur MVVM." },
  { icon: Zap, name: "Tauri (Rust)", level: "Advanced", desc: "Desktop app ringan dan cepat menggunakan web frontend & backend Rust." },
  { icon: Database, name: "Database & API", level: "Proficient", desc: "SQLite, Room, Firebase, REST & GraphQL untuk integrasi data yang andal." },
  { icon: GitBranch, name: "Git & CI/CD", level: "Proficient", desc: "Workflow Git, GitHub Actions, dan automation deployment multi-platform." },
];

const projects = [
  {
    title: "FieldOps Mobile",
    stack: ["Kotlin", "Jetpack Compose", "Room"],
    desc: "Aplikasi Android untuk manajemen petugas lapangan dengan mode offline-first dan sinkronisasi otomatis ketika kembali online.",
    year: "2025",
  },
  {
    title: "Lumen Notes",
    stack: ["Flutter", "Riverpod", "SQLite"],
    desc: "Aplikasi catatan lintas platform (iOS & Android) dengan markdown editor, tag, dan pencarian cepat berbasis full-text index.",
    year: "2024",
  },
  {
    title: "Avalon Inventory",
    stack: ["Avalonia", "C#", ".NET 8"],
    desc: "Desktop app manajemen inventaris untuk Windows, macOS, dan Linux dengan reporting real-time dan sinkronisasi cloud.",
    year: "2024",
  },
  {
    title: "TauriDeck",
    stack: ["Tauri", "Rust", "React"],
    desc: "Dashboard analitik desktop ringan (<10MB) dengan komunikasi serial untuk hardware IoT dan visualisasi data interaktif.",
    year: "2023",
  },
];

const services = [
  { icon: Smartphone, title: "Mobile Development", desc: "Pengembangan aplikasi Android native (Kotlin) dan cross-platform (Flutter) yang scalable dan production-ready." },
  { icon: Monitor, title: "Desktop Application", desc: "Membangun aplikasi desktop modern dengan Avalonia (.NET) atau Tauri (Rust) untuk Windows, macOS, dan Linux." },
  { icon: Wrench, title: "Maintenance & Refactoring", desc: "Audit codebase, refactor arsitektur, peningkatan performa, dan migrasi teknologi untuk aplikasi yang sudah berjalan." },
];

const experience = [
  { role: "Mobile & Desktop Developer", org: "Freelance / Independent", period: "2023 — Sekarang", desc: "Membangun beragam aplikasi mobile dan desktop untuk klien lokal dan internasional dengan fokus pada UX dan performa." },
  { role: "Android Developer", org: "Studi Independen / Proyek Akademik", period: "2021 — 2023", desc: "Mengembangkan beberapa aplikasi Android berbasis Kotlin dan Jetpack Compose dengan integrasi REST API dan Firebase." },
];

const Index = () => {
  useEffect(() => {
    document.title = "Brahmantara Putra Wirabhakti — Mobile & Desktop Developer";
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Brahmantara Putra Wirabhakti",
    jobTitle: "Mobile & Desktop Application Developer",
    knowsAbout: ["Kotlin", "Flutter", "Avalonia", "Tauri", "Mobile Development", "Desktop Development"],
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <nav className="container flex items-center justify-between h-16">
          <a href="#home" className="font-display font-bold text-lg tracking-tight">
            Brahmantara<span className="text-accent">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {["About", "Skills", "Projects", "Experience", "Contact"].map(i => (
              <li key={i}><a href={`#${i.toLowerCase()}`} className="hover:text-foreground transition-colors">{i}</a></li>
            ))}
          </ul>
          <Button asChild size="sm" variant="default">
            <a href="#contact">Hire Me</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="bg-gradient-hero">
        <div className="container grid md:grid-cols-2 gap-12 items-center py-20 md:py-28">
          <div className="space-y-6">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" /> Available for new projects
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Membangun aplikasi <span className="text-primary">mobile</span> & <span className="text-accent">desktop</span> yang elegan dan andal.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Halo, saya <strong className="text-foreground">Brahmantara Putra Wirabhakti</strong> — software developer berfokus pada Kotlin, Flutter, Avalonia, dan Tauri untuk menghadirkan produk digital lintas platform.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#projects">Lihat Project <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Hubungi Saya</a>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Indonesia</span>
              <span className="flex items-center gap-2"><Code2 className="h-4 w-4" /> 4+ tahun pengalaman</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-3xl rounded-full" />
            <img
              src={heroImg}
              alt="Ilustrasi profil Brahmantara Putra Wirabhakti, mobile dan desktop developer"
              width={1024}
              height={1024}
              className="relative rounded-3xl shadow-soft w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">About</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Tentang Saya</h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Saya seorang pengembang aplikasi yang fokus pada ekosistem <strong className="text-foreground">mobile dan desktop</strong>. Selama beberapa tahun terakhir, saya membangun produk digital mulai dari aplikasi internal perusahaan hingga produk konsumen lintas platform.
              </p>
              <p>
                Pendekatan saya: <em>clean architecture</em>, fokus pada performa, dan UI yang ramah pengguna. Saya percaya teknologi terbaik adalah yang paling sesuai dengan kebutuhan — itulah mengapa saya bekerja dengan beragam stack: Kotlin untuk Android native, Flutter untuk lintas platform, Avalonia untuk .NET desktop, dan Tauri untuk solusi desktop ringan berbasis Rust.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <Stat value="20+" label="Project selesai" />
                <Stat value="4+" label="Tahun pengalaman" />
                <Stat value="15+" label="Klien puas" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Services</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Apa yang Saya Tawarkan</h2>
            <p className="text-muted-foreground">Solusi pengembangan aplikasi end-to-end, dari ide hingga rilis ke production.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(s => (
              <Card key={s.title} className="p-7 shadow-card hover:shadow-soft transition-all border-border bg-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Skills</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Keahlian Teknis</h2>
            <p className="text-muted-foreground">Stack teknologi yang saya gunakan setiap hari untuk membangun produk berkualitas.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map(s => (
              <Card key={s.name} className="p-6 shadow-card border-border bg-card hover:-translate-y-1 transition-transform">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className="text-xs">{s.level}</Badge>
                </div>
                <h3 className="font-display font-semibold text-lg mb-1.5">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-secondary/40">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Selected Work</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Project Pilihan</h2>
              <p className="text-muted-foreground">Beberapa karya yang merepresentasikan keahlian dan pendekatan kerja saya.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map(p => (
              <Card key={p.title} className="p-7 shadow-card hover:shadow-soft transition-all border-border bg-card group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center text-primary-foreground">
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
                <a href="#contact" className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors">
                  Lihat detail <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Experience</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Pengalaman</h2>
          </div>
          <div className="space-y-6">
            {experience.map(e => (
              <Card key={e.role} className="p-7 shadow-card border-border bg-card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-lg">{e.role}</h3>
                    <p className="text-primary font-medium text-sm">{e.org}</p>
                  </div>
                  <Badge variant="outline" className="self-start">{e.period}</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">{e.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-hero">
        <div className="container max-w-3xl text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-5">Mari Berkolaborasi</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Punya ide aplikasi mobile atau desktop? Saya siap membantu mewujudkannya dari konsep hingga rilis.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <ContactCard icon={Mail} label="Email" value="brahmantara@example.com" href="mailto:brahmantara@example.com" />
            <ContactCard icon={Github} label="GitHub" value="@brahmantara" href="https://github.com" />
            <ContactCard icon={Linkedin} label="LinkedIn" value="Brahmantara P.W." href="https://linkedin.com" />
          </div>
          <Button asChild size="lg">
            <a href="mailto:brahmantara@example.com">Kirim Email <Mail className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Brahmantara Putra Wirabhakti. All rights reserved.</p>
          <p>Built with care — Kotlin · Flutter · Avalonia · Tauri</p>
        </div>
      </footer>
    </div>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="font-display text-3xl font-bold text-primary">{value}</div>
    <div className="text-xs text-muted-foreground mt-1">{label}</div>
  </div>
);

const ContactCard = ({ icon: Icon, label, value, href }: any) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
    className="group p-5 rounded-xl bg-card border border-border shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all">
    <Icon className="h-5 w-5 text-accent mx-auto mb-2" />
    <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
    <div className="font-medium text-sm mt-1 group-hover:text-primary transition-colors truncate">{value}</div>
  </a>
);

export default Index;
