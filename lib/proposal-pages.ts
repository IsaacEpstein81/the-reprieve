export type CardsBlock = {
  type: "cards";
  title: string;
  description?: string;
  columns?: 2 | 3 | 4;
  items: {
    title: string;
    body: string;
    icon?: string;
  }[];
};

export type ComparisonBlock = {
  type: "comparison";
  title: string;
  description?: string;
  leftTitle: string;
  rightTitle: string;
  leftPoints: string[];
  rightPoints: string[];
};

export type SpotlightBlock = {
  type: "spotlight";
  title: string;
  description?: string;
  body: string;
  points?: string[];
  visual?:
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
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  embedUrl?: string;
  linkHref?: string;
  linkLabel?: string;
};

export type TimelineBlock = {
  type: "timeline";
  title: string;
  description?: string;
  items: {
    label: string;
    title: string;
    body: string;
  }[];
};

export type LayersBlock = {
  type: "layers";
  title: string;
  description?: string;
  items: {
    title: string;
    body: string;
  }[];
};

export type ProposalBlock =
  | CardsBlock
  | ComparisonBlock
  | SpotlightBlock
  | TimelineBlock
  | LayersBlock;

export type ProposalPage = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  heroNote: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroVisual?:
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
  blocks: ProposalBlock[];
};

