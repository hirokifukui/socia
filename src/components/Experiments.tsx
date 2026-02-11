import { useLang } from '../i18n';

export function Experiments() {
  const { t } = useLang();

  return (
    <section id="experiments" className="py-32 px-6 border-t border-stone-800/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.1em] text-stone-200 mb-12">
          {t('experiments.title')}
        </h2>
        <p className="text-stone-500 font-body leading-relaxed">
          {t('experiments.placeholder')}
        </p>
      </div>
    </section>
  );
}
