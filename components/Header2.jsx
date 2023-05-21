'use client';

import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';

import { useState } from 'react';

const Header2 = () => {
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
                <Link className="text-xl uppercase  font-normal " href={'/'}>
                  Home
                </Link>
                <div
                  onClick={() => setLeftMenu(false)}
                  className="close hidden"
                >
                  <Image src={'/close.png'} width={26} height={100} />
                </div>
              </li>
              <li>
                <Link
                  className="text-xl text-[#DACD57] uppercase  font-normal "
                  href={'/about'}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <div className="logo-wrap">
            <div className="menu" onClick={() => setLeftMenu(true)}>
              <Image width={26} height={100} src={'/menu-0.png'} />
            </div>
            <Image alt="logo" src={'/logo.png'} width={300} height={38} />
          </div>
          <div className={`nav nav-2 ${leftMenu ? 'active' : ''}`}>
            <ul className="flex gap-5 items-center">
              <li>
                <Link
                  scroll={false}
                  className="text-xl uppercase  font-normal "
                  href="/#contact"
                >
                  CONTACT
                </Link>
              </li>
              <li className="">
                <button className="text-xl uppercase border-2 border-[#DACD57] rounded-2xl  px-5 py-2  font-normal ">
                  <Link href={'/#contact'}>ENQUIRE</Link>
                </button>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header2;
