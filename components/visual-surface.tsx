import { BrandMark } from "@/components/brand-mark";

type VisualVariant =
  | "brand-system"
  | "scale-friction"
  | "platform-grid"
  | "copilot"
  | "simulation-lab"
  | "workflow-loop"
  | "care-bridge"
  | "roadmap"
  | "partnership"
  | "academy"
  | "expansion-network"
  | "growth-path";

type VisualSurfaceProps = {
  variant: VisualVariant;
  className?: string;
};

function Chip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-forest-200 bg-white/86 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
      {label}
    </span>
  );
}

function Shell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative isolate h-full min-h-[21rem] overflow-hidden rounded-[1.75rem] border border-forest-100 bg-[radial-gradient(circle_at_top_left,rgba(124,193,168,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,247,244,0.92))] p-6 shadow-panel ${className}`}
    >
      <div className="absolute inset-0 bg-grid bg-[size:30px_30px] opacity-[0.14]" />
      <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-forest-200/30 blur-3xl" />
      <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-forest-100/50 blur-3xl" />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

function BrandSystem() {
  return (
    <Shell>
      <div className="grid h-full gap-4 lg:grid-cols-[0.38fr_0.62fr]">
        <div className="flex flex-col justify-between rounded-[1.5rem] border border-white/75 bg-white/84 p-5">
          <BrandMark className="h-24 w-24" />
          <div className="space-y-3">
            <div className="h-3 w-28 rounded-full bg-forest-200" />
            <div className="h-3 w-20 rounded-full bg-forest-100" />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-forest-100 bg-white/86 p-5">
              <Chip label="Hybrid care" />
              <div className="mt-4 h-3 w-28 rounded-full bg-forest-700/80" />
              <div className="mt-3 h-2 w-full rounded-full bg-forest-100" />
              <div className="mt-2 h-2 w-4/5 rounded-full bg-forest-100" />
            </div>
            <div className="rounded-[1.5rem] border border-forest-100 bg-white/86 p-5">
              <Chip label="Signal layer" />
              <div className="mt-4 flex h-16 items-end gap-2">
                <span className="h-8 w-8 rounded-t-xl bg-forest-200" />
                <span className="h-12 w-8 rounded-t-xl bg-forest-400" />
                <span className="h-14 w-8 rounded-t-xl bg-forest-700" />
              </div>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-forest-100 bg-forest-900 p-5 text-white">
            <div className="flex items-center justify-between">
              <Chip label="Unified platform" />
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["Assess", "Guide", "Train"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/68">
                    {item}
                  </div>
                  <div className="mt-3 h-2 w-full rounded-full bg-white/12" />
                  <div className="mt-2 h-2 w-4/5 rounded-full bg-white/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function ScaleFriction() {
  return (
    <Shell>
      <div className="grid h-full gap-4 sm:grid-cols-3">
        {[
          { title: "Care", tone: "bg-[#f9e4dd]" },
          { title: "Tracking", tone: "bg-[#dff0ea]" },
          { title: "Knowledge", tone: "bg-[#e7eef0]" }
        ].map((item, index) => (
          <div key={item.title} className="flex flex-col">
            <div className="rounded-[1.5rem] border border-forest-100 bg-white/88 p-5">
              <div className={`h-2 w-16 rounded-full ${item.tone}`} />
              <div className="mt-4 font-display text-3xl text-ink">{item.title}</div>
              <div className="mt-5 space-y-2">
                <div className="h-2 w-full rounded-full bg-forest-100" />
                <div className="h-2 w-4/5 rounded-full bg-forest-100" />
                <div className="h-2 w-3/5 rounded-full bg-forest-100" />
              </div>
            </div>
            {index < 2 ? (
              <div className="mx-auto mt-4 h-10 w-px border-l-2 border-dashed border-forest-200" />
            ) : null}
          </div>
        ))}
      </div>
    </Shell>
  );
}

function PlatformGrid() {
  const items = ["Hybrid IOP", "Measurement", "RecoveryIQ", "Copilot", "Simulation"];

  return (
    <Shell>
      <div className="grid h-full place-items-center">
        <div className="relative grid w-full max-w-2xl gap-4 sm:grid-cols-3">
          <div className="rounded-[1.5rem] border border-forest-100 bg-white/86 p-5 sm:col-span-3">
            <div className="flex items-center justify-between">
              <div className="font-display text-3xl text-ink">Unified operating stack</div>
              <Chip label="Live system" />
            </div>
          </div>
          {items.map((item, index) => (
            <div
              key={item}
              className={`rounded-[1.5rem] border p-5 ${
                index === 2
                  ? "border-forest-200 bg-forest-900 text-white"
                  : "border-forest-100 bg-white/86 text-ink"
              }`}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] opacity-70">
                Layer
              </div>
              <div className="mt-3 font-display text-2xl">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function Copilot() {
  return (
    <Shell>
      <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-forest-100 bg-white/88 p-5">
        <div className="flex items-center justify-between gap-3">
          <Chip label="Knowledge copilot" />
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <div className="mt-6 rounded-[1.25rem] border border-forest-100 bg-sand/70 p-4">
          <div className="h-3 w-48 rounded-full bg-forest-200" />
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Recommend a relapse prevention routine",
              "Find a PDF document on relapse prevention",
              "Find exercises for managing anxiety in recovery",
              "Protocol for mid-week cravings"
            ].map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-forest-100 bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-600">
                  Suggested query
                </div>
                <div className="mt-2 text-sm leading-6 text-ink/78">{item}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.25rem] border border-forest-100 bg-white p-4">
          <div className="h-3 w-full rounded-full bg-forest-100" />
          <div className="mt-3 h-3 w-4/5 rounded-full bg-forest-100" />
        </div>
      </div>
    </Shell>
  );
}

function SimulationLab() {
  return (
    <Shell>
      <div className="grid h-full gap-4 lg:grid-cols-[0.52fr_0.48fr]">
        <div className="rounded-[1.5rem] border border-forest-100 bg-white/88 p-5">
          <div className="flex items-center justify-between">
            <Chip label="Simulation lab" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
          </div>
          <div className="mt-5 space-y-4">
            {["Client escalates", "Coach response", "Supervisor calibration"].map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-forest-100 bg-forest-50 p-4">
                <div className="text-sm font-semibold text-ink/80">{item}</div>
                <div className="mt-3 h-2 w-full rounded-full bg-forest-100" />
                <div className="mt-2 h-2 w-4/5 rounded-full bg-forest-200" />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-forest-100 bg-white/88 p-5">
          <div className="font-display text-3xl text-ink">Readiness rubric</div>
          <div className="mt-5 space-y-5">
            {[
              { label: "Tone regulation", value: "w-[80%]" },
              { label: "Safety protocol", value: "w-full" },
              { label: "Clear directives", value: "w-[60%]" },
              { label: "Empathy demonstration", value: "w-[82%]" }
            ].map((item, index) => (
              <div key={item.label}>
                <div className="text-sm text-ink/76">{item.label}</div>
                <div className="mt-2 h-4 rounded-full bg-forest-100">
                  <div
                    className={`h-4 rounded-full ${
                      index === 2 ? "bg-amber-300" : "bg-forest-500"
                    } ${item.value}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}

