import { useLang } from '../i18n';

// ── Set this to the arXiv URL once endorsement is granted ──
const ARXIV_URL: string | null = null;
// e.g. 'https://arxiv.org/abs/2502.XXXXX'

export function Paper() {
  const { t } = useLang();

  return (
    <section id="paper" className="py-32 px-6 border-t border-stone-800/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.1em] text-stone-200 mb-16">
          {t('paper.title')}
        </h2>

        <div className="space-y-6">
          {/* Preprint */}
          <div className="border border-stone-800/60 p-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-display text-sm tracking-wide text-stone-200">
                  {t('paper.preprint')}
                </span>
                <p className="text-stone-300 font-body text-sm mt-2 italic leading-relaxed">
                  {t('paper.preprint.papertitle')}
                </p>
                <p className="text-stone-500 font-body text-xs mt-2">
                  {t('paper.preprint.author')}
                </p>
              </div>
              {ARXIV_URL ? (
                <a
                  href={ARXIV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500/70 hover:text-red-400 font-mono text-xs tracking-wider shrink-0 ml-4 border-b border-red-900/40 pb-0.5 hover:border-red-500/50 transition-colors"
                >
                  arXiv →
                </a>
              ) : (
                <span className="text-stone-600 font-mono text-xs tracking-wider shrink-0 ml-4">
                  {t('paper.preprint.status')}
                </span>
              )}
            </div>
          </div>

          {/* Code */}
          <div className="border border-stone-800/60 p-6 flex items-center justify-between">
            <div>
              <span className="font-display text-sm tracking-wide text-stone-200">
                {t('paper.code')}
              </span>
              <p className="text-stone-500 font-body text-sm mt-1">
                {t('paper.code.desc')}
              </p>
            </div>
            <span className="text-stone-600 font-mono text-xs tracking-wider shrink-0 ml-4">
              {t('paper.coming')}
            </span>
          </div>

          {/* Data */}
          <div className="border border-stone-800/60 p-6 flex items-center justify-between">
            <div>
              <span className="font-display text-sm tracking-wide text-stone-200">
                {t('paper.data')}
              </span>
              <p className="text-stone-500 font-body text-sm mt-1">
                {t('paper.data.desc')}
              </p>
            </div>
            <span className="text-stone-600 font-mono text-xs tracking-wider shrink-0 ml-4">
              {t('paper.coming')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
