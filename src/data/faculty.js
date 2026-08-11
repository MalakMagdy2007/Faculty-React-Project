export const facultyData = [
  {
    id: "1",
    name: { ar: "أ.د. أحمد محمود", en: "Prof. Dr. Ahmed Mahmoud" },
    title: { ar: "عميد الكلية - أستاذ علوم الحاسب", en: "Dean - Professor of CS" },
    department: "cs",
    email: "a.mahmoud@fci.edu.eg",
    office: "Building A - Room 302",
    officeHours: { ar: "الأحد والأربعاء: 10 ص - 12 ظ", en: "Sun & Wed: 10 AM - 12 PM" },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
    researchInterests: {
      ar: ["الذكاء الاصطناعي", "تعلم الآلة"],
      en: ["AI", "Machine Learning"]
    },
    bio: {
      ar: "خبرة أكثر من 20 عاماً في مجال الذكاء الاصطناعي.",
      en: "Over 20 years of experience in AI."
    }
  },
  {
    id: "2",
    name: { ar: "د. سارة علي", en: "Dr. Sarah Ali" },
    title: { ar: "أستاذ مساعد - نظم المعلومات", en: "Associate Professor - IS" },
    department: "is",
    email: "s.ali@fci.edu.eg",
    office: "Building B - Room 104",
    officeHours: { ar: "الإثنين والخميس: 11 ص - 1 ظ", en: "Mon & Thu: 11 AM - 1 PM" },
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&auto=format&fit=crop&q=80",
    researchInterests: {
      ar: ["قواعد البيانات", "تحليل البيانات"],
      en: ["Databases", "Data Analytics"]
    },
    bio: {
      ar: "متخصصة في تحليل وتصميم نظم المعلومات.",
      en: "Specialist in Information Systems."
    }
  }
];

export const departmentsList = [
  { id: "all", label: { ar: "الكل", en: "All" } },
  { id: "cs", label: { ar: "علوم الحاسب", en: "CS" } },
  { id: "is", label: { ar: "نظم المعلومات", en: "IS" } },
  { id: "it", label: { ar: "تكنولوجيا المعلومات", en: "IT" } }
];