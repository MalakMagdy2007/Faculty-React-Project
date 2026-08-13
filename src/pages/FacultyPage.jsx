import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FacultyPage() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');

    const facultyMembers = [
        {
            id: '1',
            name: 'Prof. Dr. Ahmed Mahmoud',
            title: 'Dean - Professor of CS',
            email: 'a.mahmoud@fci.edu.eg',
            office: 'Building A - Room 302',
            // صورة رجل أكاديمي
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop',
            dept: 'CS'
        },
        {
            id: '2',
            name: 'Dr. Sarah Ali',
            title: 'Associate Professor - IS',
            email: 's.ali@fci.edu.eg',
            office: 'Building B - Room 105',
            // صورة أستاذة جامعية دكتورة
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop',
            dept: 'IS'
        }
    ];

    const filtered = facultyMembers.filter(m => {
        const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === 'All' || m.dept === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '50px 20px', fontFamily: 'sans-serif' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '10px' }}>
                        Faculty Members
                    </h1>
                    <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
                        Meet our distinguished professors and academic staff
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
                    <input
                        type="text"
                        placeholder="🔍 Search faculty..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            padding: '12px 20px',
                            borderRadius: '8px',
                            border: '1px solid #cbd5e1',
                            width: '100%',
                            maxWidth: '350px',
                            fontSize: '1rem',
                            outline: 'none'
                        }}
                    />
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        style={{
                            padding: '12px 20px',
                            borderRadius: '8px',
                            border: '1px solid #cbd5e1',
                            backgroundColor: '#fff',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            outline: 'none'
                        }}
                    >
                        <option value="All">All Departments</option>
                        <option value="CS">Computer Science (CS)</option>
                        <option value="IS">Information Systems (IS)</option>
                        <option value="IT">Information Technology (IT)</option>
                    </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {filtered.map(member => (
                        <div key={member.id} style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <img
                                src={member.image}
                                alt={member.name}
                                style={{ width: '100%', height: '240px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '6px' }}>
                                    {member.name}
                                </h3>
                                <p style={{ color: '#2563eb', fontWeight: '600', fontSize: '0.95rem', marginBottom: '15px' }}>
                                    {member.title}
                                </p>
                                <div style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                    <p>✉️ {member.email}</p>
                                    <p>📍 {member.office}</p>
                                </div>
                                <Link
                                    to={`/faculty/${member.id}`}
                                    style={{
                                        marginTop: 'auto',
                                        textAlign: 'center',
                                        backgroundColor: '#f1f5f9',
                                        color: '#0f172a',
                                        padding: '10px 16px',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    View Details →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}