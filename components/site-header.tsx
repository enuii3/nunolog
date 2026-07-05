export function SiteHeader() {
  return (
    <header className="animate-fade-in sticky top-0 z-40 border-b border-foreground/10 bg-background/86 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="text-2xl font-black tracking-normal text-foreground"
          aria-label="ぬのろぐ トップへ"
        >
          ぬのろぐ
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-foreground/70 sm:flex">
          <a
            className="transition-colors duration-300 hover:translate-y-[-1px] hover:text-foreground"
            href="#profile"
          >
            自己紹介
          </a>
          <a
            className="transition-colors duration-300 hover:translate-y-[-1px] hover:text-foreground"
            href="#portfolio"
          >
            ポートフォリオ
          </a>
        </nav>
      </div>
    </header>
  );
}
