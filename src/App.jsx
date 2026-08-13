import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from './components/Navbar';

// Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentDetailsPage from "./pages/DepartmentDetailsPage";
import ProgramsPage from "./pages/ProgramsPage";
import ProgramDetailsPage from "./pages/ProgramDetailsPage";
import FacultyPage from "./pages/FacultyPage";
import FacultyDetailPage from "./pages/FacultyDetailPage";
import ServicesPage from "./pages/ServicesPage";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// News & Announcements Pages
import NewsPage from "./pages/NewsPage";
import NewsDetails from "./pages/NewsDetails";
import AnnouncementsPage from "./pages/AnnouncementsPage";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />

                <Route path="/departments" element={<DepartmentsPage />} />
                <Route path="/departments/:id" element={<DepartmentDetailsPage />} />

                <Route path="/programs" element={<ProgramsPage />} />
                <Route path="/programs/:id" element={<ProgramDetailsPage />} />

                <Route path="/faculty" element={<FacultyPage />} />
                <Route path="/faculty/:id" element={<FacultyDetailPage />} />
                <Route path="/services" element={<ServicesPage />} />

                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />

                {/* مسارات الأخبار والإعلانات التي تم إضافتها */}
                <Route path="/news" element={<NewsPage />} />
                <Route path="/news/:id" element={<NewsDetails />} />
                <Route path="/announcements" element={<AnnouncementsPage />} />

                {/* صفحة 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}