export const technologies = [
  "TypeScript",
  "Next.js",
  "React",
  "Nuxt",
  "Vue",
  "Tailwind CSS",
  "shadcn/ui",
  "Sanity",
  "Supabase",
  "Stripe",
  "Bold.new",
  "v0",
  "Google AI Studio",
  "Claude Code",
  "Codex",
  "Figma",
  "Vercel",
] as const;

export type Technology = (typeof technologies)[number];

export type PortfolioItem = {
  id: string;
  title: string;
  image: string;
  tags: Technology[];
  href: string;
  description: string;
  publishedAt: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "skybox",
    title: "株式会社SkyBox",
    image: "/portfolio/skybox_thumbnail.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Claude Code","Google AI Studio", "Vercel"],
    href: "https://skybox-client.vercel.app",
    description: "株式会社SkyBoxのHP Claude CodeによるAI駆動開発",
    publishedAt: "作成日: 2026",
  },
  {
    id: "drink_counter",
    title: "泥酔カウンター",
    image: "/portfolio/deisui-counter_thumbnail.png",
    tags: ["Next.js", "TypeScript", "Supabase", "shadcn/ui", "Claude Code", "Vercel"],
    href: "https://deisui-counter.vercel.app",
    description: "某Youtuberの企画用アプリ",
    publishedAt: "作成日: 2026",
  },
  {
    id: "topink",
    title: "株式会社TopInk",
    image: "/portfolio/topink_thumbnail.png",
    tags: ["Nuxt", "Vue", "TypeScript", "Figma", "Vercel"],
    href: "https://topink.jp",
    description: "株式会社TOPINKのHP Figmaでワイヤーフレームの作成からHP作成まで",
    publishedAt: "作成日: 2022",
  },
  {
    id: "asobora",
    title: "遊坊ら | ASOBORA",
    image: "/portfolio/asobora_thumbnail.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Stripe", "Vercel"],
    href: "https://asobora-client.vercel.app",
    description: "ASOBORAのHP Stripeによる決済デモ",
    publishedAt: "作成日: 2022",
  },
  {
    id: "nunolog",
    title: "ぬのろぐ",
    image: "/portfolio/nunolog_thumbnail.png",
    tags: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS", "Codex", "Vercel"],
    href: "https://nunolog.vercel.app",
    description: "本HP",
    publishedAt: "作成日: 2026",
  },
];
