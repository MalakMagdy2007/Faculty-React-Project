import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { facultyData } from '../data/faculty';
import { Mail, Clock, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';

export const FacultyDetailPage = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language || 'ar';
  const item = facultyData.find((f) => f.id === id);

  if (!item) return <div className="p-8 text-center">Not Found</div>;

  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl">
      <Link to="/faculty" className="flex items-center gap-1 text-blue-600 text-sm mb-4">
        {lang === 'ar' ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
        {lang === 'ar' ? 'رجوع' : 'Back'}
      </Link>
      <div className="bg-white rounded-lg shadow border p-6">
        <div className="flex gap-4 items-center mb-4">
          <img src={item.image} alt="" className="w-20 h-20 rounded-full object-cover" />
          <div>
            <h1 className="text-xl font-bold">{item.name[lang] || item.name.ar}</h1>
            <p className="text-sm text-blue-600">{item.title[lang] || item.title.ar}</p>
          </div>
        </div>
        <div className="text-sm text-gray-600 space-y-2 border-t pt-4">
          <p className="flex items-center gap-2"><Mail size={16} /> {item.email}</p>
          <p className="flex items-center gap-2"><MapPin size={16} /> {item.office}</p>
          <p className="flex items-center gap-2"><Clock size={16} /> {item.officeHours[lang] || item.officeHours.ar}</p>
        </div>
        <div className="mt-4 border-t pt-4">
          <p className="text-sm text-gray-700">{item.bio[lang] || item.bio.ar}</p>
        </div>
      </div>
    </div>
  );
};