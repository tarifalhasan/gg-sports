import { STRATEGIC } from '../../data';
import { ANCILLARY } from '../../data';
import { primeryServices } from '../../data';

const Services = ({ className }) => {
  const Item = ({ icon, name }) => (
    <div>
      <div className=" w-full max-w-[288px]   gap-y-4 ">
        <div className=" flex gap-5 flex-col items-center">
          <div className=" h-auto ">
            <img
              alt="icon"
              src={icon}
              className="  w-[140px] md:max-w-[115px] md:w-full  block mx-auto"
              width={75}
              height={74}
            />
          </div>
          <h3 className=" text-2xl pt-2 text-center font-normal  uppercase ">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );

  return (
    <section className={` pb-20 container border-[#DACD57]  border-t-[6px]`}>
      <div className="py-4">
        <div className={`${className ? className : ''}`}>
          <h2 className=" text-3xl text-center md:text-left font-bold before:left-0 md:before:left-6 relative before:top-[110%] before:absolute before:w-full md:before:w-[25%] before:h-5 before:bg-[#DACD57]">
            WITH US YOU WILL RECEIVE <br className=" hidden md:block" />{' '}
            <span className=" text-yellow">A FULL SERVICE</span> THAT INCLUDES
          </h2>
        </div>
        <div className="pt-16 space-y-16">
          <div className="flex lg:items-center items-start lg:flex-row flex-col  gap-12 ">
            <h2 className="text-3xl font-bold before:left-0 relative before:top-[65%] before:bg-opacity-80 before:absolute before:w-[100%] before:h-2 before:bg-yellow">
              PRIMARY
            </h2>
            <div className="flex gap-10 flex-col md:flex-row  items-center">
              <>
                {primeryServices.map((item, key) => (
                  <Item key={key} icon={item.icon} name={item.name} />
                ))}
              </>
            </div>
          </div>
          <div className="flex lg:items-center items-start flex-col lg:flex-row  gap-12 ">
            <h2 className="text-3xl font-bold before:left-0 relative before:top-[65%] before:bg-opacity-80 before:absolute before:w-[100%] before:h-2 before:bg-[#DACD57]">
              STRATEGIC
            </h2>
            <div className="flex gap-10 flex-col md:flex-row  items-center">
              <>
                {STRATEGIC.map((item, key) => (
                  <Item key={key} icon={item.icon} name={item.name} />
                ))}
              </>
            </div>
          </div>
          <div className="flex lg:items-center items-start flex-col lg:flex-row   gap-12 lg:pl-[14%]">
            <h2 className="text-3xl font-bold before:left-0 relative before:top-[65%] before:bg-opacity-80 before:absolute before:w-[100%] before:h-2 before:bg-[#DACD57]">
              ANCILLARY
            </h2>
            <div className="flex gap-10 flex-col md:flex-row  items-center">
              <>
                {ANCILLARY.map((item, key) => (
                  <Item key={key} icon={item.icon} name={item.name} />
                ))}
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
