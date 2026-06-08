export const site = {
  name: "Tooling Research Committee",
  shortName: "TRC",
  tagline: "A website managed by the tooling research committee of the Trust & Safety Foundation",
  description:
    "The Tooling Research Committee is a research committee of the Trust & Safety Foundation, bringing together researchers, practitioners, and engineers to advance the tools that protect online communities and to make the research behind them more discoverable.",
  parent: {
    name: "Trust & Safety Foundation",
    shortName: "TSF",
    url: "https://www.trustandsafetyfoundation.org",
    programsUrl: "https://www.trustandsafetyfoundation.org/programs",
    parentPageUrl: "https://www.trustandsafetyfoundation.org/tooling-research-committee",
  },
  siblingCommittees: [
    {
      name: "Psychological Health Research Committee",
      shortName: "Psychological Health",
      url: "https://www.trustandsafetyfoundation.org/psychological-health-research-committee",
    },
    {
      name: "Global Majority Research Committee",
      shortName: "Global Majority",
      url: "https://www.trustandsafetyfoundation.org/global-majority-research-committee",
    },
  ],
  toolingMapSubmissionUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfRwoMInbyRxx3TyZ3T9fIQ4RdidKRiuzZWHHSJReMF1j625g/viewform?usp=sharing&ouid=109711486525429347384",
} as const;
