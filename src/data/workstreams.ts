export type Workstream = {
  slug: "datasets" | "maturity-model" | "tooling-map";
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
};

export const workstreams: Workstream[] = [
  {
    slug: "datasets",
    number: "01",
    title: "Improving Digital Safety Evaluation Datasets",
    shortTitle: "Evaluation Datasets",
    tagline: "Auditing the foundations of how we measure safety.",
    description:
      "Current safety evaluation datasets often lack transparency about their underlying labeling policies and data provenance, producing benchmarks that may not reflect real-world harms or platform-specific standards. This workstream investigates those limitations and develops a high-fidelity dataset grounded in rigorous, transparent safety policies — published alongside the policies used to generate it.",
  },
  {
    slug: "maturity-model",
    number: "02",
    title: "A Maturity Model for Trust & Safety Tooling",
    shortTitle: "Maturity Model",
    tagline: "Mapping the safety stack across stages of platform growth.",
    description:
      "As digital platforms scale, they often struggle to identify which safety infrastructures are essential at different stages of growth, leading to reactive rather than proactive harm mitigation. This workstream produces a maturity model that guides organizations through the evolution of their safety stack — from early-stage startups to established enterprises — by identifying the technical and organizational milestones required at each stage.",
  },
  {
    slug: "tooling-map",
    number: "03",
    title: "Functional Mapping of the Safety Tooling Landscape",
    shortTitle: "Tooling Map",
    tagline: "A living map of the tools that keep platforms safer.",
    description:
      "Existing frameworks for safety tooling lack the granularity required to map a rapidly diversifying ecosystem of internal and user-facing interventions. This workstream develops a comprehensive map, categorizing tools by functional utility, impact on user experience, and role in the safety lifecycle, from preventative design to reactive enforcement — and publishes it as a living, browsable resource.",
  },
];

export const workstreamBySlug = (slug: string) =>
  workstreams.find((w) => w.slug === slug);
