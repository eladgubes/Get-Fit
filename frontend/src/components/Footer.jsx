import React from 'react'
import logo from '../assec/img/workout.png'



export function Footer() {



    return (
        <div className="footer flex ">
            <div className="main-content container flex space-between align-center text-center ">
                <div className="flex space-between ">
                    <div className="logo flex">
                        <h3>Get-Fit</h3>
                        <img src={logo} alt="" />
                    </div>
                    <p>copy</p>
                </div>
                <div className="flax column ">
                    <h3>contact me</h3>
                    <ul className="flex space-around clean-list">
                        <li>facebook</li>
                        <li>linkedin</li>
                        <li>mail</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}