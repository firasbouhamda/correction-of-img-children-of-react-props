import React from 'react'
import  firass from './firass.jpg';

export const Myphoto = (props) => {
    return (
        <div>
            <img src={firass} alt='firass' width={400}/>
 {props.children}
        </div>
    )
}
export default Myphoto;
