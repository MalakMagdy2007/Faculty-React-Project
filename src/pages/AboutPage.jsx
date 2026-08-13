import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ar';

    const content = {
        title: {
            ar: "عن كلية الحاسبات والمعلومات",
            en: "About Faculty of Computers and Information"
        },
        subtitle: {
            ar: "صرح أكاديمي رائد في مجال تكنولوجيا المعلومات والذكاء الاصطناعي",
            en: "A leading academic institution in IT and Artificial Intelligence"
        },
        visionTitle: { ar: "الرؤية", en: "Vision" },
        visionDesc: {
            ar: "الريادة والتميز في التعليم والبحث العلمي في مجالات الحاسبات والمعلومات ومواكبة التطور التكنولوجي العالمي.",
            en: "Leadership and excellence in education and scientific research in computing and IT to keep pace with global technological advancement."
        },
        missionTitle: { ar: "الرسالة", en: "Mission" },
        missionDesc: {
            ar: "إعداد خريجين متميزين قادرين على المنافسة في سوق العمل المحلي والإقليمي من خلال تقديم برامج تعليمية متطورة.",
            en: "Preparing outstanding graduates capable of competing in local and regional job markets by providing advanced educational programs."
        },
        goalsTitle: { ar: "أهداف الكلية", en: "Faculty Goals" },
        goals: [
            { ar: "توفير بيئة تعليمية محفزة للابتكار والبحث العلمي.", en: "Provide an educational environment that fosters innovation and research." },
            { ar: "تطوير المناهج الدراسية باستمرار لتواكب متطلبات سوق العمل.", en: "Continuously update curricula to match job market requirements." },
            { ar: "بناء شراكات استراتيجية مع كبرى شركات التكنولوجيا.", en: "Build strategic partnerships with leading technology companies." }
        ]
    };

    return (
        <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            {/* Header Section */}
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '10px' }}>
                    {content.title[currentLang]}
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#64748b' }}>
                    {content.subtitle[currentLang]}
                </p>
            </div>

            {/* Vision & Mission Section */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '50px' }}>
                <div style={{ padding: '24px', borderRadius: '12px', backgroundColor: '#f1f5f9', borderRight: currentLang === 'ar' ? '5px solid #2563eb' : 'none', borderLeft: currentLang === 'en' ? '5px solid #2563eb' : 'none' }}>
                    <h2 style={{ color: '#1d4ed8', marginBottom: '12px' }}>{content.visionTitle[currentLang]}</h2>
                    <p style={{ color: '#334155', lineHeight: '1.6' }}>{content.visionDesc[currentLang]}</p>
                </div>

                <div style={{ padding: '24px', borderRadius: '12px', backgroundColor: '#f1f5f9', borderRight: currentLang === 'ar' ? '5px solid #059669' : 'none', borderLeft: currentLang === 'en' ? '5px solid #059669' : 'none' }}>
                    <h2 style={{ color: '#047857', marginBottom: '12px' }}>{content.missionTitle[currentLang]}</h2>
                    <p style={{ color: '#334155', lineHeight: '1.6' }}>{content.missionDesc[currentLang]}</p>
                </div>
            </div>

            {/* Goals Section */}
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <h2 style={{ color: '#1e293b', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
                    {content.goalsTitle[currentLang]}
                </h2>
                <ul style={{ listStyleType: 'disc', paddingRight: currentLang === 'ar' ? '20px' : '0', paddingLeft: currentLang === 'en' ? '20px' : '0' }}>
                    {content.goals.map((goal, index) => (
                        <li key={index} style={{ marginBottom: '12px', color: '#475569', fontSize: '1.1rem' }}>
                            {goal[currentLang]}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AboutPage;