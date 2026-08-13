import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { programsData } from '../data/programs';

const ProgramDetailsPage = () => {
    const { id } = useParams();
    const { i18n } = useTranslation();
    // التأكد من اللغة الحالية مع تعيين "ar" كافتراضي
    const currentLang = i18n?.language?.startsWith('en') ? 'en' : 'ar';

    // استخدام String(p.id) للتحقق المضمون بغض النظر عن نوع الـ ID (Number أو String)
    const program = programsData?.find((p) => String(p.id) === String(id));

    const labels = {
        notFound: { ar: "البرنامج غير موجود!", en: "Program not found!" },
        backBtn: { ar: "العودة للبرامج", en: "Back to Programs" },
        durationTitle: { ar: "مدة الدراسة", en: "Study Duration" },
        reqTitle: { ar: "شروط القبول والالتحاق", en: "Admission Requirements" }
    };

    if (!program) {
        return (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#fff', fontFamily: 'sans-serif' }}>
                <h2>{labels.notFound[currentLang]}</h2>
                <br />
                <Link to="/programs" style={{ color: '#38bdf8', textDecoration: 'underline' }}>
                    {labels.backBtn[currentLang]}
                </Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            <Link
                to="/programs"
                style={{ display: 'inline-block', marginBottom: '20px', color: '#0284c7', textDecoration: 'none', fontWeight: 'bold' }}
            >
                &larr; {labels.backBtn[currentLang]}
            </Link>

            <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <span style={{
                    display: 'inline-block',
                    backgroundColor: '#f0f9ff',
                    color: '#0369a1',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    marginBottom: '15px'
                }}>
                    {program.type?.[currentLang] || program.type}
                </span>

                <h1 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '15px' }}>
                    {program.name?.[currentLang] || program.name}
                </h1>

                <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', marginBottom: '25px', display: 'inline-block' }}>
                    <span style={{ color: '#475569', fontWeight: '600' }}>
                        📌 {labels.durationTitle[currentLang]}:
                    </span>
                    <span style={{ color: '#0369a1', fontWeight: 'bold', margin: '0 8px' }}>
                        {program.duration?.[currentLang] || program.duration}
                    </span>
                </div>

                <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.7', marginBottom: '30px' }}>
                    {program.description?.[currentLang] || program.description}
                </p>

                {/* Admission Requirements */}
                <div style={{ borderTop: '2px solid #f1f5f9', paddingTop: '20px' }}>
                    <h3 style={{ color: '#1e293b', marginBottom: '15px' }}>{labels.reqTitle[currentLang]}</h3>
                    <ul style={{ paddingRight: currentLang === 'ar' ? '20px' : '0', paddingLeft: currentLang === 'en' ? '20px' : '0' }}>
                        {(program.requirements?.[currentLang] || program.requirements || []).map((req, idx) => (
                            <li key={idx} style={{ marginBottom: '10px', color: '#475569', fontSize: '1.05rem' }}>
                                {req}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetailsPage;