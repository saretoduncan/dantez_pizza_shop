import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { Link } from "react-scroll";
import "./navbar.scss";
export const NavbarComponent: React.FC<{}> = () => {
  const [isDisplay, setIsDisplay] = useState<boolean>(true);
  const refAccount: any = useRef();
  const displayAccount = () => {
    setIsDisplay((current: boolean) => !current);
  };
  const closeDropdownAcc = () => {
    if (isDisplay) setIsDisplay(false);
  };
  const handleClickOutside = (event: Event) => {
    if (refAccount.current && !refAccount.current.contains(event.target)) {
      closeDropdownAcc();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [refAccount]);
  return (
    <>
      <nav className=' row _navbar '>
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
            <svg
              className='rotate'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 109.98 105.58'
            >
              <path
                fill='#F43B00'
                d='M110,52.79l-27.22,9L99.62,85.27,72.15,76.45l0,29.13L55,82,37.8,105.58l0-29.13L10.36,85.27,27.22,61.82,0,52.79l27.22-9L10.36,20.31l27.47,8.82L37.8,0,55,23.54,72.17,0l0,29.13,27.47-8.82L82.76,43.75Z'
              ></path>
            </svg>{" "}
          </span>
          <h2 className='_primary_text_color px-2'>Dante</h2>
          <span className='_star_nav'>
            <svg
              className='rotate'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 109.98 105.58'
            >
              <path
                fill='#F43B00'
                d='M110,52.79l-27.22,9L99.62,85.27,72.15,76.45l0,29.13L55,82,37.8,105.58l0-29.13L10.36,85.27,27.22,61.82,0,52.79l27.22-9L10.36,20.31l27.47,8.82L37.8,0,55,23.54,72.17,0l0,29.13,27.47-8.82L82.76,43.75Z'
              ></path>
            </svg>{" "}
          </span>
        </section>
        <section className='col-4 d-flex align-self-center justify-content-end pe-5'>
          <div className='pe-3'>
            <button className='_cartbtn '>
              {" "}
              <i
                className='fa fa-shopping-cart fs-4'
                aria-hidden='true'
              ></i>{" "}
              <span> (0)</span>
            </button>
          </div>
          <div className='position-relative d-inline-block' ref={refAccount}>
            <button className='_cartbtn ' onClick={displayAccount}>
              <i className='fa fa-user fs-4' aria-hidden='true'></i>
            </button>
            <div
              id='myDropdown'
              className={`position-absolute dropdown-content ${
                isDisplay ? "d-flex" : "d-none"
              }  flex-column`}
            >
              <Link to='' className='dropdown_item'>
                Profile
              </Link>
              <Link to='' className='dropdown_item'>
                <span>Logout</span>{" "}
                <i className='fa fa-sign-out' aria-hidden='true'></i>
              </Link>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};
