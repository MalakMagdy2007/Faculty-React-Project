import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { newsData } from "../data/newsData";

export default function NewsPage() {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const categories = ["All", ...new Set(newsData.map((item) => item.category))];

    const filteredNews = useMemo(() => {
        const query = search.trim().toLowerCase();
        return newsData.filter((item) => {
            const matchesCategory = category === "All" || item.category === category;

            // اختيار العنوان والوصف بناءً على اللغة الحالية
            const title = isAr ? (item.titleAr || item.titleEn) : item.titleEn;
            const excerpt = isAr ? (item.excerptAr || item.excerptEn) : item.excerptEn;

            const matchesSearch =
                !query ||
                title.toLowerCase().includes(query) ||
                excerpt.toLowerCase().includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [search, category, isAr]);

    return (
        <main style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '40px 20px',
            fontFamily: 'sans-serif',
            minHeight: '80vh', // 👈 ده اللي بيشيل الحتة السودة اللي تحت نهائياً!
            backgroundColor: '#ffffff'
        }}>
            <section style={{ textAlign: 'center', marginBottom: '30px' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}>
                    {isAr ? "أحدث التحديثات" : "Latest Updates"}
                </span>
                <h1 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '10px 0' }}>
                    {isAr ? "الأخبار والأنشطة" : "News & Activities"}
                </h1>
                <p style={{ color: '#475569' }}>
                    {isAr ? "أحدث الأخبار والأنشطة الخاصة بالكلية." : "Latest news and activities from the Faculty."}
                </p>
            </section>

            <section style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '35px', flexWrap: 'wrap' }}>
                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={isAr ? "ابحث في الأخبار..." : "Search news..."}
                    style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', width: '300px', outline: 'none' }}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', backgroundColor: '#fff' }}
                >
                    {categories.map((item) => (
                        <option key={item} value={item}>
                            {item === "All" ? (isAr ? "جميع الأقسام" : "All Categories") : item}
                        </option>
                    ))}
                </select>
            </section>

            {filteredNews.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '50px', border: '1px dashed #cbd5e1', borderRadius: '12px', backgroundColor: '#fff' }}>
                    {isAr ? "لا توجد أخبار متاحة حالياً." : "No news available at the moment."}
                </div>
            ) : (
                <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
                    {filteredNews.map((item) => (
                        <article key={item.id} style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '14px', overflow: 'hidden', padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.85rem', marginBottom: '10px' }}>
                                <span>{item.category}</span>
                                <time>{item.date}</time>
                            </div>
                            <h2 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '10px' }}>
                                {isAr ? (item.titleAr || item.titleEn) : item.titleEn}
                            </h2>
                            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '18px' }}>
                                {isAr ? (item.excerptAr || item.excerptEn) : item.excerptEn}
                            </p>
                            <Link to={`/news/${item.id}`} style={{ display: 'inline-block', backgroundColor: '#2563eb', color: '#fff', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                {isAr ? "اقرأ المزيد ←" : "Read More →"}
                            </Link>
                        </article>
                    ))}
                </section>
            )}
        </main>
    );
}