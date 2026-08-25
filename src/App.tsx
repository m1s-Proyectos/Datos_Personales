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
  Map,
  Menu,
  X,
  ExternalLink,
  Code2,
  ChevronDown,
} from "lucide-react";
import { CaseStudyDetails } from "./components/CaseStudyDetails";
import { busnetCaseStudySections } from "./data/busnetCaseStudy";
import { clothesMarinaCaseStudySections } from "./data/clothesMarinaCaseStudy";
import { mototaxiRunnerCaseStudySections } from "./data/mototaxiRunnerCaseStudy";
import type { CaseStudySectionData } from "./data/caseStudyTypes";

const CV_URL =
  "https://drive.google.com/file/d/1SsNwnkNK7v6vW4-WPYESSm-eFU5e8mRC/view?usp=sharing";
const GITHUB_PROFILE =
  "https://github.com/m1s-Proyectos?tab=repositories";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/francisco-javier-mart%C3%ADnez-quinteros-60a92632b/";

const PROFESSIONAL_LANE =
  "Desarrollador web junior · React, TypeScript y APIs";

const HERO_PITCH =
  "Proyectos desplegados en movilidad pública, e-commerce y full stack. Busco mi primera oportunidad formal en equipo de producto.";

const HERO_META =
  "El Salvador · Tiempo completo · Remoto o híbrido · Inglés B1";

const portfolioMetrics = [
  "Catálogo en producción · 49 interacciones Google en el 1.er mes",
  "Buildathon San Salvador — demo funcional con rutas reales",
  "Proyecto TPI — app multi-rol con chat en tiempo real",
];

const AI_ASSISTANCE_NOTE =
  "Uso asistencia de IA (Cursor, Codex, etc.) para acelerar desarrollo; el criterio técnico y la integración son míos.";

const workExperience = [
  {
    date: "Freelance · cliente real",
    company: "Clothes Marina — tienda física",
    desc: "Levanté requerimientos desde cero, diseñé e implementé el catálogo en producción que la tienda usa hoy. En el primer mes el Perfil de Negocio en Google registró 49 interacciones (llamadas, direcciones y clics). Busco mi primera oportunidad en empresa corporativa.",
  },
];

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
type PortfolioNoImagePreset = "database" | "briefcase" | "map";

