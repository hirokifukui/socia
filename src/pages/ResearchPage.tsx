import { Link } from 'react-router-dom';
import { useLang } from '../i18n';

function SeriesCard({
  to,
  title,
  summary,
  status,
  linkLabel,
}: {
  to: string;
  title: string;
  summary: string;
  status?: string;
  linkLabel: string;
}) {
  return (
    <div className="border border-stone-800/60 p-8 group hover:border-stone-600 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-lg tracking-[0.1em] text-stone-200">
          {title}
        </h3>
        {status && (
          <span className="text-xs font-mono text-stone-600 tracking-wider shrink-0 ml-4">
            {status}
          </span>
        )}
      </div>
      <p className="text-stone-400 font-body text-sm leading-relaxed mb-6">
        {summary}
      </p>
      <Link
        to={to}
        className="text-sm text-stone-500 hover:text-stone-200 transition-colors tracking-wide border-b border-stone-700 pb-0.5 hover:border-stone-400"
      >
        {linkLabel}
      </Link>
    </div>
  );
}

export function ResearchPage() {
  const { t } = useLang();

  return (
    <section className="min-h-screen py-32 px-6 pt-28">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.1em] text-stone-200 mb-4">
          {t('research.title')}
        </h2>
        <p className="text-stone-500 font-body mb-16">
          {t('research.subtitle')}
        </p>

        <div className="space-y-4">
          <SeriesCard
            to="/research/series-c"
            title={t('experiments.seriesc.title')}
            summary={t('research.seriesc.summary')}
            linkLabel={t('research.view')}
          />
          <SeriesCard
            to="/research/series-r"
            title={t('research.seriesr.title')}
            summary={t('research.seriesr.summary')}
            linkLabel={t('research.view')}
          />
          <SeriesCard
            to="/research/series-p"
            title={t('research.seriesp.title')}
            summary={t('research.seriesp.summary')}
            status={t('research.inprogress')}
            linkLabel={t('research.view')}
          />
          <SeriesCard
            to="/research/publications"
            title={t('research.publications.title')}
            summary={t('research.publications.summary')}
            linkLabel={t('research.view')}
          />
        </div>
      </div>
    </section>
  );
}
