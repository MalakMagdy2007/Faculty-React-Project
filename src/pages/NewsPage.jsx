import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { newsData } from "./newsData";
import "./Person3.css";

export default function NewsPage() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const categories = ["All", ...new Set(newsData.map((item) => item.category))];

    const filteredNews = useMemo(() => {
        const query = search.trim().toLowerCase();
        return newsData.filter((item) => {
            const matchesCategory = category === "All" || item.category === category;
            const matchesSearch =
                !query ||
                item.titleEn.toLowerCase().includes(query) ||
                item.titleAr.includes(search.trim());
            return matchesCategory && matchesSearch;
        });
    }, [search, category]);

    return (
        <main className="p3-page" style={{ direction: 'rtl' }}>
            <section className="p3-header">
                <span className="p3-label">آخر التحديثات</span>
                <h1>الأخبار والأنشطة</h1>
                <p>أحدث الأخبار والأنشطة من الكلية.</p>
            </section>

            <section className="p3-controls">
                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="ابحث في الأخبار..."
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    {categories.map((item) => (
                        <option key={item} value={item}>
                            {item === "All" ? "كل الفئات" : item}
                        </option>
                    ))}
                </select>
            </section>

            {filteredNews.length === 0 ? (
                <div className="p3-empty">لا توجد أخبار متاحة حالياً.</div>
            ) : (
                <section className="p3-grid">
                    {filteredNews.map((item) => (
                        <article className="p3-card" key={item.id}>
                            <div className="p3-card-body">
                                <div className="p3-meta">
                                    <span>{item.category}</span>
                                    <time>{item.date}</time>
                                </div>
                                <h2>{item.titleAr}</h2>
                                <p>{item.excerptAr}</p>
                                <Link to={`/news/${item.id}`} className="p3-button">
                                    اقرأ المزيد
                                </Link>
                            </div>
                        </article>
                    ))}
                </section>
            )}
        </main>
    );
}