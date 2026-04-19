// home.jsx — Home page sections

const { useState: useStateH, useEffect: useEffectH, useRef: useRefH, useMemo: useMemoH } = React;

/* ============================================================
 * HERO — Editorial, heavy type, live coordinates feel
 * ============================================================ */
function Hero() {
  const [tick, setTick] = useStateH(0);
  useEffectH(() => {
    const t = setInterval(() => setTick((v) => v + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const now = new Date();
  const ts = now.toISOString().replace("T", " ").slice(0, 19);

  return (
    <section id="hero" className="section" style={{ paddingTop: 56, paddingBottom: 0, position: "relative" }}>
      <div className="container">
        {/* Top meta line */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: 24,
          paddingBottom: 40,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}>
          <span>Atlas · Edição 04 · 2026</span>
          <span style={{ color: "var(--ink)" }}>— Infraestrutura de Inteligência —</span>
          <span style={{ textAlign: "right" }}>BRT {ts}</span>
        </div>

        {/* Hero headline */}
        <div style={{ position: "relative" }}>
          <h1 id="headline-text" className="display" style={{
            fontSize: "clamp(56px, 10vw, 156px)",
            margin: "0 0 32px",
            letterSpacing: "-0.035em",
          }}>
            Antes da IA,<br />
            <em>a base.</em>
          </h1>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 64,
            alignItems: "end",
            paddingBottom: 32,
            borderBottom: "1px solid var(--rule-strong)",
          }}>
            <p style={{
              fontSize: "clamp(18px, 1.8vw, 24px)",
              lineHeight: 1.45,
              margin: 0,
              maxWidth: 640,
              color: "var(--ink-2)",
              textWrap: "pretty",
            }}>
              O MIT mediu: <em style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>95% dos projetos de IA generativa não entregam retorno</em>.
              Os 5% que entregam começam pela estrutura — governança,
              processos, dados — antes de qualquer modelo. A Atlas opera
              nessa ordem.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }}>
              <a href="servicos.html" className="btn">
                Explorar serviços <span className="arr">→</span>
              </a>
              <a href="#diagnostico" className="btn btn-ghost">
                Fazer o diagnóstico
              </a>
            </div>
          </div>

          {/* Pillar index */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            padding: "32px 0 80px",
            gap: 32,
          }}>
            {[
              ["01", "Governança", "Estrutura, responsabilidades, política de dados.", "var(--c1)"],
              ["02", "Processos", "Mapeamento, padronização, KPIs mensuráveis.", "var(--c2)"],
              ["03", "Automação", "Workflows inteligentes sobre processos sólidos.", "var(--c3)"],
              ["04", "IA Aplicada", "Modelos que atuam no ótimo matemático.", "var(--c4-accent)"],
            ].map(([n, t, d, color]) => (
              <div key={n} style={{ paddingTop: 20, borderTop: `2px solid ${color}` }}>
                <div className="mono" style={{ fontSize: 11, marginBottom: 12, color }}>{n}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, lineHeight: 1.05, marginBottom: 8 }}>{t}</div>
                <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * SOCIAL PROOF — companies our team has worked with
 * ============================================================ */
function ClientWall() {
  const clients = [
    "Itaú", "Cogna", "iFood", "Stone", "Falconi", "John Deere",
    "Trinus", "RTSC Holding", "Grupo RZK", "Grupo Saga",
    "Aeroporto de Brasília",
  ];

  const wallRef = useRefH(null);
  useEffectH(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.15 });
    const items = wallRef.current?.querySelectorAll(".client-name") || [];
    items.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" style={{ background: "var(--paper)", paddingTop: 80, paddingBottom: 100 }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 80,
          alignItems: "start",
          paddingTop: 24,
          borderTop: "1px solid var(--rule-strong)",
        }}>
          <div style={{ position: "sticky", top: 96 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 20 }}>
              <span className="mono" style={{ fontSize: 11, color: "var(--muted-2)" }}>§ 00</span>
              <span className="eyebrow">
                <span className="eyebrow-tick" />
                Lastro
              </span>
            </div>
            <h2 className="display" style={{
              fontSize: "clamp(32px, 3.6vw, 52px)",
              margin: "0 0 20px",
              letterSpacing: "-0.025em",
              lineHeight: 1,
            }}>
              Antes da Atlas, nosso time já <em>rodou em produção</em> para:
            </h2>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.55, margin: 0, maxWidth: 380 }}>
              Uma década somada de projetos de dados, pesquisa operacional,
              governança e automação em empresas que não podem errar na hora do
              cheque.
            </p>
            <div className="mono" style={{
              marginTop: 32, fontSize: 10, color: "var(--muted-2)",
              letterSpacing: "0.08em",
              paddingTop: 16, borderTop: "1px solid var(--rule)",
              maxWidth: 380, lineHeight: 1.5,
            }}>
              — Experiência prévia do time · não implica relação comercial atual da Atlas
            </div>
          </div>

          <div ref={wallRef} className="client-wall">
            {clients.map((c, i) => (
              <div key={c} className="client-name" data-idx={i % 6}>
                <span className="client-num mono">{String(i + 1).padStart(2, "0")}</span>
                <span className="client-label">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * DIAGNOSIS — The problem with AI-first thinking
 * ============================================================ */
function WhyOrder() {
  const listRef = useRefH(null);
  useEffectH(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.2 });
    const rows = listRef.current?.querySelectorAll(".tese-row") || [];
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 96 }}>
            <SectionHead
              index="§ 01"
              eyebrow="Tese"
              title={<>IA sem base é <em>teatro caro</em>.</>}
              lede={<>
                Em 2025, o MIT mediu o que o mercado evitava admitir: a
                tecnologia não é o gargalo. O gargalo é organizacional. Projetos
                de IA falham porque são instalados sobre operações improvisadas
                — e automatizar o caos produz caos em escala, com uma fatura
                maior no fim do mês.
              </>}
            />
            <div style={{
              marginTop: 40,
              paddingTop: 28,
              borderTop: "1px solid var(--rule)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
            }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 68, lineHeight: 1, letterSpacing: "-0.035em", color: "var(--c4-accent)" }}>
                  95<span style={{ fontSize: 36 }}>%</span>
                </div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 10, lineHeight: 1.45 }}>
                  dos projetos-piloto de IA generativa <em>não geram retorno financeiro significativo</em>. A falha está na base, não no modelo.
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 68, lineHeight: 1, letterSpacing: "-0.035em", color: "var(--c1)" }}>
                  5<span style={{ fontSize: 36 }}>%</span>
                </div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 10, lineHeight: 1.45 }}>
                  começam pela <em>estrutura</em> antes da ferramenta. Organizam dados, processos e governança — e só então acoplam IA. É a ordem que funciona.
                </div>
              </div>
            </div>
            <div className="mono" style={{
              marginTop: 24, paddingTop: 14,
              borderTop: "1px solid var(--rule)",
              fontSize: 10, letterSpacing: "0.12em",
              color: "var(--muted-2)",
            }}>
              Fonte · MIT Media Lab · The GenAI Divide · 2025
            </div>
          </div>

          <div ref={listRef} style={{ display: "grid", gap: 0 }}>
            {[
              {
                n: "A",
                label: "Governança ausente",
                bad: "Ninguém sabe quem decide. Dados moram em planilhas privadas, sem trilha, sem política, sem dono.",
                good: "Matriz de responsabilidade, política de acesso, trilha de auditoria. Decisão rastreável.",
              },
              {
                n: "B",
                label: "Processos difusos",
                bad: "Quatro equipes executam a mesma operação de quatro formas. Nada escala porque nada é processo.",
                good: "Fluxo padronizado, KPI rastreável, SLA por estágio, handoffs documentados.",
              },
              {
                n: "C",
                label: "Shadow automation",
                bad: "Automação pontual, nas sombras da TI — sem segurança, sem medição, sem integração fim-a-fim.",
                good: "Workflow engineering com orquestração, monitoramento e impacto mensurável.",
              },
              {
                n: "D",
                label: "IA no lugar certo",
                bad: "Chatbot de marketing como troféu. IA genérica gerando texto sem KPI operacional.",
                good: "Modelos em produção, otimizando decisões sobre dados confiáveis, com loop de melhoria.",
              },
            ].map((r, i) => (
              <div key={i} data-idx={i} className="tese-row" style={{
                display: "grid",
                gridTemplateColumns: "40px 1fr",
                gap: 24,
                padding: "32px 0",
                borderTop: "1px solid var(--rule)",
              }}>
                <div className="mono tese-num" style={{ fontSize: 11, paddingTop: 4 }}>{r.n}</div>
                <div>
                  <div className="tese-label" style={{ fontFamily: "var(--font-display)", fontSize: 28, marginBottom: 14, letterSpacing: "-0.01em" }}>
                    {r.label}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                    <div className="tese-bad">
                      <div className="mono" style={{ fontSize: 10, color: "var(--warn)", marginBottom: 6 }}>— Sem</div>
                      <div style={{ fontSize: 14, lineHeight: 1.5, color: "var(--muted)" }}>{r.bad}</div>
                    </div>
                    <div className="tese-good">
                      <div className="mono" style={{ fontSize: 10, color: "var(--ok)", marginBottom: 6 }}>+ Com</div>
                      <div style={{ fontSize: 14, lineHeight: 1.5, color: "var(--ink-2)" }}>{r.good}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * EVIDENCE — MIT 2025 report backing the thesis
 * ============================================================ */
function MITProof() {
  const reasons = [
    {
      k: "01",
      h: "Sem estratégia, sem processo",
      b: "Aplicar IA em cima de fluxos indefinidos só escala a desorganização que já existia.",
    },
    {
      k: "02",
      h: "Hype em vez de back-office",
      b: "Mais da metade dos orçamentos vai para marketing e vendas. O ROI real está em administrativo, financeiro e RH — onde o custo mora.",
    },
    {
      k: "03",
      h: "Shadow AI e integração falha",
      b: "Ferramentas usadas fora da governança, projetos rodando em silos, sem impacto fim-a-fim mensurável.",
    },
  ];

  const proofRef = useRefH(null);
  useEffectH(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    const stat = proofRef.current?.querySelector(".mit-stat");
    if (stat) io.observe(stat);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="evidencia" style={{ background: "var(--ink)", color: "var(--paper)", paddingTop: 100, paddingBottom: 100 }}>
      <div className="container" ref={proofRef}>
        {/* header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(255,255,255,0.18)", paddingBottom: 20, marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
            <span className="mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>§ 01.5</span>
            <span className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "rgba(255,255,255,0.85)" }}>
              <span style={{ display: "inline-block", width: 6, height: 6, background: "var(--accent)", marginRight: 10, verticalAlign: "middle" }} />
              Evidência — anatomia do fracasso
            </span>
          </div>
          <div className="mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>
            MIT · The GenAI Divide · 2025
          </div>
        </div>

        {/* editorial pull quote */}
        <div className="mit-stat" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 48, alignItems: "start", marginBottom: 80 }}>
          <div className="display" aria-hidden="true" style={{
            fontSize: "clamp(120px, 16vw, 220px)",
            lineHeight: 0.75,
            letterSpacing: "-0.04em",
            color: "var(--accent)",
            fontStyle: "italic",
            fontWeight: 400,
            marginTop: -12,
          }}>
            “
          </div>
          <div style={{ maxWidth: 860 }}>
            <blockquote className="display" style={{
              fontSize: "clamp(28px, 3.2vw, 48px)",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              margin: "0 0 28px",
              color: "var(--paper)",
              fontStyle: "normal",
              textWrap: "balance",
            }}>
              O problema não é a tecnologia. É a <em>lacuna organizacional</em> sobre
              como aplicar IA de forma estratégica — dados, processos e
              governança antes do modelo.
            </blockquote>
            <div className="mono" style={{
              fontSize: 11, letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.6)",
              paddingLeft: 18,
              borderLeft: "2px solid var(--accent)",
            }}>
              — The GenAI Divide · State of AI in Business · MIT · Ago / 2025
            </div>
          </div>
        </div>

        {/* three failure modes */}
        <div style={{ marginBottom: 40 }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "rgba(255,255,255,0.55)", marginBottom: 24, paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
            Três modos de falha que o estudo identificou
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid rgba(255,255,255,0.2)" }}>
            {reasons.map((r, i) => (
              <div key={r.k} style={{
                padding: "36px 32px 40px",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.2)" : "none",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24 }}>
                  <span className="mono" style={{ fontSize: 11, color: "var(--accent)" }}>{r.k}</span>
                  <span className="mono" style={{ fontSize: 9, letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)" }}>modo de falha</span>
                </div>
                <h3 className="display" style={{
                  fontSize: 22, lineHeight: 1.15,
                  letterSpacing: "-0.015em",
                  margin: "0 0 14px",
                  color: "var(--paper)",
                }}>
                  {r.h}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,0.68)", margin: 0 }}>
                  {r.b}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* bridge to method */}
        <div style={{
          marginTop: 56,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          gap: 32,
          paddingTop: 28,
          borderTop: "1px solid rgba(255,255,255,0.25)",
        }}>
          <div style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.85)", maxWidth: 720 }}>
            A Atlas foi desenhada para que você <em style={{ color: "var(--paper)" }}>não esteja nos 95%</em>. O método a seguir é a ordem dos 5%.
          </div>
          <a href="#metodo" className="mono" style={{
            fontSize: 11, letterSpacing: "0.14em",
            color: "var(--accent)",
            textDecoration: "none",
            whiteSpace: "nowrap",
            padding: "14px 20px",
            border: "1px solid var(--accent)",
          }}>
            Ver método →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * METHOD — The four-stage method, visual
 * ============================================================ */
function Method() {
  const stages = [
    { n: "01", title: "Governança", time: "4–6 sem", tag: "Diagnóstico & política de dados",
      out: ["Matriz RACI de dados", "Política de acesso", "Inventário de fontes"],
      deps: [], color: "var(--c1)", soft: "var(--c1-soft)" },
    { n: "02", title: "Processos", time: "6–10 sem", tag: "Mapeamento & KPIs mensuráveis",
      out: ["Fluxos as-is / to-be", "Tabela de KPIs", "SLAs por estágio"],
      deps: ["Governança"], color: "var(--c2)", soft: "var(--c2-soft)" },
    { n: "03", title: "Automação", time: "8–12 sem", tag: "Workflow engineering",
      out: ["Pipelines operacionais", "Orquestração", "Monitoramento"],
      deps: ["Processos"], color: "var(--c3)", soft: "var(--c3-soft)" },
    { n: "04", title: (<>IA <br/>Aplicada</>), rawTitle: "IA Aplicada", time: "contínuo", tag: "Modelos & otimização matemática",
      out: ["Modelos em produção", "Loops de melhoria", "Otimização matemática"],
      deps: ["Automação", "Processos"], color: "var(--c4-accent)", soft: "var(--c4-soft)" },
  ];

  const gridRef = useRefH(null);
  const flowRef = useRefH(null);
  const [active, setActive] = useStateH(-1);

  useEffectH(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("in");
      });
    }, { threshold: 0.2 });

    const cards = gridRef.current?.querySelectorAll(".method-stage") || [];
    cards.forEach((c) => io.observe(c));
    if (flowRef.current) io.observe(flowRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="metodo">
      <div className="container">
        <SectionHead
          index="§ 02"
          eyebrow="Método · a ordem dos 5%"
          title={<>Quatro estágios, em <em>ordem</em>.</>}
          lede="Cada estágio depende do anterior — essa é a ordem que o MIT observou nas empresas que extraem retorno de IA. Pular estágio é o atalho para a outra estatística."
        />

        <div ref={gridRef} className="method-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          border: "1px solid var(--rule-strong)",
          marginTop: 48,
        }}>
          {stages.map((s, i) => (
            <div
              key={s.n}
              data-idx={i}
              className={`method-stage${active === i ? " active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(-1)}
              style={{
                borderRight: i < 3 ? "1px solid var(--rule-strong)" : "none",
                padding: "32px 28px 36px",
                position: "relative",
                background: "transparent",
                cursor: "default",
                "--stage-color": s.color,
                "--stage-soft": s.soft,
              }}
            >
              {/* Color top bar */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0,
                height: 4, background: s.color,
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, paddingLeft: 12 }}>
                <span className="method-num" style={{ color: s.color }}>{s.n}</span>
                <span className="method-time">{s.time}</span>
              </div>

              <span className="method-accent-rule" style={{ background: s.color, width: active === i ? 48 : 28 }} />

              <div className="method-kicker" style={{ marginBottom: 8 }}>Estágio</div>
              <h3 className="method-title" style={{ margin: "0 0 14px" }}>
                {s.title}
              </h3>
              <div className="method-tag" style={{ marginBottom: 32, color: s.color, opacity: 0.85 }}>
                {s.tag}
              </div>

              <div className="method-kicker" style={{ marginBottom: 10 }}>Entregáveis</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {s.out.map((o) => (
                  <li key={o} className="method-deliv">
                    <span className="arr">→</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>

              <div style={{
                marginTop: 28, paddingTop: 14,
                borderTop: "1px dashed var(--rule)",
              }}>
                <div className="method-req">
                  {s.deps.length > 0 ? (<>requer · <b>{s.deps.join(" + ")}</b></>) : (<>requer · <b>—</b></>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated flow */}
        <div ref={flowRef} className="method-flow" style={{
          borderLeft: "1px solid var(--rule-strong)",
          borderRight: "1px solid var(--rule-strong)",
          marginBottom: 8,
        }}>
          <svg viewBox="0 0 1200 64" preserveAspectRatio="none" style={{ width: "100%", height: 64 }}>
            <line className="track" x1="20" y1="32" x2="1180" y2="32" strokeWidth="1" />
            <line className="progress" x1="20" y1="32" x2="1180" y2="32" strokeWidth="1.5" fill="none" />
            {[["var(--c1)", 150, "Governança"], ["var(--c2)", 450, "Processos"], ["var(--c3)", 750, "Automação"], ["var(--c4-accent)", 1050, "IA"]].map(([col, x, lbl], i) => (
              <g key={i}>
                <circle className="node" cx={x} cy="32" r="6" style={{ stroke: col }} />
                <circle className="node-inner" cx={x} cy="32" r="2.5" style={{ fill: col }} />
                <text className="label" x={x} y="56" textAnchor="middle" style={{ fill: col }}>
                  {lbl}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * INLINE DIAGNOSIS — interactive
 * ============================================================ */
function InlineDiagnosis() {
  const dims = [
    { key: "gov", label: "Governança de dados", q: "Políticas formalizadas e responsáveis definidos?" },
    { key: "proc", label: "Processos padronizados", q: "Fluxos documentados e repetíveis em áreas críticas?" },
    { key: "tool", label: "Infraestrutura & ferramental", q: "Stack consolidada, sem proliferação de planilhas?" },
    { key: "auto", label: "Automação operacional", q: "Tarefas repetitivas já rodam sem intervenção humana?" },
    { key: "ai", label: "IA aplicada", q: "Modelos em produção, com KPIs de negócio claros?" },
  ];

  const [scores, setScores] = useStateH(() =>
    Object.fromEntries(dims.map((d) => [d.key, 2]))
  );

  const total = useMemoH(() => {
    return dims.reduce((a, d) => a + scores[d.key], 0);
  }, [scores]);

  const max = dims.length * 4;
  const pct = Math.round((total / max) * 100);

  // Stage recommendation
  let stage, recommendation, color;
  if (scores.gov <= 1) {
    stage = "01. Governança"; color = "var(--warn)";
    recommendation = "Antes de qualquer automação, a Atlas recomenda começar pela estrutura de governança de dados.";
  } else if (scores.proc <= 1 || scores.tool <= 1) {
    stage = "02. Processos"; color = "var(--accent)";
    recommendation = "Governança existe, mas processos estão inconsistentes. Mapeamento e padronização primeiro.";
  } else if (scores.auto <= 2) {
    stage = "03. Automação"; color = "var(--accent)";
    recommendation = "Base sólida. É hora de automatizar tarefas repetitivas antes de introduzir IA.";
  } else {
    stage = "04. IA Aplicada"; color = "var(--ok)";
    recommendation = "Sua operação tem base para suportar IA com KPIs reais. Hora de construir modelos aplicados.";
  }

  return (
    <section className="section" id="diagnostico" style={{ background: "var(--ink)", color: "var(--paper)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", gap: 24, alignItems: "baseline", marginBottom: 20 }}>
              <span className="mono" style={{ fontSize: 12, color: "var(--paper-3)" }}>§ 03</span>
              <span className="eyebrow" style={{ color: "var(--paper-3)" }}>
                <span style={{ background: "var(--paper-3)", width: 18, height: 1, display: "inline-block", marginRight: 10 }}></span>
                Diagnóstico Atlas
              </span>
            </div>
            <h2 className="display" style={{
              fontSize: "clamp(40px, 5vw, 72px)",
              margin: "0 0 24px",
              color: "var(--paper)",
            }}>
              Onde sua operação <em style={{ color: "var(--paper-3)" }}>realmente</em> está?
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--paper-3)", maxWidth: 460, margin: "0 0 32px" }}>
              Cinco dimensões, quatro níveis cada. Em 30 segundos você sabe qual
              estágio do método Atlas faz sentido para a sua empresa — e por quê.
            </p>

            {/* Result card */}
            <div style={{
              border: "1px solid var(--rule-strong)",
              padding: 28,
              background: "var(--paper-2)",
              color: "var(--ink)",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                <span style={{ fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>diagnóstico.atlas</span>
                <span style={{ color: "var(--muted)" }}>running...</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 4 }}>
                <span style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: 72, lineHeight: 1, color,
                  letterSpacing: "-0.04em",
                  fontFeatureSettings: '"tnum"',
                }}>
                  {pct}
                </span>
                <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>/100 · maturidade</span>
              </div>
              <div style={{ height: 4, background: "var(--paper-3)", marginBottom: 24, position: "relative" }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: color,
                  width: `${pct}%`,
                  transition: "width 0.4s ease",
                }} />
              </div>
              <div style={{ fontSize: 11, marginBottom: 8, color: "var(--muted)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>próxima etapa recomendada</div>
              <div style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: 26,
                marginBottom: 14,
                color,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}>
                {stage}
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", textTransform: "none", letterSpacing: 0 }}>
                {recommendation}
              </div>
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--rule)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, color: "var(--muted)" }}>versão resumida · 5 dimensões</span>
                <a href="diagnostico.html" className="btn btn-sm" style={{ textTransform: "none", letterSpacing: 0 }}>
                  Versão completa <span className="arr">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Dimensions */}
          <div style={{ paddingTop: 8 }}>
            {dims.map((d, i) => {
              const v = scores[d.key];
              return (
                <div key={d.key} style={{
                  padding: "20px 0",
                  borderBottom: i < dims.length - 1 ? "1px solid var(--rule)" : "none",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                    <div>
                      <span className="mono" style={{ fontSize: 10, color: "var(--muted-2)", marginRight: 12 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{ fontSize: 17, fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "-0.005em" }}>{d.label}</span>
                    </div>
                    <span className="mono" style={{ fontSize: 12, color: "var(--paper)", fontWeight: 700 }}>
                      [{v}/4]
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--muted-2)", marginBottom: 14 }}>{d.q}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 4 }}>
                    {[0, 1, 2, 3, 4].map((n) => (
                      <button key={n}
                        onClick={() => setScores((s) => ({ ...s, [d.key]: n }))}
                        style={{
                          padding: "10px 0",
                          border: "1px solid",
                          borderColor: v === n ? "var(--paper)" : "var(--rule-strong)",
                          background: v === n ? "var(--paper)" : "transparent",
                          color: v === n ? "var(--ink)" : "var(--paper-3)",
                          fontFamily: "var(--font-mono)",
                          fontSize: 11,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          transition: "all 0.15s",
                        }}>
                        {["inex.", "inic.", "parc.", "cons.", "maduro"][n]}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * PROOF — what we don't do / do
 * ============================================================ */
function Principles() {
  const rowsRef = useRefH(null);
  useEffectH(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.25 });
    const rows = rowsRef.current?.querySelectorAll(".princ-row") || [];
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  const rows = [
    ["Vender hype.",                 "Entregar engenharia.",            "Se a proposta cabe num slide de marketing, ela não cabe em produção."],
    ["Apresentações bonitas.",       "Sistemas em operação.",           "Deck não roda na sexta-feira às 23h. Código roda."],
    ["Promessas com a palavra mágica.", "Modelos com matemática explícita.", "IA é ferramenta, não desculpa. Toda decisão tem uma função-objetivo."],
    ["Times de vendas.",             "Engenheiros conversando direto.", "Quem vende é quem constrói. Se você falar com a gente, falou com quem vai implementar."],
    ["POC eterna.",                  "Data de entrada em produção.",    "Todo projeto começa com uma data de corte. Sem ela, é pesquisa, não engenharia."],
  ];
  return (
    <section className="section" style={{ background: "var(--sand)" }}>
      <div className="container">
        <SectionHead
          index="§ 04"
          eyebrow="Princípios"
          title={<>Postura, <em>em cinco linhas</em>.</>}
          lede="Num mercado em que quase todo mundo promete a mesma coisa, vale a pena dizer exatamente o que recusamos. Por eliminação, fica claro o que fazemos."
        />

        <div ref={rowsRef} style={{ borderTop: "1px solid var(--rule-strong)", marginTop: 12 }}>
          {rows.map((r, i) => (
            <div key={i} data-idx={i} className="princ-row" style={{
              display: "grid",
              gridTemplateColumns: "60px 1.1fr 1.1fr 1fr",
              borderBottom: "1px solid var(--rule)",
              padding: "36px 0",
              alignItems: "baseline",
              gap: 24,
            }}>
              <span className="mono princ-num" style={{ fontSize: 11, color: "var(--muted-2)" }}>{String(i + 1).padStart(2, "0")}</span>
              <div className="princ-no" style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 2.6vw, 34px)",
                color: "var(--muted)",
                textDecoration: "line-through",
                textDecorationThickness: "1px",
                textDecorationColor: "var(--muted-2)",
                letterSpacing: "-0.01em",
                lineHeight: 1.05,
              }}>
                {r[0]}
              </div>
              <div className="princ-yes" style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 2.6vw, 34px)",
                color: "var(--ink)",
                letterSpacing: "-0.01em",
                lineHeight: 1.05,
              }}>
                {r[1]}
              </div>
              <div className="princ-why" style={{
                fontSize: 13,
                lineHeight: 1.55,
                color: "var(--muted)",
                fontStyle: "italic",
                paddingLeft: 16,
                borderLeft: "1px solid var(--rule)",
              }}>
                {r[2]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * FINAL CTA
 * ============================================================ */
function ClosingCTA() {
  return (
    <section className="section" style={{ paddingBottom: 120 }}>
      <div className="container">
        <div style={{
          border: "1px solid var(--rule-strong)",
          padding: "clamp(48px, 7vw, 96px)",
          position: "relative",
          background: "var(--paper-2)",
        }}>
          <div className="mono" style={{ fontSize: 11, marginBottom: 24 }}>§ Próximo passo</div>
          <h2 className="display" style={{
            fontSize: "clamp(44px, 6.5vw, 88px)",
            margin: "0 0 24px",
            maxWidth: 960,
            letterSpacing: "-0.03em",
          }}>
            Você não precisa de <em>mais uma ferramenta</em>. Precisa de alguém segurando a bússola.
          </h2>
          <p style={{
            fontSize: 18, lineHeight: 1.55, color: "var(--muted)",
            maxWidth: 620, margin: "0 0 40px",
          }}>
            Começamos com um diagnóstico técnico de 90 minutos. Sem formulário
            genérico: conversa direta com engenheiros sobre onde sua operação
            trava hoje.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="contato.html" className="btn">
              Agendar diagnóstico <span className="arr">→</span>
            </a>
            <a href="servicos.html" className="btn btn-ghost">
              Ver serviços
            </a>
          </div>

          {/* Decorative coordinate */}
          <div className="mono" style={{
            position: "absolute",
            top: 24, right: 32,
            fontSize: 10,
            color: "var(--muted-2)",
          }}>
            23°32′S · 46°38′W
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * TWEAKS
 * ============================================================ */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "#2340d9",
  "headline": "Antes da IA, a base."
}/*EDITMODE-END*/;

function applyTweaks(t) {
  const root = document.documentElement;
  if (t.theme === "dark") root.classList.add("theme-dark");
  else root.classList.remove("theme-dark");
  if (t.accent) root.style.setProperty("--accent", t.accent);
}

function TweaksPanel({ state, setState, visible }) {
  if (!visible) return null;
  const update = (k, v) => {
    const next = { ...state, [k]: v };
    setState(next);
    applyTweaks(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  };
  return (
    <div style={{
      position: "fixed", right: 20, bottom: 20, zIndex: 100,
      width: 300, background: "var(--paper)", color: "var(--ink)",
      border: "1px solid var(--rule-strong)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
      fontFamily: "var(--font-sans)", fontSize: 13,
    }}>
      <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--rule)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="mono" style={{ fontSize: 11 }}>§ Tweaks</span>
      </div>
      <div style={{ padding: 16 }}>
        <div className="mono" style={{ fontSize: 10, marginBottom: 8 }}>Tema</div>
        <div style={{ display: "flex", gap: 0, border: "1px solid var(--rule-strong)", marginBottom: 20 }}>
          {["light", "dark"].map((v) => (
            <button key={v} onClick={() => update("theme", v)}
              style={{
                flex: 1, padding: "10px 12px",
                background: state.theme === v ? "var(--ink)" : "transparent",
                color: state.theme === v ? "var(--paper)" : "var(--ink)",
                cursor: "pointer", fontSize: 12, textTransform: "capitalize",
              }}>{v}</button>
          ))}
        </div>
        <div className="mono" style={{ fontSize: 10, marginBottom: 8 }}>Accent</div>
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {["#2340d9", "#c2410c", "#0891b2", "#059669", "#0a0a0a"].map((c) => (
            <button key={c} onClick={() => update("accent", c)}
              style={{
                width: 28, height: 28, background: c,
                border: state.accent === c ? "2px solid var(--ink)" : "1px solid var(--rule)",
                cursor: "pointer",
              }} />
          ))}
        </div>
        <div className="mono" style={{ fontSize: 10, marginBottom: 8 }}>Headline</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {[
            "Antes da IA, a base.",
            "A ordem importa.",
            "Engenharia, antes de mágica.",
          ].map((h) => (
            <button key={h} onClick={() => update("headline", h)}
              style={{
                padding: "10px 12px", textAlign: "left",
                border: "1px solid",
                borderColor: state.headline === h ? "var(--ink)" : "var(--rule)",
                background: state.headline === h ? "var(--paper-2)" : "transparent",
                cursor: "pointer", fontFamily: "var(--font-display)", fontSize: 15,
                color: "var(--ink)",
              }}>{h}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
 * ROOT
 * ============================================================ */
function Home() {
  const [tweaks, setTweaks] = useStateH(TWEAK_DEFAULTS);
  const [tweakOpen, setTweakOpen] = useStateH(false);

  useEffectH(() => {
    applyTweaks(TWEAK_DEFAULTS);
    const onMsg = (e) => {
      if (e.data?.type === "__activate_edit_mode") setTweakOpen(true);
      if (e.data?.type === "__deactivate_edit_mode") setTweakOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  // Render the headline tweak via a style-based swap using CSS var
  useEffectH(() => {
    const el = document.getElementById("headline-text");
    if (el) {
      const parts = tweaks.headline.split(",");
      if (parts.length > 1) {
        el.innerHTML = `${parts[0].trim()},<br/><em>${parts.slice(1).join(",").trim()}</em>`;
      } else {
        el.innerHTML = tweaks.headline;
      }
    }
  }, [tweaks.headline]);

  return (
    <>
      <Nav active="home" />
      <Hero />
      <ClientWall />
      <WhyOrder />
      <MITProof />
      <Method />
      <InlineDiagnosis />
      <Principles />
      <ClosingCTA />
      <MobileStickyCTA />
      <Footer />
      <TweaksPanel state={tweaks} setState={setTweaks} visible={tweakOpen} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Home />);
