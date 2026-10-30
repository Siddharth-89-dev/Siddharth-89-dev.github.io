import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import phishguardImg from "@/assets/phishguard.jpg";
import lconnectImg from "@/assets/lconnect.jpg";
import avatar from "@/assets/avatar3d.png";
import heart from "@/assets/heart3d.png";
import flower from "@/assets/flower3d.png";
import star from "@/assets/star3d.png";
import { Typewriter } from "@/components/Typewriter";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siddharth Sharma — AI Backend Engineer" },
      {
        name: "description",
        content:
          "Aspiring AI Backend Engineer skilled in Python, FastAPI, Machine Learning and Cybersecurity — PhishGuard, LConnect and more.",
      },
      { property: "og:title", content: "Siddharth Sharma — AI Backend Engineer" },
      {
        property: "og:description",
        content:
          "AI-powered backend apps, REST APIs and phishing detection systems by Siddharth Sharma.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "iamsiddharthsharma48@gmail.com";
const GITHUB = "https://github.com/Siddharth-89-dev";
const LINKEDIN = "https://linkedin.com/in/siddharth-sharma-68102b2a4";
const PHONE = "+91 88585 36920";

const mailtoLink = (subject = "") =>
  `mailto:${EMAIL}${
    subject ? `?subject=${encodeURIComponent(subject)}` : ""
  }`;

const roles = [
  "AI Backend Engineer",
  "FastAPI Developer",
  "ML Engineer",
  "Cybersecurity Enthusiast",
];

const stats = [
  { label: "REST endpoints built", value: 24, suffix: "" },
  { label: "URLs analyzed", value: 1000, suffix: "+" },
  { label: "Concurrent LAN users", value: 1000, suffix: "+" },
  { label: "Certifications", value: 2, suffix: "" },
];

type Project = {
  title: string;
  date: string;
  tag: string;
  image: string;
  alt: string;
  description: string;
  bullets: string[];
  tags: string[];
  likes: number;
  comments: number;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "PhishGuard",
    date: "Nov 2025",
    tag: "Machine Learning",
    image: phishguardImg,
    alt: "PhishGuard threat detection dashboard visualizing scanned URLs",
    demo: "https://phishguard-ai-6qdq.onrender.com/#home",
    description:
      "AI-powered phishing detection system that analyzes URLs for real-time threat prediction.",
    bullets: [
      "Analyzes 1000+ URLs for real-time threat prediction",
      "REST APIs with FastAPI and ML threat classification pipelines",
      "Feature engineering and probabilistic risk scoring",
    ],
    tags: ["Python", "FastAPI", "Machine Learning"],
    likes: 128,
    comments: 24,
  },
  {
    title: "LConnect",
    date: "Aug 2025",
    tag: "Systems & Networking",
    image: lconnectImg,
    alt: "LConnect peer-to-peer LAN collaboration interface",
    description:
      "LAN-based communication platform for chatting, file sharing and private rooms — no internet connection required.",
    bullets: [
      "Chat, file sharing and private rooms over LAN",
      "Real-time communication and backend networking workflows",
      "Works fully without internet connectivity",
      "Handles 1000+ users at the same time with real-time sync",
    ],
    tags: ["Python", "Networking", "Web Technologies"],
    likes: 96,
    comments: 12,
  },
];

const skillGroups = [
  { label: "Languages", items: ["Python", "Java", "SQL", "JavaScript", "PostgreSQL"] },
  { label: "Backend", items: ["FastAPI", "REST APIs", "API Integration", "WebSockets"] },
  { label: "AI & ML", items: ["Supervised Learning", "Feature Engineering", "Predictive Modelling", "Scikit-learn"] },
  { label: "Tools & Platforms", items: ["Git", "GitHub", "Linux", "VS Code", "AWS"] },
  { label: "Web", items: ["HTML", "CSS", "React"] },
  { label: "Cybersecurity", items: ["Phishing Detection", "URL Analysis", "Network Security Fundamentals"] },
];

const experience = {
  role: "Frontend Web Development Intern",
  company: "ITERA",
  year: "2026",
  project: "Hierarchical Daily Reporting & Task Management System (client project)",
  description:
    "Built a role-hierarchy task and reporting system with 24 REST endpoints, a 7-table schema and 14 unit tests — auto-building reporting chains from Department, Designation and Rank to control task assignment, report review and weighted monthly performance scoring.",
  tags: ["React (Vite)", "ASP.NET Core 8", "SQL Server", "EF Core", "JWT", "Docker", "xUnit"],
};

