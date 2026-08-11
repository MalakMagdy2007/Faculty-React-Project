import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsCard from './components/NewsCard';
import Statistics from './components/Statistics';
import Footer from './components/Footer';


import newsImg1 from './assets/students.jpg'; 
import newsImg2 from './assets/Ai workshop.jpg'; 
import newsImg3 from './assets/Graduation Project Guidelines.jpg';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Statistics />
      <section className="news-section" style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#0f172a', marginBottom: '30px', fontSize: '2rem' }}>Latest News & Announcements</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap' }}>
          <NewsCard 
            image={newsImg1}
            title="Start of Registration" 
            date="August 10, 2026" 
            description="Registration for the new academic semester is now officially open for all computer science students." 
          />
          <NewsCard 
            image={newsImg2}
            title="AI Workshop Announcement" 
            date="August 15, 2026" 
            description="Join our upcoming hands-on artificial intelligence and machine learning workshop at the main lab." 
          />
          <NewsCard 
            image={newsImg3}
            title="Graduation Project Guidelines" 
            date="August 20, 2026" 
            description="Important updates regarding the submission deadlines and graduation project requirements have been posted." 
          />
        </div>
      </section>

      
      <Footer />
    </div>
  );
}

export default App;