function WorkflowLoop() {
  const labels = ["Launch", "Measure", "Guide", "Train"];

  return (
    <Shell>
      <div className="relative flex h-full items-center justify-center">
        <div className="absolute h-64 w-64 rounded-full border-[28px] border-forest-200/70" />
        <div className="absolute h-40 w-40 rounded-full bg-white/90" />
        {labels.map((label, index) => {
          const positions = [
            "left-1/2 top-4 -translate-x-1/2",
            "right-4 top-1/2 -translate-y-1/2",
            "left-1/2 bottom-4 -translate-x-1/2",
            "left-4 top-1/2 -translate-y-1/2"
          ];

          return (
            <div
              key={label}
              className={`absolute ${positions[index]} rounded-full border border-forest-100 bg-white/88 px-4 py-3 text-sm font-semibold text-forest-800 shadow-panel`}
            >
              {label}
            </div>
          );
        })}
        <div className="relative z-10 rounded-[1.5rem] border border-forest-200 bg-forest-900 px-8 py-6 text-center text-white shadow-glow">
          <div className="text-sm uppercase tracking-[0.18em] text-white/68">Operating model</div>
          <div className="mt-2 font-display text-3xl">Compounding system</div>
        </div>
      </div>
    </Shell>
  );
}

function CareBridge() {
  return (
    <Shell>
      <div className="flex h-full flex-col justify-center gap-5">
        <div className="grid gap-4 md:grid-cols-5">
          {[
            "Live session",
            "Assignment",
            "Education",
            "Check-in",
            "Next visit"
          ].map((item, index) => (
            <div key={item} className="relative">
              <div className="rounded-[1.5rem] border border-forest-100 bg-white/88 p-4 text-center">
                <div className="text-sm font-semibold text-ink/78">{item}</div>
              </div>
              {index < 4 ? (
                <div className="absolute left-full top-1/2 hidden h-px w-4 -translate-y-1/2 bg-forest-300 md:block" />
              ) : null}
            </div>
          ))}
        </div>
        <div className="rounded-[1.5rem] border border-forest-100 bg-forest-50 p-5">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-forest-700">
            Between-session continuity
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-forest-100" />
          <div className="mt-2 h-2 w-5/6 rounded-full bg-forest-200" />
        </div>
      </div>
    </Shell>
  );
}

