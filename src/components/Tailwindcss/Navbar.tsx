import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
export const Navbar: React.FC<{}> = () => {
  return (
    <div className='w-full h-[10vh] border-b-2 grid  grid-cols-3 border-orange-500'>
      <section className=' self-center'>
        <div className='flex'>
          <Link
            className='px-7 text-[21px] font-[500]   text-orange-500 after:w-[100%] hover:after:block after:h-1 after:bg-orange-500  relative'
            to='/'
          >
            Home
          </Link>
          <Link
            className='pr-7 text-[21px] font-[500] text-orange-500 after:w-[100%] hover:after:block after:h-1 after:bg-orange-500'
            to=''
          >
            About
          </Link>
          <Link
            className='pr-7 text-[21px] font-[500] text-orange-500 after:w-[100%] hover:after:block after:h-1 after:bg-orange-500'
            to=''
          >
            Menu
          </Link>
          <Link
            to=''
            className='text-[21px] font-[500] text-orange-500 after:w-[100%] hover:after:block after:h-1 after:bg-orange-500'
          >
            Contact
          </Link>
        </div>
      </section>
      <section className='self-center'>
        <div className="flex items-center justify-center">
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
          <span className="text-[27px] px-4 font-bold">sareto</span>
          <svg
              className='w-5 animate-spin'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 109.98 105.58'
            >
              <path
                fill='#F43B00'
                d='M110,52.79l-27.22,9L99.62,85.27,72.15,76.45l0,29.13L55,82,37.8,105.58l0-29.13L10.36,85.27,27.22,61.82,0,52.79l27.22-9L10.36,20.31l27.47,8.82L37.8,0,55,23.54,72.17,0l0,29.13,27.47-8.82L82.76,43.75Z'
              ></path></svg>
        </div>
      </section>
    </div>
  );
};
