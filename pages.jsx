// pages.jsx — Sobre, Serviços, Diagnóstico, Contato
// Detects which page via <body data-page="...">

const { useState: useStateP, useMemo: useMemoP, useEffect: useEffectP } = React;

/* Global reveal: observes all .reveal elements and adds .in when visible */
function useRevealOnScroll() {
  useEffectP(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    const scan = () => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    };
    scan();
    // re-scan shortly after mount (catches anything rendered in microtasks)
    const t = setTimeout(scan, 80);
    return () => { clearTimeout(t); io.disconnect(); };
  }, []);
}

/* ============================================================
 * SOBRE
 * ============================================================ */
function Sobre() {
  useRevealOnScroll();
  return (
    <>
      <Nav active="sobre" />

      {/* Manifesto hero */}
      <section className="section" id="manifesto" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <div style={{ display: "flex", gap: 20, marginBottom: 40 }}>
            <span className="mono">§ Manifesto</span>
            <span className="mono" style={{ color: "var(--muted-2)" }}>— Atlas 2026</span>
          </div>
          <h1 className="display reveal reveal-zoom" style={{
            fontSize: "clamp(56px, 9vw, 144px)",
            margin: 0,
            letterSpacing: "-0.035em",
            maxWidth: 1200,
          }}>
            Engenharia e <em>governança</em>, na <em>mesma sala</em>.
          </h1>
        </div>
      </section>

      {/* Manifesto body */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 96,
            borderTop: "1px solid var(--rule-strong)",
            paddingTop: 48,
          }}>
            <div style={{ position: "sticky", top: 96, alignSelf: "start" }}>
              <div className="mono" style={{ fontSize: 11 }}>TESE</div>
              <div style={{ marginTop: 16, fontFamily: "var(--font-display)", fontSize: 32, lineHeight: 1.1 }}>
                <em>A ordem importa.</em>
              </div>
            </div>

            <div className="reveal reveal-right" style={{ maxWidth: 720, fontSize: 19, lineHeight: 1.6, color: "var(--ink-2)" }}>
              <p style={{ marginTop: 0 }}>
                O mercado de IA foi inundado por promessas vazias. Ferramentas
                mágicas que geram slides bonitos e zero impacto operacional.
                Empresas sérias percebem — tarde — que compraram ruído caro.
              </p>
              <p>
                A Atlas nasceu como uma resposta. Somos um time{" "}
                <strong style={{ fontWeight: 500, borderBottom: "1px solid var(--ink)" }}>
                  multidisciplinar
                </strong>
                : engenheiros de dados e pesquisadores operacionais sentados
                lado a lado com{" "}
                <strong style={{ fontWeight: 500, borderBottom: "1px solid var(--ink)" }}>
                  consultores de gestão e governança
                </strong>
                . Uma frente resolve a matemática; a outra, a política
                organizacional que sustenta qualquer sistema em produção.
              </p>
              <p>
                Por isso começamos onde ninguém quer começar:{" "}
                <em style={{ fontFamily: "var(--font-display)" }}>governança</em> e{" "}
                <em style={{ fontFamily: "var(--font-display)" }}>processos</em>.
                São os fundamentos chatos, demorados e caros — e exatamente
                os que tornam automação e IA confiáveis.
              </p>
              <p style={{ marginBottom: 0 }}>
                Só então, com a base pronta, construímos as camadas inteligentes
                que otimizam a operação matematicamente. Nessa ordem. Sem atalho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Is this for you */}
      <section className="section" style={{ background: "var(--paper-2)" }}>
        <div className="container">
          <SectionHead
            index="§ 02"
            eyebrow="Fit"
            title={<>Essa bússola é <em>para você</em>?</>}
            lede="A Atlas não serve para todos. Nossa infraestrutura é pesada e feita para operações que não podem errar."
          />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            {[
              {
                title: "É para você se…",
                color: "var(--ok)",
                symbol: "+",
                items: [
                  "Sua empresa toma decisões baseadas em dados, não em feeling.",
                  "Você entende que IA é infraestrutura, não brinquedo.",
                  "Você busca eficiência operacional mensurável em R$.",
                  "Você prefere engenheiros honestos a vendedores carismáticos.",
                  "Sua operação tem volume que justifica automação séria.",
                ],
              },
              {
                title: "Não é para você se…",
                color: "var(--warn)",
                symbol: "−",
                items: [
                  "Você procura soluções rápidas e mágicas sem base técnica.",
                  "Sua empresa ainda não tem dados estruturados mínimos.",
                  "Você quer só gerar textos ou imagens sem fim operacional.",
                  "Você espera resultados em duas semanas.",
                  "Você quer terceirizar a estratégia — faremos com você, não por você.",
                ],
              },
            ].map((col, i) => (
              <div key={i} className="reveal" style={{
                "--i": i,
                background: "var(--paper)",
                border: "1px solid var(--rule-strong)",
                padding: 36,
              }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 24 }}>
                  <span className="mono" style={{ fontSize: 20, color: col.color }}>{col.symbol}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 30, margin: 0, letterSpacing: "-0.01em" }}>
                    {col.title}
                  </h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.items.map((t, k) => (
                    <li key={k} style={{
                      padding: "14px 0",
                      borderTop: "1px solid var(--rule)",
                      fontSize: 15,
                      lineHeight: 1.5,
                      display: "flex",
                      gap: 16,
                    }}>
                      <span className="mono" style={{ fontSize: 10, color: "var(--muted-2)" }}>{String(k + 1).padStart(2, "0")}</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crew */}
      <section className="section" id="tripulacao">
        <div className="container">
          <SectionHead
            index="§ 03"
            eyebrow="Tripulação técnica"
            title={<>Um coletivo <em>multidisciplinar</em>.</>}
            lede="Engenheiros de Dados, Cientistas, Pesquisadores Operacionais e consultores de gestão e governança. Uma metade resolve a matemática; a outra, a política organizacional que sustenta o sistema em produção."
          />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid var(--rule-strong)",
          }}>
            {[
              ["ENG / 01", "Engenharia de Dados", "Arquitetura de pipelines, qualidade, observabilidade. Quem garante que o dado certo chega no lugar certo."],
              ["OR / 02", "Pesquisa Operacional", "Modelos matemáticos para otimização. Quem transforma problema de negócio em função objetivo."],
              ["ML / 03", "Ciência Aplicada", "Modelagem estatística e ML. Quem escolhe a ferramenta matemática certa — e recusa as erradas."],
              ["GOV / 04", "Governança", "Políticas, RACI, segurança. Quem impede que a operação vire o oeste selvagem dos dados."],
              ["PROC / 05", "Desenho de Processos", "Mapeamento de fluxos, KPIs, SLAs. Quem traduz operação informal em sistema."],
              ["AUTO / 06", "Automação", "Workflow engineering, orquestração. Quem faz o sistema rodar sozinho, com confiança."],
            ].map(([code, title, desc], i) => (
              <div key={code} className="reveal" style={{
                "--i": i % 3,
                padding: "40px 28px",
                borderRight: (i + 1) % 3 !== 0 ? "1px solid var(--rule)" : "none",
                borderBottom: "1px solid var(--rule)",
              }}>
                <div className="mono" style={{ fontSize: 11, marginBottom: 24 }}>{code}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 30, lineHeight: 1.05, marginBottom: 14, letterSpacing: "-0.01em" }}>
                  {title}
                </div>
                <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.55 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="section" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="container">
          <div className="mono" style={{ fontSize: 11, color: "var(--muted)", marginBottom: 32 }}>§ 04 — Parâmetros da operação</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, borderTop: "1px solid var(--rule-strong)", paddingTop: 40 }}>
            {[
              ["4", "Estágios do método", "Governança → IA"],
              ["90 min", "Diagnóstico técnico", "Antes de qualquer proposta"],
              ["0", "Vendedores no processo", "Quem fala com você, constrói"],
              ["∞", "Paciência por bons fundamentos", "Sem atalhos"],
            ].map(([big, label, sub], i) => (
              <div key={i} className="reveal" style={{ "--i": i }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(56px, 7vw, 104px)",
                  lineHeight: 0.95,
                  color: "var(--paper)",
                  letterSpacing: "-0.03em",
                }}>
                  {big}
                </div>
                <div style={{ marginTop: 20, fontFamily: "var(--font-display)", fontSize: 18, fontStyle: "italic", color: "var(--paper)" }}>
                  {label}
                </div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="display reveal" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "0 0 20px" }}>
            Converse com a <em>engenharia</em>.
          </h2>
          <p style={{ fontSize: 18, color: "var(--muted)", maxWidth: 560, margin: "0 auto 32px" }}>
            90 minutos com quem vai desenhar e construir o sistema. Sem pitch deck.
          </p>
          <a href="contato.html" className="btn">Agendar diagnóstico <span className="arr">→</span></a>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ============================================================
 * SERVIÇOS
 * ============================================================ */
