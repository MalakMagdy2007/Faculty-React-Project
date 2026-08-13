import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { programsData } from '../data/programs';

const ProgramsPage = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ar';

    const pageTitle = {
        ar: "البرامج الأكاديمية",
        en: "Academic Programs"
    };

    const pageSubtitle = {
        ar: "استكشف البرامج المتاحة من البكالوريوس والبرامج الخاصة بالساعات المعتمدة",
        en: "Explore available undergraduate and credit-hour special programs"
    };

    const viewDetailsText = {
        ar: "تفاصيل البرنامج",
        en: "Program Details"
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

            {/* Programs Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
                {programsData.map((prog) => (
                    <div
                        key={prog.id}
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
                            <span style={{
                                display: 'inline-block',
                                backgroundColor: '#eff6ff',
                                color: '#1d4ed8',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '0.85rem',
                                fontWeight: 'bold',
                                marginBottom: '15px'
                            }}>
                                {prog.type[currentLang]}
                            </span>
                            <h2 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '10px' }}>
                                {prog.name[currentLang]}
                            </h2>
                            <p style={{ color: '#0284c7', fontWeight: '500', marginBottom: '12px' }}>
                                ⏱️ {prog.duration[currentLang]}
                            </p>
                            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
                                {prog.description[currentLang]}
                            </p>
                        </div>

                        <Link
                            to={`/programs/${prog.id}`}
                            style={{
                                display: 'inline-block',
                                textAlign: 'center',
                                backgroundColor: '#0284c7',
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

export default ProgramsPage;