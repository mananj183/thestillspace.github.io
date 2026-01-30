import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Page Components wrapper for Head Management
const HomePage = () => (
  <>
    <Helmet>
      <title>Serenity Minds | Clinical Psychology Services</title>
      <meta name="description" content="Find peace and balance with expert clinical psychology services. Depression, anxiety, and trauma recovery." />
    </Helmet>
    <Hero />
    {/* You could stack sections here for a landing page feel, but keep separate specific pages too */}
    <div style={{ padding: '2rem 0', textAlign: 'center', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Welcome to a Safe Space</h2>
        <p style={{ color: 'var(--text-primary)' }}>Explore our services or learn more about our approach.</p>
      </div>
    </div>
  </>
);

const AboutPage = () => (
  <>
    <Helmet>
      <title>About Us | Serenity Minds</title>
      <meta name="description" content="Learn about Dr. Sarah Mitchell and our compassionate approach to mental health." />
    </Helmet>
    <About />
  </>
);

const ServicesPage = () => (
  <>
    <Helmet>
      <title>Services | Serenity Minds</title>
      <meta name="description" content="Individual therapy, couples counseling, anxiety management, and trauma recovery services." />
    </Helmet>
    <Services />
  </>
);

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact | Serenity Minds</title>
      <meta name="description" content="Get in touch to schedule a consultation. We are here to help." />
    </Helmet>
    <Contact />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