type PortfolioProject = {
  title: string;
  img?: string;
  /** Qué dibujar en la cabecera de la tarjeta si falta captura del proyecto */
  noImagePreset?: PortfolioNoImagePreset;
  /** Texto accesible bajo la ilustración en lugar del genérico */
  noImageSrOnly?: string;
  /** Muestra badge de proyecto activo en desarrollo */
  inDevelopment?: boolean;
  tags: string[];
  /** Una frase de impacto / resultado del proyecto. */
  impact: string;
  problem: string;
  arch: string;
  role: string;
  live?: string;
  code?: string;
  /** Aclaración visible junto al enlace de código (p. ej. repo privado). */
  codePrivate?: boolean;
  /** Captura de métrica real del negocio (opcional). */
  metricsProof?: {
    img: string;
    alt: string;
    caption: string;
  };
  /** Detalle técnico ampliable en acordeones (opcional). */
  caseStudy?: {
    sections: CaseStudySectionData[];
    teaser?: string;
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
            {p.inDevelopment ? (
              <span className="absolute top-3 left-3 z-[2] rounded-md border border-amber-400/40 bg-amber-500/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-200 sm:text-[10px]">
                En desarrollo
              </span>
            ) : null}
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-brand-surface to-brand-bg opacity-90" />
            {p.inDevelopment ? (
              <span className="absolute top-3 left-3 z-[2] rounded-md border border-amber-400/40 bg-amber-500/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-200 sm:text-[10px]">
                En desarrollo
              </span>
            ) : null}
            {p.noImagePreset === "briefcase" ? (
              <Briefcase
                size={48}
                className="relative z-[1] text-brand-primary/45"
                aria-hidden
              />
            ) : p.noImagePreset === "map" ? (
              <Map
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
          <div className="space-y-2.5 text-[13px] leading-relaxed text-brand-on-surface-muted md:space-y-3 md:text-sm">
            <p>
              <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-widest text-brand-primary/90 md:text-[11px]">
                Impacto
              </span>
              <span className="text-brand-on-surface-muted/95">{p.impact}</span>
            </p>
            <p>
              <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-widest text-brand-primary/90 md:text-[11px]">
                Mi rol
              </span>
              <span className="text-brand-on-surface-muted/95">{p.role}</span>
            </p>
            {p.metricsProof ? (
              <figure className="overflow-hidden rounded-lg border border-brand-outline/40 bg-brand-bg/30">
                <img
                  src={`${import.meta.env.BASE_URL}${p.metricsProof.img}`}
                  alt={p.metricsProof.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover object-top"
                />
                <figcaption className="px-3 py-2 text-[11px] leading-snug text-brand-on-surface-muted/90 sm:text-[12px]">
                  {p.metricsProof.caption}
                </figcaption>
              </figure>
            ) : null}
          </div>

          <div className="relative mt-3">
            <div
              id={contentId}
              className={`project-card-desc-window relative overflow-hidden ${
                isExpanded
                  ? "max-h-[min(4000px,200vh)]"
                  : "max-h-[4.5rem] sm:max-h-[5rem]"
              }`}
            >
              <div className="space-y-2.5 text-[13px] leading-relaxed text-brand-on-surface-muted md:space-y-3 md:text-sm">
                {p.caseStudy ? (
                  <>
                    {isExpanded ? (
                      <>
                        <p>
                          <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-widest text-brand-primary/90 md:text-[11px]">
                            Alcance
                          </span>
                          <span className="text-brand-on-surface-muted/95">{p.problem}</span>
                        </p>
                        <p>
                          <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-widest text-brand-primary/90 md:text-[11px]">
                            Arquitectura
                          </span>
                          <span className="text-brand-on-surface-muted/95">{p.arch}</span>
                        </p>
                        <CaseStudyDetails
                          sections={p.caseStudy.sections}
                          labelledBy={`${contentId}-cs-head`}
                        />
                      </>
                    ) : (
                      <p className="pt-1 text-[11px] italic text-brand-on-surface-muted/80 md:text-[12px]">
                        {p.caseStudy.teaser ??
                          "Pulsa «Ver toda la información» para revisar el alcance técnico detallado del proyecto."}
                      </p>
                    )}
                  </>
                ) : isExpanded ? (
                  <>
                    <p>
                      <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-widest text-brand-primary/90 md:text-[11px]">
                        Alcance
                      </span>
                      <span className="text-brand-on-surface-muted/95">{p.problem}</span>
                    </p>
                    <p>
                      <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-widest text-brand-primary/90 md:text-[11px]">
                        Arquitectura
                      </span>
                      <span className="text-brand-on-surface-muted/95">{p.arch}</span>
                    </p>
                  </>
                ) : (
                  <p className="text-[11px] italic text-brand-on-surface-muted/80 md:text-[12px]">
                    Pulsa «Ver toda la información» para revisar alcance y
                    arquitectura.
                  </p>
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
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-10 bg-gradient-to-t from-brand-surface via-brand-surface/88 to-transparent"
                  aria-hidden
                />
              ) : null}
            </AnimatePresence>
          </div>
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
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full flex-1 min-w-0 items-center justify-center gap-2 rounded-lg border-2 border-brand-primary/65 bg-brand-primary/[0.08] px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:border-brand-primary hover:bg-brand-primary/18 hover:shadow-[0_8px_24px_-12px_rgba(87,241,219,0.35)] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface"
                >
                  Ver código
                  <Code2 size={16} className="shrink-0 opacity-95" aria-hidden />
                </a>
                {p.codePrivate ? (
                  <p className="text-[10px] italic leading-snug text-brand-on-surface-muted/90 sm:text-[11px]">
                    Repositorio privado (rama Frank) — el enlace solo abre con acceso
                    concedido por el equipo del proyecto.
                  </p>
                ) : null}
              </div>
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
    title: "BusNET — Movilidad & transporte público (SV)",
    img: "project-busnet.jpg",
    inDevelopment: true,
    tags: [
      "React",
      "Vite",
      "MapLibre GL",
      "Node.js",
      "Express",
      "Rust",
      "Axum",
      "Turf.js",
      "GeoJSON",
      "PostgreSQL",
    ],
    impact:
      "Buildathon San Salvador — demo funcional con rutas reales; planner de buses desplegado con mapa, búsqueda y tráfico comunitario.",
    problem:
      "Plataforma de movilidad para el transporte público de El Salvador: indicás origen y destino y el sistema arma el viaje (qué bus, transbordos, caminata, tiempo y costo). Proyecto en desarrollo activo con el equipo del Cursor Buildathon San Salvador — lo desplegado ya cubre planner, mapa, búsqueda y tráfico comunitario.",
    arch:
      "Monorepo cliente–servidor: frontend React + Vite + MapLibre GL (mobile-first); API Node (Express + Turf.js) como motor original intocable; API Rust (Axum, rusty_busnet) como port del mismo contrato con ~990 GeoJSON; rutas canónicas en GeoJSON y Postgres opcional (Supabase) para lugares; tokens del design-system/ sin hex sueltos en UI.",
    role:
      "En equipo de 4 del Cursor Buildathon San Salvador: implementé el módulo de rastreo e inserción de rutas en la API y el módulo para agregar reportes comunitarios; trabajé en planner y UI en mis partes asignadas. En diseño sigo mejorando rutas, alineándolas a trazados reales, y avanzo la parte de notificaciones y mensajes push.",
    live: "https://busnet-sv.vercel.app/",
    code: "https://github.com/aedneth/busnet-final/tree/Frank",
    codePrivate: true,
    caseStudy: {
      teaser:
        "Pulsa «Ver toda la información» para revisar el problema de movilidad, arquitectura Node/Rust, flujo del planner geométrico y qué está desplegado vs. roadmap.",
      sections: busnetCaseStudySections,
    },
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
    impact:
      "Catálogo en producción con tracción real: 49 interacciones en el Perfil de Negocio de Google en el primer mes (llamadas, direcciones y clics al sitio).",
    problem:
      "Plataforma lista para producción que conecta el escaparate digital con operaciones reales: clientes exploran colecciones sincronizadas con la base de datos mientras Marina controla contenido, seguridad y nuevos contactos en un solo lugar.",
    arch:
      "SPA en React con vistas públicas contextualizadas más un panel administrativo protegido; Supabase concentra Postgres, buckets de medios, políticas row-level y OAuth (correo/GitHub) según el caso de uso.",
    role:
      "Proyecto ideado y construido por mí solo —desde el relevamiento del negocio hasta el despliegue— incorporando panel admin, Supabase, SEO y WhatsApp para que el catálogo fuera usable en la operación real.",
    live: "https://clothes-marina.vercel.app/",
    code: "https://github.com/m1s-Proyectos/clothes-marina",
    metricsProof: {
      img: "project-clothes-marina-metrics.png",
      alt: "Gráfico de rendimiento de Google: 49 interacciones del Perfil de Negocio de Clothes Marina en julio de 2026",
      caption:
        "Rendimiento del Perfil de Negocio en Google (jul 2026): los clientes empiezan a interactuar en el primer mes — llamadas, reservas, direcciones y clics al sitio web.",
    },
    caseStudy: {
      teaser:
        "Pulsa «Ver toda la información» para revisar seguridad administrativa, Supabase, SEO técnico y flujos de conversión integrados en la misma plataforma.",
      sections: clothesMarinaCaseStudySections,
    },
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
    impact:
      "Proyecto TPI — app multi-rol con chat en tiempo real; bolsa de empleo para El Salvador con registro por roles y flujos de postulación.",
    problem:
      "Bolsa de empleo orientada a El Salvador: registro por roles (administrador, empresa y candidato), verificación por correo, alta de empresas con SolicitudEmpresa (pendiente / aprobada / rechazada) y enlaces UUID, perfiles muy completos adaptados al país (departamentos y municipios, CV y medios), ofertas publicadas con favoritos, postulaciones con estados y reseñas entre usuarios.",
    arch:
      "Monorepo Django multi-app (`usuarios`, `perfiles`, `ofertas`, `postulaciones`, `mensajeria`, `adminpanel`): modelos tipo Usuario extendido (AbstractUser), PerfilCandidato y PerfilEmpresa con medios en Cloudinary, Postulacion con unicidad por par candidato–oferta y señales que crean chat grupal/notificaciones. Mensajería con Channels y WebSocket (`ChatConsumer`), Redis opcional o capa en memoria si no hay broker. Producción configurada para Render, PostgreSQL, login social Google vía django-allauth; admin Django montado en ruta secreta más panel interno propio para aprobar solicitudes de empresa y moderar usuarios.",
    role:
      "En equipo de 5 del TPI, desarrollé el módulo de chat y mensajería con variaciones por rol —más complejidad en permisos y flujos— y quedó finalizado con éxito.",
    code: "https://github.com/CristianJaeger1705/Proyecto-TPI/tree/Frank",
    codePrivate: true,
  },
  {
    title: "Plataforma de Venta de Autopartes (e-commerce)",
    img: "project-repuestos.jpg",
    tags: ["Next.js", "React", "JavaScript", "HTML/CSS", "Solo frontend"],
    impact:
      "Marketplace de autopartes con interfaz pública desplegada: navegación y búsqueda visual — sin backend ni persistencia de datos en producción todavía.",
    problem:
      "Marketplace multi-empresa para venta de autopartes; hoy la demo en línea muestra solo la capa frontend (UI y flujos navegables), sin funcionalidad de servidor, API ni base de datos activa.",
    arch:
      "Frontend publicado en Next.js/React (interfaz, rutas y experiencia pública). Backend, API REST y PostgreSQL están planeados e en desarrollo — aún no forman parte del despliegue actual.",
    role:
      "Proyecto creado por mí solo: ideé y desplegué únicamente el frontend; la capa servidor con Next.js y API REST sigue pendiente para cerrar full stack.",
    live: "https://v0-fast-repuestos-hub.vercel.app/",
    code: "https://github.com/m1s-Proyectos/v0-fast-repuestos-hub",
  },
  {
    title: "Mototaxi Runner (Juego Three.js)",
    img: "project-mototaxi.jpg",
    tags: [
      "TypeScript",
      "Vite",
      "Three.js",
      "Tailwind CSS",
      "GSAP",
      "Howler",
      "Supabase",
      "WebGL",
    ],
    impact:
      "Juego 3D arcade desplegado con demo jugable, progresión en garaje y multijugador — producto completo en el navegador.",
    problem:
      "Juego web arcade de mototaxi: llevas pasajeros por una ciudad nocturna (Pupy → Papá → Casa), recoges monedas y turbos, mejoras la moto en un taller local y compites en solitario o multijugador.",
    arch:
      "SPA TypeScript + Vite con render 3D en Three.js; capas `src/game/` (motor, física arcade, input, audio), `src/ui/` (splash, HUD, garaje, minimapa), `src/lib/` (cartera, upgrades, salas, Supabase) y `src/track/` (ruta, checkpoints, obstáculos). UI con Tailwind CSS 4 y GSAP; audio con Howler; persistencia local (localStorage) y multijugador vía Supabase Realtime + Postgres.",
    role:
      "Ideado y desarrollado íntegramente por mí: motor Three.js, loop de juego, UI, garaje, multijugador y despliegue.",
    live: "https://moto-taxi-runner.vercel.app/",
    code: "https://github.com/m1s-Proyectos/Moto_Taxi_Runner",
    caseStudy: {
      teaser:
        "Pulsa «Ver toda la información» para revisar modos de juego, gameplay arcade, garaje, multijugador 1v1 y stack técnico (Three.js, GSAP, Howler, Supabase).",
      sections: mototaxiRunnerCaseStudySections,
    },
  },
  {
    title: "Sistema de gestión de biblioteca (DB Engineering)",
    img: "project-biblioteca.png",
    tags: [
      "MySQL Workbench",
      "MySQL",
      "Java",
      "Java Swing",
      "Apache NetBeans",
      "Modelado ER",
    ],
    impact:
      "Sistema de biblioteca FIA UES modelado e implementado con reglas de negocio en MySQL y cliente de escritorio funcional.",
    problem:
      "Diseño e implementación de un sistema para administrar la biblioteca universitaria FIA UES con datos consistentes, reglas de negocio en el motor y automatización donde corresponda.",
    arch:
      "Modelado relacional desde cero en MySQL Workbench: normalización e integridad referencial. Lógica avanzada con stored procedures, funciones, triggers, vistas y cursores; base consumida desde una aplicación de escritorio Java con interfaz gráfica tipo Windows Forms (Java Swing en Apache NetBeans): pestañas para vistas, procedimientos, funciones, cursores y mantenimiento.",
    role:
      "Proyecto propio de principio a fin: modelado ER, SQL avanzado (SP, triggers, cursores) e integración con la app Java Swing.",
    code: "https://github.com/m1s-Proyectos/Proyecto_Biblioteca",
  },
];

const skillCategories = [
  {
    icon: Globe,
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vite",
    ],
  },
  {
    icon: Cpu,
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "REST APIs (básico)",
    ],
  },
  {
    icon: Database,
    title: "Bases de datos",
    skills: ["PostgreSQL", "MySQL", "SP / triggers / vistas (MySQL)"],
  },
  {
    icon: Wrench,
    title: "Herramientas",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "IntelliJ IDEA",
      "Postman",
      "Supabase",
      "Google Drive",
      "Azure (básico)",
    ],
  },
];

