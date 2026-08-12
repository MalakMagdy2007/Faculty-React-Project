import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { departmentsData } from '../data/departments';

const DepartmentsPage = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ar';

    const pageTitle = {
        ar: "الأقسام الأكاديمية",
        en: "Academic Departments"
    };

    const pageSubtitle = {
        ar: "تعرف على الأقسام العلمية والتخصصات المتاحة بالكلية",
        en: "Explore academic departments and available specializations"
    };

    const viewDetailsText = {
        ar: "عرض التفاصيل",
        en: "View Details"
    };

    return (
        <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            {/* Page Header */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '10px' }}>
                    {pageTitle[currentLang]}
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#64748b' }}>
                    {pageSubtitle[currentLang]}
                </p>
            </div>

            {/* Departments Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
                {departmentsData.map((dept) => (
                    <div
                        key={dept.id}
                        style={{
                            border: '1px solid #e2e8f0',
                            borderRadius: '12px',
                            padding: '24px',
                            backgroundColor: '#ffffff',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div>
                            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{dept.icon}</div>
                            <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '10px' }}>
                                {dept.name[currentLang]} ({dept.code})
                            </h2>
                            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
                                {dept.description[currentLang]}
                            </p>
                        </div>

                        <Link
                            to={`/departments/${dept.id}`}
                            style={{
                                display: 'inline-block',
                                textAlign: 'center',
                                backgroundColor: '#2563eb',
                                color: '#ffffff',
                                padding: '10px 18px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }}
                        >
                            {viewDetailsText[currentLang]} &rarr;
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DepartmentsPage;