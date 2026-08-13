import React from "react";
import { Link, useParams } from "react-router-dom";
import { newsData } from "../data/newsData";

export default function NewsDetails() {
    const { id } = useParams();
    const news = newsData.find((item) => item.id === id);

    if (!news) {
        return (
            <main style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
                <h1>News Article Not Found</h1>
                <Link to="/news" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 'bold' }}>
                    ← Back to News
                </Link>
            </main>
        );
    }

    return (
        <main style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
            <Link to="/news" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginBottom: '20px' }}>
                ← Back to News
            </Link>

            <article style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.9rem', marginBottom: '15px' }}>
                    <span>{news.category}</span>
                    <time>{news.date}</time>
                </div>

                <h1 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '20px', lineHeight: '1.3' }}>{news.titleEn}</h1>

                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#334155', lineHeight: '1.7', marginBottom: '20px' }}>
                    {news.excerptEn}
                </p>

                <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '20px 0' }} />

                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.8' }}>
                    {news.contentEn}
                </p>
            </article>
        </main>
    );
}