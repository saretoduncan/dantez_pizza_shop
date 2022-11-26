import React from "react";
import "./landingPage.scss";
export const LandingPage: React.FC<{}> = () => {
  return (
    <div className=' row position-relative _landing_body'>
      <div className='col-md-6 col-12 _intro d-flex flex-column justify-content-center align-items-center'>
        <strong> We Deliver</strong>
        <p>THE BEST PIZZA TO SHARE WITH YOU FRIENDS</p>
        <div>
       
        </div>
      </div>
      <div className='col-md-6 d-md-flex d-none _pizza_human_div'>
        <img
          className='_pizza_human'
          src='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay0yMTgtZXllLTA2NjA0MDIuanBn.jpg?s=H9Vy7lFqxhQykDtyPke99xrjUMvojK1C8D2hGbgADq4'
          alt=''
        />
      </div>
      <div className="position-absolute _scroll_btn_div">
  
      </div>
    </div>
  );
};
