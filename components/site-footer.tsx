import { GithubIcon, InstagramIcon, XIcon } from "@/components/social-icons";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nu4_nu_nunu",
    icon: InstagramIcon,
  },
  {
    label: "X",
    href: "https://x.com/nu4_nu_nunu",
    icon: XIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/enuii3",
    icon: GithubIcon,
  },
];

export function SiteFooter() {
  return (
    <footer className="animate-fade-in border-t border-foreground/10 bg-background/86 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-2xl font-black tracking-normal">ぬのろぐ</p>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Button asChild variant="ghost" size="icon" key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <Icon className="size-5" aria-hidden="true" />
              </a>
            </Button>
          ))}
        </div>
      </div>
      <div className="border-t border-foreground/10 px-4 py-4 text-center text-xs font-semibold text-foreground/48">
        © 2026 ぬのろぐ
      </div>
    </footer>
  );
}
