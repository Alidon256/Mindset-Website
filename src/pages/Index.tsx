
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AppShowcase from '@/components/AppShowcase';
import Statistics from '@/components/Statistics';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <AppShowcase />
      <Statistics />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
