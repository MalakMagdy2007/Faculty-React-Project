import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { newsData } from "./newsData";
import "./Person3.css";

export default function NewsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(newsData.map((item) => item.category)),
  ];

  const filteredNews = useMemo(() => {
    const query = search.trim().toLowerCase();

    return newsData.filter((item) => {
      const matchesCategory =
        category === "All" || item.category === category;

      const matchesSearch =
        !query ||
        item.titleEn.toLowerCase().includes(query) ||
        item.titleAr.includes(search.trim()) ||
        item.excerptEn.toLowerCase().includes(query) ||
        item.excerptAr.includes(search.trim());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="p3-page">
      <section className="p3-header">
        <span className="p3-label">Latest Updates</span>

        <h1>News</h1>

        <p>
          Latest news and activities from the Faculty.
        </p>
      </section>

      <section
        className="p3-controls"
        aria-label="News search and filtering"
      >
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search news..."
          aria-label="Search news"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter news by category"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </section>

      {filteredNews.length === 0 ? (
        <div className="p3-empty">
          No news available.
        </div>
      ) : (
        <section className="p3-grid">
          {filteredNews.map((item) => (
            <article className="p3-card" key={item.id}>
              <div className="p3-card-image">
                <img
                  src={item.image}
                  alt={item.titleEn}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="p3-card-body">
                <div className="p3-meta">
                  <span>{item.category}</span>

                  <time dateTime={item.date}>
                    {item.date}
                  </time>
                </div>

                <h2>{item.titleEn}</h2>

                <p>{item.excerptEn}</p>

                <Link
                  to={`/news/${item.id}`}
                  className="p3-button"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}