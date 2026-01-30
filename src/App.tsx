import { Helmet, HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Serenity Minds | Clinical Psychology Services</title>
        <meta name="description" content="Find peace and balance with expert clinical psychology services. Depression, anxiety, and trauma recovery." />
      </Helmet>
      <Layout>
        <Hero />
        <About />
        <Services />
        <Contact />
      </Layout>
    </HelmetProvider>
  );
}

export default App;
