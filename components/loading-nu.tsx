import { cn } from "@/lib/utils";

type LoadingNuProps = {
  compact?: boolean;
  className?: string;
};

export function LoadingNu({ compact = false, className }: LoadingNuProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 text-center",
        className,
      )}
      aria-label="ぬのろぐを読み込み中"
      role="status"
    >
      <span
        className={cn("nu-gauge", compact ? "text-[4.5rem]" : "text-[7rem]")}
        aria-hidden="true"
      >
        ぬ
      </span>
      <span className="text-xs font-bold tracking-[0.32em] text-foreground/55">
        LOADING
      </span>
    </div>
  );
}
