import React from 'react'
import { IButtonProp } from '../Interfaces/interface';

export const OrderBtn = (prop:IButtonProp) => {
    return (
        <div className='flex justify-center'>
           <button className='text-white bg-orange px-10 py-3 text-[20px] mt-5'>{prop.buttonContent}</button> 
        </div>
    )
}
