import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from './components/Navbar';


import { FacultyPage } from "./pages/FacultyPage";
import { FacultyDetailPage } from "./pages/FacultyDetailPage";
import { ServicesPage } from "./pages/ServicesPage";

import newsImg1 from './assets/students.jpg'; 
import newsImg2 from './assets/ai_workshop.jpg'; 
import newsImg3 from './assets/graduation_project_guidelines.jpg';
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import NewsPage from "./NewsPage";
import NewsDetails from "./NewsDetails";
import AnnouncementsPage from "./AnnouncementsPage";


function App() {
  return (
    <BrowserRouter>
    <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/faculty/:id" element={<FacultyDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />

        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;