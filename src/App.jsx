import React from 'react';
import Hero from './components/Hero';
import AboutArtist from './components/AboutArtist';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollImageSequence from './components/ScrollImageSequence';
import ModalPromo from './components/ModalPromo';

function App() {
  return (
    <div className="app">
      <Hero />
      <AboutArtist />
      <Portfolio />
      <ModalPromo />
      <ScrollImageSequence 
        imageCount={97} 
        imagePrefix="frame_" 
        imageExtension="webp" 
        startIndex={1} 
        heightInVh={600} 
      />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;