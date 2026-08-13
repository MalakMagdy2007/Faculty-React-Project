import React from 'react';

export default function ServicesPage() {
    const services = [
        {
            icon: '🎓',
            title: 'Academic Results',
            desc: 'Access exam results, semester grades, and cumulative GPA reports.',
            link: '#'
        },
        {
            icon: '🎧',
            title: 'IT Support',
            desc: 'Technical assistance for university email, Wi-Fi access, and lab accounts.',
            link: '#'
        }
    ];

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '50px 20px', fontFamily: 'sans-serif' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                {/* العنوان والوصف في النص */}
                <div style={{ textAlign: 'center', marginBottom: '45px' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '10px' }}>
                        Faculty Services
                    </h1>
                    <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
                        Explore student and staff portals and online services
                    </p>
                </div>

                {/* الكروت متواسطة وفي منتصف الصفحة */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                    {services.map((service, index) => (
                        <div key={index} style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '16px',
                            padding: '30px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                        }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{service.icon}</div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '10px' }}>
                                {service.title}
                            </h3>
                            <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '20px' }}>
                                {service.desc}
                            </p>
                            <a
                                href={service.link}
                                style={{
                                    marginTop: 'auto',
                                    color: '#2563eb',
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem'
                                }}
                            >
                                Access Portal ↗
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}