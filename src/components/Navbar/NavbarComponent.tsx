import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { Link } from "react-scroll";
import "./navbar.scss";
export const NavbarComponent: React.FC<{}> = () => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const [menuDisplay, setMenuDisplay] = useState<boolean>(false);
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
  const handleHamburgerMenu = () => {
    setMenuDisplay((current: boolean) => !current);
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [refAccount]);
  return (
    <>
      <nav className='container-fluid row _navbar position-relative'>
        <div className='_hamburger'>
          <button className='_cartbtn' onClick={handleHamburgerMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='#F43B00'
            >
              <path
                fillRule='evenodd'
                d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        <section
          className={`col-6 col-md-4 d-md-flex align-self-center ${
            menuDisplay ? "d-flex" : "d-none"
          }  _menu_section`}
        >
          <ul className='d-flex flex-column flex-md-row jasti'>
            <Link smooth to='/' className=' _primary_text_color _link'>
              Home
            </Link>
            <Link smooth to='/' className=' _primary_text_color _link'>
              About us
            </Link>
            <Link smooth to='/' className='_primary_text_color _link'>
              Menu
            </Link>
            <Link smooth to='/' className=' _primary_text_color _link'>
              Contact us
            </Link>{" "}
          </ul>
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
        <section className='col-md-4 d-flex align-self-center justify-content-end pe-5'>
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
