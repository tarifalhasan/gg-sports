import Header from '../components/Header';
import Hero from '../components/Hero';
import WeAre from '../components/WeAre';
import Service from '../components/Services';

import WhatsNew from '../components/WhatsNew';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Client from '../components/Client';
import Testimonial from '../components/Testominial';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <WeAre />
      <Service />
      <Testimonial />
      <WhatsNew />
      <ContactForm />
      <Client />
      <Footer className="mt-70" />
    </>
  );
};

export default Home;
