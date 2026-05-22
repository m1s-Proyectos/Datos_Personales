/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Download,
  Terminal,
  Zap,
  Briefcase,
  Sparkles,
  Globe,
  Database,
  Cpu,
  Wrench,
  Mail,
  Github,
  Linkedin,
  FileText,
  ChevronUp,
  Menu,
  X,
  ExternalLink,
  Code2,
  ChevronDown,
} from "lucide-react";
import { CaseStudyDetails } from "./components/CaseStudyDetails";
import { clothesMarinaCaseStudySections } from "./data/clothesMarinaCaseStudy";
import type { CaseStudySectionData } from "./data/clothesMarinaCaseStudy";

const CV_URL =
  "https://drive.google.com/file/d/1ZScKlvyUzlBewr2nInjtISxWon9IwkeO/view?usp=sharing";
const GITHUB_PROFILE =
  "https://github.com/m1s-Proyectos?tab=repositories";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/francisco-javier-mart%C3%ADnez-quinteros-60a92632b/";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/** Icono cuando aún no hay imagen (`public/`); por defecto base de datos. */
type PortfolioNoImagePreset = "database" | "briefcase";

type PortfolioProject = {
  title: string;
  img?: string;
  /** Qué dibujar en la cabecera de la tarjeta si falta captura del proyecto */
  noImagePreset?: PortfolioNoImagePreset;
  /** Texto accesible bajo la ilustración en lugar del genérico */
  noImageSrOnly?: string;
  tags: string[];
  problem: string;
  arch: string;
  role: string;
  live?: string;
  code?: string;
  /** Detalle técnico ampliable en acordeones (opcional). */
  caseStudy?: {
    sections: CaseStudySectionData[];
  };
};

