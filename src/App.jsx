import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TrustBar from './components/TrustBar.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Process from './components/Process.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingContact from './components/FloatingContact.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
