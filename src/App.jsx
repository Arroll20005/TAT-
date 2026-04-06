import React from 'react';
import Hero from './components/Hero';
import AboutArtist from './components/AboutArtist';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <AboutArtist />
      <Portfolio />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;