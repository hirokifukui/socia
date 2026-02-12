import { useLang } from '../i18n';

export function Hero() {
  const { t } = useLang();

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="font-display text-5xl md:text-7xl tracking-[0.15em] text-white mb-16 animate-fade-in">
          SociA
        </h1>

        <p className="text-lg md:text-xl text-stone-300 leading-relaxed mb-20 max-w-2xl font-body animate-fade-in-delay-1">
          {t('hero.subtitle')}
        </p>

        <div className="space-y-2 mb-20 text-stone-400 font-body leading-loose animate-fade-in-delay-2">
          <p>{t('hero.narrative.1')}</p>
          <p>{t('hero.narrative.2')}</p>
          <p>{t('hero.narrative.3')}</p>
          <p className="text-stone-200">{t('hero.narrative.4')}</p>
          <p className="text-stone-200">{t('hero.narrative.5')}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 animate-fade-in-delay-3">
          <a
            href="#experiments"
            className="text-sm text-stone-500 hover:text-stone-200 transition-colors tracking-wide border-b border-stone-700 pb-1 hover:border-stone-400"
          >
            {t('hero.cta.experiments')}
          </a>
          <a
            href="#findings"
            className="text-sm text-stone-500 hover:text-stone-200 transition-colors tracking-wide border-b border-stone-700 pb-1 hover:border-stone-400"
          >
            {t('hero.cta.findings')}
          </a>
          <a
            href="#framework"
            className="text-sm text-stone-500 hover:text-stone-200 transition-colors tracking-wide border-b border-stone-700 pb-1 hover:border-stone-400"
          >
            {t('hero.cta.framework')}
          </a>
        </div>
      </div>
    </section>
  );
}
