import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import QuoteSection from './components/QuoteSection';
import Services from './components/Services';
import Contact from './components/Contact';
import AboutMe from './pages/AboutMe';

const Home = () => (
  <>
    <Hero />
    <About />
    <QuoteSection
      quote="You don't have to arrive with the right words. You can arrive exactly as you are."
      byline="An invitation, not an expectation"
    />
    <Services />
    <QuoteSection
      quote="Healing does not announce itself. It is the quiet noticing, the slower breath, the kinder inner voice."
      byline="On what therapy can feel like"
    />
    <Contact />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>The Still Space | By Arshita</title>
        <meta name="description" content="Find peace and balance with expert clinical psychology services. Depression, anxiety, and trauma recovery." />
      </Helmet>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
