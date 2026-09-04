/**
 * Single source of truth for the Liquidity Strategy page.
 * All four visual styles render this exact content in this exact order.
 * Do not fork this file per style — only presentation may differ.
 */

export const nav = {
  brand: "Yield Network",
  links: [
    { label: "Solutions", href: "#solutions" },
    { label: "Insights", href: "#insights" },
    { label: "Events", href: "#events" },
  ],
  secondaryCta: { label: "Open App", href: "#app" },
  primaryCta: { label: "Apply for Liquidity", href: "#apply" },
};

export const hero = {
  headingLead: "You Built the Product.",
  headingRest: "We Build the ",
  headingAccent: "Liquidity Playbook",
  subhead:
    "Liquidity strategy, incentive design, and GTM execution for protocols going from treasury to TVL.",
  ctas: [
    { label: "Get Started", href: "#start", primary: true },
    { label: "Message Us", href: "#message", primary: false },
  ],
};

export const gap = {
  heading: "The Gap Nobody Talks About",
  body: [
    "You've raised the round. The product is live or close to it. You have a treasury earmarked for liquidity incentives.",
    "But between “we have budget” and “the vault is full” is a gap most teams cross by trial and error — burning 3–6 months and a significant chunk of their incentive budget learning lessons that already exist.",
  ],
};

export const whatYouGet = {
  headingLines: ["What", "You Get"],
  items: [
    {
      title: "Program Design",
      timeline: "Weeks 1–3",
      body: "We design your liquidity program from scratch: which assets, what vault structure, cap sizing, lockup mechanics, incentive budget allocation, and epoch cadence. Calibrated against live benchmarks from campaigns we've run — not theory.",
    },
    {
      title: "Market Validation",
      timeline: "Weeks 2–4",
      body: "We take your draft program to real LPs in our syndicate and get actual feedback: would they deploy? At what terms? What's missing? You validate demand before committing your budget — not after.",
    },
    {
      title: "Infrastructure & Intros",
      timeline: "Weeks 3–6",
      body: "We connect you to the right infrastructure partners and any other collaborators you need to go live. No cold outreach — warm intros with context.",
    },
    {
      title: "Launch Execution",
      timeline: "Months 2–6+",
      body: "When you're ready to go live, we run the raise: LP roadshow, soft commits, whitelist management, onchain settlement, and post-launch retention reporting. Or we hand you a validated playbook and you run it yourself.",
    },
  ],
};

export const builtFor = {
  heading: "Built For",
  items: [
    {
      title: "Pre-TGE Chains",
      body: "You're launching an L1/L2 and need genesis liquidity across DEX, lending, and stablecoins. You have budget but no distribution playbook.",
    },
    {
      title: "Early Protocols",
      body: "You're launching lending, perps, RWA, or structured products and need committed capital on Day 1 — not a points program and a prayer.",
    },
    {
      title: "Asset Issuers",
      body: "You're bringing yield-bearing or RWA assets onchain and need to seed the first lending markets and LP pools with real institutional capital.",
    },
  ],
};

export const proof = {
  statement:
    "±$1bn in active liquidity sourced by our team in the last 2 years.",
  // Placeholder partner marks — the base page renders a 4-column logo grid here.
  logos: [
    "Aera", "Morpho", "Euler", "Pendle",
    "Ethena", "Gauntlet", "Steakhouse", "Re7",
    "Maple", "Term", "Silo", "Spark",
  ],
};

export const closing = {
  heading: "Start With a Conversation",
  body: "Tell us what you're building, where you are in your launch, and what your liquidity goals look like. We'll tell you honestly if we can help — and if we can't, we'll point you in the right direction.",
  ctas: [
    { label: "Get Started", href: "#start", primary: true },
    { label: "Message Us", href: "#message", primary: false },
  ],
};

export const footer = {
  tagline: "The Liquidity Powerhouse.",
  columns: [
    { heading: "Solutions", links: ["LP Syndicate", "Liquidity Strategy", "Pre-Deposit Vaults", "Embedded Yield"] },
    { heading: "Company", links: ["Our Events", "Insights", "We Are Hiring", "Brand Kit"] },
  ],
  email: "hello@yieldnetwork.io",
  legal: "© 2026 Yield Network. All rights reserved.",
};
