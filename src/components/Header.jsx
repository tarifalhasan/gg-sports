// import { useRouter } from 'next/router';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [leftMenu, setLeftMenu] = useState(false);

  return (
    <>
      <div className="block absolute w-full top-0 z-index-2">
        {leftMenu ? (
          <div
            onClick={() => setLeftMenu(false)}
            className={`shadow-overlay`}
          ></div>
        ) : (
          ''
        )}
        <header className=" py-5 container flex justify-between items-center">
          <nav className={`nav nav-1 ${leftMenu ? 'active' : ''}`}>
            <ul className="flex gap-5 items-center">
              <li className="flex items-center justify-between">
                <NavLink
                  activeClassName="active"
                  className="text-xl uppercase  font-normal "
                  to={'/'}
                >
                  Home
                </NavLink>
                <div
                  onClick={() => setLeftMenu(false)}
                  className="close hidden"
                >
                  <img src={'/close.png'} width={26} height={100} />
                </div>
              </li>
              <li>
                <NavLink
                  className="text-xl uppercase  font-normal "
                  to={'/about'}
                  activeClassName="active"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="logo-wrap">
            <div className="menu" onClick={() => setLeftMenu(true)}>
              <img width={26} height={100} src={'/menu-0.png'} />
            </div>
            <a href={'/'}>
              {' '}
              <img
                alt="logo"
                src={'/logo.png'}
                className="hidden lg:block"
                width={300}
                height={38}
              />
              <img
                alt="logo"
                src={'/logo.png'}
                className=" lg:hidden"
                width={100}
                height={38}
              />
            </a>
          </div>
          <div className={`nav nav-2 ${leftMenu ? 'active' : ''}`}>
            <ul className="flex gap-5 items-center">
              <li>
                <a className="text-xl uppercase  font-normal " href="/#contact">
                  CONTACT
                </a>
              </li>
              <li className="">
                <button className="text-xl uppercase border-2 border-[#DACD57] rounded-2xl  px-5 py-2  font-normal ">
                  <a href={'/#contact'}>ENQUIRE</a>
                </button>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
