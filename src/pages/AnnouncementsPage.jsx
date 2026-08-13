import React, { useState, useMemo } from "react";
import { announcementsData } from "../data/newsData";

export default function AnnouncementsPage() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const categories = ["All", ...new Set(announcementsData.map((item) => item.category))];

    const filteredAnnouncements = useMemo(() => {
        const query = search.trim().toLowerCase();
        return announcementsData.filter((item) => {
            const matchesCategory = category === "All" || item.category === category;
            const matchesSearch =
                !query ||
                item.titleEn.toLowerCase().includes(query) ||
                item.contentEn.toLowerCase().includes(query);
            return matchesCategory && matchesSearch;
        });
    }, [search, category]);

    return (
        <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' }}>
            <section style={{ textAlign: 'center', marginBottom: '30px' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}>Important Information</span>
                <h1 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '10px 0' }}>Announcements</h1>
                <p style={{ color: '#475569' }}>Important notices and updates for students and visitors.</p>
            </section>

            <section style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '35px', flexWrap: 'wrap' }}>
                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search announcements..."
                    style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', width: '300px', outline: 'none' }}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', backgroundColor: '#fff' }}
                >
                    {categories.map((item) => (
                        <option key={item} value={item}>
                            {item === "All" ? "All Categories" : item}
                        </option>
                    ))}
                </select>
            </section>

            {filteredAnnouncements.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '50px', border: '1px dashed #cbd5e1', borderRadius: '12px' }}>
                    No announcements available.
                </div>
            ) : (
                <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {filteredAnnouncements.map((item) => (
                        <article key={item.id} style={{ display: 'flex', gap: '20px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', alignItems: 'center' }}>
                            <div style={{ minWidth: '80px', height: '80px', backgroundColor: '#f1f5f9', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#1e293b' }}>
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{item.date.slice(8)}</span>
                                <small style={{ fontSize: '0.75rem', color: '#64748b' }}>{item.date.slice(0, 7)}</small>
                            </div>
                            <div>
                                <span style={{ fontSize: '0.8rem', backgroundColor: '#e2e8f0', color: '#334155', padding: '2px 8px', borderRadius: '4px' }}>{item.category}</span>
                                <h2 style={{ fontSize: '1.2rem', color: '#0f172a', margin: '6px 0' }}>{item.titleEn}</h2>
                                <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0 }}>{item.contentEn}</p>
                            </div>
                        </article>
                    ))}
                </section>
            )}
        </main>
    );
}