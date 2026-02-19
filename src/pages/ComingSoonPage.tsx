import { Link } from 'react-router-dom';
import { useLang } from '../i18n';

export function ComingSoonPage({
  titleKey,
  descKey,
  backTo = '/',
}: {
  titleKey: string;
  descKey: string;
  backTo?: string;
}) {
  const { t } = useLang();

  return (
    <section className="min-h-screen flex flex-col justify-center px-6">
      <div className="max-w-3xl mx-auto w-full">
        <Link
          to={backTo}
          className="text-sm text-stone-600 hover:text-stone-400 transition-colors tracking-wide mb-12 inline-block"
        >
          {t('coming.back')}
        </Link>

        <h2 className="font-display text-2xl md:text-3xl tracking-[0.1em] text-stone-200 mb-8">
          {t(titleKey)}
        </h2>

        <p className="text-stone-400 font-body leading-relaxed mb-16 max-w-2xl">
          {t(descKey)}
        </p>

        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-red-900/60 animate-pulse" />
          <span className="font-mono text-sm tracking-[0.15em] text-stone-600">
            {t('coming.title')}
          </span>
        </div>
      </div>
    </section>
  );
}
