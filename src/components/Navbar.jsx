import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    const isAr = currentLang.startsWith('ar');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <header style={{
            width: '100%',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
        }}>
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '15px'
            }}>

                {/* 1️⃣ اللوجو واسم الكلية */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <div style={{
                        backgroundColor: '#0284c7',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '0.9rem'
                    }}>
                        BNU
                    </div>
                    <div>
                        <h1 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 'bold', color: '#0f172a', lineHeight: '1.2' }}>
                            {isAr ? "جامعة بنها الأهلية" : "Benha National University"}
                        </h1>
                        <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>
                            {isAr ? "كلية الحاسبات والمعلومات" : "Faculty of Computer Science"}
                        </span>
                    </div>
                </Link>

                {/* 2️⃣ القائمة الرئيسية (مفرودة أفقياً بالكامل) */}
                <nav>
                    <ul style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        flexWrap: 'wrap'
                    }}>
                        <li><Link to="/" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>{isAr ? "الرئيسية" : "Home"}</Link></li>
                        <li><Link to="/about" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>{isAr ? "عن الكلية" : "About"}</Link></li>
                        <li><Link to="/departments" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>{isAr ? "الأقسام" : "Departments"}</Link></li>
                        <li><Link to="/programs" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>{isAr ? "البرامج" : "Programs"}</Link></li>
                        <li><Link to="/news" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>{isAr ? "الأخبار" : "News"}</Link></li>
                        <li><Link to="/announcements" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>{isAr ? "الإعلانات" : "Announcements"}</Link></li>
                        <li><Link to="/faculty" style={{ color: '#0284c7', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}>{isAr ? "أعضاء التدريس" : "Faculty"}</Link></li>
                        <li><Link to="/services" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>{isAr ? "الخدمات" : "Services"}</Link></li>
                        <li><Link to="/events" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>{isAr ? "الفعاليات" : "Events"}</Link></li>
                    </ul>
                </nav>

                {/* 3️⃣ أزرار اللغة والتواصل */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                        onClick={() => changeLanguage('ar')}
                        style={{
                            padding: '5px 10px',
                            borderRadius: '5px',
                            border: '1px solid #0284c7',
                            background: currentLang.startsWith('ar') ? '#0284c7' : '#fff',
                            color: currentLang.startsWith('ar') ? '#fff' : '#0284c7',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            fontSize: '0.8rem'
                        }}
                    >
                        عربي
                    </button>

                    <button
                        onClick={() => changeLanguage('en')}
                        style={{
                            padding: '5px 10px',
                            borderRadius: '5px',
                            border: '1px solid #0284c7',
                            background: currentLang.startsWith('en') ? '#0284c7' : '#fff',
                            color: currentLang.startsWith('en') ? '#fff' : '#0284c7',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            fontSize: '0.8rem'
                        }}
                    >
                        EN
                    </button>

                    <Link to="/contact" style={{
                        backgroundColor: '#0284c7',
                        color: '#ffffff',
                        padding: '7px 14px',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        marginLeft: '5px'
                    }}>
                        {isAr ? "تواصل معنا" : "Contact Us"}
                    </Link>
                </div>

            </div>
        </header>
    );
};

export default Navbar;