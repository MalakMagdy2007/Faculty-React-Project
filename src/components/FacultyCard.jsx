import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin } from 'lucide-react';

export const FacultyCard = ({ faculty }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'ar';

  return (
    <div className="bg-white rounded-lg shadow border p-4 flex flex-col justify-between">
      <div className="text-center">
        <img 
          src={faculty.image} 
          alt={faculty.name[lang] || faculty.name.ar} 
          className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
        />
        <h3 className="font-bold text-gray-800">{faculty.name[lang] || faculty.name.ar}</h3>
        <p className="text-xs text-blue-600 mb-2">{faculty.title[lang] || faculty.title.ar}</p>
        <div className="text-xs text-gray-500 space-y-1 mb-3">
          <p className="flex items-center justify-center gap-1"><Mail size={12} /> {faculty.email}</p>
          <p className="flex items-center justify-center gap-1"><MapPin size={12} /> {faculty.office}</p>
        </div>
      </div>
      <div className="text-center pt-2 border-t">
        <Link to={`/faculty/${faculty.id}`} className="text-xs font-semibold text-blue-600 hover:underline">
          {lang === 'ar' ? 'التفاصيل ←' : 'Details →'}
        </Link>
      </div>
    </div>
  );
};