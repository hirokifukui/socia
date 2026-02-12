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

/* ── C2 Effect data table ── */

interface MonoRow {
  model: string;
  c1ja: string;
  c2ja: string;
  dja: string;
  c1en: string;
  c2en: string;
  den: string;
}

const monoData: MonoRow[] = [
  { model: 'Sonnet',  c1ja: '29', c2ja: '45', dja: '0.92', c1en: '32', c2en: '31', den: '−0.24' },
  { model: 'GPT-4o',  c1ja: '9',  c2ja: '31', dja: '1.03', c1en: '20', c2en: '28', den: '0.92' },
  { model: 'Grok',    c1ja: '0',  c2ja: '0',  dja: '—',    c1en: '0',  c2en: '0',  den: '—' },
  { model: 'DeepSeek', c1ja: '23', c2ja: '29', dja: '1.41', c1en: '17', c2en: '17', den: '0.00' },
];

function MonoCell({ value, highlight }: { value: string; highlight?: boolean }) {
  return (
    <td
      className={`py-2.5 px-3 text-right font-mono text-sm ${
        highlight ? 'text-stone-100 bg-red-950/15' : 'text-stone-400'
      }`}
    >
      {value === '—' ? (
        <span className="text-stone-600">—</span>
      ) : (
        <>{value}{value !== '0' && value !== '—' && !value.startsWith('−') && !value.includes('.') ? '%' : ''}</>
      )}
    </td>
  );
}

function EffectCell({ value }: { value: string }) {
  const isLarge = !value.startsWith('−') && value !== '—' && value !== '0.00' && parseFloat(value) >= 0.8;
  return (
    <td className={`py-2.5 px-3 text-right font-mono text-xs ${isLarge ? 'text-red-400/80' : 'text-stone-600'}`}>
      {value === '—' ? <span className="text-stone-700">—</span> : <>d={value}</>}
    </td>
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

        {/* The C2 Effect — quantitative data */}
        <div className="mt-32">
          <h3 className="font-display text-xl tracking-[0.1em] text-stone-200 mb-3">
            {t('findings.c2effect.title')}
          </h3>
          <p className="text-stone-500 font-body mb-4">
            {t('findings.c2effect.subtitle')}
          </p>
          <p className="text-stone-400 font-body text-sm leading-relaxed mb-10">
            {t('findings.c2effect.desc')}
          </p>

          {/* Monologue ratio table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-stone-700">
                  <th className="text-left py-2.5 pr-4 text-stone-500 font-normal w-24"></th>
                  <th colSpan={3} className="text-center py-2.5 text-stone-500 font-normal border-b border-stone-800/50">
                    {t('findings.c2effect.col.ja')}
                  </th>
                  <th colSpan={3} className="text-center py-2.5 text-stone-500 font-normal border-b border-stone-800/50">
                    {t('findings.c2effect.col.en')}
                  </th>
                </tr>
                <tr className="border-b border-stone-800/50">
                  <th className="text-left py-2 pr-4 text-stone-600 font-normal text-xs"></th>
                  <th className="text-right py-2 px-3 text-stone-600 font-normal text-xs">C1</th>
                  <th className="text-right py-2 px-3 text-stone-600 font-normal text-xs font-mono">C2</th>
                  <th className="text-right py-2 px-3 text-stone-600 font-normal text-xs">
                    {t('findings.c2effect.col.effect')}
                  </th>
                  <th className="text-right py-2 px-3 text-stone-600 font-normal text-xs">C1</th>
                  <th className="text-right py-2 px-3 text-stone-600 font-normal text-xs font-mono">C2</th>
                  <th className="text-right py-2 px-3 text-stone-600 font-normal text-xs">
                    {t('findings.c2effect.col.effect')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {monoData.map((row) => (
                  <tr key={row.model} className="border-b border-stone-800/30">
                    <td className="py-2.5 pr-4 text-stone-300 font-display text-xs tracking-wide">
                      {row.model}
                    </td>
                    <MonoCell value={row.c1ja} />
                    <MonoCell value={row.c2ja} highlight />
                    <EffectCell value={row.dja} />
                    <MonoCell value={row.c1en} />
                    <MonoCell value={row.c2en} />
                    <EffectCell value={row.den} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-600 font-body text-xs mt-4 leading-relaxed">
            {t('findings.c2effect.caption')}
          </p>

          {/* Language asymmetry note */}
          <div className="mt-10 border-l-2 border-stone-700 pl-6">
            <p className="text-stone-400 font-body text-sm leading-relaxed">
              {t('findings.c2effect.language')}
            </p>
          </div>

          {/* CPI note */}
          <div className="mt-8">
            <p className="text-stone-500 font-body text-sm leading-relaxed">
              {t('findings.c2effect.cpi')}
            </p>
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
