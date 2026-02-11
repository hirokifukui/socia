import { useLang } from '../i18n';

export function Framework() {
  const { t } = useLang();

  const constraints = [
    { name: t('framework.constraints.1.name'), nature: t('framework.constraints.1.nature'), op: t('framework.constraints.1.op'), variable: true },
    { name: t('framework.constraints.2.name'), nature: t('framework.constraints.2.nature'), op: t('framework.constraints.constant'), variable: false },
    { name: t('framework.constraints.3.name'), nature: t('framework.constraints.3.nature'), op: t('framework.constraints.constant'), variable: false },
    { name: t('framework.constraints.4.name'), nature: t('framework.constraints.4.nature'), op: t('framework.constraints.constant'), variable: false },
    { name: t('framework.constraints.5.name'), nature: t('framework.constraints.5.nature'), op: t('framework.constraints.constant'), variable: false },
  ];

  const diseases = [
    { name: t('framework.diseases.aia'), desc: t('framework.diseases.aia.desc') },
    { name: t('framework.diseases.cwe'), desc: t('framework.diseases.cwe.desc') },
    { name: t('framework.diseases.iad'), desc: t('framework.diseases.iad.desc') },
    { name: t('framework.diseases.pps'), desc: t('framework.diseases.pps.desc') },
    { name: t('framework.diseases.bcd'), desc: t('framework.diseases.bcd.desc') },
  ];

  return (
    <section id="framework" className="py-32 px-6 border-t border-stone-800/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.1em] text-stone-200 mb-4">
          {t('framework.title')}
        </h2>

        {/* Central Thesis */}
        <div className="mt-24">
          <h3 className="font-display text-xl tracking-[0.1em] text-stone-200 mb-8">
            {t('framework.thesis.title')}
          </h3>
          <blockquote className="border-l-2 border-stone-600 pl-8 py-2 text-stone-300 font-body leading-loose">
            {t('framework.thesis.p1')}
          </blockquote>
        </div>

        {/* Dual Scope */}
        <div className="mt-24">
          <h3 className="font-display text-xl tracking-[0.1em] text-stone-200 mb-8">
            {t('framework.dual.title')}
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-stone-800 p-8">
              <span className="font-display text-xs tracking-[0.2em] text-stone-500 uppercase">
                {t('framework.dual.inward')}
              </span>
              <p className="text-stone-300 font-body mt-4 leading-relaxed">
                {t('framework.dual.inward.desc')}
              </p>
            </div>
            <div className="border border-stone-800 p-8">
              <span className="font-display text-xs tracking-[0.2em] text-stone-500 uppercase">
                {t('framework.dual.outward')}
              </span>
              <p className="text-stone-300 font-body mt-4 leading-relaxed">
                {t('framework.dual.outward.desc')}
              </p>
            </div>
          </div>

          <p className="text-stone-400 font-body leading-loose text-sm">
            {t('framework.dual.bridge')}
          </p>
        </div>

        {/* Five Structural Constraints */}
        <div className="mt-24">
          <h3 className="font-display text-xl tracking-[0.1em] text-stone-200 mb-8">
            {t('framework.constraints.title')}
          </h3>

          <div className="space-y-3">
            {constraints.map((c, i) => (
              <div
                key={i}
                className={`border p-6 flex flex-col md:flex-row md:items-center gap-4 ${
                  c.variable
                    ? 'border-stone-600 bg-stone-900/30'
                    : 'border-stone-800/60'
                }`}
              >
                <span className="text-stone-600 font-mono text-xs w-6 shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <span className="font-display text-sm tracking-wide text-stone-200">
                    {c.name}
                  </span>
                  <span className="text-stone-500 font-body text-sm ml-4">
                    {c.nature}
                  </span>
                </div>
                <span
                  className={`text-xs tracking-wider font-mono shrink-0 ${
                    c.variable ? 'text-stone-200' : 'text-stone-600'
                  }`}
                >
                  {c.op}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Candidate Disorders */}
        <div className="mt-24">
          <h3 className="font-display text-xl tracking-[0.1em] text-stone-200 mb-8">
            {t('framework.diseases.title')}
          </h3>

          <div className="space-y-6">
            {diseases.map((d) => (
              <div key={d.name} className="group">
                <span className="font-display text-sm tracking-wide text-stone-200 italic">
                  {d.name}
                </span>
                <p className="text-stone-500 font-body text-sm mt-1 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Prior Work */}
        <div className="mt-24">
          <h3 className="font-display text-xl tracking-[0.1em] text-stone-200 mb-8">
            {t('framework.prior.title')}
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-stone-700">
                  <th className="text-left py-3 pr-6 text-stone-500 font-normal"></th>
                  <th className="text-left py-3 pr-6 text-stone-500 font-normal">
                    {t('framework.prior.lee')}
                  </th>
                  <th className="text-left py-3 text-stone-500 font-normal">
                    SociA
                  </th>
                </tr>
              </thead>
              <tbody className="text-stone-400">
                <tr className="border-b border-stone-800/50">
                  <td className="py-3 pr-6 text-stone-500">{t('framework.prior.col.direction')}</td>
                  <td className="py-3 pr-6">{t('framework.prior.lee.direction')}</td>
                  <td className="py-3 text-stone-200">{t('framework.prior.socia.direction')}</td>
                </tr>
                <tr className="border-b border-stone-800/50">
                  <td className="py-3 pr-6 text-stone-500">{t('framework.prior.col.thesis')}</td>
                  <td className="py-3 pr-6">{t('framework.prior.lee.thesis')}</td>
                  <td className="py-3 text-stone-200">{t('framework.prior.socia.thesis')}</td>
                </tr>
                <tr className="border-b border-stone-800/50">
                  <td className="py-3 pr-6 text-stone-500">{t('framework.prior.col.theory')}</td>
                  <td className="py-3 pr-6">{t('framework.prior.lee.theory')}</td>
                  <td className="py-3">{t('framework.prior.socia.theory')}</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-stone-500">{t('framework.prior.col.method')}</td>
                  <td className="py-3 pr-6">{t('framework.prior.lee.method')}</td>
                  <td className="py-3">{t('framework.prior.socia.method')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
