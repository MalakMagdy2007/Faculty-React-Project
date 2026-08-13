import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function DepartmentDetailsPage() {
    const { id } = useParams();
    const { i18n } = useTranslation();
    const currentLang = i18n?.language?.startsWith('en') ? 'en' : 'ar';

    // بيانات الأقسام الشاملة بالأيقونات المباشرة
    const departmentsData = {
        cs: {
            icon: '💻',
            title: { en: 'Computer Science (CS)', ar: 'علوم الحاسب' },
            head: { en: 'Prof. Ahmed Mahmoud', ar: 'أ.د. أحمد محمود' },
            desc: {
                en: 'Focuses on programming fundamentals, algorithms, artificial intelligence, and software development.',
                ar: 'يركز على أساسيات البرمجة، الخوارزميات، الذكاء الاصطناعي، وتطوير البرمجيات.'
            },
            courses: {
                en: ['Data Structures', 'Algorithms', 'Artificial Intelligence', 'Software Engineering'],
                ar: ['هياكل البيانات', 'الخوارزميات', 'الذكاء الاصطناعي', 'هندسة البرمجيات']
            },
            careers: {
                en: ['Software Developer', 'AI Engineer', 'Algorithms Analyst', 'Backend Developer'],
                ar: ['مطور برمجيات', 'مهندس ذكاء اصطناعي', 'محلل خوارزميات', 'مطور الخلفيات البرمجية']
            }
        },
        is: {
            icon: '📊',
            title: { en: 'Information Systems (IS)', ar: 'نظم المعلومات' },
            head: { en: 'Prof. Mohamed Ali', ar: 'أ.د. محمد علي' },
            desc: {
                en: 'Focuses on bridging technology with business, database design, and data analysis for decision making.',
                ar: 'يركز على ربط التكنولوجيا بالأعمال، تصميم قواعد البيانات، وتحليل البيانات لاتخاذ القرارات.'
            },
            courses: {
                en: ['Database Systems', 'Systems Analysis', 'Business Intelligence', 'Enterprise Architecture'],
                ar: ['أنظمة قواعد البيانات', 'تحليل الأنظمة', 'ذكاء الأعمال', 'معمارية المؤسسات']
            },
            careers: {
                en: ['System Analyst', 'Database Administrator', 'Data Analyst', 'ERP Consultant'],
                ar: ['محلل نظم', 'مدير قواعد بيانات', 'محلل بيانات', 'استشاري أنظمة مؤسسية']
            }
        },
        it: {
            icon: '🌐',
            title: { en: 'Information Technology (IT)', ar: 'تكنولوجيا المعلومات' },
            head: { en: 'Prof. Hassan El-Sayed', ar: 'أ.د. حسن السيد' },
            desc: {
                en: 'Specializes in computer networks, cybersecurity, cloud computing, and IT infrastructure.',
                ar: 'متخصص في شبكات الحاسب، الأمن السيبراني، الحوسبة السحابية، والبنية التحتية لتكنولوجيا المعلومات.'
            },
            courses: {
                en: ['Computer Networks', 'Cybersecurity Fundamentals', 'Cloud Computing', 'Network Security'],
                ar: ['شبكات الحاسب', 'أساسيات الأمن السيبراني', 'الحوسبة السحابية', 'أمن الشبكات']
            },
            careers: {
                en: ['Network Engineer', 'Cybersecurity Specialist', 'Cloud Systems Admin', 'IT Support Manager'],
                ar: ['مهندس شبكات', 'أخصائي أمن سيبراني', 'مدير أنظمة سحابية', 'مدير الدعم الفني']
            }
        }
    };

    // جلب القسم المطلوب بناءً على الـ ID في الرابط
    const dept = departmentsData[id?.toLowerCase()] || departmentsData['cs'];

    const labels = {
        backBtn: { en: '← Back to Departments', ar: '← العودة للأقسام' },
        headTitle: { en: 'Head of Department:', ar: 'رئيس القسم:' },
        coursesTitle: { en: 'Key Courses', ar: 'المقررات الأساسية' },
        careersTitle: { en: 'Career Opportunities', ar: 'الفرص الوظيفية' }
    };

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '40px 20px', color: '#0f172a', fontFamily: 'sans-serif' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                {/* زر العودة */}
                <Link
                    to="/departments"
                    style={{ display: 'inline-block', marginBottom: '25px', color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}
                >
                    {labels.backBtn[currentLang]}
                </Link>

                {/* كارت التفاصيل */}
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '35px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>

                    {/* الأيقونة والعنوان */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                        <span style={{ fontSize: '2.5rem' }}>{dept.icon}</span>
                        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>
                            {dept.title[currentLang] || dept.title.en}
                        </h1>
                    </div>

                    {/* رئيس القسم */}
                    <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '20px', marginLeft: '60px' }}>
                        {labels.headTitle[currentLang]} <strong>{dept.head[currentLang]}</strong>
                    </p>

                    {/* الوصف */}
                    <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.7', marginBottom: '30px' }}>
                        {dept.desc[currentLang] || dept.desc.en}
                    </p>

                    {/* المواد والفرص الوظيفية */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>

                        {/* المواد الأساسية */}
                        <div style={{ backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '12px' }}>
                                {labels.coursesTitle[currentLang]}
                            </h3>
                            <ul style={{ paddingLeft: currentLang === 'en' ? '20px' : '0', paddingRight: currentLang === 'ar' ? '20px' : '0', margin: 0, color: '#475569' }}>
                                {(dept.courses[currentLang] || dept.courses.en).map((course, idx) => (
                                    <li key={idx} style={{ marginBottom: '8px' }}>{course}</li>
                                ))}
                            </ul>
                        </div>

                        {/* مجالات العمل */}
                        <div style={{ backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '12px' }}>
                                {labels.careersTitle[currentLang]}
                            </h3>
                            <ul style={{ paddingLeft: currentLang === 'en' ? '20px' : '0', paddingRight: currentLang === 'ar' ? '20px' : '0', margin: 0, color: '#475569' }}>
                                {(dept.careers[currentLang] || dept.careers.en).map((career, idx) => (
                                    <li key={idx} style={{ marginBottom: '8px' }}>{career}</li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}