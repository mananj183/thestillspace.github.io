import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import AboutMe from './pages/AboutMe';

const Home = () => (
  <>
    <Hero />
    <About />
    <Services />
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
      <Router basename="/thestillspace.github.io/">
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
