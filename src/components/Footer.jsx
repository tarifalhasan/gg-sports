import { AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';

const Footer = ({ className }) => {
  return (
    <footer className={`footer py-7  ${className}`}>
      <div className="container __className_f6fa1f">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <a
              target="blank"
              href={'https://uk.linkedin.com/company/gg-sports-ltd'}
            >
              <AiFillLinkedin size={36} />
            </a>
            <a target="blank" href={'https://twitter.com/GGSportsLTD'}>
              <AiFillTwitterSquare size={36} />
            </a>
          </div>
          <h5 className=" text-2xl uppercase">GG Sports LTD</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
