import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
export const Navbar: React.FC<{}> = () => {
  return (
    <div className='w-full h-[10vh] border-b-2  border-orange-500'>
      <section>
        <div>
         
            <Link to='/'>Home</Link>
            <Link to=''>About</Link>
            <Link to=''>Menu</Link>
            <Link to=''>Contact</Link>
         
        </div>
      </section>
    </div>
  );
};
