import Client from '../components/Client';
import Footer from '../components/Footer';
import GetInTouch from '../components/GetInTouch';
import Header from '../components/Header';
import Services from '../components/Services';
import WeAre from '../components/WeAre';

const About = () => {
  return (
    <div>
      <Header />
      <WeAre mt={'140'} about={true} />
      <Client />
      <Services className={'mt-6'} />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default About;
