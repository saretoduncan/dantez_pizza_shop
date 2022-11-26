import React from "react";
import { OrderBtn } from '../ButtonComponents/OrderBtn';


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
      <section className='w-[100%] lg:hidden'></section>
    </div>
  );
};
