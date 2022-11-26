import React from "react";
import { OrderBtn } from "../ButtonComponents/OrderBtn";

export const LandingPage: React.FC<{}> = () => {
  return (
    <div className='w-[100%] h-[90vh] bg-main_background grid md:grid-cols-2  grid-col-1 border-b-2 border-orange'>
      <section className='self-center'>
        <p className=' text-center text-orange italic font-semibold text-[25px]'>
          We deliver
        </p>
        <p className='text-[45px] text-center font-bold text-orange'>
          The <br /> best <br /> pizza To <br /> share <br /> with <br />{" "}
          friends
        </p>
        <OrderBtn buttonContent={"ORDER NOW"} />
      </section>
      <section className='w-[100%] hidden border-l-2 border-orange md:flex items-center overflow-hidden   justify-center'>
        <img
          className=' shrink-0 min-h-[100%] min-w-min'
          src='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay0yMTgtZXllLTA2NjA0MDIuanBn.jpg?s=H9Vy7lFqxhQykDtyPke99xrjUMvojK1C8D2hGbgADq4'
          alt=''
        />
      </section>
    </div>
  );
};
