import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

const announcementsData = [
    {
        id: 1,
        titleEn: "Final Examination Schedule Released",
        titleAr: "إعلان جدول الامتحانات النهائية",
        date: "2026-08-10",
        contentEn: "The academic affairs office has published the final examination timetable for all departments.",
        contentAr: "أعلنت الشؤون الأكاديمية عن نشر جدول الامتحانات النهائية لجميع الأقسام بالكلية."
    },
    {
        id: 2,
        titleEn: "Course Registration for Next Semester",
        titleAr: "فتح باب التسجيل للمواد في الفصل القادم",
        date: "2026-08-05",
        contentEn: "Students can now register their elective courses through the student portal.",
        contentAr: "يمكن للطلاب الآن تسجيل المواد الاختيارية عبر البوابة الإلكترونية للجامعة."
    },
    {
        id: 3,
        titleEn: "Annual AI and Robotics Workshop",
        titleAr: "ورشة العمل السنوية للذكاء الاصطناعي والروبوتات",
        date: "2026-07-28",
        contentEn: "Join us this Thursday for hands-on sessions in AI model development and robotics basics.",
        contentAr: "انضموا إلينا هذا الخميس في جلسات تطبيقية لتطوير نماذج الذكاء الاصطناعي وأساسيات الروبوتات."
    }
];

export default function AnnouncementsPage() {
    const { i18n } = useTranslation();
    const isAr = i18n.language === 'ar';
    const [search, setSearch] = useState("");

    const filtered = useMemo(() => {
        const query = search.trim().toLowerCase();
        return announcementsData.filter((item) => {
            const title = isAr ? (item.titleAr || item.titleEn) : item.titleEn;
            const content = isAr ? (item.contentAr || item.contentEn) : item.contentEn;
            return !query || title.toLowerCase().includes(query) || content.toLowerCase().includes(query);
        });
    }, [search, isAr]);

    return (
        <main style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '40px 20px',
            fontFamily: 'sans-serif',
            minHeight: '80vh',
            backgroundColor: '#ffffff'
        }}>
            <section style={{ textAlign: 'center', marginBottom: '30px' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}>
                    {isAr ? "التنبيهات الهامة" : "Important Notices"}
                </span>
                <h1 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '10px 0' }}>
                    {isAr ? "الإعلانات الرسمية" : "Official Announcements"}
                </h1>
                <p style={{ color: '#475569' }}>
                    {isAr ? "أهم التنبيهات والإعلانات الخاصة بالطلاب والكلية" : "Important alerts and notices for students and faculty."}
                </p>
            </section>

            <section style={{ textAlign: 'center', marginBottom: '30px' }}>
                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={isAr ? "ابحث في الإعلانات..." : "Search announcements..."}
                    style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', width: '300px', outline: 'none' }}
                />
            </section>

            <section style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {filtered.map((item) => (
                    <div key={item.id} style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.85rem', marginBottom: '8px' }}>
                            <span>{isAr ? "إعلان رسمي" : "Official Notice"}</span>
                            <time>{item.date}</time>
                        </div>
                        <h3 style={{ margin: '8px 0', color: '#0f172a', fontSize: '1.2rem' }}>
                            {isAr ? (item.titleAr || item.titleEn) : item.titleEn}
                        </h3>
                        <p style={{ color: '#475569', margin: 0, lineHeight: '1.6', fontSize: '0.95rem' }}>
                            {isAr ? (item.contentAr || item.contentEn) : item.contentEn}
                        </p>
                    </div>
                ))}
            </section>
        </main>
    );
}