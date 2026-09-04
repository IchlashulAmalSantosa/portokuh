import { Card } from '@/components/ui/Card';
import { terminalMetrics } from '@/data/metrics';

/**
 * "bash -- metrics" terminal widget shown beside the hero heading.
 * The card itself always renders as dark glass (see .terminal-surface), so
 * its secondary text uses fixed white/alpha values instead of the
 * theme-aware `text-muted` token — that token turns dark in light mode and
 * would be unreadable against this permanently-dark surface.
 */
export function TerminalMetrics() {
  return (
    <Card terminal className="overflow-hidden p-0">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-3 text-xs text-white/50">bash — metrics</span>
      </div>

      <div className="px-4 py-5 text-sm">
        <p>
          <span className="text-[#27C93F]">user@data-analyst</span>
          <span className="text-white/50">:~$</span> ./fetch_stats.sh
        </p>
        <p className="mt-1 text-white/50">Loading portfolio metrics...</p>

        <div className="mt-5 grid grid-cols-2 gap-4">
          {terminalMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md"
            >
              <p className="text-lg font-semibold text-accent">{metric.value}</p>
              <p className="mt-1 text-xs text-white/50">{metric.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-5">
          <span className="text-[#27C93F]">user@data-analyst</span>
          <span className="text-white/50">:~$</span>{' '}
          <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-foreground align-middle" />
        </p>
      </div>
    </Card>
  );
}
