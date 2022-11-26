import React from "react";

export const ScrollDownBtn: React.FC<{}> = () => {
  return (
  <div className="absolute md:grid hidden justify-center w-full bottom-2 ">
        <button className=' relative '>
          <span className='absolute  flex flex-col top-14 left-7 text-white italic  '>
            Scroll Down{" "}
            <i className='fa fa-long-arrow-down' aria-hidden='true'></i>
          </span>{" "}
          <svg
            className='w-[150px]'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 109.98 105.58'
          >
            <path
              fill='#F43B00'
              d='M110,52.79l-27.22,9L99.62,85.27,72.15,76.45l0,29.13L55,82,37.8,105.58l0-29.13L10.36,85.27,27.22,61.82,0,52.79l27.22-9L10.36,20.31l27.47,8.82L37.8,0,55,23.54,72.17,0l0,29.13,27.47-8.82L82.76,43.75Z'
            ></path>
          </svg>{" "}
        </button>
    </div>
  );
};
