import { Leaf } from "lucide-react";

export function Logo({ subtitle = true }: { subtitle?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="brand-gradient grid h-10 w-10 place-items-center rounded-xl shadow-lg shadow-primary/25">
        <Leaf className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
      </div>
      <div className="leading-tight">
        <div className="font-display text-lg font-bold tracking-tight">EcoLoop</div>
        {subtitle && (
          <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            by Safaricom
          </div>
        )}
      </div>
    </div>
  );
}
