import { Link } from 'react-router-dom';
import { useLang } from '../i18n';

function RoomCard({
  title,
  subtitle,
  desc,
  accent,
}: {
  title: string;
  subtitle: string;
  desc: string;
  accent: string;
}) {
  return (
    <div className={`border p-8 ${accent}`}>
      <h3 className="font-display text-lg tracking-[0.15em] text-stone-200 mb-1">
        {title}
      </h3>
      <p className="text-stone-500 font-body text-xs tracking-wide mb-4">
        {subtitle}
      </p>
      <p className="text-stone-400 font-body text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export function FacilityPage() {
  const { t } = useLang();

  return (
    <section className="min-h-screen py-32 px-6 pt-28">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="text-sm text-stone-600 hover:text-stone-400 transition-colors tracking-wide mb-12 inline-block"
        >
          {t('coming.back')}
        </Link>

        <h2 className="font-display text-2xl md:text-3xl tracking-[0.1em] text-stone-200 mb-4">
          {t('facility.title')}
        </h2>
        <p className="text-stone-300 font-body text-lg leading-relaxed mb-4 italic">
          {t('facility.subtitle')}
        </p>
        <p className="text-stone-400 font-body leading-relaxed mb-16">
          {t('facility.desc')}
        </p>

        <div className="space-y-4 mb-16">
          <RoomCard
            title={t('facility.ward.title')}
            subtitle={t('facility.ward.subtitle')}
            desc={t('facility.ward.desc')}
            accent="border-red-900/40"
          />
          <RoomCard
            title={t('facility.plaza.title')}
            subtitle={t('facility.plaza.subtitle')}
            desc={t('facility.plaza.desc')}
            accent="border-stone-700"
          />
          <RoomCard
            title={t('facility.parlor.title')}
            subtitle={t('facility.parlor.subtitle')}
            desc={t('facility.parlor.desc')}
            accent="border-stone-800/60"
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-stone-700 animate-pulse" />
          <span className="font-mono text-sm tracking-[0.15em] text-stone-600">
            {t('coming.title')}
          </span>
        </div>
      </div>
    </section>
  );
}
