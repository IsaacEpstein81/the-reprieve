import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SurfaceCard } from "@/components/surface-card";
import {
  getProposalPage,
  proposalPages,
  type CardsBlock,
  type ComparisonBlock,
  type LayersBlock,
  type ProposalBlock,
  type ProposalPage,
  type SpotlightBlock,
  type TimelineBlock
} from "@/lib/proposal-pages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return proposalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getProposalPage(slug);

  if (!page) {
    return {
      title: "Proposal"
    };
  }

  return {
    title: `${page.title} | The Reprieve x OpenRecovery`,
    description: page.description
  };
}

function PageNav({ currentSlug }: { currentSlug: ProposalPage["slug"] }) {
  return (
    <div className="sticky top-0 z-50 border-b border-white/50 bg-sand/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 overflow-x-auto px-6 py-4 sm:px-10 lg:px-16">
        <Link
          href="/overview"
          className="hidden items-center gap-3 rounded-full border border-forest-100 bg-white/78 px-4 py-2 text-sm font-semibold text-ink/72 shadow-panel sm:flex"
        >
          <span className="relative h-7 w-7 overflow-hidden rounded-full">
            <Image
              src="/presentation-assets/logo-mark.jpg"
              alt="OpenRecovery mark"
              fill
              className="object-cover"
            />
          </span>
          The Reprieve x OpenRecovery
        </Link>
        {proposalPages.map((page) => (
          <Link
            key={page.slug}
            href={`/${page.slug}`}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
              currentSlug === page.slug
                ? "bg-forest-800 text-white shadow-panel"
                : "border border-forest-100 bg-white/72 text-ink/70 hover:border-forest-200 hover:bg-white"
            }`}
          >
            {page.navLabel}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Hero({ page }: { page: ProposalPage }) {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-8 sm:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,169,135,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(18,69,56,0.08),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-grid bg-[size:34px_34px] opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-white/65 bg-white/74 p-4 shadow-glow backdrop-blur sm:p-6">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="p-2 sm:p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-forest-600">
                {page.eyebrow}
              </p>
              <h1 className="mt-5 font-display text-5xl leading-[0.92] tracking-tight text-ink sm:text-7xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
                {page.description}
              </p>
              <p className="mt-8 max-w-2xl text-base leading-7 text-ink/68">{page.heroNote}</p>
            </div>
            <SurfaceCard className="overflow-hidden border-forest-100 bg-white/88 p-0">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={page.heroImage}
                  alt={page.heroImageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SurfaceCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlockHeader({
  title,
  description
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-ink/72">{description}</p>
      ) : null}
    </div>
  );
}

function renderCardsBlock(block: CardsBlock) {
  return (
    <section key={block.title} className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <BlockHeader title={block.title} description={block.description} />
        <div
          className={`mt-10 grid gap-6 ${
            block.columns === 2
              ? "lg:grid-cols-2"
              : block.columns === 4
                ? "md:grid-cols-2 xl:grid-cols-4"
                : "md:grid-cols-2 xl:grid-cols-3"
          }`}
        >
          {block.items.map((item) => (
            <SurfaceCard key={item.title} className="border-forest-100 bg-white/88">
              {item.icon ? (
                <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-forest-50">
                  <Image src={item.icon} alt="" fill className="object-cover" />
                </div>
              ) : null}
              <h3 className="mt-4 font-display text-3xl leading-tight text-ink">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-ink/72">{item.body}</p>
            </SurfaceCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function renderComparisonBlock(block: ComparisonBlock) {
  return (
    <section key={block.title} className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <BlockHeader title={block.title} description={block.description} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <SurfaceCard className="border-rose-100 bg-[#fff8f5]">
            <h3 className="font-display text-4xl text-ink">{block.leftTitle}</h3>
            <div className="mt-8 space-y-4">
              {block.leftPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.5rem] border border-[#efdad2] bg-white/82 p-4 text-base leading-7 text-ink/72"
                >
                  {point}
                </div>
              ))}
            </div>
          </SurfaceCard>
          <SurfaceCard className="border-forest-100 bg-gradient-to-br from-white to-forest-50">
            <h3 className="font-display text-4xl text-ink">{block.rightTitle}</h3>
            <div className="mt-8 space-y-4">
              {block.rightPoints.map((point) => (
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
  );
}

function renderSpotlightBlock(block: SpotlightBlock) {
  const media = block.embedUrl ? (
    <div className="overflow-hidden rounded-[1.75rem] border border-forest-100 bg-white shadow-panel">
      <div className="aspect-video w-full">
        <iframe
          src={block.embedUrl}
          title={block.title}
          className="h-full w-full"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  ) : block.image ? (
    <div className="overflow-hidden rounded-[1.75rem] border border-forest-100 bg-white shadow-panel">
      <div className="relative aspect-[16/10] w-full">
        <Image src={block.image} alt={block.imageAlt ?? block.title} fill className="object-cover" />
      </div>
    </div>
  ) : null;

  return (
    <section key={block.title} className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div
          className={`grid gap-6 lg:grid-cols-2 ${
            block.imagePosition === "left" ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <SurfaceCard className="border-forest-100 bg-white/88">
            <BlockHeader title={block.title} description={block.description} />
            <p className="mt-8 text-base leading-7 text-ink/72">{block.body}</p>
            {block.points?.length ? (
              <div className="mt-8 space-y-3">
                {block.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.5rem] border border-forest-100 bg-forest-50 p-4 text-base leading-7 text-ink/72"
                  >
                    {point}
                  </div>
                ))}
              </div>
            ) : null}
            {block.linkHref && block.linkLabel ? (
              <div className="mt-8">
                <a
                  href={block.linkHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-forest-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest-900"
                >
                  {block.linkLabel}
                </a>
              </div>
            ) : null}
          </SurfaceCard>
          {media}
        </div>
      </div>
    </section>
  );
}

function renderTimelineBlock(block: TimelineBlock) {
  return (
    <section key={block.title} className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <BlockHeader title={block.title} description={block.description} />
        <div className="mt-10 space-y-4">
          {block.items.map((item) => (
            <SurfaceCard
              key={`${item.label}-${item.title}`}
              className="grid gap-5 border-forest-100 bg-white/88 lg:grid-cols-[0.24fr_0.76fr]"
            >
              <div className="rounded-[1.5rem] bg-forest-900 px-5 py-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/72">
                  {item.label}
                </p>
              </div>
              <div>
                <h3 className="font-display text-3xl leading-tight text-ink">{item.title}</h3>
                <p className="mt-3 max-w-3xl text-base leading-7 text-ink/72">{item.body}</p>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function renderLayersBlock(block: LayersBlock) {
  return (
    <section key={block.title} className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <BlockHeader title={block.title} description={block.description} />
        <div className="mt-10 space-y-4">
          {block.items.map((item, index) => (
            <SurfaceCard
              key={item.title}
              className={`grid gap-5 lg:grid-cols-[0.32fr_0.68fr] ${
                index % 2 === 1
                  ? "border-forest-200 bg-forest-900 text-white"
                  : "border-forest-100 bg-white/88"
              }`}
            >
              <div>
                <h3 className="font-display text-3xl leading-tight">{item.title}</h3>
              </div>
              <p className="text-base leading-7 opacity-80">{item.body}</p>
            </SurfaceCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function renderBlock(block: ProposalBlock) {
  switch (block.type) {
    case "cards":
      return renderCardsBlock(block);
    case "comparison":
      return renderComparisonBlock(block);
    case "spotlight":
      return renderSpotlightBlock(block);
    case "timeline":
      return renderTimelineBlock(block);
    case "layers":
      return renderLayersBlock(block);
    default:
      return null;
  }
}

export default async function ProposalPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const page = getProposalPage(slug);

  if (!page) {
    notFound();
  }

  const index = proposalPages.findIndex((entry) => entry.slug === page.slug);
  const nextPage = proposalPages[index + 1];
  const backLink = proposalPages[index - 1];

  return (
    <main className="bg-sand text-ink">
      <PageNav currentSlug={page.slug} />
      <Hero page={page} />
      {page.blocks.map(renderBlock)}
      <section className="px-6 pb-24 pt-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SurfaceCard className="border-forest-200 bg-forest-900 text-white">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/68">
                  Continue the proposal
                </p>
                <h2 className="mt-3 font-display text-4xl leading-tight">
                  {nextPage ? `Next: ${nextPage.navLabel}` : "Return to the beginning"}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {backLink ? (
                  <Link
                    href={`/${backLink.slug}`}
                    className="rounded-full border border-white/16 px-5 py-3 text-sm font-semibold text-white/86 transition hover:bg-white/10"
                  >
                    Previous
                  </Link>
                ) : null}
                <Link
                  href={nextPage ? `/${nextPage.slug}` : "/overview"}
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-forest-900 transition hover:bg-sand"
                >
                  Next
                </Link>
              </div>
            </div>
          </SurfaceCard>
        </div>
      </section>
    </main>
  );
}
