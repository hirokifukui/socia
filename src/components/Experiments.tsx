import { useLang } from '../i18n';

function ConditionCell({
  code,
  title,
  desc,
  accent,
}: {
  code: string;
  title: string;
  desc: string;
  accent: string;
}) {
  return (
    <div className={`border p-6 ${accent}`}>
      <span className="font-mono text-xs tracking-wider text-stone-500 block mb-2">
        {code}
      </span>
      <h4 className="font-display text-sm tracking-wide text-stone-200 mb-3">
        {title}
      </h4>
      <p className="text-stone-400 font-body text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function PhaseStep({
  turns,
  label,
  desc,
}: {
  turns: string;
  label: string;
  desc: string;
}) {
  return (
    <div className="flex gap-6 items-start">
      <span className="font-mono text-xs text-stone-600 w-14 shrink-0 pt-0.5">
        {turns}
      </span>
      <div>
        <span className="font-display text-sm tracking-wide text-stone-300">
          {label}
        </span>
        <p className="text-stone-500 font-body text-sm mt-1 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

export function Experiments() {
  const { t } = useLang();

  const conditions = [
    {
      code: 'C1',
      title: t('experiments.c1.title'),
      desc: t('experiments.c1.desc'),
      accent: 'border-red-900/40',
    },
    {
      code: 'C2',
      title: t('experiments.c2.title'),
      desc: t('experiments.c2.desc'),
      accent: 'border-red-900/60 bg-red-950/5',
    },
    {
      code: 'C3',
      title: t('experiments.c3.title'),
      desc: t('experiments.c3.desc'),
      accent: 'border-stone-700',
    },
    {
      code: 'C4',
      title: t('experiments.c4.title'),
      desc: t('experiments.c4.desc'),
      accent: 'border-stone-800/60',
    },
  ];

  const phases = [
    { turns: 'T1–T2', label: t('experiments.phase.1.label'), desc: t('experiments.phase.1.desc') },
    { turns: 'T3–T4', label: t('experiments.phase.2.label'), desc: t('experiments.phase.2.desc') },
    { turns: 'T5–T6', label: t('experiments.phase.3.label'), desc: t('experiments.phase.3.desc') },
    { turns: 'T7–T9', label: t('experiments.phase.4.label'), desc: t('experiments.phase.4.desc') },
    { turns: 'T10–T15', label: t('experiments.phase.5.label'), desc: t('experiments.phase.5.desc') },
  ];

  return (
    <section id="experiments" className="py-32 px-6 border-t border-stone-800/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.1em] text-stone-200 mb-4">
          {t('experiments.title')}
        </h2>

        {/* Series C header */}
        <div className="mt-16">
          <h3 className="font-display text-xl tracking-[0.1em] text-stone-200 mb-3">
            {t('experiments.seriesc.title')}
          </h3>
          <p className="text-stone-400 font-body leading-relaxed mb-4">
            {t('experiments.seriesc.desc')}
          </p>
          <p className="text-stone-500 font-body text-sm mb-12">
            {t('experiments.seriesc.scale')}
          </p>
        </div>

        {/* 2×2 matrix label */}
        <div className="mb-6">
          <div className="flex gap-8 text-xs font-mono text-stone-600 mb-4">
            <span className="w-1/2 text-right pr-3">{t('experiments.axis.external')}</span>
            <span className="w-1/2 pl-3">{t('experiments.axis.internal')}</span>
          </div>

          {/* Row 1: silent member present */}
          <div className="mb-2">
            <span className="text-xs font-mono text-stone-600 block mb-2">
              {t('experiments.axis.silent')}
            </span>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="space-y-3">
                <ConditionCell {...conditions[0]} />
                <ConditionCell {...conditions[1]} />
              </div>
              <ConditionCell {...conditions[2]} />
            </div>
          </div>

          {/* Row 2: no silent member */}
          <div className="mt-3">
            <span className="text-xs font-mono text-stone-600 block mb-2">
              {t('experiments.axis.nosilent')}
            </span>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="border border-stone-800/30 p-6 flex items-center justify-center">
                <span className="text-stone-700 font-mono text-xs">—</span>
              </div>
              <ConditionCell {...conditions[3]} />
            </div>
          </div>
        </div>

        {/* Event sequence */}
        <div className="mt-24">
          <h3 className="font-display text-xl tracking-[0.1em] text-stone-200 mb-3">
            {t('experiments.sequence.title')}
          </h3>
          <p className="text-stone-500 font-body text-sm mb-10">
            {t('experiments.sequence.desc')}
          </p>
          <div className="space-y-6 border-l border-stone-800/50 pl-0 ml-2">
            {phases.map((phase) => (
              <PhaseStep key={phase.turns} {...phase} />
            ))}
          </div>
        </div>

        {/* Models */}
        <div className="mt-16 border border-stone-800/40 p-8">
          <h4 className="font-display text-sm tracking-[0.1em] text-stone-300 mb-4">
            {t('experiments.models.title')}
          </h4>
          <p className="text-stone-400 font-body text-sm leading-relaxed">
            {t('experiments.models.desc')}
          </p>
        </div>

        {/* The Facility — Observation Window (Phase 2 preview) */}
        <div className="mt-32 border-t border-stone-800/30 pt-24">
          <h3 className="font-display text-xl tracking-[0.1em] text-stone-200 mb-3">
            {t('experiments.facility.title')}
          </h3>
          <p className="text-stone-400 font-body leading-relaxed mb-12">
            {t('experiments.facility.desc')}
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {/* Now */}
            <div className="border border-stone-800/50 p-6 min-h-[160px] flex flex-col">
              <span className="font-display text-xs tracking-[0.2em] text-stone-500 uppercase mb-3">
                {t('experiments.facility.now.title')}
              </span>
              <p className="text-stone-600 font-body text-xs leading-relaxed mb-auto">
                {t('experiments.facility.now.desc')}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-700 animate-pulse" />
                <span className="text-stone-700 font-mono text-xs">
                  {t('experiments.facility.waiting')}
                </span>
              </div>
            </div>

            {/* Timeline */}
            <div className="border border-stone-800/50 p-6 min-h-[160px] flex flex-col">
              <span className="font-display text-xs tracking-[0.2em] text-stone-500 uppercase mb-3">
                {t('experiments.facility.timeline.title')}
              </span>
              <p className="text-stone-600 font-body text-xs leading-relaxed mb-auto">
                {t('experiments.facility.timeline.desc')}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
                <span className="text-stone-700 font-mono text-xs">
                  {t('experiments.facility.waiting')}
                </span>
              </div>
            </div>

            {/* Vitals */}
            <div className="border border-stone-800/50 p-6 min-h-[160px] flex flex-col">
              <span className="font-display text-xs tracking-[0.2em] text-stone-500 uppercase mb-3">
                {t('experiments.facility.vitals.title')}
              </span>
              <p className="text-stone-600 font-body text-xs leading-relaxed mb-auto">
                {t('experiments.facility.vitals.desc')}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
                <span className="text-stone-700 font-mono text-xs">
                  {t('experiments.facility.waiting')}
                </span>
              </div>
            </div>
          </div>

          <p className="text-stone-600 font-body text-xs italic leading-relaxed">
            {t('experiments.facility.note')}
          </p>
        </div>
      </div>
    </section>
  );
}
