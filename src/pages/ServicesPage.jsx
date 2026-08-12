import { useTranslation } from 'react-i18next';
import { servicesData } from '../data/services';
import { GraduationCap, Headphones, ExternalLink } from 'lucide-react';

const icons = { GraduationCap, Headphones };

export const ServicesPage = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'ar';

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        {lang === 'ar' ? 'الخدمات' : 'Services'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {servicesData.map((s) => {
          const Icon = icons[s.icon] || GraduationCap;
          return (
            <div key={s.id} className="bg-white p-4 rounded-lg border shadow-sm">
              <Icon size={24} className="text-blue-600 mb-2" />
              <h3 className="font-bold mb-1">{s.title[lang] || s.title.ar}</h3>
              <p className="text-xs text-gray-600 mb-3">{s.description[lang] || s.description.ar}</p>
              <a href={s.link} className="text-xs text-blue-600 font-semibold inline-flex items-center gap-1">
                {lang === 'ar' ? 'دخول' : 'Access'} <ExternalLink size={12} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};