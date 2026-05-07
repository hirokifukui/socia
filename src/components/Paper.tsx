import { useLang } from '../i18n';

type PaperEntry = {
  id: string;
  titleKey: string;
  statusKey: string;
  linkLabelKey: string;
  urlKey: string;
  adjacent?: boolean;
};

// Newest first.
const PAPERS: PaperEntry[] = [
  {
    id: 'p1',
    titleKey: 'paper.p1.title',
    statusKey: 'paper.status.preprint',
    linkLabelKey: 'paper.p1.linklabel',
    urlKey: 'paper.p1.url',
  },
  {
    id: 'p2',
    titleKey: 'paper.p2.title',
    statusKey: 'paper.status.preprint',
    linkLabelKey: 'paper.p2.linklabel',
    urlKey: 'paper.p2.url',
    adjacent: true,
  },
  {
    id: 'p3',
    titleKey: 'paper.p3.title',
    statusKey: 'paper.status.preprint',
    linkLabelKey: 'paper.p3.linklabel',
    urlKey: 'paper.p3.url',
  },
  {
    id: 'p4',
    titleKey: 'paper.p4.title',
    statusKey: 'paper.status.under_review_hssc',
    linkLabelKey: 'paper.p4.linklabel',
    urlKey: 'paper.p4.url',
  },
  {
    id: 'p5',
    titleKey: 'paper.p5.title',
    statusKey: 'paper.status.under_review_pnas',
    linkLabelKey: 'paper.p5.linklabel',
    urlKey: 'paper.p5.url',
  },
];

export function Paper() {
  const { t } = useLang();

  return (
    <section id="paper" className="py-32 px-6 border-t border-stone-800/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.1em] text-stone-200 mb-16">
          {t('paper.title')}
        </h2>

        <ul className="space-y-6">
          {PAPERS.map((paper) => (
            <li
              key={paper.id}
              className="border border-stone-800/60 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  {paper.adjacent && (
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-stone-600 block mb-2">
                      {t('paper.adjacent.label')}
                    </span>
                  )}
                  <p className="text-stone-200 font-body text-sm md:text-base italic leading-relaxed">
                    {t(paper.titleKey)}
                  </p>
                  <p className="text-stone-500 font-body text-xs mt-3">
                    {t('paper.author.label')}
                  </p>
                  <p className="text-stone-500 font-mono text-xs tracking-wide mt-1">
                    {t(paper.statusKey)}
                  </p>
                </div>
                <a
                  href={t(paper.urlKey)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500/70 hover:text-red-400 font-mono text-xs tracking-wider shrink-0 border-b border-red-900/40 pb-0.5 hover:border-red-500/50 transition-colors"
                >
                  {t(paper.linkLabelKey)}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
