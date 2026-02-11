import { useLang } from '../i18n';

export function Navigation() {
  const { lang, toggle, t } = useLang();

  const links = [
    { href: '#experiments', label: t('nav.experiments') },
    { href: '#findings', label: t('nav.findings') },
    { href: '#framework', label: t('nav.framework') },
    { href: '#about', label: t('nav.about') },
    { href: '#paper', label: t('nav.paper') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-stone-800/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-lg tracking-[0.2em] text-stone-100 hover:text-white transition-colors"
        >
          SociA
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-stone-400 hover:text-stone-100 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={toggle}
            className="text-xs tracking-widest text-stone-500 hover:text-stone-200 transition-colors border border-stone-700 px-3 py-1.5 hover:border-stone-500"
          >
            {lang === 'en' ? '日本語' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}