function Roadmap() {
  const steps = ["Discovery", "Build", "Deploy", "Finalize"];

  return (
    <Shell>
      <div className="flex h-full flex-col justify-center">
        <div className="relative mx-auto w-full max-w-4xl">
          <div className="absolute left-10 right-10 top-7 h-px bg-gradient-to-r from-forest-200 via-forest-400 to-forest-700" />
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="relative pt-12">
                <div className="absolute left-1/2 top-0 h-14 w-14 -translate-x-1/2 rounded-full border-8 border-white bg-forest-700 shadow-panel" />
                <div className="rounded-[1.5rem] border border-forest-100 bg-white/88 p-5 text-center">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-600">
                    Phase {index + 1}
                  </div>
                  <div className="mt-3 font-display text-2xl text-ink">{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}

function Partnership() {
  return (
    <Shell>
      <div className="grid h-full gap-4 lg:grid-cols-2">
        <div className="rounded-[1.5rem] border border-forest-100 bg-white/88 p-6">
          <Chip label="Option A" />
          <div className="mt-4 font-display text-4xl text-ink">Fixed build + platform fee</div>
          <div className="mt-5 space-y-2">
            <div className="h-2 w-full rounded-full bg-forest-100" />
            <div className="h-2 w-4/5 rounded-full bg-forest-100" />
            <div className="h-2 w-3/5 rounded-full bg-forest-100" />
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-forest-200 bg-forest-900 p-6 text-white">
          <Chip label="Option B" />
          <div className="mt-4 font-display text-4xl">Build + revenue share</div>
          <div className="mt-5 space-y-2">
            <div className="h-2 w-full rounded-full bg-white/12" />
            <div className="h-2 w-4/5 rounded-full bg-white/12" />
            <div className="h-2 w-3/5 rounded-full bg-white/12" />
          </div>
        </div>
      </div>
    </Shell>
  );
}

function Academy() {
  return (
    <Shell>
      <div className="grid h-full gap-4 lg:grid-cols-[0.26fr_0.74fr]">
        <div className="rounded-[1.5rem] border border-forest-100 bg-white/88 p-4">
          <div className="space-y-3">
            {["Copilot", "Courses", "Results", "Credentials"].map((item) => (
              <div key={item} className="rounded-xl border border-forest-100 bg-forest-50 p-3 text-sm text-ink/76">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-forest-100 bg-white/88 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-display text-4xl text-ink">Training command center</div>
              <div className="mt-2 text-sm text-ink/62">
                Simulation, learning paths, and readiness in one place
              </div>
            </div>
            <Chip label="LMS" />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Scenario practice",
              "Credential progress",
              "Feedback loop",
              "Role readiness"
            ].map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-forest-100 bg-sand/70 p-4">
                <div className="text-sm font-semibold text-ink/78">{item}</div>
                <div className="mt-3 h-2 w-full rounded-full bg-forest-100" />
                <div className="mt-2 h-2 w-3/4 rounded-full bg-forest-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}

function ExpansionNetwork() {
  const nodes = [
    "EMR",
    "Analytics",
    "Alliance",
    "Website",
    "LMS",
    "Recommendations"
  ];

  return (
    <Shell>
      <div className="relative flex h-full items-center justify-center">
        <div className="absolute h-52 w-52 rounded-full border border-forest-200" />
        <div className="absolute h-72 w-72 rounded-full border border-forest-100" />
        <div className="relative z-10 rounded-[1.5rem] border border-forest-200 bg-forest-900 px-8 py-6 text-center text-white shadow-glow">
          <div className="text-sm uppercase tracking-[0.18em] text-white/68">Phase two core</div>
          <div className="mt-2 font-display text-3xl">Connected ecosystem</div>
        </div>
        {nodes.map((node, index) => {
          const positions = [
            "left-1/2 top-2 -translate-x-1/2",
            "right-4 top-1/3",
            "right-10 bottom-10",
            "left-1/2 bottom-2 -translate-x-1/2",
            "left-4 bottom-1/3",
            "left-10 top-10"
          ];

          return (
            <div
              key={node}
              className={`absolute ${positions[index]} rounded-full border border-forest-100 bg-white/88 px-4 py-3 text-sm font-semibold text-forest-800 shadow-panel`}
            >
              {node}
            </div>
          );
        })}
      </div>
    </Shell>
  );
}

function GrowthPath() {
  return (
    <Shell>
      <div className="grid h-full gap-4 sm:grid-cols-3">
        {["Foundation", "Operationalize", "Expand"].map((step, index) => (
          <div key={step} className="flex flex-col justify-end rounded-[1.5rem] border border-forest-100 bg-white/88 p-5">
            <div
              className="rounded-t-[1.25rem] bg-gradient-to-t from-forest-700 to-forest-300"
              style={{ height: `${96 + index * 42}px` }}
            />
            <div className="mt-4 font-display text-3xl text-ink">{step}</div>
          </div>
        ))}
      </div>
    </Shell>
  );
}

export function VisualSurface({ variant, className = "" }: VisualSurfaceProps) {
  switch (variant) {
    case "brand-system":
      return <BrandSystem />;
    case "scale-friction":
      return <ScaleFriction />;
    case "platform-grid":
      return <PlatformGrid />;
    case "copilot":
      return <Copilot />;
    case "simulation-lab":
      return <SimulationLab />;
    case "workflow-loop":
      return <WorkflowLoop />;
    case "care-bridge":
      return <CareBridge />;
    case "roadmap":
      return <Roadmap />;
    case "partnership":
      return <Partnership />;
    case "academy":
      return <Academy />;
    case "expansion-network":
      return <ExpansionNetwork />;
    case "growth-path":
      return <GrowthPath />;
    default:
      return <Shell className={className}>{null}</Shell>;
  }
}
