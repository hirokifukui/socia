import { useLang } from '../i18n';

function WallCard({
  title,
  desc,
  accent,
}: {
  title: string;
  desc: string;
  accent: string;
}) {
  return (
    <div className="border border-stone-800 p-8 group hover:border-stone-600 transition-colors">
      <h4 className={`font-display text-sm tracking-[0.15em] mb-4 ${accent}`}>
        {title}
      </h4>
      <p className="text-stone-400 font-body text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function CensoredBlock() {
  return (
    <div className="border border-red-900/60 bg-red-950/10 px-6 py-4 my-8">
      <span className="text-red-500/80 text-sm font-mono tracking-wider">
        [censored by API]
      </span>
    </div>
  );
}

export function Findings() {
  const { t } = useLang();

  const walls = [
    {
      title: t('findings.wall.deepseek.title'),
      desc: t('findings.wall.deepseek.desc'),
      accent: 'text-red-500/70',
    },
    {
      title: t('findings.wall.claude.title'),
      desc: t('findings.wall.claude.desc'),
      accent: 'text-stone-300',
    },
    {
      title: t('findings.wall.gpt.title'),
      desc: t('findings.wall.gpt.desc'),
      accent: 'text-stone-400',
    },
    {
      title: t('findings.wall.grok.title'),
      desc: t('findings.wall.grok.desc'),
      accent: 'text-stone-500',
    },
  ];

  return (
    <section id="findings" className="py-32 px-6 border-t border-stone-800/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.1em] text-stone-200 mb-4">
          {t('findings.title')}
        </h2>

        {/* Wall Morphology */}
        <div className="mt-24">
          <h3 className="font-display text-xl tracking-[0.1em] text-stone-200 mb-3">
            {t('findings.wall.title')}
          </h3>
          <p className="text-stone-500 font-body mb-12">
            {t('findings.wall.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {walls.map((wall) => (
              <WallCard key={wall.title} {...wall} />
            ))}
          </div>
        </div>

        {/* Silence and Objectification */}
        <div className="mt-32">
          <h3 className="font-display text-xl tracking-[0.1em] text-stone-200 mb-3">
            {t('findings.silence.title')}
          </h3>
          <p className="text-stone-500 font-body mb-12">
            {t('findings.silence.subtitle')}
          </p>

          <div className="space-y-8 font-body text-stone-300 leading-loose">
            <p>{t('findings.silence.p1')}</p>
            <CensoredBlock />
            <p>{t('findings.silence.p2')}</p>
            <p className="text-stone-200">{t('findings.silence.p3')}</p>
          </div>
        </div>

        {/* Benevolent Complicity */}
        <div className="mt-32">
          <h3 className="font-display text-xl tracking-[0.1em] text-stone-200 mb-3">
            {t('findings.complicity.title')}
          </h3>
          <p className="text-stone-500 font-body mb-12">
            {t('findings.complicity.subtitle')}
          </p>

          <div className="space-y-8 font-body text-stone-300 leading-loose">
            <p>{t('findings.complicity.p1')}</p>
            <p>{t('findings.complicity.p2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
