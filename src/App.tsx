import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import QuoteSection from './components/QuoteSection';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import AboutMe from './pages/AboutMe';
import TermsOfService from './pages/TermsOfService';

const quotes = [
  {
    quote: "You don't have to arrive with the right words. You can arrive exactly as you are.",
    byline: 'An invitation, not an expectation',
  },
  {
    quote:
      'Healing does not announce itself. It is the quiet noticing, the slower breath, the kinder inner voice.',
    byline: 'On what therapy can feel like',
  },
];

const testimonials = [
  {
    quote: "Honestly, I didn’t expect therapy to be this comfortable. I could say things without worrying ki I’ll be judged. Even when you challenged me, it felt like you were doing it because you genuinely wanted me to move forward.",
    byline: 'Someone I helped',
  },
  {
    quote:
      'Therapy here never felt like advice being given to me. It felt more like figuring things out together. I especially liked that I was allowed to go at my own pace, but was also gently pushed when I was avoiding something.',
    byline: 'Someone I helped',
  },
];

const Home = () => (
  <>
    <Hero />
    <About />
    <QuoteSection quotes={quotes} />
    <Services />
    <QuoteSection quotes={testimonials} title="Testimonials" />
    <FAQ />
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
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
