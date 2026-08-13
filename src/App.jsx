import { BrowserRouter, Routes, Route } from "react-router-dom";

// Base & Components
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import LanguageSwitcher from "./components/LanguageSwitcher";

// Person 2 Pages (Departments & Programs)
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentDetailsPage from "./pages/DepartmentDetailsPage";
import ProgramsPage from "./pages/ProgramsPage";
import ProgramDetailsPage from "./pages/ProgramDetailsPage";

// Person 4 Pages (Faculty & Services)
import { FacultyPage } from "./pages/FacultyPage";
import { FacultyDetailPage } from "./pages/FacultyDetailPage";
import { ServicesPage } from "./pages/ServicesPage";

// Person 5 Pages (Events & Contact)
import Events from "./pages/Events";
import Contact from "./pages/Contact";

function App() {
    return (
        <BrowserRouter>
            <LanguageSwitcher />

            <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                {/* Person 2: Departments & Programs */}
                <Route path="/departments" element={<DepartmentsPage />} />
                <Route path="/departments/:id" element={<DepartmentDetailsPage />} />
                <Route path="/programs" element={<ProgramsPage />} />
                <Route path="/programs/:id" element={<ProgramDetailsPage />} />

                {/* Person 4: Faculty & Services */}
                <Route path="/faculty" element={<FacultyPage />} />
                <Route path="/faculty/:id" element={<FacultyDetailPage />} />
                <Route path="/services" element={<ServicesPage />} />

                {/* Person 5: Events & Contact */}
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />

                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
