import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { announcementsData } from "./newsData";
import "./Person3.css";

export default function AnnouncementsPage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(announcementsData.map((item) => item.category)),
  ];

  const filteredAnnouncements = useMemo(() => {
    const query = search.trim().toLowerCase();

    return announcementsData.filter((item) => {
      const matchesCategory =
        category === "All" || item.category === category;

      const matchesSearch =
        !query ||
        item.titleEn.toLowerCase().includes(query) ||
        item.titleAr.includes(search.trim()) ||
        item.contentEn.toLowerCase().includes(query) ||
        item.contentAr.includes(search.trim());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="p3-page">
      <section className="p3-header">
        <span className="p3-label">{isArabic ? "معلومات مهمة" : "Important Information"}</span>

        <h1>{isArabic ? "الإعلانات" : "Announcements"}</h1>

        <p>
          {isArabic ? "إشعارات وتحديثات مهمة للطلاب والزوار." : "Important notices and updates for students and visitors."}
        </p>
      </section>

      <section
        className="p3-controls"
        aria-label="Announcements search and filtering"
      >
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={isArabic ? "ابحث في الإعلانات..." : "Search announcements..."}
          aria-label={isArabic ? "البحث في الإعلانات" : "Search announcements"}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label={isArabic ? "تصفية الإعلانات حسب الفئة" : "Filter announcements by category"}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {isArabic ? (item === "All" ? "الكل" : item) : item}
            </option>
          ))}
        </select>
      </section>

      {filteredAnnouncements.length === 0 ? (
        <div className="p3-empty">
          {isArabic ? "لا توجد إعلانات متاحة." : "No announcements available."}
        </div>
      ) : (
        <section className="p3-announcements">
          {filteredAnnouncements.map((item) => (
            <article
              className="p3-announcement"
              key={item.id}
            >
              <div className="p3-announcement-date">
                <span>{item.date.slice(8)}</span>
                <small>{item.date.slice(0, 7)}</small>
              </div>

              <div>
                <div className="p3-meta">
                  <span>{item.category}</span>
                </div>

                <h2>{isArabic ? item.titleAr : item.titleEn}</h2>

                <p>{isArabic ? item.contentAr : item.contentEn}</p>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}