function ProjectPortfolioCard({
  project: p,
  contentId,
  isExpanded,
  onToggleExpanded,
}: {
  project: PortfolioProject;
  contentId: string;
  isExpanded: boolean;
  onToggleExpanded: () => void;
}) {

  return (
    <div
      className={`group card-reveal flex h-full w-full min-h-0 flex-col overflow-hidden rounded-xl motion-reduce:transform-none motion-reduce:transition-none ${
        p.caseStudy ? "ring-1 ring-brand-secondary/20" : ""
      }`}
    >
      <div className="relative aspect-[16/10] max-h-[11.5rem] min-h-[11rem] shrink-0 overflow-hidden bg-brand-surface flex items-center justify-center">
        {p.img ? (
          <>
            <img
              src={`${import.meta.env.BASE_URL}${p.img}`}
              alt={`Miniatura del proyecto: ${p.title}`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-brand-bg/10 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-brand-surface to-brand-bg opacity-90" />
            {p.noImagePreset === "briefcase" ? (
              <Briefcase
                size={48}
                className="relative z-[1] text-brand-primary/45"
                aria-hidden
              />
            ) : (
              <Database
                size={48}
                className="relative z-[1] text-brand-primary/45"
                aria-hidden
              />
            )}
            <span className="sr-only">
              {p.noImageSrOnly ??
                "Vista del proyecto sin captura aún (MySQL · Java)"}
            </span>
          </>
        )}
      </div>

      <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6 md:p-7">
        <h3 className="mb-2 line-clamp-3 text-lg font-bold leading-snug tracking-tight text-brand-on-surface md:text-xl">
          {p.title}
        </h3>
        <div className="mb-4 flex max-h-[5.25rem] flex-wrap gap-1.5 overflow-y-auto pr-1 [scrollbar-width:thin]">
          {p.tags.map((t) => (
            <span
              key={t}
              className="inline-flex shrink-0 items-center rounded border border-brand-primary/20 bg-brand-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-primary sm:text-[10px]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="relative mb-1 min-h-0 flex-1">
          <div
            id={contentId}
            className={`project-card-desc-window relative overflow-hidden ${
              isExpanded
                ? "max-h-[min(4000px,200vh)]"
                : "max-h-[11.25rem] sm:max-h-[12.25rem] md:max-h-[13rem]"
            }`}
          >
            <div className="space-y-2.5 text-[13px] leading-relaxed text-brand-on-surface-muted md:space-y-3 md:text-sm">
              {p.caseStudy ? (
                <>
                  <p>
                    <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-widest text-brand-primary/90 md:text-[11px]">
                      Alcance
                    </span>
                    <span className="text-brand-on-surface-muted/95">{p.problem}</span>
                  </p>
                  {isExpanded ? (
                    <>
                      <p>
                        <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-widest text-brand-primary/90 md:text-[11px]">
                          Arquitectura
                        </span>
                        <span className="text-brand-on-surface-muted/95">{p.arch}</span>
                      </p>
                      <p>
                        <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-widest text-brand-primary/90 md:text-[11px]">
                          Rol
                        </span>
                        <span className="text-brand-on-surface-muted/95">{p.role}</span>
                      </p>
                      <CaseStudyDetails
                        sections={p.caseStudy.sections}
                        labelledBy={`${contentId}-cs-head`}
                      />
                    </>
                  ) : (
                    <p className="pt-1 text-[11px] italic text-brand-on-surface-muted/80 md:text-[12px]">
                      Pulsa «Ver toda la información» para revisar seguridad administrativa, Supabase, SEO técnico y flujos de conversión integrados en la misma plataforma.
                    </p>
                  )}
                </>
              ) : (
                <>
                  <p>
                    <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-widest text-brand-primary/90 md:text-[11px]">
                      Problema resuelto
                    </span>
                    <span className="text-brand-on-surface-muted/95">{p.problem}</span>
                  </p>
                  <p>
                    <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-widest text-brand-primary/90 md:text-[11px]">
                      Arquitectura
                    </span>
                    <span className="text-brand-on-surface-muted/95">{p.arch}</span>
                  </p>
                  <p>
                    <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-widest text-brand-primary/90 md:text-[11px]">
                      Rol
                    </span>
                    <span className="text-brand-on-surface-muted/95">{p.role}</span>
                  </p>
                </>
              )}
            </div>
          </div>

          <AnimatePresence initial={false}>
            {!isExpanded ? (
              <motion.div
                key={`fade-tip-${contentId}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-16 bg-gradient-to-t from-brand-surface via-brand-surface/88 to-transparent"
                aria-hidden
              />
            ) : null}
          </AnimatePresence>
        </div>

        <div className="mt-auto flex shrink-0 flex-col gap-3 border-t border-brand-outline/35 pt-4">
          <button
            type="button"
            onClick={onToggleExpanded}
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-brand-outline/60 bg-brand-bg/30 px-3 py-2.5 text-[11px] font-bold uppercase tracking-widest text-brand-on-surface transition-all duration-300 hover:border-brand-primary/60 hover:bg-brand-primary/10 hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary sm:text-xs"
            aria-expanded={isExpanded}
            aria-controls={contentId}
          >
            {isExpanded ? "Mostrar menos" : "Ver toda la información"}
            <ChevronDown
              size={16}
              className={`shrink-0 transition-transform duration-300 ease-out ${
                isExpanded ? "rotate-180" : ""
              }`}
              aria-hidden
            />
          </button>

          <div
            className={`flex w-full gap-2.5 ${p.live && p.code ? "flex-col sm:flex-row sm:flex-nowrap" : "flex-col"}`}
          >
            {p.live ? (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] flex-1 min-w-0 items-center justify-center gap-2 rounded-lg bg-brand-primary px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-bg shadow-[0_0_0_1px_rgba(87,241,219,0.35),0_8px_24px_-8px_rgba(87,241,219,0.45)] transition-all duration-300 hover:bg-brand-primary/92 hover:text-brand-bg hover:shadow-[0_0_0_1px_rgba(87,241,219,0.55),0_12px_32px_-6px_rgba(87,241,219,0.5)] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface"
              >
                Ver proyecto
                <ExternalLink size={16} className="shrink-0 opacity-95" aria-hidden />
              </a>
            ) : null}
            {p.code ? (
              <a
                href={p.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] flex-1 min-w-0 items-center justify-center gap-2 rounded-lg border-2 border-brand-primary/65 bg-brand-primary/[0.08] px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:border-brand-primary hover:bg-brand-primary/18 hover:shadow-[0_8px_24px_-12px_rgba(87,241,219,0.35)] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface"
              >
                Ver código
                <Code2 size={16} className="shrink-0 opacity-95" aria-hidden />
              </a>
            ) : null}
            {!p.live && !p.code ? (
              <p className="flex min-h-[44px] flex-1 items-center text-xs italic leading-relaxed text-brand-on-surface-muted">
                Sin demo o repositorio público enlazado todavía.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

const projects: PortfolioProject[] = [
  {
    title: "Plataforma de Venta de Autopartes",
    img: "project-repuestos.jpg",
    tags: ["Next.js", "PostgreSQL", "JavaScript", "React", "HTML/CSS"],
    problem:
      "Marketplace multi-empresa para venta de autopartes con búsqueda pública y gestión de productos.",
    arch:
      "Hoy la aplicación cuenta con una base sólida en frontend (interfaz, flujo de navegación y experiencia públicos). Planeo complementar esa capa con backend en Next.js (rutas API / servidor en el mismo proyecto) más una API REST que todavía está en proceso; objetivos posteriores: inventarios grandes, consultas ordenadas y búsqueda pública robusta cuando la parte servidor quede estable.",
    role:
      "Desarrollo frontend publicado en curso normal; trabajo activo incorporando servidor con Next y la API relacionada —avance paralelo similar al estado de la API hasta cerrar full stack.",
    live: "https://v0-fast-repuestos-hub.vercel.app/",
    code: "https://github.com/m1s-Proyectos/v0-fast-repuestos-hub",
  },
  {
    title: "LaburoSV — Bolsa de trabajo · Proyecto TPI",
    img: "project-laburosv.jpg",
    tags: [
      "Django",
      "PostgreSQL",
      "Django Channels",
      "WebSockets",
      "django-allauth",
      "Cloudinary",
      "Render",
      "Redis",
    ],
    problem:
      "Bolsa de empleo orientada a El Salvador: registro por roles (administrador, empresa y candidato), verificación por correo, alta de empresas con SolicitudEmpresa (pendiente / aprobada / rechazada) y enlaces UUID, perfiles muy completos adaptados al país (departamentos y municipios, CV y medios), ofertas publicadas con favoritos, postulaciones con estados y reseñas entre usuarios.",
    arch:
      "Monorepo Django multi-app (`usuarios`, `perfiles`, `ofertas`, `postulaciones`, `mensajeria`, `adminpanel`): modelos tipo Usuario extendido (AbstractUser), PerfilCandidato y PerfilEmpresa con medios en Cloudinary, Postulacion con unicidad por par candidato–oferta y señales que crean chat grupal/notificaciones. Mensajeria con Channels y WebSocket (`ChatConsumer`), Redis opcional o capa en memoria si no hay broker. Producción configurada para Render, PostgreSQL, login social Google vía django-allauth; admin Django montado en ruta secreta más panel interno propio para aprobar solicitudes de empresa y moderar usuarios.",
    role:
      "Desarrollo colaborativo TPI usando Git día a día a nivel de equipo —ramas, integración entre compañeros y revisión antes de fusión— dentro de un proyecto de las apps más grandes del ciclo.",
    code: "https://github.com/CristianJaeger1705/Proyecto-TPI/tree/rama-de-prueba1",
  },
  {
    title: "Mototaxi Runner (Juego Three.js)",
    img: "project-mototaxi.jpg",
    tags: ["Three.js", "JavaScript", "WebGL", "HTML5 Canvas"],
    problem:
      "Juego 3D interactivo con detección de colisiones y mecánicas de juego fluidas en el navegador.",
    arch: "Motor de gráficos 3D con simulación de física, detección de colisiones y gestión de estado del juego.",
    role: "Desarrollo completo",
    live: "https://moto-taxi-runner.vercel.app/",
    code: "https://github.com/m1s-Proyectos/Moto_Taxi_Runner",
  },
  {
    title: "Clothes Marina — Catálogo comercial integral",
    img: "project-clothes-marina.jpg",
    tags: [
      "React",
      "Supabase",
      "PostgreSQL",
      "Auth + RLS",
      "Storage",
      "TypeScript",
      "Helmet SEO",
      "OAuth GitHub",
      "Vercel",
    ],
    problem:
      "Plataforma lista para producción que conecta el escaparate digital con operaciones reales: clientes exploran colecciones sincronizadas con la base de datos mientras Marina controla contenido, seguridad y nuevos contactos en un solo lugar.",
    arch:
      "SPA en React con vistas públicas contextualizadas más un panel administrativo protegido; Supabase concentra Postgres, buckets de medios, políticas row-level y OAuth (correo/GitHub) según el caso de uso.",
    role:
      "Diseño e implementación desde la experiencia shopper hasta analítica de interés, seguridad basada en roles, SEO técnico y embudos hacia WhatsApp para cerrar ventas en tienda física.",
    live: "https://clothes-marina.vercel.app/",
    code: "https://github.com/m1s-Proyectos/clothes-marina",
    caseStudy: {
      sections: clothesMarinaCaseStudySections,
    },
  },
  {
    title: "Sistema de gestión de biblioteca (DB Engineering)",
    /* Descomenta cuando agregues public/project-biblioteca.jpg — img: "project-biblioteca.jpg", */
    noImageSrOnly:
      "Vista del proyecto sin captura (MySQL, procedimientos y aplicación Java).",
    tags: [
      "MySQL Workbench",
      "MySQL",
      "Java",
      "Apache NetBeans",
      "Modelado ER",
    ],
    problem:
      "Diseño e implementación de un sistema para administrar biblioteca con datos consistentes, reglas de negocio en el motor y automatización donde corresponda.",
    arch: "Modelado relacional desde cero en MySQL Workbench: normalización e integridad referencial. Lógica avanzada con stored procedures, funciones, triggers, vistas y cursores; base integrada desde una aplicación Java (Apache NetBeans) para operaciones CRUD y validaciones.",
    role: "Modelado de base de datos, SQL avanzado e integración con aplicación cliente",
    code: "https://github.com/m1s-Proyectos/Proyecto_Biblioteca",
  },
];

const skillCategories = [
  {
    icon: Globe,
    title: "Frontend",
    skills: [
      "JavaScript",
      "React",
      "TanStack Query",
      "HTML5",
      "CSS3",
      "Three.js",
      "TypeScript",
    ],
  },
  {
    icon: Cpu,
    title: "Backend",
    skills: [
      "Ruby on Rails",
      "Node.js",
      "Java",
      "Spring Boot (básico)",
      "Python",
      "Django",
      "Django Channels",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    icon: Database,
    title: "Bases de datos",
    skills: [
      "PostgreSQL",
      "Oracle",
      "SQL Server",
      "MySQL",
      "SP / triggers / vistas (MySQL)",
      "Redis",
    ],
  },
  {
    icon: Wrench,
    title: "Herramientas",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Apache HTTP (básico)",
      "Nginx (básico)",
      "IIS (básico)",
      "Vercel",
      "VS Code",
      "IntelliJ IDEA",
      "Apache NetBeans",
      "Cursor AI",
      "V0",
      "Windsurf AI",
      "Postman",
    ],
  },
];

const experienceIntro = [
  "Mi trabajo visible hoy está en proyectos como Fast Repuestos (Rails), LaburoSV (bolsa para El Salvador desarrollada en equipo con Django, PostgreSQL y mensajeria en tiempo real), Clothes-Marina y Mototaxi Runner. Muchos tienen código y demo públicos.",
  "También desarrollé un proyecto de ingeniería de bases de datos: sistema de gestión de biblioteca modelado desde cero en MySQL Workbench (normalización, integridad referencial) con stored procedures, funciones, triggers, vistas y cursores; la base quedó consumida desde una aplicación Java con Apache NetBeans para operaciones, automatización y reglas de negocio desde el escritorio.",
  "Estoy aprendiendo a trabajar con APIs usando TanStack Query en el frontend mientras desarrollo una API propia: me interesa dominar cliente, servidor y estados asíncronos con algo que voy construyendo paso a paso.",
];

const experienceTimeline = [
  {
    date: "2023 — Presente",
    company: "Proyectos portfolio y práctica con APIs",
    desc: "Desarrollo y despliegue de proyectos públicos y colaborativos (autopartes, LaburoSV, catálogo, juego); modelado MySQL avanzado con Java/NetBeans (biblioteca) y práctica consumiendo APIs con TanStack Query sobre una API en construcción.",
  },
  {
    date: "2022 — 2023",
    company: "LABURO SV",
    desc: "Contribución a portales de empleo LABURO SV; en el equipo TPI desarrollamos LaburoSV (Django multi-app): ofertas, postulaciones, favoritos y panel de aprobaciones, con trabajo diario distribuido vía Git. Optimización de consultas y mejora de tiempos en servidor.",
  },
  {
    date: "2021 — 2022",
    company: "Formación y proyectos de aprendizaje",
    desc: "Bases en desarrollo web, automatización ligera de tareas con scripts y prácticas con React y Python enfocadas al aprendizaje y a proyectos personales —no en sistemas corporativos a gran escala.",
  },
];

const aboutHighlights: {
  icon: typeof Terminal;
  title: string;
  body: string;
}[] = [
  {
    icon: Terminal,
    title: "Tecnologías principales",
    body: "Backend con Python, JavaScript, React, Ruby on Rails, PostgreSQL, Oracle, SQL Server, MySQL Workbench y modelado ER con triggers, vistas y SPs en proyectos prácticos. Experiencia básica con Java + Spring Boot en un proyecto pequeño ya entregado. Conocimiento introductorio de servidores web: Apache, Nginx e IIS.",
  },
  {
    icon: Briefcase,
    title: "LABURO SV",
    body: "Bolsa de trabajo inclusiva para empresas y trabajadores freelance.",
  },
  {
    icon: Zap,
    title: "Enfoque actual",
    body: "Practicar consumo de APIs con TanStack Query y terminar mi API de práctica junto al frontend que la consume.",
  },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<
    Record<string, boolean>
  >({});

  const navLinkClass =
    "text-brand-on-surface-muted hover:text-brand-primary transition-colors py-2";
  const navSections = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Acerca de mí" },
    { href: "#projects", label: "Proyectos" },
    { href: "#skills", label: "Habilidades" },
    { href: "#experience", label: "Experiencia" },
  ];

  return (
    <div className="min-h-screen">
      <header className="glass-nav flex flex-col">
        <nav className="h-16 max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-extrabold tracking-tighter text-brand-primary"
          >
            FJ
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {navSections.map(({ href, label }) => (
              <a key={href} href={href} className={navLinkClass}>
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 border border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary/10 transition-all"
            >
              Contacto
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-brand-primary p-2 -mr-2"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-brand-outline/50 bg-brand-bg/95 backdrop-blur-xl"
            >
              <div className="px-6 py-4 flex flex-col gap-1 font-semibold text-sm">
                {navSections.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 px-4 py-3 border border-brand-primary text-brand-primary rounded-lg text-center hover:bg-brand-primary/10 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Contacto
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <section
        id="home"
        className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/10 blur-[120px] rounded-full" />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-4 w-full mb-10">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <img
                  src={`${import.meta.env.BASE_URL}yo.jpg`}
                  alt="Francisco Martínez"
                  width={160}
                  height={160}
                  decoding="async"
                  fetchPriority="high"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-brand-primary/50 shadow-lg ring-2 ring-brand-primary/20"
                />
              </motion.div>

              <motion.span
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-sm font-bold tracking-widest text-brand-primary uppercase block text-center"
              >
                Desarrollador web junior
              </motion.span>
            </div>

            <div className="text-center space-y-5 mb-10">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance"
              >
                Francisco Martínez
              </motion.h1>

                <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-lg md:text-xl text-brand-on-surface font-medium leading-snug max-w-2xl mx-auto"
              >
                Proyectos recientes como{" "}
                <span className="text-brand-primary">
                  Fast Repuestos, Clothes-Marina y Mototaxi Runner
                </span>
                : marketplace de autopartes, catálogo en línea para tienda física
                y juego 3D en el navegador.
              </motion.p>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-base md:text-[17px] text-brand-on-surface-muted max-w-xl mx-auto leading-relaxed"
              >
                Sigo puliendo{" "}
                <span className="text-brand-on-surface">
                  JavaScript, React y Ruby on Rails
                </span>
                . Ahora estoy{" "}
                <span className="text-brand-on-surface font-medium">
                  aprendiendo a integrar datos con TanStack Query
                </span>{" "}
                contra una{" "}
                <span className="text-brand-on-surface font-medium">
                  API en desarrollo que estoy montando yo mismo
                </span>
                , para práctica de punta a punta.
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a
                href="#projects"
                className="bg-brand-primary text-brand-bg px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Ver proyectos
                <ArrowRight size={20} />
              </a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand-outline text-brand-on-surface px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-brand-surface-light transition-all shadow-sm"
              >
                Descargar CV
                <Download size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-brand-surface/30">
        <div className="section-container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl font-bold mb-12 flex items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-brand-primary" /> Acerca de mí
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-brand-surface p-8 rounded-xl border border-brand-outline/50 shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-brand-primary mb-4">
                  Introducción
                </h3>
                <p className="text-brand-on-surface-muted leading-relaxed">
                  Soy un desarrollador web enfocado en proyectos prácticos que se
                  ven en código y en demo: autopartes, catálogo para negocio
                  local y experimentos como un juego 3D en el navegador. También
                  estoy desarrollando una API propia para practicar con TanStack
                  Query en el cliente.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="bg-brand-surface p-8 rounded-xl border border-brand-outline/50"
                >
                  <h3 className="text-xl font-semibold text-brand-primary mb-4">
                    Experiencia técnica
                  </h3>
                  <p className="text-brand-on-surface-muted leading-relaxed">
                    Trabajo sobre todo con JavaScript y Ruby on Rails para
                    interfaces claras y pantallas donde el usuario encuentra lo
                    que busca. Priorizo código legible y estructuras que pueda
                    mantener cuando el proyecto crece.
                  </p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="bg-brand-surface p-8 rounded-xl border border-brand-outline/50"
                >
                  <h3 className="text-xl font-semibold text-brand-primary mb-4">
                    Enfoque actual
                  </h3>
                  <p className="text-brand-on-surface-muted leading-relaxed">
                    Consolidar llamadas HTTP tipadas desde React con TanStack
                    Query, terminar la API que las alimenta y seguir mejorando esos tres proyectos con feedback real.
                  </p>
                </motion.div>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-brand-primary/5 border border-brand-primary/20 p-8 rounded-xl h-full"
              >
                <h3 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-8">
                  Destacados
                </h3>
                <ul className="space-y-8">
                  {aboutHighlights.map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="p-2 h-fit bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors shrink-0">
                        <item.icon
                          size={20}
                          className="text-brand-primary group-hover:text-inherit"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-on-surface mb-1">
                          {item.title}
                        </p>
                        <p className="text-sm text-brand-on-surface-muted leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-4">
            <div>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-4xl font-bold"
              >
                Proyectos
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-brand-on-surface-muted mt-2 max-w-lg leading-relaxed"
              >
                Despliega el detalle con «Ver toda la información» manteniendo la grilla limpia y
                proporciones parejas.
              </motion.p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="hidden md:block font-mono text-brand-primary/50 text-sm tracking-widest"
            >
              PORTFOLIO / PRODUCCIÓN
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-7 items-stretch md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-9"
          >
            {projects.map((p, idx) => (
              <motion.div
                key={p.title}
                variants={fadeIn}
                className="flex h-full min-h-[24rem] flex-col sm:min-h-[26rem] lg:min-h-[28rem]"
              >
                <ProjectPortfolioCard
                  project={p}
                  contentId={`project-desc-${idx}`}
                  isExpanded={!!expandedProjects[p.title]}
                  onToggleExpanded={() =>
                    setExpandedProjects((prev) => ({
                      ...prev,
                      [p.title]: !prev[p.title],
                    }))
                  }
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="skills" className="bg-brand-bg/50">
        <div className="section-container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-4"
          >
            Habilidades técnicas
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center text-brand-on-surface-muted max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Stack alineado a proyectos reales: frontend, backend, datos y
            herramientas de entrega.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 text-brand-primary">
                  <cat.icon size={24} />
                  <h3 className="text-xl font-bold tracking-tight">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 bg-brand-surface rounded-lg text-sm border border-brand-outline/50 hover:border-brand-primary transition-colors cursor-default whitespace-nowrap"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="section-container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl font-bold mb-8"
          >
            Experiencia y formación continua
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4 mb-12 max-w-4xl"
          >
            {experienceIntro.map((para, idx) => (
              <p
                key={idx}
                className="text-brand-on-surface-muted leading-relaxed"
              >
                {para}
              </p>
            ))}
            <p className="text-brand-primary font-semibold border-l-2 border-brand-primary/40 pl-4">
              Ahora mismo profundizo en cliente + API con TanStack Query sobre
              un backend que voy armando yo, además de iterar sobre mis
              proyectos públicos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Sparkles,
                t: "Proyectos web y datos",
                d: "Fast Repuestos, Clothes-Marina y Mototaxi Runner públicos online; LaburoSV (equipo Django) sobre bolsa laboral salvadoreña; biblioteca MySQL/Java con modelo avanzado en Workbench.",
              },
              {
                icon: Briefcase,
                t: "LABURO SV",
                d: "Bolsa inclusiva para empresas y profesionales freelance.",
              },
              {
                icon: Zap,
                t: "API + TanStack Query",
                d: "Aprendiendo a consumir y diseñar APIs: frontend con TanStack Query y una API en desarrollo como laboratorio.",
              },
            ].map((x, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-brand-surface p-6 rounded-xl border border-brand-outline/30"
              >
                <div className="flex items-center gap-3 text-brand-primary mb-3">
                  <x.icon size={22} />
                  <h4 className="font-bold">{x.t}</h4>
                </div>
                <p className="text-sm text-brand-on-surface-muted leading-relaxed">
                  {x.d}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            {experienceTimeline.map((exp, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-brand-surface p-8 rounded-xl border border-brand-outline/20 flex flex-col md:flex-row gap-8 hover:bg-brand-surface-light transition-all"
              >
                <div className="md:w-1/4">
                  <span className="text-brand-primary font-bold text-sm tracking-wide">
                    {exp.date}
                  </span>
                  <h4 className="text-xl font-bold mt-1 tracking-tight">
                    {exp.company}
                  </h4>
                </div>
                <div className="md:w-3/4">
                  <p className="text-brand-on-surface-muted leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-gradient-to-t from-brand-bg to-brand-surface/30"
      >
        <div className="section-container text-center max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-balance mb-8">
              ¿Hablamos de tu <br />{" "}
              <span className="text-brand-primary">próximo proyecto</span>?
            </h2>
            <p className="text-lg text-brand-on-surface-muted mb-12 max-w-2xl mx-auto leading-relaxed">
              Conectémonos y conversemos sobre cómo puedo ayudar a construir tu
              próximo proyecto.
            </p>

            <div className="mb-12">
              <a
                href="mailto:mq21004@ues.edu.sv"
                className="text-2xl md:text-4xl font-bold text-brand-primary hover:underline underline-offset-8 decoration-4 transition-all break-all"
              >
                mq21004@ues.edu.sv
              </a>
            </div>

            <div className="flex justify-center flex-wrap gap-8">
              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-on-surface-muted hover:text-brand-primary transition-colors font-bold tracking-widest text-xs"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-on-surface-muted hover:text-brand-primary transition-colors font-bold tracking-widest text-xs"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-on-surface-muted hover:text-brand-primary transition-colors font-bold tracking-widest text-xs"
              >
                <FileText size={16} />
                CV / Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-brand-outline/20 py-10">
        <div className="section-container py-0 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-brand-on-surface-muted">
            © {new Date().getFullYear()} Francisco Martínez · Portfolio
          </p>
          <a
            href="#home"
            className="flex items-center gap-3 text-brand-primary text-sm font-bold group hover:-translate-y-1 transition-transform"
          >
            Volver arriba
            <div className="p-2 border border-brand-primary/30 rounded-full group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors">
              <ChevronUp size={16} />
            </div>
          </a>
        </div>
      </footer>

      <a
        href="mailto:mq21004@ues.edu.sv"
        className="fixed bottom-8 right-8 p-4 bg-brand-primary text-brand-bg rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 hidden md:flex"
        aria-label="Enviar correo"
      >
        <Mail size={24} />
      </a>
    </div>
  );
}
