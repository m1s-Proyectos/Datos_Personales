import {
  Layers,
  MessageSquare,
  Shield,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { CaseStudySectionData } from "./caseStudyTypes";

export const oficioCyberCoachCaseStudySections: CaseStudySectionData[] = [
  {
    id: "problem",
    title: "Problema & producto",
    Icon: Shield,
    bullets: [
      "Las estafas digitales se ganan con urgencia emocional. OFICIO convierte esa lección en entrenamiento jugable: verificar por canal independiente, reconocer señales y aprender qué hacer si ya se envió dinero.",
      "Historias 100 % ficticias (WhatsApp, compraventa, empleo, códigos, “supuesto jefe”) con aviso ético claro; no pide datos personales reales.",
      "Prototipo educativo completo y jugable en producción — no es un SaaS con usuarios medidos, auth ni pagos.",
    ],
  },
  {
    id: "architecture",
    title: "Arquitectura",
    Icon: Layers,
    bullets: [
      "Frontend: React 18 + Vite 5 + TypeScript estricto; router propio por hash (sin SPA server rewrites).",
      "Backend BaaS: Convex (catálogo de scenarios, seed, funciones de voz y cuotas).",
      "Dominio puro: src/engine (transiciones, evaluación, choice gate) separado de la UI — motor determinista y testeable.",
      "Contenido tipado: 5 simulaciones jugables + 8 retos rápidos por rutas temáticas.",
      "Voz: ElevenLabs en servidor Convex (caché de audio y cuotas); API key nunca en el bundle ni en Vercel.",
      "Gamificación: XP motivacional + rachas + badges en localStorage, separada de la nota oficial A–E por hitos.",
      "Calidad: ~150 tests Vitest; pipeline typecheck + lint + format + test + build. Deploy: Vercel.",
    ],
  },
  {
    id: "flows",
    title: "Flujos clave",
    Icon: Workflow,
    bullets: [
      "Catálogo → simulación ramificada → puntuación oficial por dimensiones/hitos → feedback + voz.",
      "Retos rápidos → respuesta → explicación/señales → XP/panel.",
      "Cliente ↔ Convex (datos + TTS) ↔ ElevenLabs (síntesis).",
      "Demo útil: #/ · #/panel · #/retos · #/simulaciones/whatsapp-familiar · #/simulaciones/tienda-iphone.",
    ],
  },
  {
    id: "engineering",
    title: "Decisiones de ingeniería",
    Icon: Sparkles,
    bullets: [
      "Motor determinista: la lógica de puntaje no vive en componentes React.",
      "Rúbrica oficial con milestoneId (un hito no se acredita dos veces).",
      "Persistencia de resultados oficiales en Convex: diseñada / diferida; progreso de retos es local al navegador.",
      "El coach de IA “libre” no está integrado; la voz es narración de consejos del catálogo.",
    ],
  },
  {
    id: "honesty",
    title: "Alcance honesto del prototipo",
    Icon: MessageSquare,
    bullets: [
      "Demo navegable en https://oficio-cyber-coach.vercel.app — producto EdTech desplegado, no métricas de negocio SaaS.",
      "Algunos escenarios se anuncian desde Convex; el motor puede correr en memoria según el estado del seed remoto.",
      "Autoría: product builder / implementación mayoritaria bajo mi cuenta; si el plan menciona equipo pequeño, la contribución visible en código es principalmente mía.",
    ],
  },
];
