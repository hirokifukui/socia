import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../i18n';

export function Navigation() {
  const { lang, toggle, t } = useLang();
  const location = useLocation();

  const links = [
    { to: '/research', label: t('nav.research') },
    { to: '/facility', label: t('nav.facility') },
    { to: '/framework', label: t('nav.framework') },
    { to: '/about', label: t('nav.about') },
    { to: '/papers', label: t('nav.papers') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-stone-800/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-lg tracking-[0.2em] text-stone-100 hover:text-white transition-colors"
        >
          SociA
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm transition-colors tracking-wide ${
                  location.pathname.startsWith(link.to)
                    ? 'text-stone-100'
                    : 'text-stone-400 hover:text-stone-100'
                }`}
              >
                {link.label}
              </Link>
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
