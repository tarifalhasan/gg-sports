import AboutText from './AboutText';

const WeAre = ({ mt, about }) => {
  return (
    <section
      className={`mt-${
        mt ? mt : 0
      } py-6  lg:pl-32 lg:py-24 container lg:flex-row flex-col flex gap-5 xl:gap-10 `}
    >
      {about ? <AboutText /> : ''}
      <div className="xl:min-w-[35%] 2xl:min-w-[30%] ">
        <img alt="weare" src={'/weare.png'} width={500} height={526} />
      </div>

      <div>
        <h2 className=" text-5xl py-3 font-bold uppercase">we are</h2>
        <p className=" text-xl 2xl:w-[80%] font-normal xl:pr-24 flex gap-y-4 flex-col">
          <span>
            GG Sports A Sports Management Agency focused on building careers &
            guiding young talent. We represent & help look after every aspect of
            our client's lives.
          </span>
          <span>
            Considering both our client's aspirations and those of their family,
            offering a full service, not just the traditional contract
            negotiation and guidance.
          </span>
          <span>
            But also covering life skills, wealth management and daily support.
            Helping to manage expectations, maximise possibility & a personal
            relationship built on trust.
          </span>
        </p>
        <a href={'/#contact'}>
          <button className="bg-[#E09F3E] my-2 hover:bg-opacity-70 text-xl text-white rounded-lg px-16 py-2">
            CONTACT US
          </button>
        </a>
      </div>
    </section>
  );
};

export default WeAre;