const familiaritySkills = [
  "TanStack Query",
  "MapLibre GL",
  "Three.js",
  "Rust (exposición en proyecto)",
  "Java",
  "Java Swing",
  "JavaFX (básico)",
  "Spring Boot (básico)",
  "Django Channels",
  "WebSockets",
  "JSON (archivos)",
  "Oracle",
  "SQL Server",
  "Redis",
  "MySQL Workbench",
  "Docker",
  "Apache HTTP (básico)",
  "Nginx (básico)",
  "IIS (básico)",
  "SQL Developer",
  "Apache NetBeans",
];

const currentLearning = {
  title: "Aprendizaje actual",
  body: "Sigo trabajando en BusNET con mejoras activas — rutas más precisas, planner y notificaciones — junto al equipo del Buildathon. En paralelo, pongo en práctica el consumo y diseño de APIs con TanStack Query en React mientras armo una API propia como laboratorio.",
};

const experienceIntro = [
  "Hoy destaco BusNET (movilidad pública en El Salvador, en desarrollo con el equipo del Buildathon) y Clothes Marina (catálogo comercial en producción con React y Supabase). Ambos tienen demo pública.",
  "También participé en LaburoSV (bolsa TPI con Django, PostgreSQL y mensajería en tiempo real), Fast Repuestos, Mototaxi Runner y un sistema de biblioteca modelado en MySQL Workbench con interfaz Java Swing.",
];

