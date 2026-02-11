import { useLang } from '../i18n';

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="py-16 px-6 border-t border-stone-800/30">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <span className="text-stone-600 font-body text-xs">
          {t('footer.license')}
        </span>
        <span className="font-display text-xs tracking-[0.2em] text-stone-700">
          SociA
        </span>
      </div>
    </footer>
  );
}
