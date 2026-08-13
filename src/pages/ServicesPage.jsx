import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const servicesData = [
    {
        id: 1,
        titleEn: "Academic Advising & Support",
        titleAr: "الإرشاد والدعم الأكاديمي",
        descEn: "Personalized guidance to help students choose courses and track academic progress.",
        descAr: "توجيه مخصص لمساعدة الطلاب في اختيار المواد ومتابعة التقدم الأكاديمي."
    },
    {
        id: 2,
        titleEn: "Career Services & Training",
        titleAr: "الخدمات المهنية والتدريب الصيفي",
        descEn: "Connecting students with tech companies for internships and job opportunities.",
        descAr: "ربط الطلاب بشركات التكنولوجيا للحصول على فرص التدريب الصيفي والتوظيف."
    },
    {
        id: 3,
        titleEn: "Student Portal & E-Learning",
        titleAr: "البوابة الإلكترونية والتعلم الرقمي",
        descEn: "Online access to course materials, grades, and administrative requests.",
        descAr: "وصول مباشر عبر الإنترنت للمقررات الدراسية والنتائج والطلبات الإدارية."
    }
];

export default function ServicesPage() {
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language || localStorage.getItem('i18nextLng') || 'en');

    useEffect(() => {
        const handleLangChange = (lng) => setCurrentLang(lng);
        i18n.on('languageChanged', handleLangChange);
        return () => i18n.off('languageChanged', handleLangChange);
    }, [i18n]);

    const isAr = currentLang.startsWith('ar');

    return (
        <main style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '40px 20px',
            fontFamily: 'sans-serif',
            minHeight: '80vh',
            backgroundColor: '#ffffff'
        }}>
            <section style={{ textAlign: 'center', marginBottom: '40px' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}>
                    {isAr ? "الخدمات والأنشطة" : "Student Services"}
                </span>
                <h1 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '10px 0' }}>
                    {isAr ? "الخدمات الطلابية" : "Faculty Services"}
                </h1>
                <p style={{ color: '#475569' }}>
                    {isAr ? "خدمات متكاملة لتسهيل التجربة التعليمية والجامعية للطلاب" : "Comprehensive services designed to enhance academic life."}
                </p>
            </section>

            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {servicesData.map((item) => (
                    <div key={item.id} style={{ border: '1px solid #e2e8f0', padding: '24px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                        <h3 style={{ fontSize: '1.2rem', color: '#0284c7', marginBottom: '10px' }}>
                            {isAr ? item.titleAr : item.titleEn}
                        </h3>
                        <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>
                            {isAr ? item.descAr : item.descEn}
                        </p>
                    </div>
                ))}
            </section>
        </main>
    );
}