const experienceTimeline = [
  {
    date: "2023 — Presente",
    company: "Proyectos portfolio y productos desplegados",
    desc: "BusNET (Buildathon, equipo activo): planner de buses sobre GeoJSON locales. Clothes Marina en producción. Además: LaburoSV, autopartes, Mototaxi Runner y biblioteca MySQL/Java.",
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
    body: "React, TypeScript, Django, Node.js y PostgreSQL en proyectos desplegados. Modelado ER con MySQL Workbench (triggers, vistas y SPs). Java + Spring Boot en un proyecto pequeño entregado.",
  },
  {
    icon: Map,
    title: "BusNET",
    body: "Planner de movilidad pública sobre rutas reales en El Salvador — mapa, búsqueda y tráfico comunitario desplegados; en evolución con el equipo del Buildathon.",
  },
  {
    icon: Briefcase,
    title: "Clothes Marina",
    body: "Catálogo comercial en producción: escaparate React + Supabase, panel admin, SEO y embudo hacia WhatsApp para la tienda física.",
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

        <div className="section-container relative z-10 py-10 md:py-14">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mb-6"
            >
              <img
                src={`${import.meta.env.BASE_URL}yo.jpg`}
                alt="Francisco Martínez"
                width={160}
                height={160}
                decoding="async"
                fetchPriority="high"
                className="mx-auto w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-brand-primary/50 shadow-lg ring-2 ring-brand-primary/20"
              />
            </motion.div>

            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance mb-3"
            >
              Francisco Martínez
            </motion.h1>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-sm md:text-base font-semibold text-brand-primary mb-4"
            >
              {PROFESSIONAL_LANE}
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-base md:text-[17px] text-brand-on-surface-muted leading-relaxed mb-4"
            >
              {HERO_PITCH}
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-xs md:text-sm text-brand-on-surface-muted/85 mb-8"
            >
              {HERO_META}
            </motion.p>

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
                  Desarrollador web junior con foco en productos desplegados.
                  Lo más reciente:{" "}
                  <span className="text-brand-on-surface font-medium">
                    BusNET
                  </span>{" "}
                  (movilidad pública, pensado en Buildathon 2026) y{" "}
                  <span className="text-brand-on-surface font-medium">
                    Clothes Marina
                  </span>{" "}
                  (catálogo + panel admin en Supabase). LaburoSV, autopartes,
                  Mototaxi Runner y biblioteca completan el portfolio con
                  trabajo en equipo, frontend y datos.
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
                    Trabajo sobre todo con JavaScript y React para
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
                    Proyectos destacados
                  </h3>
                  <p className="text-brand-on-surface-muted leading-relaxed">
                    <span className="text-brand-on-surface font-medium">
                      BusNET
                    </span>{" "}
                    concentra mapa, planner y tráfico comunitario sobre GeoJSON
                    locales;{" "}
                    <span className="text-brand-on-surface font-medium">
                      Clothes Marina
                    </span>{" "}
                    conecta escaparate digital con operaciones reales del
                    negocio. Son los proyectos que mejor muestran mi lane
                    actual.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-brand-bg/40 p-8 rounded-xl border border-brand-outline/40 border-dashed"
              >
                <h3 className="text-xl font-semibold text-brand-primary mb-4 flex items-center gap-2">
                  <Zap size={20} aria-hidden />
                  {currentLearning.title}
                </h3>
                <p className="text-brand-on-surface-muted leading-relaxed">
                  {currentLearning.body}
                </p>
              </motion.div>
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
            Núcleo alineado a proyectos en producción; el resto en familiaridad
            por exposición en TPI, biblioteca o side projects.
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-14 mx-auto max-w-4xl rounded-xl border border-brand-outline/35 bg-brand-surface/40 p-6 sm:p-8"
          >
            <div className="mb-4 flex items-center gap-3 text-brand-on-surface-muted">
              <Sparkles size={20} className="shrink-0 text-brand-primary/80" />
              <h3 className="text-lg font-bold tracking-tight text-brand-on-surface">
                Familiaridad
              </h3>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-brand-on-surface-muted">
              Tecnologías con las que he trabajado en menor medida, en equipo o
              en proyectos académicos — no son el foco principal del portfolio.
            </p>
            <div className="flex flex-wrap gap-2">
              {familiaritySkills.map((s) => (
                <span
                  key={s}
                  className="cursor-default whitespace-nowrap rounded-lg border border-brand-outline/35 bg-brand-bg/40 px-3 py-1.5 text-sm text-brand-on-surface-muted transition-colors hover:border-brand-outline/60"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-6 border-t border-brand-outline/30 pt-5 text-sm leading-relaxed text-brand-on-surface-muted italic">
              {AI_ASSISTANCE_NOTE}
            </p>
          </motion.div>
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
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
              <Briefcase size={22} className="text-brand-primary" />
              Experiencia laboral / prácticas / freelance
            </h3>
            <p className="text-brand-on-surface-muted mb-6 max-w-3xl leading-relaxed">
              No tengo aún experiencia corporativa formal; busco mi primera
              oportunidad en empresa. Mi trabajo más cercano a un cliente real
              es el siguiente:
            </p>
            <div className="space-y-4">
              {workExperience.map((exp) => (
                <div
                  key={exp.company}
                  className="bg-brand-surface p-8 rounded-xl border border-brand-primary/20 flex flex-col md:flex-row gap-8"
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
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <h3 className="text-xl font-bold mb-4">Resultados en contexto</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {portfolioMetrics.map((metric) => (
                <li
                  key={metric}
                  className="rounded-xl border border-brand-outline/35 bg-brand-surface/50 px-4 py-3 text-sm leading-relaxed text-brand-on-surface-muted"
                >
                  {metric}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12 max-w-4xl rounded-xl border border-dashed border-brand-outline/45 bg-brand-surface/35 p-6 sm:p-8"
          >
            <div className="mb-3 flex items-center gap-2 text-brand-primary">
              <Zap size={20} aria-hidden />
              <h3 className="text-lg font-bold">{currentLearning.title}</h3>
            </div>
            <p className="text-brand-on-surface-muted leading-relaxed">
              {currentLearning.body}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Sparkles,
                t: "Proyectos web y datos",
                d: "BusNET (Buildathon) y Clothes Marina en producción; LaburoSV (TPI, chat en tiempo real); Fast Repuestos, Mototaxi Runner y biblioteca MySQL/Java.",
              },
              {
                icon: Briefcase,
                t: "Clothes Marina · freelance",
                d: "49 interacciones en Google en el 1.er mes — catálogo en producción para tienda real; única experiencia con cliente hasta ahora.",
              },
              {
                icon: Zap,
                t: currentLearning.title,
                d: currentLearning.body,
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
