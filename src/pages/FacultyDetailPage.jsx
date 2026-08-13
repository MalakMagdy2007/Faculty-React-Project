import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { facultyData } from '../data/faculty';

export default function FacultyDetailPage() {
    const { id } = useParams();
    const item = facultyData.find((f) => f.id === id);

    if (!item) {
        return (
            <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
                <h2>عضو هيئة التدريس غير موجود</h2>
                <Link to="/faculty" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 'bold' }}>
                    ← العودة للقائمة
                </Link>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '700px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif', direction: 'rtl' }}>
            <Link to="/faculty" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginBottom: '20px' }}>
                ← رجوع لقائمة أعضاء هيئة التدريس
            </Link>

            <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '30px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                    <img src={item.image} alt={item.name.ar} style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a' }}>{item.name.ar || item.name.en}</h1>
                        <p style={{ color: '#2563eb', fontWeight: '600' }}>{item.title.ar || item.title.en}</p>
                    </div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '15px 0' }} />

                <div style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.8' }}>
                    <p>✉️ {item.email}</p>
                    <p>📍 {item.office}</p>
                    <p>⏰ {item.officeHours?.ar || item.officeHours?.en}</p>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #f1f5f9' }}>
                    <p style={{ color: '#334155', lineHeight: '1.6' }}>{item.bio?.ar || item.bio?.en}</p>
                </div>
            </div>
        </div>
    );
}