const certifications = [
  { title: "Java Programming with GUI", issuer: "IIIT Allahabad" },
  { title: "Cyber Security Threats and Networks", issuer: "UGI" },
];

const education = [
  {
    period: "2023 — Present",
    title: "B.Tech, Computer Science (AI & ML)",
    place: "United Institute of Technology, Prayagraj",
    active: true,
  },
  { period: "2023", title: "Intermediate (CBSE)", place: "Central Academy, Prayagraj", active: false },
  { period: "2021", title: "High School (CBSE)", place: "Central Academy, Prayagraj", active: false },
];


function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg)`;
  };
  const onLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };
  return (
    <div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`rounded-3xl border border-border bg-card transition-[transform,box-shadow] duration-200 ease-out hover:shadow-lift ${className}`}
    >
      {children}
    </div>
  );
}

function BigTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-chrome text-center font-display text-6xl uppercase leading-[0.9] tracking-tight md:text-8xl">
      {children}
    </h2>
  );
}

function HotButton({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="pill-hot inline-flex items-center gap-2 px-7 py-3 text-sm font-bold uppercase tracking-wide text-foreground"
    >
      {children}
    </a>
  );
}

function Index() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <nav className="mx-auto grid max-w-6xl grid-cols-5 px-5 pt-6 text-center text-xs font-bold uppercase tracking-widest md:text-sm">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="transition-colors hover:text-primary">{l.label}</a>
        ))}
      </nav>

      {/* HERO */}
      <header className="relative mx-auto max-w-6xl px-5 pb-10 pt-6">
        <h1 className="text-chrome text-center font-display uppercase leading-[0.85] tracking-tight">
          <span className="block text-[11vw] md:text-[6rem]">Hi, I'm</span>
          <span className="block text-[15vw] md:text-[9.5rem]">Siddharth</span>
        </h1>
        <div className="relative -mt-2 grid items-center gap-8 md:-mt-4 md:grid-cols-[1fr_auto_1fr]">
          <div className="order-2 max-w-xs text-sm font-semibold uppercase leading-relaxed md:order-1">
            An aspiring AI backend engineer building secure, AI-powered APIs 🤖
            <p className="mt-3 font-mono text-xs normal-case text-muted-foreground">
              <Typewriter phrases={roles} />
            </p>
          </div>
          <img
            src={avatar}
            alt="3D cartoon avatar of Siddharth Sharma"
            width={1024}
            height={1024}
            className="order-1 mx-auto w-72 drop-shadow-2xl md:order-2 md:w-[26rem]"
          />
          <div className="order-3 flex md:justify-end">
            <HotButton href={mailtoLink()}>Contact me</HotButton>
          </div>
        </div>
        <img src={star} alt="" aria-hidden className="float-slow pointer-events-none absolute left-2 top-72 w-16 md:w-24" />
        <img src={heart} alt="" aria-hidden className="float-slow pointer-events-none absolute bottom-10 right-4 w-16 md:w-24 [animation-delay:-2s]" />
      </header>

      {/* STATS */}
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <Reveal key={s.label}>
            <div className="rounded-3xl border border-border bg-card p-6 text-center">
              <div className="text-hot font-display text-5xl">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ABOUT */}
      <section id="about" className="relative mx-auto max-w-4xl px-5 py-24 text-center">
        <img src={star} alt="" aria-hidden className="float-slow pointer-events-none absolute -top-2 left-4 w-20" />
        <img src={flower} alt="" aria-hidden className="float-slow pointer-events-none absolute right-2 top-10 w-20 md:w-28 [animation-delay:-3s]" />
        <img src={heart} alt="" aria-hidden className="float-slow pointer-events-none absolute bottom-6 left-0 w-16 md:w-24 [animation-delay:-1s]" />
        <Reveal>
          <BigTitle>About me</BigTitle>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed">
            Aspiring AI Backend Engineer skilled in Python, FastAPI, Machine Learning and Cybersecurity,
            with experience building AI-powered backend applications, REST APIs and phishing detection
            systems. I'm interested in scalable backend systems, AI integration and secure application
            development. Let's build something amazing together!
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="size-4" /> Prayagraj, India</span>
            <span className="inline-flex items-center gap-1.5"><Phone className="size-4" /> {PHONE}</span>
          </div>
          <div className="mt-8"><HotButton href="#contact">About me</HotButton></div>
        </Reveal>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-5xl px-5 py-24">
        <BigTitle>Experience</BigTitle>
        <Reveal>
          <Tilt className="mt-14 p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-display text-3xl uppercase">{experience.role}</h3>
              <span className="bg-hot rounded-full px-4 py-1.5 text-xs font-bold uppercase text-primary-foreground">{experience.company} · {experience.year}</span>
            </div>
            <p className="text-hot mt-3 text-sm font-bold uppercase tracking-wide">{experience.project}</p>
            <p className="mt-4 text-muted-foreground">{experience.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {experience.tags.map((t) => (
                <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">{t}</span>
              ))}
            </div>
          </Tilt>
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-24">
        <BigTitle>Projects</BigTitle>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 100}>
              <Tilt className="overflow-hidden">
                <div className="relative overflow-hidden">
                  <img src={p.image} alt={p.alt} loading="lazy" className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105" />
                  <span className="bg-hot absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase text-primary-foreground">{p.tag}</span>
                </div>
                <div className="p-7">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-4xl uppercase">{p.title}</h3>
                    <span className="text-xs font-bold uppercase text-muted-foreground">{p.date}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{b}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">{t}</span>
                    ))}
                  </div>
                  {p.demo && (
                    <div className="mt-6">
                      <HotButton href={p.demo} external>Live demo <ArrowUpRight className="size-4" /></HotButton>
                    </div>
                  )}
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="relative mx-auto max-w-6xl px-5 py-24">
        <img src={flower} alt="" aria-hidden className="float-slow pointer-events-none absolute left-0 top-4 w-16 md:w-24" />
        <BigTitle>Skills</BigTitle>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, idx) => (
            <Reveal key={g.label} delay={idx * 60}>
              <Tilt className="h-full p-6">
                <p className="text-hot text-xs font-bold uppercase tracking-widest">{g.label}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="rounded-full border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary">{it}</span>
                  ))}
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mx-auto max-w-4xl px-5 py-24">
        <BigTitle>Education</BigTitle>
        <div className="mt-14 space-y-4">
          {education.map((e) => (
            <Reveal key={e.title}>
              <Tilt className="flex flex-col gap-2 p-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-bold uppercase">{e.title}</h3>
                  <p className="text-sm text-muted-foreground">{e.place}</p>
                </div>
                <span className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase ${e.active ? "bg-hot text-primary-foreground" : "bg-secondary"}`}>{e.period}</span>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="mx-auto max-w-4xl px-5 py-24">
        <BigTitle>Certifications</BigTitle>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {certifications.map((c) => (
            <Reveal key={c.title}>
              <Tilt className="h-full p-6">
                <p className="text-hot text-xs font-bold uppercase tracking-widest">{c.issuer}</p>
                <h3 className="mt-2 text-lg font-bold uppercase">{c.title}</h3>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative mx-auto max-w-5xl px-5 pb-16 pt-24 text-center">
        <img src={heart} alt="" aria-hidden className="float-slow pointer-events-none absolute right-6 top-10 w-20" />
        <img src={star} alt="" aria-hidden className="float-slow pointer-events-none absolute left-6 bottom-24 w-16 [animation-delay:-2s]" />
        <BigTitle>Let's talk</BigTitle>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Open to internships, freelance AI projects and full-time roles. Drop a message — I reply fast.
        </p>
        <a href={mailtoLink()} className="text-hot mt-8 inline-block break-all font-display text-2xl md:text-4xl">{EMAIL}</a>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <HotButton href={mailtoLink()}><Mail className="size-4" /> Send a message</HotButton>
          <HotButton href={mailtoLink("Project collaboration")}><Sparkles className="size-4" /> Start a project</HotButton>
          <HotButton href={GITHUB} external><Github className="size-4" /> GitHub</HotButton>
          <HotButton href={LINKEDIN} external><Linkedin className="size-4" /> LinkedIn</HotButton>
        </div>
        <p className="mt-20 text-xs font-bold uppercase tracking-widest text-muted-foreground">© 2026 Siddharth Sharma</p>
      </section>
    </div>
  );
}
