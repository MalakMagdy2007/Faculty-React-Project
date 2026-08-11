import { useMemo, useState } from "react";
import { announcementsData } from "../data/newsData";
import "./Person3.css";

export default function AnnouncementsPage() {
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
        <span className="p3-label">Important Information</span>

        <h1>Announcements</h1>

        <p>
          Important notices and updates for students and visitors.
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
          placeholder="Search announcements..."
          aria-label="Search announcements"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter announcements by category"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </section>

      {filteredAnnouncements.length === 0 ? (
        <div className="p3-empty">
          No announcements available.
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

                <h2>{item.titleEn}</h2>

                <p>{item.contentEn}</p>

                <p dir="rtl" lang="ar">
                  {item.titleAr} — {item.contentAr}
                </p>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}