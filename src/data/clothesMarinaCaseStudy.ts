import {
  Database,
  Globe,
  Inbox,
  LayoutGrid,
  Search,
  Share2,
  Shield,
  ShieldCheck,
  Workflow,
  FileText,
} from "lucide-react";
import type { CaseStudySectionData } from "./caseStudyTypes";

export const clothesMarinaCaseStudySections: CaseStudySectionData[] = [
  {
    id: "public",
    title: "Sitio público & categorías",
    Icon: LayoutGrid,
    bullets: [
      "Home con hero y destacados configurables desde datos vivos.",
      "Categorías dinámicas detectadas desde la base (mujeres, hombres, niñas, niños y hogar) con bloques y carruseles respetando la jerarquía comercial.",
    ],
  },
  {
    id: "catalog",
    title: "Catálogo & búsqueda avanzada",
    Icon: Search,
    bullets: [
      "Búsqueda de texto sobre nombre, descripción, marca, color y talla.",
      "Filtros por categorías, ordenación combinable con la consulta.",
      "Paginación de 26 productos por página y modo Discover para favorecer novedades recientes.",
      "Estados vacíos claros cuando no hay coincidencias.",
    ],
  },
  {
    id: "pdp-share",
    title: "Ficha de producto & difusión",
    Icon: Share2,
    bullets: [
      "Imagen principal optimizada y fichas mostrando marca, color y talla con precios y soporte para descuentos.",
      "CTA WhatsApp desde la página de producto más barra flotante de retorno rápido a la tienda.",
      "Modal para compartir en Facebook/X; APIs de share endurecidas (metadata desde DB, allowlists, escape HTML).",
    ],
  },
  {
    id: "contact-leads",
    title: "Contacto & tracking de leads",
    Icon: Inbox,
    bullets: [
      "Formulario público con limpieza de campos, feedback visible y navegación al inicio.",
      "Escrituras públicas por RPC SECURITY DEFINER (validación, honeypot, rate limit) — no INSERT anónimo abierto.",
      "Registro de intereses por producto y leads de WhatsApp para reportes; keep-alive técnico aislado para no contaminar métricas de ventas.",
    ],
  },
  {
    id: "qa-verdict",
    title: "Veredicto QA · hardening",
    Icon: ShieldCheck,
    bullets: [
      "Clothes Marina no es solo «una tienda en Vercel»: hardening documentado, remediaciones P0/P1, pruebas de seguridad automatizadas y controles en producción.",
      "Marco honesto: SPA de catálogo en producción con remediación de hallazgos y CI/RLS — no se presenta como sistema bancario ni certificación ISO.",
      "Pendientes típicos (si preguntan): MFA operativa, branch protection, rate limits mejorables y límites del plan Free de Supabase.",
    ],
  },
  {
    id: "defense-depth",
    title: "Defensa en profundidad",
    Icon: Shield,
    bullets: [
      "Frontend React (escape por defecto); sin dangerouslySetInnerHTML como patrón.",
      "Edge/CDN: headers en vercel.json — CSP, HSTS, nosniff, Referrer-Policy, Permissions-Policy, COOP/CORP.",
      "BD: RLS en tablas públicas + rol admin en JWT (app_metadata.role); UI sola no es la fuente de verdad.",
      "Least privilege: anon key en cliente; nunca service role en variables VITE_*.",
      "Superficie JS reducida: CSP script-src 'self', sin SDKs de ads/analytics de terceros.",
    ],
  },
  {
    id: "remediations",
    title: "Amenazas remediadas (P0/P1)",
    Icon: Workflow,
    bullets: [
      "SSRF en proxy de imágenes OG → allowlist HTTPS + fetch controlado.",
      "Open Graph poisoning → metadata solo desde DB, no desde query params (cierra phishing social).",
      "Spam en formularios/leads → RPC + constraints + honeypot + rate limit.",
      "Filtración de privilegios → separación de secretos y RLS; admin gated por JWT.",
    ],
  },
  {
    id: "security-ci",
    title: "Security CI & supply chain",
    Icon: Database,
    bullets: [
      "GitHub Actions: npm audit (high+), lint, typecheck/build, tests de seguridad, SBOM CycloneDX.",
      "Dependabot semanal; parcheo reactivo (p. ej. sharp por CVE high) sin romper keep-alive.",
      "Suite de regresiones: CSP/headers, RPC vs INSERT directo, validación de inputs, URL safety, OG poisoning, allowlist de imágenes.",
    ],
  },
  {
    id: "governance",
    title: "Gobierno & operación",
    Icon: FileText,
    bullets: [
      "SECURITY.md, arquitectura documentada, checklist de producción y playbook de incidentes.",
      "Punto de restauración (security-audit-checkpoint) para trazabilidad de remediaciones.",
      "Modelo de confianza claro: browser ↔ Vercel ↔ Supabase, con share APIs endurecidas para crawlers.",
    ],
  },
  {
    id: "admin-security",
    title: "Admin, accesos & medios",
    Icon: Shield,
    bullets: [
      "Login con correo/clave más GitHub OAuth; rutas de panel protegidas con ProtectedRoute.",
      "Módulos: dashboard, categorías, productos, bandeja y solicitudes de acceso pendientes.",
      "Altas externas: admins aprueban o rechazan antes de exponer herramientas sensibles.",
      "Gestión multimedia de SKU con Supabase Storage (CDN-first).",
    ],
  },
  {
    id: "positioning-reframe",
    title: "Resultado de negocio",
    Icon: Globe,
    bullets: [
      "El sitio se consolidó como intersección digital del negocio: aporta al menos ~2 ventas extra al día respecto a la operación previa al catálogo.",
      "Primer mes: 49 interacciones en el Perfil de Negocio de Google (llamadas, direcciones, clics).",
      "Más que una landing: catálogo con capa editorial, seguridad granular y embudo web + WhatsApp hacia la tienda física.",
    ],
  },
];
