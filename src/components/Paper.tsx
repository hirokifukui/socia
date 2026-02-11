import { useLang } from '../i18n';

export function Paper() {
  const { t } = useLang();

  const items = [
    {
      title: t('paper.preprint'),
      desc: t('paper.preprint.status'),
      link: null,
    },
    {
      title: t('paper.code'),
      desc: t('paper.code.desc'),
      link: null,
    },
    {
      title: t('paper.data'),
      desc: t('paper.data.desc'),
      link: null,
    },
  ];

  return (
    <section id="paper" className="py-32 px-6 border-t border-stone-800/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.1em] text-stone-200 mb-16">
          {t('paper.title')}
        </h2>

        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="border border-stone-800/60 p-6 flex items-center justify-between"
            >
              <div>
                <span className="font-display text-sm tracking-wide text-stone-200">
                  {item.title}
                </span>
                <p className="text-stone-500 font-body text-sm mt-1">
                  {item.desc}
                </p>
              </div>
              <span className="text-stone-600 font-mono text-xs tracking-wider shrink-0 ml-4">
                {t('paper.coming')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