function ServiceBlock({ idx, id, title, lede, deliverables, outputs, time, deps, accent }) {
  return (
    <section id={id} className="section" style={{ paddingTop: 80, paddingBottom: 80, borderTop: "1px solid var(--rule-strong)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }}>
          <div>
            <div className="mono" style={{ fontSize: 11, marginBottom: 20 }}>§ {idx} / Estágio</div>
            <h2 className="display reveal" style={{
              fontSize: "clamp(48px, 6vw, 96px)",
              margin: "0 0 20px",
              letterSpacing: "-0.03em",
            }}>
              {title}
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--muted)", maxWidth: 380 }}>
              {lede}
            </p>

            <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--rule)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 12 }}>
                <span className="mono" style={{ fontSize: 11 }}>Duração típica</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{time}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                <span className="mono" style={{ fontSize: 11 }}>Pré-requisitos</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{deps || "—"}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="mono" style={{ fontSize: 11, marginBottom: 16 }}>O que fazemos</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "1px solid var(--rule)" }}>
              {deliverables.map((d, i) => (
                <div key={i} className="reveal" style={{
                  "--i": i,
                  padding: "20px 24px",
                  borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none",
                  borderBottom: i < deliverables.length - 2 ? "1px solid var(--rule)" : "none",
                }}>
                  <div className="mono" style={{ fontSize: 10, color: accent, marginBottom: 6 }}>{String(i + 1).padStart(2, "0")}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.15, marginBottom: 6, letterSpacing: "-0.01em" }}>
                    {d.title}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>{d.desc}</div>
                </div>
              ))}
            </div>

            <div className="mono" style={{ fontSize: 11, margin: "32px 0 16px" }}>Entregáveis finais</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {outputs.map((o) => (
                <span key={o} style={{
                  padding: "8px 14px",
                  border: "1px solid var(--rule-strong)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.04em",
                }}>
                  {o}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Servicos() {
  useRevealOnScroll();
  return (
    <>
      <Nav active="servicos" />

      {/* Hero */}
      <section className="section" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="container">
          <span className="mono">§ Serviços — método em quatro estágios</span>
          <h1 className="display reveal reveal-zoom" style={{
            fontSize: "clamp(56px, 9vw, 140px)",
            margin: "24px 0 40px",
            letterSpacing: "-0.035em",
            maxWidth: 1100,
          }}>
            Começamos pela <em>base</em>. Chegamos até a IA — com ela <em>funcionando</em>.
          </h1>
          <p style={{ fontSize: 20, lineHeight: 1.55, color: "var(--muted)", maxWidth: 720 }}>
            Quatro estágios sequenciais. Cada um entrega valor por si só e serve
            de fundação para o próximo. Você pode contratar estágios isolados —
            desde que os anteriores já existam na sua operação.
          </p>
        </div>
      </section>

      {/* Stages overview */}
      <section style={{ borderTop: "1px solid var(--rule-strong)", borderBottom: "1px solid var(--rule-strong)", background: "var(--paper-2)", padding: "32px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {[
              ["01", "Governança", "#governanca"],
              ["02", "Processos", "#processos"],
              ["03", "Automação", "#automacao"],
              ["04", "IA Aplicada", "#ia"],
            ].map(([n, t, href], i) => (
              <a key={n} href={href}
                className="reveal"
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 16,
                  paddingBottom: 8,
                  borderBottom: "1px solid transparent",
                  transition: "border-color 0.15s",
                  "--i": i,
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = "var(--ink)"}
                onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = "transparent"}>
                <span className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>{n}</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 28, letterSpacing: "-0.01em" }}>{t}</span>
                <span style={{ marginLeft: "auto", color: "var(--muted)" }}>↓</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ServiceBlock
        idx="01" id="governanca" title={<>Governança</>}
        lede="Ninguém constrói um edifício sobre areia. Começamos estruturando responsabilidades, políticas de dados e a fotografia real de onde a informação vive hoje."
        time="4–6 semanas" deps="—"
        accent="var(--accent)"
        deliverables={[
          { title: "Inventário de dados", desc: "Mapeamento das fontes, sistemas e silos ativos." },
          { title: "Matriz RACI", desc: "Quem aprova, executa, consulta e é informado sobre cada domínio." },
          { title: "Política de acesso", desc: "Quem vê o quê, com que frequência, com que auditoria." },
          { title: "Classificação de sensibilidade", desc: "LGPD, confidencialidade, retenção — por domínio." },
        ]}
        outputs={["relatório técnico", "matriz raci.xlsx", "política de dados v1", "plano de remediação"]}
      />
      <ServiceBlock
        idx="02" id="processos" title={<>Processos</>}
        lede="Antes de automatizar, é preciso que a operação seja repetível. Mapeamos o fluxo real, identificamos divergências entre times e padronizamos com KPIs mensuráveis."
        time="6–10 semanas" deps="Governança"
        accent="var(--accent)"
        deliverables={[
          { title: "Fluxos as-is", desc: "Como a operação realmente acontece hoje, sem edulcorar." },
          { title: "Fluxos to-be", desc: "Versão padronizada que elimina retrabalho e handoffs quebrados." },
          { title: "Tabela de KPIs", desc: "Métricas de saúde por etapa do processo, com baseline." },
          { title: "SLAs por estágio", desc: "Acordos internos claros sobre tempo e qualidade esperada." },
        ]}
        outputs={["fluxo as-is / to-be", "kpi tree", "sla contract", "gap analysis"]}
      />
      <ServiceBlock
        idx="03" id="automacao" title={<>Automação</>}
        lede="Com processo sólido, automatizamos o que deve rodar sozinho — sem excluir humanos, mas liberando-os para decisões de julgamento. Workflows com observabilidade real."
        time="8–12 semanas" deps="Processos"
        accent="var(--accent)"
        deliverables={[
          { title: "Pipelines operacionais", desc: "ETL/ELT, integrações e orquestração de tarefas repetitivas." },
          { title: "Workflows inteligentes", desc: "Automações com regras, branching e tratamento de exceções." },
          { title: "Observabilidade", desc: "Dashboards operacionais, alertas e trilha de auditoria." },
          { title: "Runbooks", desc: "Playbooks para quando algo quebra — e sempre quebra." },
        ]}
        outputs={["pipelines em produção", "dashboards", "alertas", "runbook book"]}
      />
      <ServiceBlock
        idx="04" id="ia" title={<>IA Aplicada</>}
        lede="Com dados confiáveis e processo rodando, introduzimos modelos matemáticos que otimizam decisões. IA que vive em produção, com KPIs de negócio — não demos de laboratório."
        time="contínuo, ciclos de 8 semanas" deps="Automação, Processos"
        accent="var(--ok)"
        deliverables={[
          { title: "Modelos preditivos", desc: "Previsão de demanda, churn, qualidade — aplicados ao fluxo." },
          { title: "Otimização matemática", desc: "Pesquisa operacional sobre problemas reais — roteirização, alocação, pricing." },
          { title: "IA generativa aplicada", desc: "Casos com ROI claro, integrados aos pipelines existentes." },
          { title: "Loop de melhoria", desc: "Retraining, drift monitoring, canary releases — IA como infraestrutura viva." },
        ]}
        outputs={["modelos em produção", "otimizador matemático", "métricas de negócio", "ciclo de melhoria"]}
      />

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div style={{
            border: "1px solid var(--rule-strong)",
            padding: "clamp(48px, 7vw, 80px)",
            background: "var(--paper-2)",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 48,
            alignItems: "center",
          }}>
            <div>
              <div className="mono" style={{ fontSize: 11, marginBottom: 20 }}>§ Antes de começar</div>
              <h2 className="display" style={{ fontSize: "clamp(36px, 4.5vw, 60px)", margin: 0, letterSpacing: "-0.02em" }}>
                Não sabe onde começar? <em>Use o diagnóstico.</em>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              <a href="diagnostico.html" className="btn">
                Fazer diagnóstico <span className="arr">→</span>
              </a>
              <a href="contato.html" className="btn btn-ghost">
                Falar com engenharia
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ============================================================
 * DIAGNÓSTICO — versão completa
 * ============================================================ */
function DiagnosticoFull() {
  useRevealOnScroll();
  const dimensions = [
    {
      key: "gov_policy", stage: "01", area: "Governança",
      label: "Políticas de dados formalizadas",
      levels: ["Inexistentes", "Informais, em cabeças", "Documentadas para áreas críticas", "Institucionalizadas e auditáveis"],
    },
    {
      key: "gov_roles", stage: "01", area: "Governança",
      label: "Responsáveis por domínio de dado",
      levels: ["Ninguém responde por nada", "Heróis individuais", "Data owners nomeados", "RACI vivo e aplicado"],
    },
    {
      key: "gov_sec", stage: "01", area: "Governança",
      label: "Segurança e LGPD",
      levels: ["Acesso irrestrito", "Controles básicos", "Classificação por sensibilidade", "Auditoria contínua, DPO ativo"],
    },
    {
      key: "proc_map", stage: "02", area: "Processos",
      label: "Mapeamento de processos",
      levels: ["Tribal knowledge", "Documentos desatualizados", "As-is mapeado nas áreas críticas", "As-is + to-be em ciclo de melhoria"],
    },
    {
      key: "proc_kpi", stage: "02", area: "Processos",
      label: "KPIs operacionais",
      levels: ["Não medimos", "Planilhas manuais", "Dashboards por área", "KPI tree integrada ao negócio"],
    },
    {
      key: "proc_sla", stage: "02", area: "Processos",
      label: "SLAs internos",
      levels: ["Inexistentes", "Informais", "Formalizados por área", "Monitorados em tempo real"],
    },
    {
      key: "auto_pipe", stage: "03", area: "Automação",
      label: "Pipelines de dados",
      levels: ["Exportações manuais", "Scripts pontuais", "ETL consolidado", "Pipelines observáveis e testados"],
    },
    {
      key: "auto_flow", stage: "03", area: "Automação",
      label: "Automação de workflow",
      levels: ["Tudo manual", "Alguns scripts", "Automação em áreas críticas", "Orquestração end-to-end"],
    },
    {
      key: "auto_obs", stage: "03", area: "Automação",
      label: "Observabilidade",
      levels: ["Zero visibilidade", "Logs espalhados", "Dashboards e alertas", "SLOs com runbooks ativos"],
    },
    {
      key: "ai_models", stage: "04", area: "IA Aplicada",
      label: "Modelos em produção",
      levels: ["Nenhum", "Protótipos em notebooks", "Modelos em produção, sem monitoria", "Modelos monitorados, com drift detection"],
    },
    {
      key: "ai_impact", stage: "04", area: "IA Aplicada",
      label: "Impacto mensurável da IA",
      levels: ["Não medido", "Anedótico", "Medido em alguns projetos", "KPI de negócio ligado a modelos"],
    },
    {
      key: "ai_opt", stage: "04", area: "IA Aplicada",
      label: "Otimização matemática",
      levels: ["Decisões por feeling", "Planilhas avançadas", "Otimização em alguns domínios", "Otimização integrada ao workflow"],
    },
  ];

  const [scores, setScores] = useStateP(() =>
    Object.fromEntries(dimensions.map((d) => [d.key, 1]))
  );

  const byStage = useMemoP(() => {
    const stages = {};
    dimensions.forEach((d) => {
      if (!stages[d.stage]) stages[d.stage] = { sum: 0, count: 0, area: d.area };
      stages[d.stage].sum += scores[d.key];
      stages[d.stage].count++;
    });
    return stages;
  }, [scores]);

  const totalPct = useMemoP(() => {
    const sum = Object.values(scores).reduce((a, b) => a + b, 0);
    return Math.round((sum / (dimensions.length * 3)) * 100);
  }, [scores]);

  // Recommend stage: first stage whose avg < 2
  const recommendedStage = useMemoP(() => {
    const order = ["01", "02", "03", "04"];
    for (const s of order) {
      const st = byStage[s];
      const avg = st.sum / st.count;
      if (avg < 2) return { key: s, area: st.area, avg };
    }
    return { key: "04", area: "IA Aplicada", avg: byStage["04"].sum / byStage["04"].count };
  }, [byStage]);

  return (
    <>
      <Nav active="diag" />

      <section className="section" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="container">
          <span className="mono">§ Diagnóstico Atlas — edição completa</span>
          <h1 className="display reveal reveal-zoom" style={{
            fontSize: "clamp(52px, 8vw, 120px)",
            margin: "24px 0 32px",
            letterSpacing: "-0.035em",
            maxWidth: 1100,
          }}>
            12 perguntas. 4 estágios. <em>Um plano.</em>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--muted)", maxWidth: 680 }}>
            Responda com honestidade — este questionário não pontua você, pontua
            sua operação. O resultado indica o próximo estágio do método Atlas
            que faz sentido priorizar.
          </p>
        </div>
      </section>

      {/* Result bar (sticky) */}
      <div style={{
        position: "sticky", top: 64, zIndex: 20,
        background: "var(--ink)", color: "var(--paper)",
        borderTop: "1px solid var(--rule-strong)",
        borderBottom: "1px solid var(--rule-strong)",
      }}>
        <div className="container" style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto auto",
          alignItems: "center",
          gap: 32,
          padding: "18px 0",
        }}>
          <div>
            <div className="mono" style={{ fontSize: 10, color: "var(--muted)" }}>maturidade</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 36, lineHeight: 1, marginTop: 2 }}>
              {totalPct}<span style={{ fontSize: 14, color: "var(--muted)", marginLeft: 4 }}>/100</span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4 }}>
            {["01", "02", "03", "04"].map((s) => {
              const st = byStage[s];
              const avg = st.sum / st.count;
              const pct = (avg / 3) * 100;
              return (
                <div key={s}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, fontFamily: "var(--font-mono)", marginBottom: 6, color: "var(--muted)" }}>
                    <span>{s} · {st.area}</span>
                    <span>{Math.round(pct)}%</span>
                  </div>
                  <div style={{ height: 4, background: "var(--paper-3)", position: "relative", opacity: 0.3 }}>
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "var(--paper)", width: `${pct}%`,
                      transition: "width 0.3s",
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="mono" style={{ fontSize: 10, color: "var(--muted)" }}>próximo estágio</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontStyle: "italic", marginTop: 2 }}>
              {recommendedStage.key}. {recommendedStage.area}
            </div>
          </div>
          <a href="contato.html" className="btn btn-sm" style={{ background: "var(--paper)", color: "var(--ink)", borderColor: "var(--paper)" }}>
            Agendar <span className="arr">→</span>
          </a>
        </div>
      </div>

      {/* Questions */}
      <section className="section" style={{ paddingTop: 64 }}>
        <div className="container">
          {["01", "02", "03", "04"].map((stageKey, stageI) => {
            const qs = dimensions.filter((d) => d.stage === stageKey);
            const areaName = qs[0].area;
            return (
              <div key={stageKey} className="reveal" style={{ marginBottom: 80, "--i": stageI }}>
                <div style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 24,
                  padding: "20px 0",
                  borderBottom: "1px solid var(--rule-strong)",
                  marginBottom: 32,
                }}>
                  <span className="mono" style={{ fontSize: 11 }}>§ {stageKey}</span>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: 48, margin: 0, letterSpacing: "-0.02em" }}>
                    {areaName}
                  </h2>
                  <span className="mono" style={{ fontSize: 11, color: "var(--muted)", marginLeft: "auto" }}>
                    {qs.length} dimensões
                  </span>
                </div>

                {qs.map((d, i) => {
                  const v = scores[d.key];
                  return (
                    <div key={d.key} className="reveal" style={{
                      "--i": i,
                      padding: "28px 0",
                      borderBottom: "1px solid var(--rule)",
                      display: "grid",
                      gridTemplateColumns: "340px 1fr",
                      gap: 48,
                    }}>
                      <div>
                        <div className="mono" style={{ fontSize: 10, color: "var(--muted-2)", marginBottom: 10 }}>
                          {stageKey}.{String(i + 1).padStart(2, "0")}
                        </div>
                        <div style={{ fontSize: 18, lineHeight: 1.35, fontFamily: "var(--font-display)", letterSpacing: "-0.005em" }}>
                          {d.label}
                        </div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, border: "1px solid var(--rule)" }}>
                        {d.levels.map((lvl, n) => (
                          <button key={n}
                            onClick={() => setScores((s) => ({ ...s, [d.key]: n }))}
                            style={{
                              padding: "18px 18px 20px",
                              textAlign: "left",
                              background: v === n ? "var(--ink)" : "transparent",
                              color: v === n ? "var(--paper)" : "var(--ink)",
                              borderRight: n < 3 ? "1px solid var(--rule)" : "none",
                              cursor: "pointer",
                              transition: "background 0.15s, color 0.15s",
                              minHeight: 104,
                            }}>
                            <div className="mono" style={{ fontSize: 10, color: v === n ? "var(--paper-3)" : "var(--muted-2)", marginBottom: 8 }}>
                              nível {n}
                            </div>
                            <div style={{ fontSize: 13, lineHeight: 1.4 }}>{lvl}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>

      {/* Result panel */}
      <section className="section" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "start" }}>
            <div className="reveal">
              <div className="mono" style={{ fontSize: 11, marginBottom: 20, color: "var(--muted)" }}>§ Resultado</div>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "0 0 24px" }}>
                Sua maturidade: <em style={{ color: "var(--accent)" }}>{totalPct}/100</em>
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--paper-3)", maxWidth: 440 }}>
                Com base nas respostas, o próximo estágio que a Atlas recomenda
                priorizar é:
              </p>
              <div style={{
                marginTop: 32,
                padding: 32,
                background: "var(--paper)",
                color: "var(--ink)",
              }}>
                <div className="mono" style={{ fontSize: 11, color: "var(--muted)", marginBottom: 12 }}>recomendação</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 56, lineHeight: 1, letterSpacing: "-0.03em" }}>
                  {recommendedStage.key}. <em>{recommendedStage.area}</em>
                </div>
                <p style={{ marginTop: 20, fontSize: 14, color: "var(--muted)", lineHeight: 1.55 }}>
                  {recommendedStage.key === "01" && "Sua operação precisa começar pelo fundamento — responsabilidades, políticas e visibilidade sobre os dados."}
                  {recommendedStage.key === "02" && "Governança mínima existe. O ganho agora é ter operações previsíveis e medidas."}
                  {recommendedStage.key === "03" && "Base sólida. Automatizar o repetitivo vai gerar capacidade real para o próximo passo."}
                  {recommendedStage.key === "04" && "Você tem fundação para sustentar IA com KPIs de negócio. Hora de aplicar matemática."}
                </p>
                <a href="contato.html" className="btn" style={{ marginTop: 24 }}>
                  Discutir plano com engenharia <span className="arr">→</span>
                </a>
              </div>
            </div>

            <div className="reveal reveal-left">
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", marginBottom: 20 }}>mapa de maturidade</div>
              <div style={{ border: "1px solid var(--rule-strong)" }}>
                {dimensions.map((d, i) => {
                  const v = scores[d.key];
                  return (
                    <div key={d.key} style={{
                      display: "grid",
                      gridTemplateColumns: "60px 1fr 120px",
                      alignItems: "center",
                      padding: "14px 20px",
                      borderBottom: i < dimensions.length - 1 ? "1px solid var(--rule)" : "none",
                      fontSize: 13,
                    }}>
                      <span className="mono" style={{ fontSize: 10, color: "var(--muted)" }}>{d.stage}.{String(i + 1).padStart(2, "0")}</span>
                      <span style={{ color: "var(--paper-3)" }}>{d.label}</span>
                      <div style={{ display: "flex", gap: 3 }}>
                        {[0, 1, 2, 3].map((n) => (
                          <div key={n} style={{
                            flex: 1, height: 14,
                            background: n <= v ? "var(--paper)" : "var(--paper-3)",
                            opacity: n <= v ? 1 : 0.2,
                          }} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ============================================================
 * CONTATO
 * ============================================================ */
function Contato() {
  const [form, setForm] = useStateP({
    nome: "", empresa: "", email: "", cargo: "",
    estagio: "", contexto: "", urgencia: "mid",
  });
  const [sent, setSent] = useStateP(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Nav active="contato" />

      <section className="section" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="container">
          <span className="mono">§ Contato — diagnóstico técnico</span>
          <h1 className="display" style={{
            fontSize: "clamp(52px, 8vw, 120px)",
            margin: "24px 0 32px",
            letterSpacing: "-0.035em",
            maxWidth: 1100,
          }}>
            Converse com <em>engenheiros</em>, não com vendedores.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--muted)", maxWidth: 620 }}>
            90 minutos, diretos com quem vai desenhar o sistema. Sem apresentação,
            sem pitch deck. Só perguntas boas sobre onde sua operação trava.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 64,
            borderTop: "1px solid var(--rule-strong)",
            paddingTop: 48,
          }}>
            {/* Form */}
            <form onSubmit={submit}>
              {sent ? (
                <div style={{
                  border: "1px solid var(--ok)",
                  padding: 40,
                  background: "var(--paper-2)",
                }}>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ok)", marginBottom: 16 }}>
                    status: received
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 40, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
                    Recebido, {form.nome.split(" ")[0] || "pioneiro"}.
                  </h3>
                  <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.55, marginBottom: 24 }}>
                    Um engenheiro da Atlas vai responder em até 2 dias úteis com
                    3 janelas de 90 minutos para o diagnóstico. Enquanto isso:
                  </p>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a href="diagnostico.html" className="btn btn-ghost">Fazer o diagnóstico online</a>
                    <a href="servicos.html" className="btn btn-ghost">Ler sobre o método</a>
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                    <Field label="Nome" required value={form.nome} onChange={update("nome")} />
                    <Field label="Cargo" required value={form.cargo} onChange={update("cargo")} />
                    <Field label="Empresa" required value={form.empresa} onChange={update("empresa")} />
                    <Field label="E-mail corporativo" required type="email" value={form.email} onChange={update("email")} />
                  </div>

                  <div style={{ marginBottom: 28 }}>
                    <label className="mono" style={{ display: "block", fontSize: 11, marginBottom: 12 }}>
                      Em que estágio você acha que sua operação está?
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, border: "1px solid var(--rule-strong)" }}>
                      {[
                        ["01", "Governança"],
                        ["02", "Processos"],
                        ["03", "Automação"],
                        ["04", "IA Aplicada"],
                      ].map(([n, t], i) => (
                        <button key={n} type="button"
                          onClick={() => setForm((f) => ({ ...f, estagio: n }))}
                          style={{
                            padding: "18px 14px",
                            textAlign: "left",
                            background: form.estagio === n ? "var(--ink)" : "transparent",
                            color: form.estagio === n ? "var(--paper)" : "var(--ink)",
                            borderRight: i < 3 ? "1px solid var(--rule-strong)" : "none",
                            cursor: "pointer",
                          }}>
                          <div className="mono" style={{ fontSize: 10, color: form.estagio === n ? "var(--paper-3)" : "var(--muted-2)", marginBottom: 6 }}>{n}</div>
                          <div style={{ fontSize: 15, fontFamily: "var(--font-display)" }}>{t}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: 28 }}>
                    <label className="mono" style={{ display: "block", fontSize: 11, marginBottom: 12 }}>
                      Contexto — onde sua operação trava hoje?
                    </label>
                    <textarea
                      value={form.contexto}
                      onChange={update("contexto")}
                      rows={5}
                      placeholder="Ex: Nossos dados vivem em 6 planilhas, cada área reporta KPI diferente, e alguém precisa reconciliar toda sexta..."
                      style={{
                        width: "100%",
                        padding: 16,
                        border: "1px solid var(--rule-strong)",
                        background: "var(--paper-2)",
                        fontFamily: "var(--font-sans)",
                        fontSize: 15,
                        resize: "vertical",
                        color: "var(--ink)",
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: 32 }}>
                    <label className="mono" style={{ display: "block", fontSize: 11, marginBottom: 12 }}>
                      Urgência
                    </label>
                    <div style={{ display: "flex", gap: 0, border: "1px solid var(--rule-strong)" }}>
                      {[
                        ["explore", "Explorando possibilidades"],
                        ["mid", "Projeto no próximo trimestre"],
                        ["now", "Precisamos começar ontem"],
                      ].map(([v, t], i) => (
                        <button key={v} type="button"
                          onClick={() => setForm((f) => ({ ...f, urgencia: v }))}
                          style={{
                            flex: 1, padding: "14px 18px",
                            background: form.urgencia === v ? "var(--ink)" : "transparent",
                            color: form.urgencia === v ? "var(--paper)" : "var(--ink)",
                            borderRight: i < 2 ? "1px solid var(--rule-strong)" : "none",
                            cursor: "pointer",
                            fontSize: 14,
                          }}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button type="submit" className="btn" style={{ width: "100%", justifyContent: "space-between", padding: "18px 24px" }}>
                    <span>Enviar para engenharia</span>
                    <span className="arr">→</span>
                  </button>

                  <div className="mono" style={{ fontSize: 10, color: "var(--muted-2)", marginTop: 16, textAlign: "center", letterSpacing: "0.08em" }}>
                    resposta em até 2 dias úteis · sem spam · sem pitch
                  </div>
                </>
              )}
            </form>

            {/* Aside */}
            <aside>
              <div style={{ border: "1px solid var(--rule-strong)", padding: 28, marginBottom: 24 }}>
                <div className="mono" style={{ fontSize: 11, marginBottom: 16 }}>§ O que acontece depois</div>
                <ol style={{ paddingLeft: 0, listStyle: "none", margin: 0 }}>
                  {[
                    ["1", "Engenheiro responde em 2 dias úteis"],
                    ["2", "Diagnóstico técnico de 90 min"],
                    ["3", "Plano de estágios priorizado"],
                    ["4", "Proposta técnica, se fizer sentido"],
                  ].map(([n, t]) => (
                    <li key={n} style={{
                      display: "grid", gridTemplateColumns: "28px 1fr",
                      padding: "12px 0", borderBottom: n !== "4" ? "1px solid var(--rule)" : "none",
                      fontSize: 14, lineHeight: 1.4,
                    }}>
                      <span className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>0{n}</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div style={{ border: "1px solid var(--rule)", padding: 28, background: "var(--paper-2)" }}>
                <div className="mono" style={{ fontSize: 11, marginBottom: 16 }}>§ Canais diretos</div>
                <div style={{ fontSize: 14, lineHeight: 1.7 }}>
                  <div style={{ marginBottom: 8 }}>
                    <div className="mono" style={{ fontSize: 10, color: "var(--muted)" }}>email</div>
                    <a href="mailto:contato@atlas.eng">contato@atlas.eng</a>
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <div className="mono" style={{ fontSize: 10, color: "var(--muted)" }}>localização</div>
                    São Paulo, BR · 23°32′S
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: 10, color: "var(--muted)" }}>linkedin</div>
                    <a href="#">/company/atlas-infra</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Field({ label, value, onChange, type = "text", required }) {
  return (
    <div>
      <label className="mono" style={{ display: "block", fontSize: 11, marginBottom: 8 }}>
        {label} {required && <span style={{ color: "var(--warn)" }}>*</span>}
      </label>
      <input
        type={type} value={value} onChange={onChange} required={required}
        style={{
          width: "100%",
          padding: "14px 0",
          border: "none",
          borderBottom: "1px solid var(--rule-strong)",
          background: "transparent",
          fontFamily: "var(--font-sans)",
          fontSize: 16,
          color: "var(--ink)",
          outline: "none",
        }}
      />
    </div>
  );
}

/* ============================================================
 * ROUTER
 * ============================================================ */
const page = document.body.dataset.page;
const map = { sobre: Sobre, servicos: Servicos, diagnostico: DiagnosticoFull, contato: Contato };
const Page = map[page];
if (Page) {
  ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
}
