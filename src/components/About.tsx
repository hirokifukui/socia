import { useLang } from '../i18n';

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-32 px-6 border-t border-stone-800/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.1em] text-stone-200 mb-16">
          {t('about.title')}
        </h2>

        <div className="space-y-8 font-body text-stone-300 leading-loose mb-16">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </div>

        <div className="border-t border-stone-800/50 pt-8">
          <p className="font-display text-lg tracking-wide text-stone-200">
            {t('about.name')}
          </p>
          <p className="text-stone-500 font-body text-sm mt-2">
            {t('about.role')}
          </p>
          <p className="text-stone-400 font-body text-sm mt-4">
            {t('about.affiliation1')}
          </p>
          <p className="text-stone-500 font-body text-sm mt-1">
            {t('about.affiliation2')}
          </p>
          <p className="text-stone-600 font-body text-xs mt-6 italic">
            {t('about.note')}
          </p>
        </div>
      </div>
    </section>
  );
}
