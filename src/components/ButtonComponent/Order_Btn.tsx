import React from 'react'
import { IButtonProp } from '../Interfaces/interface'
import "./orderbtn.scss"
export const Order_Btn = (props:IButtonProp) => {
    return (
        <div>
            <button className='_orderbtn'>{props.buttonContent}</button>
        </div>
    )
}