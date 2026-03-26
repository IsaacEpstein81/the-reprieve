"use client";

import { useState } from "react";

import { SectionHeader } from "@/components/section-header";
import { SurfaceCard } from "@/components/surface-card";
import { proposal } from "@/lib/content";

const sectionLinks = [
  { id: "hero", label: "Overview" },
  { id: "bottlenecks", label: "Bottlenecks" },
  { id: "model", label: "Model" },
  { id: "flywheel", label: "Flywheel" },
  { id: "architecture", label: "Architecture" },
  { id: "pillars", label: "Pillars" },
  { id: "operating-model", label: "Operating Model" },
  { id: "timeline", label: "Timeline" },
  { id: "phase-1", label: "Phase 1" },
  { id: "investment", label: "Investment" },
  { id: "phase-2", label: "Phase 2" },
  { id: "next-steps", label: "Next Steps" }
] as const;

function DotGrid() {
  return (
    <div className="absolute inset-0 bg-grid bg-[size:34px_34px] opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
  );
}

function ChipButton({
  active,
  onClick,
  children
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        active
          ? "bg-forest-800 text-white shadow-panel"
          : "bg-white/72 text-ink/70 ring-1 ring-forest-100 hover:bg-white"
      }`}
    >
      {children}
    </button>
  );
}

export default function Home() {
  const [activeModel, setActiveModel] = useState<"traditional" | "open">("open");
  const [activeFlywheel, setActiveFlywheel] = useState(0);
  const [activePillarId, setActivePillarId] = useState(proposal.pillars[0]?.id ?? "01");
  const [activeSprint, setActiveSprint] = useState(2);
  const [activeInvestment, setActiveInvestment] = useState(1);

  const activePillar =
    proposal.pillars.find((pillar) => pillar.id === activePillarId) ?? proposal.pillars[0];

  return (
    <main className="bg-sand text-ink">
      <div className="sticky top-0 z-50 border-b border-white/50 bg-sand/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-6 py-4 sm:px-10 lg:px-16">
          {sectionLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="whitespace-nowrap rounded-full border border-forest-100 bg-white/72 px-4 py-2 text-sm font-semibold text-ink/70 transition hover:border-forest-200 hover:bg-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <section id="hero" className="relative overflow-hidden px-6 pb-20 pt-8 sm:px-10 lg:px-16">
        <DotGrid />
        <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top_left,rgba(76,169,135,0.22),transparent_38%),radial-gradient(circle_at_top_right,rgba(18,69,56,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/65 bg-white/72 p-4 shadow-glow backdrop-blur sm:p-6">
            <div className="flex flex-col gap-3 rounded-[1.5rem] border border-forest-100/80 bg-white/86 px-4 py-4 text-sm text-ink/72 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="font-semibold uppercase tracking-[0.28em] text-forest-700">
                  Interactive Proposal
                </span>
                <p className="mt-1 text-sm text-ink/60">
                  Designed to read like a microsite, not a slide export
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="#architecture"
                  className="rounded-full bg-forest-800 px-4 py-2 font-semibold text-white transition hover:bg-forest-900"
                >
                  Explore platform
                </a>
                <a
                  href="#timeline"
                  className="rounded-full border border-forest-200 px-4 py-2 font-semibold text-forest-800 transition hover:bg-forest-50"
                >
                  View 12-week plan
                </a>
              </div>
            </div>

            <div className="grid gap-10 px-2 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-4 lg:py-16">
              <div className="animate-rise">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-forest-600">
                  {proposal.hero.label}
                </p>
                <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.9] tracking-tight text-ink sm:text-7xl">
                  {proposal.hero.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
                  {proposal.hero.description}
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {proposal.hero.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.5rem] border border-forest-100 bg-white/82 p-5 shadow-panel transition hover:-translate-y-1"
                    >
                      <div className="text-3xl font-display text-forest-900">{stat.value}</div>
                      <p className="mt-2 text-sm leading-6 text-ink/68">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <SurfaceCard className="animate-rise-delayed relative overflow-hidden border-forest-200 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/66">
                    Live operating view
                  </p>
                  <h2 className="mt-4 font-display text-4xl leading-tight">
                    The proposal behaves like a command center.
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-white/76">
                    Instead of moving slide-by-slide, visitors can jump by topic, switch lenses,
                    inspect the five-pillar platform, and drill into the sprint plan in context.
                  </p>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur">
                      <div className="text-xs uppercase tracking-[0.28em] text-white/55">
                        Operating lens
                      </div>
                      <div className="mt-3 font-display text-2xl">Scale without losing control</div>
                      <div className="mt-4 h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[78%] rounded-full bg-emerald-300" />
                      </div>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur">
                      <div className="text-xs uppercase tracking-[0.28em] text-white/55">
                        Delivery posture
                      </div>
                      <div className="mt-3 font-display text-2xl">Readiness plus embed</div>
                      <div className="mt-4 flex gap-2">
                        <span className="rounded-full bg-white/12 px-3 py-1 text-xs">Data</span>
                        <span className="rounded-full bg-white/12 px-3 py-1 text-xs">AI</span>
                        <span className="rounded-full bg-white/12 px-3 py-1 text-xs">Ops</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SurfaceCard>
            </div>
          </div>
        </div>
      </section>

      <section id="bottlenecks" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="1. Bottlenecks Of Simultaneous Scaling"
            title="The friction is systemic, not isolated."
            description="The core opportunity is to make those constraints visible and operable instead of letting them stay hidden inside teams and handoffs."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_0.1fr_0.9fr_0.1fr_0.9fr]">
            {proposal.bottlenecks.map((item, index) => (
              <div key={item.title} className="contents">
                <SurfaceCard className="group border-forest-100 bg-white/86 transition duration-300 hover:-translate-y-2 hover:border-forest-200">
                  <div className="text-sm font-semibold uppercase tracking-[0.28em] text-forest-600">
                    Constraint 0{index + 1}
                  </div>
                  <h3 className="mt-4 font-display text-3xl leading-tight">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-ink/72">{item.body}</p>
                  <div className="mt-8 flex items-center gap-2 text-sm text-forest-700">
                    <span className="h-2 w-2 rounded-full bg-forest-500" />
                    Needs shared visibility and workflow design
                  </div>
                </SurfaceCard>
                {index < proposal.bottlenecks.length - 1 ? (
                  <div className="hidden items-center justify-center lg:flex">
                    <div className="h-px w-full bg-gradient-to-r from-forest-200 via-forest-300 to-transparent" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="model" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="2-3. Traditional Vs OpenRecovery"
            title="Switch the lens to see how the operating model changes."
            description="This section now behaves more like an explorable comparison surface, with one model emphasized at a time."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <ChipButton active={activeModel === "traditional"} onClick={() => setActiveModel("traditional")}>
              Traditional model
            </ChipButton>
            <ChipButton active={activeModel === "open"} onClick={() => setActiveModel("open")}>
              OpenRecovery model
            </ChipButton>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_0.2fr_0.9fr]">
            <SurfaceCard
              className={`transition duration-300 ${
                activeModel === "traditional"
                  ? "scale-[1.01] border-rose-200 bg-[#fff7f3] shadow-glow"
                  : "border-rose-100 bg-white/84 opacity-85"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9f5f4d]">
                Traditional transformation
              </p>
              <h3 className="mt-4 font-display text-4xl">{proposal.comparison.left.title}</h3>
              <div className="mt-8 space-y-4">
                {proposal.comparison.left.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.5rem] border border-[#efdad2] bg-white/72 p-4 text-base leading-7 text-ink/72"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </SurfaceCard>

            <div className="hidden items-center justify-center lg:flex">
              <div className="rounded-full border border-forest-100 bg-white/84 px-5 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-forest-700 shadow-panel">
                Shift
              </div>
            </div>

            <SurfaceCard
              className={`transition duration-300 ${
                activeModel === "open"
                  ? "scale-[1.01] border-forest-200 bg-gradient-to-br from-white to-forest-50 shadow-glow"
                  : "border-forest-100 bg-white/84 opacity-85"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-forest-600">
                OpenRecovery
              </p>
              <h3 className="mt-4 font-display text-4xl">{proposal.comparison.right.title}</h3>
              <div className="mt-8 space-y-4">
                {proposal.comparison.right.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.5rem] border border-forest-100 bg-white p-4 text-base leading-7 text-ink/72"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </div>
        </div>
      </section>

      <section id="flywheel" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="4. Operational Outcomes Flywheel"
            title="Click through the loop that compounds value."
            description="The flywheel is no longer just five cards in a row. It works like a navigable model with an active state."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.72fr_0.28fr]">
            <SurfaceCard className="border-forest-100 bg-gradient-to-br from-white to-forest-50">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {proposal.flywheel.map((step, index) => (
                  <button
                    key={step}
                    type="button"
                    onClick={() => setActiveFlywheel(index)}
                    className={`rounded-[1.75rem] border p-5 text-left transition ${
                      activeFlywheel === index
                        ? "border-forest-200 bg-forest-900 text-white shadow-glow"
                        : "border-forest-100 bg-white hover:-translate-y-1"
                    }`}
                  >
                    <div
                      className={`text-sm font-semibold uppercase tracking-[0.28em] ${
                        activeFlywheel === index ? "text-white/65" : "text-forest-600"
                      }`}
                    >
                      Step {index + 1}
                    </div>
                    <p className="mt-4 text-lg leading-8">{step}</p>
                  </button>
                ))}
              </div>
            </SurfaceCard>

            <SurfaceCard className="border-forest-200 bg-forest-900 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/65">
                Active step
              </p>
              <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/12 bg-white/8 font-display text-2xl">
                {activeFlywheel + 1}
              </div>
              <h3 className="mt-6 font-display text-4xl leading-tight">
                {proposal.flywheel[activeFlywheel]}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/78">
                Each stage creates the next one: better operational structure produces cleaner
                signal, cleaner signal improves AI support, and better execution strengthens both
                outcomes and future optimization.
              </p>
            </SurfaceCard>
          </div>
        </div>
      </section>

      <section id="architecture" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="5. Five-Pillar Platform Architecture"
            title="Use the architecture section like a control board."
            description="The platform view is now clickable, so each pillar can be explored without forcing the user through five static blocks first."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <SurfaceCard className="border-forest-100 bg-white/88">
              <div className="grid gap-4 sm:grid-cols-2">
                {proposal.pillars.map((pillar) => (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActivePillarId(pillar.id)}
                    className={`rounded-[1.75rem] border p-5 text-left transition ${
                      activePillarId === pillar.id
                        ? "border-forest-200 bg-forest-900 text-white shadow-glow"
                        : "border-forest-100 bg-forest-50 hover:-translate-y-1 hover:bg-white"
                    }`}
                  >
                    <div
                      className={`text-sm font-semibold uppercase tracking-[0.28em] ${
                        activePillarId === pillar.id ? "text-white/66" : "text-forest-600"
                      }`}
                    >
                      Pillar {pillar.id}
                    </div>
                    <h3 className="mt-3 font-display text-2xl">{pillar.name}</h3>
                    <p className="mt-3 text-sm leading-6 opacity-80">{pillar.summary}</p>
                  </button>
                ))}
              </div>
            </SurfaceCard>

            <SurfaceCard className="relative overflow-hidden border-forest-200 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_35%)]" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/68">
                  Active architecture view
                </p>
                <h3 className="mt-4 font-display text-5xl leading-none">{activePillar.name}</h3>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
                  {activePillar.summary}
                </p>
                <div className="mt-8 grid gap-4">
                  {activePillar.details.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 text-base leading-7 text-white/84"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </SurfaceCard>
          </div>
        </div>
      </section>

      <section id="pillars" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="6. Five Pillar Detail Sections"
            title="Browse the pillar workstreams as a modular workspace."
            description="This keeps the depth of the original proposal while letting the user focus on one workstream at a time."
          />

          <div className="mt-10 flex gap-3 overflow-x-auto pb-2">
            {proposal.pillars.map((pillar) => (
              <ChipButton
                key={pillar.id}
                active={activePillarId === pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
              >
                {pillar.name}
              </ChipButton>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.36fr_0.64fr]">
            <SurfaceCard className="border-forest-100 bg-white/86">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-forest-600">
                Detail section {activePillar.id}
              </div>
              <h3 className="mt-4 font-display text-5xl leading-none">{activePillar.name}</h3>
              <p className="mt-5 text-lg leading-8 text-ink/72">{activePillar.summary}</p>
            </SurfaceCard>

            <div className="grid gap-4">
              {activePillar.details.map((detail, index) => (
                <SurfaceCard key={detail} className="border-forest-100 bg-white transition hover:-translate-y-1">
                  <div className="text-sm font-semibold uppercase tracking-[0.28em] text-forest-600">
                    Focus area 0{index + 1}
                  </div>
                  <p className="mt-4 text-lg leading-8 text-ink/76">{detail}</p>
                </SurfaceCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="operating-model" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="7. Unified Operating Model"
            title="A layered operating model, presented like a system stack."
            description="Rather than three flat cards, this section reads as an integrated operating model with depth and hierarchy."
          />
          <div className="mt-12 space-y-4">
            {proposal.operatingModel.layers.map((layer, index) => (
              <SurfaceCard
                key={layer.title}
                className={`grid gap-5 lg:grid-cols-[0.28fr_0.72fr] ${
                  index === 1 ? "border-forest-200 bg-forest-900 text-white" : "border-forest-100 bg-white/88"
                }`}
              >
                <div>
                  <div
                    className={`text-sm font-semibold uppercase tracking-[0.28em] ${
                      index === 1 ? "text-white/66" : "text-forest-600"
                    }`}
                  >
                    Layer 0{index + 1}
                  </div>
                  <h3 className="mt-3 font-display text-3xl leading-tight">{layer.title}</h3>
                </div>
                <p className="text-base leading-7 opacity-80">{layer.body}</p>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="8. 12-Week AI Readiness Sprint"
            title="Scrub through the sprint like a product roadmap."
            description="The timeline becomes interactive here, so visitors can inspect each sprint phase without scanning a long static sequence."
          />

          <div className="mt-10 flex gap-3 overflow-x-auto pb-2">
            {proposal.sprint.map((step, index) => (
              <ChipButton key={step.week} active={activeSprint === index} onClick={() => setActiveSprint(index)}>
                {step.week}
              </ChipButton>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.32fr_0.68fr]">
            <SurfaceCard className="border-forest-100 bg-white/86">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-forest-600">
                Current phase
              </p>
              <h3 className="mt-4 font-display text-4xl">{proposal.sprint[activeSprint].week}</h3>
              <div className="mt-6 h-2 rounded-full bg-forest-100">
                <div
                  className="h-2 rounded-full bg-forest-700 transition-all"
                  style={{
                    width: `${((activeSprint + 1) / proposal.sprint.length) * 100}%`
                  }}
                />
              </div>
            </SurfaceCard>

            <SurfaceCard className="border-forest-200 bg-gradient-to-br from-white to-forest-50">
              <h3 className="font-display text-5xl leading-none">
                {proposal.sprint[activeSprint].title}
              </h3>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/72">
                {proposal.sprint[activeSprint].body}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-forest-100 bg-white p-4 text-sm leading-6 text-ink/70">
                  Clear owners and sprint artifacts
                </div>
                <div className="rounded-[1.5rem] border border-forest-100 bg-white p-4 text-sm leading-6 text-ink/70">
                  Weekly operator and leadership review rhythm
                </div>
                <div className="rounded-[1.5rem] border border-forest-100 bg-white p-4 text-sm leading-6 text-ink/70">
                  Practical handoff into implementation readiness
                </div>
              </div>
            </SurfaceCard>
          </div>
        </div>
      </section>

      <section id="phase-1" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <SurfaceCard className="border-forest-100 bg-white/88">
              <SectionHeader
                eyebrow="9. Phase 1 Delivery"
                title="Tangible delivery outputs."
                description="These are still easy to update, but they now sit inside a more product-like information layout."
              />
              <div className="mt-8 space-y-4">
                {proposal.phaseOne.delivery.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-forest-100 bg-forest-50 p-4 text-base leading-7 text-ink/72"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </SurfaceCard>
            <SurfaceCard className="border-forest-100 bg-gradient-to-br from-white to-forest-50">
              <SectionHeader
                eyebrow="Acceptance Criteria"
                title="What acceptance looks like."
                description="Leadership sign-off is tied to clarity, decisions, and readiness to move."
              />
              <div className="mt-8 space-y-4">
                {proposal.phaseOne.acceptance.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-forest-100 bg-white p-4 text-base leading-7 text-ink/72"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </div>
        </div>
      </section>

      <section id="investment" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="10. Investment Structure"
            title="Compare the two pathways interactively."
            description="The pricing area now behaves like a choice surface, with one option emphasized and easy to compare against the other."
          />

          <div className="mt-8 flex gap-3">
            {proposal.investment.map((option, index) => (
              <ChipButton
                key={option.title}
                active={activeInvestment === index}
                onClick={() => setActiveInvestment(index)}
              >
                {option.title}
              </ChipButton>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {proposal.investment.map((option, index) => (
              <SurfaceCard
                key={option.title}
                className={`transition duration-300 ${
                  activeInvestment === index
                    ? "scale-[1.01] border-forest-200 bg-forest-900 text-white shadow-glow"
                    : "border-forest-100 bg-white/84 opacity-88"
                }`}
              >
                <div
                  className={`text-sm font-semibold uppercase tracking-[0.28em] ${
                    activeInvestment === index ? "text-white/66" : "text-forest-600"
                  }`}
                >
                  {option.title}
                </div>
                <h3 className="mt-4 font-display text-4xl leading-tight">{option.price}</h3>
                <p className="mt-4 text-base leading-7 opacity-80">{option.body}</p>
                <div className="mt-8 space-y-3">
                  {option.items.map((item) => (
                    <div
                      key={item}
                      className={`rounded-[1.5rem] border p-4 text-base ${
                        activeInvestment === index
                          ? "border-white/12 bg-white/8 text-white/84"
                          : "border-forest-100 bg-forest-50 text-ink/72"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <section id="phase-2" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="11. Phase 2 Embed & Operationalize"
            title="Shift from readiness into durable operating behavior."
            description="This section frames Phase 2 as ongoing operationalization rather than a generic next slide."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {proposal.phaseTwo.map((item, index) => (
              <SurfaceCard
                key={item}
                className={`border-forest-100 transition hover:-translate-y-1 ${
                  index === 1 ? "bg-gradient-to-br from-white to-forest-50" : "bg-white"
                }`}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-forest-600">
                  Track 0{index + 1}
                </div>
                <p className="mt-4 text-lg leading-8 text-ink">{item}</p>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <section id="next-steps" className="px-6 pb-24 pt-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SurfaceCard className="overflow-hidden border-forest-200 bg-forest-900 p-0 text-white shadow-glow">
            <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.06fr_0.94fr] lg:p-14">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                  12. Next Steps
                </p>
                <h2 className="mt-4 font-display text-5xl leading-none sm:text-6xl">
                  Keep the proposal live, not static.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
                  This final section closes like a working session: confirm the direction, choose
                  the pathway, and move directly into kickoff.
                </p>
              </div>
              <div className="space-y-4">
                {proposal.nextSteps.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 text-base leading-7 text-white/84"
                  >
                    {item}
                  </div>
                ))}
                <div className="pt-4">
                  <a
                    href="Zachary@openrecovery.com"
                    className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-forest-900 transition hover:bg-sand"
                  >
                    Schedule working session
                  </a>
                </div>
              </div>
            </div>
          </SurfaceCard>
        </div>
      </section>
    </main>
  );
}
