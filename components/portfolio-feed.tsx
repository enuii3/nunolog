"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { portfolioItems, technologies } from "@/lib/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const allFilter = "すべて";
const filterTechnologies = technologies.filter((technology) => technology.length > 0);

export function PortfolioFeed() {
  const [activeTechnology, setActiveTechnology] = useState(allFilter);

  const filteredItems = useMemo(() => {
    if (activeTechnology === allFilter) {
      return portfolioItems;
    }

    return portfolioItems.filter((item) =>
      item.tags.includes(activeTechnology as (typeof technologies)[number]),
    );
  }, [activeTechnology]);

  return (
    <section id="portfolio" className="animate-fade-in-up p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              className="animate-slide-in-left mt-2 text-4xl font-black tracking-normal text-foreground sm:text-5xl"
              style={{ animationDelay: "60ms" }}
            >
              ポートフォリオ
            </h2>
          </div>
        </div>

        <div
          className="scrollbar-always mt-7 flex gap-2 pb-2"
          role="toolbar"
          aria-label="ポートフォリオの技術タグで絞り込み"
        >
          {[allFilter, ...filterTechnologies].map((technology, index) => {
            const isActive = activeTechnology === technology;

            return (
              <Button
                key={technology}
                type="button"
                variant="tag"
                size="sm"
                aria-pressed={isActive}
                className={`animate-fade-in shrink-0 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
                  isActive
                    ? "tag-filter-active border-foreground bg-[#fff36d]"
                    : ""
                }`}
                style={{ animationDelay: `${80 + index * 30}ms` }}
                onClick={() => setActiveTechnology(technology)}
              >
                {technology}
              </Button>
            );
          })}
        </div>

        <div
          key={activeTechnology}
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
          {filteredItems.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${item.title}のサイトを開く`}
              className="portfolio-card-link group rounded-lg focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              <Card
                className="portfolio-card-enter h-full overflow-hidden rounded-lg border-2 border-foreground/12 bg-white/94 shadow-[6px_6px_0_rgba(6,21,39,0.13)] transition-shadow duration-300 group-hover:shadow-[10px_10px_0_rgba(6,21,39,0.16)]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
              <CardHeader className="flex-row items-center gap-3 space-y-0 p-4">
                <div className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-[#061527] bg-[#ff6b6b] text-xl font-black text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  ぬ
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-base font-black text-foreground transition-colors duration-300 group-hover:text-[#05aaf0]">
                    {item.title}
                  </h3>
                </div>
                <time
                  className="text-xs font-semibold text-foreground/45"
                  dateTime={item.publishedAt.replaceAll(".", "-")}
                >
                  {item.publishedAt}
                </time>
              </CardHeader>

              <div className="relative aspect-[4/3] border-y border-foreground/10 bg-[#f4f7f2]">
                <Image
                  src={item.image}
                  alt={`${item.title} のポートフォリオ画像`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="portfolio-card-image object-contain p-2"
                />
              </div>

              <CardContent className="space-y-4 p-4">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="transition-transform duration-300 group-hover:-translate-y-0.5"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm leading-7 text-foreground/78">
                  {item.description}
                </p>
              </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
