import {
  Bus,
  Layers,
  Map,
  Route,
  Server,
} from "lucide-react";
import type { CaseStudySectionData } from "./caseStudyTypes";

export const busnetCaseStudySections: CaseStudySectionData[] = [
  {
    id: "purpose",
    title: "Para qué es & problema",
    Icon: Map,
    bullets: [
      "Plataforma de movilidad para transporte público en El Salvador: indicás origen y destino y el sistema arma el viaje (qué bus, transbordos, caminata, tiempo y costo).",
      "Nació en el Cursor Buildathon San Salvador (equipo Cristian, Frank, Alexander, Eduardo).",
      "Las rutas existen en el mapa, pero no hay un planner claro ni data operativa digital — BusNET cubre pasajero (planificar sobre trazados reales), operación/gremiales (visión futura) y gobierno/datos (moat: geometría local con cientos de GeoJSON, no GPS “mágico”).",
    ],
  },
  {
    id: "scope-status",
    title: "Qué ya corre vs. roadmap",
    Icon: Bus,
    bullets: [
      "En desarrollo activo con el equipo: lo desplegado hoy cubre trip planner, mapa, búsqueda y tráfico comunitario.",
      "Fleet dashboard (checking digital, flota) y TTS ElevenLabs están en diseño — no necesariamente cerrados en el código actual.",
      "Tracking de buses en vivo, en la visión del producto, es un simulador sobre las mismas líneas (no GPS real en la demo).",
    ],
  },
  {
    id: "architecture",
    title: "Arquitectura monorepo",
    Icon: Layers,
    bullets: [
      "Frontend: React + Vite, mobile-first, MapLibre GL; consume la API Node (dev) o /_/backend en producción.",
      "API Node (Express + Turf.js): motor original de planificación — POST /plan, /routes, etc.; capa intocable del contrato.",
      "API Rust (rusty_busnet / Axum): port del mismo contrato con ~990 GeoJSON; backend “nuevo” en evolución.",
      "Datos: rutas canónicas en GeoJSON (líneas reales); PostgreSQL (Supabase) opcional para catálogo de lugares.",
      "Design system con tokens en design-system/ (sin hex sueltos en UI).",
    ],
  },
  {
    id: "planner-flow",
    title: "Cómo funciona el planner",
    Icon: Route,
    bullets: [
      "Origen y destino vía GPS, clic en el mapa o texto (Nominatim / places en Postgres cuando hay BD).",
      "El motor no hace Dijkstra clásico de grafo de calles: toma polilíneas de buses, busca rutas cerca del origen y destino, arma combinaciones con hasta N transbordos, estima caminata, tiempo y costo, y rankea alternativas.",
      "UI: mapa con plan (bus sólido, caminata punteada); panel con opciones y paso a paso.",
      "Extra: reportes de tráfico comunitario y análisis de si un plan se ve afectado.",
    ],
  },
  {
    id: "stack",
    title: "Stack & endpoints",
    Icon: Server,
    bullets: [
      "React + MapLibre · Node/Express (Turf) y/o Rust/Axum · GeoJSON · Postgres opcional para places.",
      "Flujo: usuario (mapa/búsqueda) → HTTP JSON → backend (Node o Rust) carga GeoJSON al arrancar → motor geométrico (cercanía, transbordos, ranking) → TripPlan (tramos walk + bus) → mapa y panel.",
      "Endpoints típicos: POST /plan, GET /routes, búsqueda /places/search (Rust si hay BD), tráfico comunitario /traffic/*.",
    ],
  },
];
