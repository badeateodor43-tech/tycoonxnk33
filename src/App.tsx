import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RealitateaPietei from './components/RealitateaPietei';
import HowItWorks from './components/HowItWorks';
import WhatMakesDifferent from './components/WhatMakesDifferent';
import ForWhom from './components/ForWhom';
import StandardCriterii from './components/StandardCriterii';
import Testimonials from './components/Testimonials';
import ArhitecturaEcosistemului from './components/ArhitecturaEcosistemului';
import IntrebariEsentiale from './components/IntrebariEsentiale';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SalesInfrastructure from './pages/SalesInfrastructure';
import InnerCircle from './pages/InnerCircle';
import Entrepreneurs from './pages/Entrepreneurs';
import Partnerships from './pages/Partnerships';

function HomePage() {
  return (
    <>
      <Hero />
      <RealitateaPietei />
      <HowItWorks />
      <WhatMakesDifferent />
      <ForWhom />
      <StandardCriterii />
      <Testimonials />
      <ArhitecturaEcosistemului />
      <IntrebariEsentiale />
      <FinalCTA />
    </>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'sales-infrastructure':
        return <SalesInfrastructure onNavigate={handleNavigate} />;
      case 'inner-circle':
        return <InnerCircle onNavigate={handleNavigate} />;
      case 'entrepreneurs':
        return <Entrepreneurs onNavigate={handleNavigate} />;
      case 'partnerships':
        return <Partnerships onNavigate={handleNavigate} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
