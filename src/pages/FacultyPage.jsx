import { useState, useMemo } from "react";
import { useTranslation } from 'react-i18next';
import { facultyData, departmentsList } from '../data/faculty';
import { FacultyCard } from '../components/FacultyCard';
import { Search } from 'lucide-react';

export const FacultyPage = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'ar';
  const [search, setSearch] = useState('');
  const [dept, setDept] = useState('all');

  const list = useMemo(() => {
    return facultyData.filter((item) => {
      const name = (item.name[lang] || item.name.ar).toLowerCase();
      const matchesSearch = name.includes(search.toLowerCase());
      const matchesDept = dept === 'all' || item.department === dept;
      return matchesSearch && matchesDept;
    });
  }, [search, dept, lang]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        {lang === 'ar' ? 'أعضاء هيئة التدريس' : 'Faculty'}
      </h1>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={lang === 'ar' ? 'بحث...' : 'Search...'}
            className="w-full pr-9 pl-3 py-2 border rounded-md text-sm"
          />
        </div>
        <select
          value={dept}
          onChange={(e) => setDept(e.target.value)}
          className="py-2 px-3 border rounded-md text-sm bg-white"
        >
          {departmentsList.map((d) => (
            <option key={d.id} value={d.id}>{d.label[lang] || d.label.ar}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {list.map((item) => (
          <FacultyCard key={item.id} faculty={item} />
        ))}
      </div>
    </div>
  );
};