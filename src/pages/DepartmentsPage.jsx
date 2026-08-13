import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function DepartmentsPage() {
    const { i18n } = useTranslation();
    const currentLang = i18n?.language?.startsWith('en') ? 'en' : 'ar';

    const departments = [
        {
            id: 'cs',
            icon: '💻',
            title: { en: 'Computer Science (CS)', ar: 'علوم الحاسب' },
            desc: {
                en: 'Focuses on programming fundamentals, algorithms, artificial intelligence, and software development.',
                ar: 'يركز على أساسيات البرمجة، الخوارزميات، الذكاء الاصطناعي، وتطوير البرمجيات.'
            }
        },
        {
            id: 'is',
            icon: '📊',
            title: { en: 'Information Systems (IS)', ar: 'نظم المعلومات' },
            desc: {
                en: 'Focuses on bridging technology with business, database design, and data analysis for decision making.',
                ar: 'يركز على ربط التكنولوجيا بالتقنيات الإدارية، تصميم قواعد البيانات، وتحليل البيانات.'
            }
        },
        {
            id: 'it',
            icon: '🌐',
            title: { en: 'Information Technology (IT)', ar: 'تكنولوجيا المعلومات' },
            desc: {
                en: 'Specializes in computer networks, cybersecurity, cloud computing, and IT infrastructure.',
                ar: 'متخصص في شبكات الحاسب، الأمن السيبراني، الحوسبة السحابية، والبنية التحتية.'
            }
        }
    ];

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '50px 20px', color: '#0f172a', fontFamily: 'sans-serif' }}>
            {/* عنوان الصفحة الرئيسي */}
            <div style={{ textAlign: 'center', marginBottom: '45px' }}>
                <h1 style={{ fontSize: '2.4rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '10px' }}>
                    {currentLang === 'ar' ? 'الأقسام الأكاديمية' : 'Academic Departments'}
                </h1>
                <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
                    {currentLang === 'ar' ? 'استكشف الأقسام الأكاديمية والتخصصات المتاحة' : 'Explore academic departments and available specializations'}
                </p>
            </div>

            {/* كروت الأقسام بخلفية بيضاء وبرودر خفيف */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', maxWidth: '1150px', margin: '0 auto' }}>
                {departments.map((dept) => (
                    <div key={dept.id} style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '16px',
                        padding: '30px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                        display: 'flex',
                        flexDirection: 'column',
                        justify: 'space-between',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}>
                        <div>
                            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{dept.icon}</div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', color: '#0f172a' }}>
                                {dept.title[currentLang] || dept.title.en}
                            </h3>
                            <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '25px' }}>
                                {dept.desc[currentLang] || dept.desc.en}
                            </p>
                        </div>

                        <Link
                            to={`/departments/${dept.id}`}
                            style={{
                                display: 'block',
                                textAlign: 'center',
                                backgroundColor: '#2563eb',
                                color: '#ffffff',
                                padding: '12px 18px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '0.95rem'
                            }}
                        >
                            {currentLang === 'ar' ? 'عرض التفاصيل ←' : 'View Details →'}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}