import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
export const Navbar: React.FC<{}> = () => {
  const [isProfileHovering, setProfileHovering] = useState<boolean>(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const orangeColor = "#f43b00";
  const handleProfileMouseOver = () => setProfileHovering(() => true);
  const handleProfileMouseOut = () => setProfileHovering(() => false);
  const handleMenuOpening = () => setMenuOpen(() => true);
  const handleMenuClosing = () => setMenuOpen(() => false);
  return (
    <div className=' w-[100%] h-[10vh] mx-auto border-b-2 grid grid-cols-3 border-orange relative lg:px-4'>
      {isMenuOpen && (
        <div className='absolute z-[12]  top-5 left-5 lg:hidden'>
          <button onClick={handleMenuClosing}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#F43B00'
              viewBox='0 0 24 24'
              className='w-8 h-8 '
            >
              <path
                fillRule='evenodd'
                d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      )}
      <section className='self-center lg:hidden pl-3 '>
        <button onClick={handleMenuOpening}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='#f43b00'
            className='w-7 h-7'
          >
            <path
              fillRule='evenodd'
              d='M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </section>
      <section
        className={` ${
          isMenuOpen ? "block" : "hidden"
        } lg:block lg:self-center fixed lg:static h-[100vh] lg:h-auto lg:bg-[transparent] bg-translucent w-[100%] z-[11]`}
      >
        <div className='flex  lg:flex-row flex-col w-[50%] lg:w-auto  bg-white h-[100%] justify-center lg:justify-start  lg:pl-0'>
          <Link
            className='lg:pr-7 mx-auto lg:mx-0 pb-5 lg:pb-0 lg:text-[18px] text-[25px] font-[500]   text-orange after:w-[100%] lg:hover:after:block after:h-1 after:bg-orange  relative'
            to='/'
          >
            Home
          </Link>
          <Link
            className='lg:pr-7 mx-auto lg:mx-0 lg:text-[18px] text-[25px] pb-5 lg:pb-0 font-[500] text-orange after:w-[100%] lg:hover:after:block after:h-1 after:bg-orange'
            to=''
          >
            About
          </Link>
          <Link
            className='lg:pr-7 lg:mx-0 lg:text-[18px] mx-auto text-[25px] pb-5 lg:pb-0 font-[500] text-orange after:w-[100%] lg:hover:after:block after:h-1 after:bg-orange'
            to=''
          >
            Menu
          </Link>
          <Link
            to=''
            className='lg:text-[18px] lg:mx-0 text-[25px] mx-auto font-[500]  lg:py-0 text-orange after:w-[100%] lg:hover:after:block after:h-1 after:bg-orange'
          >
            Contact
          </Link>
        </div>
      </section>
      <section className='self-center'>
        <div className='flex  justify-center'>
          {" "}
          <svg
            className='w-5 animate-spin'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 109.98 105.58'
          >
            <path
              fill='#F43B00'
              d='M110,52.79l-27.22,9L99.62,85.27,72.15,76.45l0,29.13L55,82,37.8,105.58l0-29.13L10.36,85.27,27.22,61.82,0,52.79l27.22-9L10.36,20.31l27.47,8.82L37.8,0,55,23.54,72.17,0l0,29.13,27.47-8.82L82.76,43.75Z'
            ></path>
          </svg>
          <span className='text-[27px] px-4 font-bold text-orange'>Sareto</span>
          <svg
            className='w-5 animate-spin'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 109.98 105.58'
          >
            <path
              fill='#F43B00'
              d='M110,52.79l-27.22,9L99.62,85.27,72.15,76.45l0,29.13L55,82,37.8,105.58l0-29.13L10.36,85.27,27.22,61.82,0,52.79l27.22-9L10.36,20.31l27.47,8.82L37.8,0,55,23.54,72.17,0l0,29.13,27.47-8.82L82.76,43.75Z'
            ></path>
          </svg>
        </div>
      </section>
      <section className='self-center'>
        <div className='flex justify-end pr-4'>
          <button className=' flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill={orangeColor}
              className='w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z'
                clipRule='evenodd'
              />
            </svg>

            <span className='self-center'> ({0})</span>
          </button>
          <div
            className='relative inline-block  '
            onMouseOver={handleProfileMouseOver}
            onMouseOut={handleProfileMouseOut}
          >
            <button className='ml-1 lg:ml-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill={orangeColor}
                className='w-7 h-7'
              >
                <path
                  fillRule='evenodd'
                  d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            {isProfileHovering && (
              <div className='absolute right-0 flex flex-col  border-[1px] border-orange rounded bg-white p-2 shadow-[0_5px_6px_#F43B00]'>
                <Link
                  to=''
                  className='flex  text-orange hover:text-[18px] font-semibold'
                >
                  <span>Profile</span>{" "}
                  <i
                    className='fa fa-user self-center pl-3 text-orange'
                    aria-hidden='true'
                  ></i>
                </Link>
                <Link to='' className='flex hover:text-[18px] font-semibold'>
                  <span className=' text-orange'>Logout</span>{" "}
                  <i
                    className='fa fa-sign-out self-center pl-3 text-orange'
                    aria-hidden='true'
                  ></i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
