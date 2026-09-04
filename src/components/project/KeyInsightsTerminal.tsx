import { Card } from '@/components/ui/Card';
import { Project } from '@/types';

interface KeyInsightsTerminalProps {
  insights: Project['insights'];
}

/** Key Insights: narrative paragraphs plus a dynamic terminal table based on project domain. */
export function KeyInsightsTerminal({ insights }: KeyInsightsTerminalProps) {
  const isEcommerce = insights.codeFileName === 'regional_sales_summary.py';
  const isPowerBI = insights.codeFileName === 'powerbi_superstore_kpi.dax';

  const headers = isEcommerce
    ? {
        col1: 'REGION'.padEnd(12),
        col2: 'REVENUE'.padEnd(18),
        col3: 'PORSI (%)'.padEnd(16),
        col4: 'AVG DELIVERY',
      }
    : isPowerBI
      ? {
          col1: 'METRIC/SEGMENT'.padEnd(16),
          col2: 'VALUE ($)'.padEnd(16),
          col3: 'BENCHMARK'.padEnd(16),
          col4: 'STATUS/DIAGNOSIS',
        }
      : {
          col1: 'CLASS'.padEnd(12),
          col2: 'SAMPLE/RATIO'.padEnd(18),
          col3: 'METRIC/SCORE'.padEnd(16),
          col4: 'GAP',
        };

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-lg font-semibold">Key Insights &amp; Validation</h2>

      <div className="mt-4 space-y-4">
        {insights.paragraphs.map((paragraph, i) => (
          <p key={i} className="text-sm text-muted">
            {paragraph}
          </p>
        ))}
      </div>

      {insights.rows && insights.rows.length > 0 && (
        <Card terminal className="mt-6 overflow-x-auto p-0">
          <div className="border-b border-white/10 px-4 py-3 text-xs text-white/50">
            {insights.codeFileName || 'eval_indobert_svm.py'}
          </div>
          <pre className="px-4 py-4 text-xs leading-relaxed font-mono">
            <code>
              {headers.col1}
              {headers.col2}
              {headers.col3}
              {headers.col4}
              {'\n'}
              {'-'.repeat(64)}
              {'\n'}
              {insights.rows
                .map((row) => {
                  return (
                    row.actual.padEnd(16) +
                    row.forecast.padEnd(16) +
                    row.error.padEnd(16) +
                    (row.bar ?? '-')
                  );
                })
                .join('\n')}
            </code>
          </pre>
        </Card>
      )}
    </section>
  );
}
