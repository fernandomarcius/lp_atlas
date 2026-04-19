// shared.jsx — Nav, Footer, and shared building blocks

const { useState, useEffect, useRef, useMemo } = React;

/* ---------- Logo ---------- */
function AtlasMark({ size = 26 }) {
  // Hexagonal compass rose, minimal
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1" />
      <path d="M16 2.5 L16 29.5 M2.5 16 L29.5 16" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <path d="M16 5 L19 16 L16 27 L13 16 Z" fill="currentColor" />
      <circle cx="16" cy="16" r="1.5" fill="var(--paper)" />
    </svg>
  );
}

/* ---------- Nav ---------- */
function Nav({ active = "home" }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="Landing Page.html" className="brand" style={{ color: "var(--ink)" }}>
          <AtlasMark />
          <span style={{ fontFamily: "var(--font-display)" }}>Atlas</span>
          <span className="mono" style={{ marginLeft: 6, fontSize: 10 }}>
            / Infraestrutura de Inteligência
          </span>
        </a>
        <nav className="nav-links">
          <a href="Landing Page.html" className={active === "home" ? "active" : ""}>Início</a>
          <a href="sobre.html" className={active === "sobre" ? "active" : ""}>Sobre</a>
          <a href="servicos.html" className={active === "servicos" ? "active" : ""}>Serviços</a>
          <a href="diagnostico.html" className={active === "diag" ? "active" : ""}>Diagnóstico</a>
          <a href="contato.html" className="btn btn-sm" style={{ padding: "8px 14px" }}>
            Agendar conversa <span className="arr">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <AtlasMark size={22} />
              <span style={{ fontFamily: "var(--font-display)", fontSize: 22 }}>Atlas</span>
            </div>
            <p style={{ maxWidth: 320, margin: 0, lineHeight: 1.55 }}>
              Governança, processos e automação inteligente para empresas que
              não podem errar.
            </p>
          </div>
          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="sobre.html">Sobre a Atlas</a></li>
              <li><a href="sobre.html#tripulacao">Tripulação técnica</a></li>
              <li><a href="sobre.html#manifesto">Manifesto</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Serviços</h4>
            <ul>
              <li><a href="servicos.html#governanca">Governança</a></li>
              <li><a href="servicos.html#processos">Processos</a></li>
              <li><a href="servicos.html#automacao">Automação &amp; IA</a></li>
              <li><a href="diagnostico.html">Diagnóstico</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            <ul>
              <li><a href="contato.html">Agendar reunião</a></li>
              <li><a href="mailto:contato@atlas.eng">contato@atlas.eng</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Atlas Intelligence Infrastructure</span>
          <span>23°S 46°W · São Paulo, Brasil</span>
          <span>v.2026.04</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Coordinate meta strip ---------- */
function MetaStrip({ left, right }) {
  return (
    <div
      className="container"
      style={{
        display: "flex", justifyContent: "space-between",
        padding: "14px var(--gutter)",
        borderBottom: "1px solid var(--rule)",
        fontFamily: "var(--font-mono)",
        fontSize: 11, letterSpacing: "0.08em",
        color: "var(--muted)",
        textTransform: "uppercase",
      }}
    >
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}

/* ---------- Section header ---------- */
function SectionHead({ eyebrow, title, lede, align = "left", index }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === "center" ? 760 : 880, margin: align === "center" ? "0 auto 48px" : "0 0 48px" }}>
      <div style={{ display: "flex", gap: 24, alignItems: "baseline", marginBottom: 20 }}>
        {index && <span className="mono" style={{ fontSize: 12 }}>{index}</span>}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="display" style={{ fontSize: "clamp(38px, 5vw, 68px)", margin: "0 0 16px" }}>
        {title}
      </h2>
      {lede && (
        <p style={{
          fontSize: "clamp(17px, 1.6vw, 20px)",
          lineHeight: 1.55, color: "var(--muted)",
          maxWidth: 640, margin: align === "center" ? "0 auto" : 0,
          textWrap: "pretty",
        }}>
          {lede}
        </p>
      )}
    </div>
  );
}

Object.assign(window, { AtlasMark, Nav, Footer, MetaStrip, SectionHead });
