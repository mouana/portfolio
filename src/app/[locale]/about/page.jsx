import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