export const proposalPages: ProposalPage[] = [
  {
    slug: "overview",
    navLabel: "Overview",
    eyebrow: "The Reprieve x OpenRecovery",
    title: "Platform Activation Proposal",
    description:
      "A strategic roadmap to operationalize physical IOP, virtual recovery coaching, and measurement-based care into a scalable digital ecosystem.",
    heroNote:
      "This website now follows the structure of the full presentation as a guided sequence of separate pages instead of a single long-scroll deck.",
    heroImage: "/presentation-assets/cover-slide.png",
    heroImageAlt: "Cover slide from the Platform Activation Proposal presentation",
    blocks: [
      {
        type: "cards",
        title: "What the platform activation creates",
        description:
          "The proposal centers on a unified digital ecosystem rather than a loose collection of disconnected tools.",
        items: [
          {
            title: "Hybrid Virtual IOP Platform",
            body: "A client-facing care layer for assignments, check-ins, educational content, and reinforcement between live sessions."
          },
          {
            title: "Measurement-Based Care",
            body: "Structured assessments and repeated tracking that improve intake quality, symptom visibility, and progress monitoring."
          },
          {
            title: "Provider Tracking and RecoveryIQ",
            body: "A staff-side operating console for engagement monitoring, triage visibility, and actionable follow-up workflows."
          },
          {
            title: "Organizational Knowledge Copilot",
            body: "Instant, searchable, citation-backed access to approved Reprieve clinical models, policies, and workflows."
          },
          {
            title: "AI Learning and Simulation",
            body: "A training layer that turns passive reading into active practice before staff move into live client work."
          }
        ]
      },
      {
        type: "spotlight",
        title: "A platform proposal, not just a software proposal",
        body:
          "Phase One is framed as an AI readiness and workflow activation sprint. The goal is to stand up the operational layer that connects physical IOP, virtual coaching, structured assessments, provider tracking, and organizational knowledge into one usable system.",
        points: [
          "Operationalize care outside the clinic, not only during sessions",
          "Make risk, participation, and symptom trends visible sooner",
          "Create a foundation that can expand into LMS, analytics, and integrations"
        ],
        visual: "brand-system"
      }
    ]
  },
  {
    slug: "bottlenecks",
    navLabel: "Scaling Challenge",
    eyebrow: "Where Growth Gets Stuck",
    title: "The bottlenecks of simultaneous scaling",
    description:
      "Expanding physical IOP alongside virtual recovery coaching introduces structural friction. Without a unified system, growth creates operational drag.",
    heroNote:
      "This chapter combines the presentation's scaling-friction page with the traditional-versus-OpenRecovery comparison so the operating problem and the operating answer live together.",
    heroVisual: "scale-friction",
    blocks: [
      {
        type: "cards",
        title: "Where the current model creates friction",
        columns: 3,
        items: [
          {
            title: "Fragmented care",
            body: "Live sessions are highly effective, but support drops off once the session ends. Care becomes disconnected across locations and coaching workflows."
          },
          {
            title: "Blind spots in tracking",
            body: "Without a centralized provider-side console, participation changes, symptom trends, and warning signals surface too late for proactive intervention."
          },
          {
            title: "Static operating knowledge",
            body: "As the team grows, static PDFs, manuals, and supervisor dependence create administrative friction and inconsistency in care delivery."
          }
        ]
      },
      {
        type: "comparison",
        title: "Traditional scaling versus the OpenRecovery model",
        description:
          "The shift is from episodic, location-bound care operations to a continuous hybrid model with visibility, knowledge retrieval, and training built in.",
        leftTitle: "Traditional model",
        rightTitle: "OpenRecovery model",
        leftPoints: [
          "Care delivery stays episodic, location-dependent, and session-bound",
          "Client follow-up remains fragmented and based on lagging indicators",
          "Knowledge retrieval relies on manual searching and supervisor clarification",
          "Staff training depends on passive reading and resource-heavy live supervision"
        ],
        rightPoints: [
          "Care delivery becomes continuous through hybrid IOP and a digital care companion",
          "RecoveryIQ provides unified staff-side visibility and action workflows",
          "The knowledge copilot returns exact, citation-backed Reprieve guidance instantly",
          "AI learning and simulation create ongoing practice before and during scale"
        ]
      }
    ]
  },
  {
    slug: "platform",
    navLabel: "Platform",
    eyebrow: "The Five-Pillar Platform",
    title: "A unified digital ecosystem",
    description:
      "The presentation frames the platform as a connected system rather than five independent products, so this page brings those workstreams together in one place.",
    heroNote:
      "Each pillar still stands on its own, but the site now presents them as one coherent operating environment using purpose-built visuals rather than deck exports.",
    heroVisual: "platform-grid",
    blocks: [
      {
        type: "cards",
        title: "The core platform layers",
        description:
          "These are the five pillars described in the presentation, now arranged as a product-system view instead of a numbered slide series.",
        items: [
          {
            title: "Hybrid virtual IOP",
            body: "Closes the gap between live sessions and locations through assignments, check-ins, educational delivery, and between-session reinforcement."
          },
          {
            title: "Measurement-based care",
            body: "Turns structured assessments and repeated triage check-ins into clear clinical signals that improve intake and progress tracking."
          },
          {
            title: "Provider tracking and RecoveryIQ",
            body: "Creates staff-side visibility into participation and symptom trends while triggering assignments, follow-up, and targeted support."
          },
          {
            title: "Organizational knowledge copilot",
            body: "Activates approved Reprieve clinical models, policies, and workflows through structured ingestion, query processing, and citation-backed responses."
          },
          {
            title: "AI learning and simulation",
            body: "Moves staff readiness from passive reading to repeatable, workflow-aligned scenario practice before live client delivery."
          }
        ]
      },
      {
        type: "spotlight",
        title: "The knowledge copilot in context",
        body:
          "The deck describes this as instantaneous organizational knowledge grounded strictly in approved Reprieve operating materials. On the website, it now sits inside its own page chapter with space to show the actual interface rather than just mention it.",
        points: [
          "Approved clinical models and workflows are ingested once",
          "Queries are logged, processed, and contextualized",
          "Staff receive exact, citation-backed answers with less supervisor drag"
        ],
        visual: "copilot"
      },
      {
        type: "spotlight",
        title: "Simulation supports active staff readiness",
        body:
          "Live supervision alone is difficult to scale. The AI learning and simulation layer gives coaching and IOP teams repeatable practice aligned to real workflows before they move into client-facing delivery.",
        points: [
          "Scenario-based readiness before live client work",
          "Less trainer time spent on repeated fundamentals",
          "A natural path into a more complete LMS later on"
        ],
        visual: "simulation-lab",
        imagePosition: "left"
      }
    ]
  },
  {
    slug: "workflow",
    navLabel: "Workflow",
    eyebrow: "How The System Works",
    title: "From flywheel to unified operating model",
    description:
      "The deck moves from operational outcomes to a single continuous workflow. This page translates those ideas into a cleaner product narrative.",
    heroNote:
      "Instead of separate numbered slides, the flywheel and the operating model are combined into one chapter so the site explains cause and effect more clearly.",
    heroVisual: "workflow-loop",
    blocks: [
      {
        type: "cards",
        title: "The operational outcomes flywheel",
        description:
          "The loop described in the presentation becomes a readable system story here rather than a deck diagram alone.",
        items: [
          {
            title: "Launch care",
            body: "Deploy a consistent virtual care layer across coaching and physical IOP so support continues between live interactions."
          },
          {
            title: "Improve understanding",
            body: "Repeated measurement and structured tracking reveal hidden symptom trends and participation gaps."
          },
          {
            title: "Support staff",
            body: "Provide real-time organizational knowledge, proactive triage signals, and AI-backed simulation practice."
          },
          {
            title: "Build the data foundation",
            body: "Continuous data ingestion refines the copilot, updates training, and improves future care delivery."
          }
        ]
      },
      {
        type: "layers",
        title: "The unified operating model",
        description:
          "The presentation describes a continuous sequence from client input through data, staff action, knowledge retrieval, and future training. This page turns that into a layered view.",
        items: [
          {
            title: "Client input",
            body: "A client completes a mid-week assessment through the hybrid virtual IOP platform."
          },
          {
            title: "Data layer",
            body: "The measurement-based care module detects a rising risk trend and structures the signal."
          },
          {
            title: "Staff layer",
            body: "The RecoveryIQ dashboard flags the provider and suggests an intervention workflow."
          },
          {
            title: "Knowledge layer",
            body: "Before outreach, the provider queries the organizational knowledge copilot for the correct Reprieve protocol."
          },
          {
            title: "Training layer",
            body: "Aggregate data from the interaction feeds back into simulation so future staff can practice the exact scenario."
          }
        ]
      },
      {
        type: "spotlight",
        title: "The hybrid care bridge",
        body:
          "The virtual IOP layer is the connective tissue between live sessions and the next live touchpoint. It carries assignments, educational reinforcement, and asynchronous check-ins across the space where risk can otherwise go unseen.",
        points: [
          "Live physical session or coaching call",
          "Post-session structured assignment",
          "Educational content delivery",
          "Mid-week asynchronous check-in",
          "Next scheduled live session"
        ],
        visual: "care-bridge"
      }
    ]
  },
  {
    slug: "sprint",
    navLabel: "Sprint",
    eyebrow: "Activation Roadmap",
    title: "The twelve-week AI readiness and activation sprint",
    description:
      "This page follows the proposal's implementation chapter from discovery through deployment, finalization, and launch-ready acceptance.",
    heroNote:
      "The sprint is now its own chapter in the site, with enough room to explain both the delivery motion and the acceptance standard without feeling compressed.",
    heroVisual: "roadmap",
    blocks: [
      {
        type: "timeline",
        title: "Implementation rhythm",
        description:
          "The proposal defines a structured roadmap from discovery to deployment over a twelve-week Phase One sprint.",
        items: [
          {
            label: "Weeks one to two",
            title: "Discovery",
            body: "Artifact collection, workflow mapping, and initial platform design."
          },
          {
            label: "Weeks three to eight",
            title: "Build",
            body: "System configuration, prototyping, and validation of core IOP and coaching workflows."
          },
          {
            label: "Weeks nine to ten",
            title: "Deploy",
            body: "Deployment to pilot cohorts, testing, and stakeholder feedback gathering."
          },
          {
            label: "Weeks eleven to twelve",
            title: "Finalize",
            body: "Refinement, finalization of Phase One systems, and scoping of the Phase Two expansion path."
          }
        ]
      },
      {
        type: "cards",
        title: "Phase One delivery and acceptance",
        description:
          "The presentation is explicit that the sprint ends in a functional, launch-ready platform rather than strategy artifacts alone.",
        columns: 2,
        items: [
          {
            title: "Hybrid virtual IOP platform",
            body: "Functional delivery of the Reprieve hybrid care experience."
          },
          {
            title: "Provider tracking and RecoveryIQ layer",
            body: "Functional staff-side tracking and intervention workflows."
          },
          {
            title: "Measurement-based care workflows",
            body: "Operational assessment, intake, and progress tracking flows."
          },
          {
            title: "Organizational knowledge copilot",
            body: "Functional access to citation-backed Reprieve protocols and guidance."
          },
          {
            title: "AI learning and simulation platform",
            body: "Functional simulation experiences aligned to initial coaching and IOP workflows."
          },
          {
            title: "Acceptance condition",
            body: "Executive leadership validates usability and operational fit after functional deployment, with Phase Two expansion pricing included."
          }
        ]
      }
    ]
  },
  {
    slug: "investment",
    navLabel: "Investment",
    eyebrow: "Partnership Alignment",
    title: "Flexible models for early scale and long-term expansion",
    description:
      "The presentation offers two investment structures for Phase One, then positions Phase Two as an ongoing activation and expansion path.",
    heroNote:
      "This page is intentionally more commercial in tone so the proposal can move from operating logic into decision-making without breaking the flow.",
    heroVisual: "partnership",
    blocks: [
      {
        type: "cards",
        title: "Phase One partnership options",
        description:
          "Pricing remains tied to final scope, but the proposal outlines two distinct commercial structures and a clear extension into Phase Two.",
        columns: 3,
        items: [
          {
            title: "Upfront build plus monthly platform fee",
            body: "Standard enterprise architecture for predictable operational forecasting as client volume scales independently of software costs."
          },
          {
            title: "Upfront build plus revenue share",
            body: "An aligned partnership model where OpenRecovery absorbs ongoing platform costs in exchange for growth participation."
          },
          {
            title: "Phase Two pricing path",
            body: "Ongoing activation and expansion pricing is determined after Phase One scoping and checkpoint decisions."
          }
        ]
      },
      {
        type: "spotlight",
        title: "Beyond the sprint",
        body:
          "Phase Two is framed as embed and operationalize: moving from proof of concept and core operational foundations into deeper ecosystem integration, advanced analytics, automated workflows, and broader intelligence capabilities.",
        points: [
          "Conversational assessments that adapt dynamically to client input",
          "A resource recommendation system tied to precise interventions",
          "Expanded support across additional cohorts and family contexts",
          "Live dashboards, longitudinal outcomes modeling, and richer integrations"
        ],
        visual: "growth-path",
        imagePosition: "left"
      }
    ]
  },
  {
    slug: "lms",
    navLabel: "LMS Demo",
    eyebrow: "Learning Management System",
    title: "From simulation pilot to a full LMS",
    description:
      "The attached presentation gives the LMS its own page and calls out the video directly. This chapter does the same and embeds the demonstration into the site.",
    heroNote:
      "The LMS chapter now works like a true destination page with an embedded demo, platform imagery, and the operational reasons the training layer matters.",
    heroVisual: "academy",
    blocks: [
      {
        type: "spotlight",
        title: "Embedded LMS demonstration",
        body:
          "This is the video link you provided, embedded directly into the proposal so the LMS can be demonstrated in place instead of sent out as a separate follow-up asset.",
        points: [
          "Use it during live walkthroughs with leadership or operators",
          "Keep the demo inside the proposal narrative",
          "Pair interface proof with the training strategy described in the deck"
        ],
        embedUrl: "https://drive.google.com/file/d/1fvNgJyeTBFVLdx-K_KdvL331zYL-topp/preview",
        linkHref:
          "https://drive.google.com/file/d/1fvNgJyeTBFVLdx-K_KdvL331zYL-topp/view?usp=sharing",
        linkLabel: "Open the video in Google Drive"
      },
      {
        type: "cards",
        title: "What the LMS evolves into",
        description:
          "The presentation positions the learning system as one of the clearest expansion paths beyond Phase One.",
        columns: 2,
        items: [
          {
            title: "Credentialed readiness",
            body: "The AI simulation pilot expands into a comprehensive LMS with custom CE and credential administration."
          },
          {
            title: "Repeatable practice",
            body: "Roleplay scenarios and aligned simulations create standard training before live client work."
          },
          {
            title: "Always-on staff development",
            body: "Training no longer depends entirely on static reading or trainer availability."
          },
          {
            title: "Consistent quality across sites",
            body: "A centralized learning layer helps standardize staff excellence as the organization grows."
          }
        ]
      },
      {
        type: "spotlight",
        title: "Training, knowledge, and coaching readiness in one environment",
        body:
          "The deck moves naturally from the AI learning platform into a fuller LMS. This page supports that by showing actual interface imagery alongside the video, making the future-state experience easier to imagine.",
        image: "/presentation-assets/simulation-rubric.jpg",
        imageAlt: "LMS scoring rubric interface from the presentation",
        imagePosition: "left"
      }
    ]
  },
  {
    slug: "expansion",
    navLabel: "Expansion",
    eyebrow: "Phase Two Expansion",
    title: "Deep integration, analytics, and operating maturity",
    description:
      "The final chapter follows the presentation's Phase Two pages and shows how the platform expands into integrations, analytics, resource routing, and a more mature operating system.",
    heroNote:
      "This closing page is meant to feel like the long-term horizon: not just software add-ons, but a deeper integration of care operations, data, and staff capability.",
    heroVisual: "expansion-network",
    blocks: [
      {
        type: "cards",
        title: "What Phase Two unlocks",
        description:
          "These capabilities are drawn directly from the final pages of the presentation and grouped here into a cleaner expansion chapter.",
        columns: 4,
        items: [
          {
            title: "Live EMR write-back",
            body: "Real-time integration and automated data refreshes connect the platform back into existing clinical records."
          },
          {
            title: "Alliance Medical workflows",
            body: "Medical monitoring integration and workflow automation reduce manual handoffs and duplicated coordination."
          },
          {
            title: "External interfaces",
            body: "Automated pipelines extend the platform into websites and third-party AI embeddings."
          },
          {
            title: "Advanced analytics",
            body: "Always-current dashboards, longitudinal outcomes modeling, and participation in a closed analytics consortium."
          }
        ]
      },
      {
        type: "spotlight",
        title: "From client profile to resource recommendation",
        body:
          "One of the strongest future-state concepts in the deck is the shift from static forms to dynamic recommendation. The platform can move from capturing client profile information to routing specific intervention, support, and peer-connection protocols in a more intelligent way.",
        points: [
          "Immediate intervention pathways",
          "Long-term support matching",
          "Peer connection recommendations",
          "A stronger foundation for conversational assessments"
        ],
        visual: "expansion-network"
      },
      {
        type: "comparison",
        title: "Phase One foundation versus Phase Two operationalization",
        description:
          "The last slide in the deck frames Phase One as the foundation and Phase Two as the annual operating layer that scales the system fully.",
        leftTitle: "Phase One foundation",
        rightTitle: "Phase Two operationalization",
        leftPoints: [
          "Prototype reporting with PDF or spreadsheet exports",
          "Pilot simulation platform with initial roleplay scenarios",
          "Structured standard intake workflows",
          "Internal operational reporting and initial visibility",
          "Standalone platform configuration"
        ],
        rightPoints: [
          "Automated multi-system pipelines with live EMR write-back",
          "Full LMS build-out with custom CE and credential administration",
          "Advanced conversational assessments and resource recommendation",
          "Live executive dashboards and longitudinal outcomes modeling",
          "Alliance Medical integration and external website embedding"
        ]
      }
    ]
  }
];

export function getProposalPage(slug: string) {
  return proposalPages.find((page) => page.slug === slug);
}
