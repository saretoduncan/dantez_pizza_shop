import React from "react";

import { Link } from "react-scroll";
import "./navbar.scss";
export const NavbarComponent: React.FC<{}> = () => {
  return (
    <>
      <nav className='container-fluid row _navbar'>
        <section className='col-4 d-flex align-self-center'>
          <Link smooth to='/' className='px-4 _primary_text_color _link'>
            Home
          </Link>

          <Link smooth to='/' className='px-4 _primary_text_color _link'>
            About us
          </Link>

          <Link smooth to='/' className='px-4 _primary_text_color _link'>
            Menu
          </Link>

          <Link smooth to='/' className='px-4 _primary_text_color _link'>
            Contact us
          </Link>
        </section>
        <section className='col-4 d-flex align-self-center align-items-center  justify-content-center'>
          <span className='_star_nav'>
            <svg className="rotate" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 109.98 105.58'>
              <path
                fill='#F43B00'
                d='M110,52.79l-27.22,9L99.62,85.27,72.15,76.45l0,29.13L55,82,37.8,105.58l0-29.13L10.36,85.27,27.22,61.82,0,52.79l27.22-9L10.36,20.31l27.47,8.82L37.8,0,55,23.54,72.17,0l0,29.13,27.47-8.82L82.76,43.75Z'
              ></path>
            </svg>{" "}
          </span>
          <h2 className='_primary_text_color px-2'>Dante</h2>
          <span className='_star_nav'>
            <svg className="rotate" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 109.98 105.58'>
              <path
                fill='#F43B00'
                d='M110,52.79l-27.22,9L99.62,85.27,72.15,76.45l0,29.13L55,82,37.8,105.58l0-29.13L10.36,85.27,27.22,61.82,0,52.79l27.22-9L10.36,20.31l27.47,8.82L37.8,0,55,23.54,72.17,0l0,29.13,27.47-8.82L82.76,43.75Z'
              ></path>
            </svg>{" "}
          </span>
        </section>
        <section className='col-4 d-flex align-self-center justify-content-end'>
          <div className=''>
            <button className='_cartbtn '>
              {" "}
              <i
                className='fa fa-shopping-cart fs-4'
                aria-hidden='true'
              ></i>{" "}
              <span> (0)</span>
            </button>
          </div>
        </section>
      </nav>
    </>
  );
};
