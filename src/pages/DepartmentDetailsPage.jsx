import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { departmentsData } from '../data/departments';

const DepartmentDetailsPage = () => {
    const { id } = useParams();
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ar';

    const department = departmentsData.find((dept) => dept.id === id);

    const labels = {
        notFound: { ar: "القسم غير موجود!", en: "Department not found!" },
        backBtn: { ar: "العودة للأقسام", en: "Back to Departments" },
        headTitle: { ar: "رئيس القسم", en: "Head of Department" },
        coursesTitle: { ar: "أبرز المقررات الدراسية", en: "Key Courses" },
        careersTitle: { ar: "مجالات العمل بعد التخرج", en: "Career Opportunities" }
    };

    if (!department) {
        return (
            <div style={{ textAlign: 'center', padding: '60px 20px', fontFamily: 'sans-serif' }}>
                <h2>{labels.notFound[currentLang]}</h2>
                <Link to="/departments" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                    {labels.backBtn[currentLang]}
                </Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            <Link
                to="/departments"
                style={{ display: 'inline-block', marginBottom: '20px', color: '#2563eb', textDecoration: 'none', fontWeight: 'bold' }}
            >
                &larr; {labels.backBtn[currentLang]}
            </Link>

            <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                    <span style={{ fontSize: '3rem' }}>{department.icon}</span>
                    <div>
                        <h1 style={{ fontSize: '2rem', color: '#0f172a', margin: '0' }}>{department.name[currentLang]} ({department.code})</h1>
                        <p style={{ color: '#64748b', margin: '5px 0 0 0' }}>{labels.headTitle[currentLang]}: <strong>{department.headOfDepartment[currentLang]}</strong></p>
                    </div>
                </div>

                <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.7', marginBottom: '30px' }}>
                    {department.description[currentLang]}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {/* Courses */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px' }}>
                        <h3 style={{ color: '#1e293b', marginBottom: '12px' }}>{labels.coursesTitle[currentLang]}</h3>
                        <ul style={{ paddingRight: currentLang === 'ar' ? '20px' : '0', paddingLeft: currentLang === 'en' ? '20px' : '0' }}>
                            {department.courses[currentLang].map((course, idx) => (
                                <li key={idx} style={{ marginBottom: '8px', color: '#475569' }}>{course}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Careers */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px' }}>
                        <h3 style={{ color: '#1e293b', marginBottom: '12px' }}>{labels.careersTitle[currentLang]}</h3>
                        <ul style={{ paddingRight: currentLang === 'ar' ? '20px' : '0', paddingLeft: currentLang === 'en' ? '20px' : '0' }}>
                            {department.careers[currentLang].map((career, idx) => (
                                <li key={idx} style={{ marginBottom: '8px', color: '#475569' }}>{career}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentDetailsPage;